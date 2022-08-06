import cn from 'classnames'
import { FC } from 'react'

interface Radio {
  label?: string
  className?: string
  name: string
  id: string
}

const Radio: FC<Radio> = ({ label, name, id, className }) => {
  return (
    <>
      <div className={cn('form-check', className)}>
        <input className='form-check-input' type='radio' name={name} id={id} />
        <label className='form-check-label' htmlFor='flexRadioDefault1'>
          {label}
        </label>
      </div>
    </>
  )
}

Radio.displayName = 'Radio'
export default Radio
