import React, { FC, useRef, useState } from 'react'
import { Utils } from '../common/utils' // we need this to make JSX compile
import { Tooltip as _Tooltip } from 'reactstrap'
import useOnClickOutside from 'components/base/useClickOutside'

type TooltipType = {}

const Tooltip: FC<TooltipType> = ({ children, id }) => {
  const [isOpen, toggle] = useState(false)
  const ref = useRef()
  useOnClickOutside(ref, () => {
    toggle(false)
  })
  return (
    <>
      <span
        ref={ref}
        onMouseEnter={() => toggle(!isOpen)}
        onMouseLeave={() => toggle(false)}
        className='ms-2 fa fa-info-circle'
        id={id}
      />
      <_Tooltip
        style={{ background: 'white', opacity: 1 }}
        placement='bottom'
        isOpen={isOpen}
        target={id}
      >
        <div className='p-2' style={{ background: 'white', color: 'black' }}>
          {children}
        </div>
      </_Tooltip>
    </>
  )
}

export default Tooltip
