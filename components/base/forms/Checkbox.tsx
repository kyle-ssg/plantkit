import React, { FC } from 'react'
import cn from 'classnames'

interface Checkbox {
  label?: string
  className?: string
  value?: string
  id: string
}

const Checkbox: FC<Checkbox> = ({ label, value, id, className }) => {
  return (
    <>
      <div className={cn('form-check', className)}>
        <input
          className='form-check-input'
          type='checkbox'
          value={value}
          id={id}
        />
        <label className='form-check-label' htmlFor='flexCheckDefault'>
          {label}
        </label>
      </div>
    </>
  )
}

Checkbox.displayName = 'Checkbox'
export default Checkbox
