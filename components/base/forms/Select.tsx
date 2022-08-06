import { FC, SelectHTMLAttributes, useState } from 'react'
import cx from 'classnames'
import Strings from 'project/localisation'

export type Select = SelectHTMLAttributes<any> & {
  title?: string
  isValid?: boolean
  touched?: boolean
  id?: string
  label?: string
}

const Select: FC<Select> = ({
  title,
  touched,
  label,
  isValid,
  children,
  id,
  ...props
}) => {
  const [shouldValidate, setShouldValidate] = useState<boolean>(false)
  return (
    <>
      {title && (
        <label className='form-label' htmlFor={id}>
          {title}
        </label>
      )}
      <select
        {...props}
        id={id}
        onBlur={(e) => {
          setShouldValidate(true)
          props.onBlur && props.onBlur(e)
        }}
        className={cx(`${`${props.className} form-select`}`, {
          invalid: (touched || shouldValidate) && !isValid,
        })}
      >
        <option value={''}>{label || Strings.pleaseSelect}</option>
        {children}
      </select>
    </>
  )
}

Select.displayName = 'Select'
export default Select
