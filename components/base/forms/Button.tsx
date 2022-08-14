import cn from 'classnames'
import { FC, ButtonHTMLAttributes } from 'react'

export const themeClassNames = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  tertiary: 'btn-tertiary',
  text: 'btn-link',
  danger: 'btn btn-danger',
  outlinePrimary: 'btn btn-outline-primary',
}

export const sizeClassNames = {
  large: 'btn-lg',
  default: '',
}

export type ButtonType = ButtonHTMLAttributes<HTMLButtonElement> & {
  iconRight?: string
  iconLeft?: string
  theme?: keyof typeof themeClassNames
  size?: keyof typeof sizeClassNames
}

export const Button: FC<ButtonType> = ({
  iconLeft,
  iconRight,
  className,
  theme = 'primary',
  size = 'default',
  children,
  onMouseUp,
  ...rest
}) => {
  return (
    <button
      type='button'
      {...rest}
      onMouseUp={onMouseUp}
      className={cn(
        { btn: true },
        className,
        themeClassNames[theme],
        sizeClassNames[size],
      )}
    >
      {!!iconLeft && <i className={cn('icon', 'p-1', iconLeft)} />}
      {children}
      {!!iconRight && <i className={cn('icon', 'p-1', iconRight)} />}
    </button>
  )
}

Button.displayName = 'Button'
export default Button
