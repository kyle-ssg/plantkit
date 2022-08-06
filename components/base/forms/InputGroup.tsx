import Input from './Input'
import { FC, ReactNode } from 'react'
import { Utils } from 'common/utils'

export interface InputGroup {
  inputProps?: { name?: string; id?: string; error?: string }
  className?: string
  title?: string
  component?: ReactNode
  textarea?: boolean
  isValid?: boolean
  id?: string
  onBlur?: (e: FocusEvent) => void
  disabled?: string
  errorMessage?: string
  name?: string
  value?: string
  defaultValue?: string
  onChange?: (e: any) => void
  type?: string
  placeholder?: string
}

const InputGroup: FC<InputGroup> = (
  {
    name,
    onBlur,
    errorMessage,
    inputProps = {},
    isValid,
    className,
    title,
    component,
    textarea,
    disabled,
    value,
    id: _id,
    defaultValue,
    onChange,
    type,
    placeholder,
  },
  props,
) => {
  //   Should I use useRef to connect focus with input?
  //   const focus = () => {
  //     input.focus();
  //   };

  const id = _id || inputProps.id || inputProps.name || Utils.GUID()
  return (
    <div className={`form-group ${className}` || ''}>
      <label className='form-label' htmlFor={id}>
        {title}
      </label>
      {inputProps && inputProps.error && (
        <span>
          <span> - </span>
          <span
            id={inputProps.name ? `${inputProps.name}-error` : ''}
            className='text-danger'
          >
            {inputProps.error}
          </span>
        </span>
      )}

      <>
        {component ? (
          component
        ) : (
          <Input
            // ref={(c) => (this.input = c)}
            name={name}
            textarea={textarea}
            onBlur={onBlur}
            errorMessage={errorMessage}
            {...props.inputProps}
            isValid={isValid}
            disabled={disabled}
            value={value}
            data-test={['data-test']}
            defaultValue={defaultValue}
            onChange={onChange}
            type={type || 'text'}
            id={id}
            placeholder={placeholder}
          />
        )}
      </>
    </div>
  )
}

InputGroup.displayName = 'InputGroup'
export default InputGroup
