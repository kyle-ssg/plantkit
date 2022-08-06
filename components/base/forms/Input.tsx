import {
  ChangeEventHandler,
  FC,
  FocusEventHandler,
  KeyboardEventHandler,
  useRef,
  useState,
} from 'react'
import cn from 'classnames'
import { Utils } from 'common/utils'

interface Input {
  textarea?: boolean
  isValid?: boolean
  placeholder?: string
  inputClassName?: string
  name?: string
  label?: string
  icon?: string
  id?: string
  type?: string
  textButton?: string
  className?: string
  errorMessage?: string
  iconColour?: string
  touched?: boolean
  value?: string
  onIconClick?: () => void
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
  onFocus?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>
  onBlur?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>
  onKeyDown?: KeyboardEventHandler<HTMLInputElement | HTMLTextAreaElement>
  disabled?: boolean
  'data-test'?: string
}

const Input: FC<Input> = ({
  children,
  className,
  disabled,
  errorMessage,
  icon,
  iconColour,
  inputClassName,
  isValid = true,
  label,
  name,
  onBlur,
  onFocus,
  onIconClick,
  onKeyDown,
  id,
  placeholder = ' ',
  textarea,
  touched,
  type,
  value,
  ...rest
}) => {
  const [shouldValidate, setShouldValidate] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const ref = useRef<HTMLInputElement | HTMLTextAreaElement>()
  const focusHandler: FocusEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    setIsFocused(true)
    onFocus && onFocus(e)
  }

  // Is it element important? Should I use UseRef hook?
  // const focus = () => {
  //   this.input.focus();
  // };

  const _onKeyDown: KeyboardEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    if (Utils.keys.isEscape(e)) {
      ref.current?.blur()
    }
    onKeyDown && onKeyDown(e)
  }

  const blur: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement> = (
    e,
  ) => {
    setShouldValidate(true)
    setIsFocused(false)
    onBlur && onBlur(e)
  }

  const classNameHandler = cn(
    {
      focused: isFocused,
      invalid: (shouldValidate || touched) && !isValid,
    },
    className,
  )

  const combinedInputClassName = cn(
    { 'form-control': true, error: !!errorMessage },
    inputClassName,
  )
  const [showPassword, setShowPassword] = useState<boolean>(false)
  return (
    <div data-test={`${name}-container`} className={classNameHandler}>
      {textarea ? (
        <>
          {label && <label htmlFor={id}>{label}</label>}
          <textarea
            name={name}
            placeholder={placeholder}
            {...rest}
            id={id}
            // @ts-ignore
            ref={ref}
            onFocus={focusHandler}
            onKeyDown={_onKeyDown}
            onBlur={blur}
            value={value}
            className={combinedInputClassName}
          />
        </>
      ) : (
        <>
          {!!label && (
            <label className='form-label' htmlFor={id}>
              {label}
            </label>
          )}
          <input
            disabled={disabled}
            name={name}
            type={type === 'password' && showPassword ? '' : type}
            {...rest}
            id={id}
            // @ts-ignore
            ref={ref}
            onFocus={focusHandler}
            onKeyDown={_onKeyDown}
            onBlur={blur}
            value={value}
            placeholder={placeholder}
            className={combinedInputClassName}
          />
          {icon ||
            (type == 'password' && (
              <i
                data-test={`${rest['data-test']}-icon`}
                onClick={() => {
                  if (type === 'password') {
                    setShowPassword(!showPassword)
                  } else {
                    onIconClick ? onIconClick() : ref?.current?.focus()
                  }
                }}
                style={{
                  position: 'absolute',
                  right: 10,
                  bottom: 10,
                  color: iconColour || '#F7A400',
                  cursor: 'pointer',
                }}
                className={cn(
                  {
                    icon: true,
                    'fas fa-eye': type === 'password' && !showPassword,
                    'fas fa-eye-slash': type === 'password' && showPassword,
                  },
                  icon,
                )}
              />
            ))}
        </>
      )}
      {children && children}
    </div>
  )
}

Input.displayName = 'Input'
export default Input
