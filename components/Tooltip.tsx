import React, { FC, useRef, useState } from 'react'
import { Utils } from '../common/utils' // we need this to make JSX compile
import { Tooltip as _Tooltip } from 'reactstrap'

type TooltipType = {}

const Tooltip: FC<TooltipType> = ({ children, id }) => {
  const [isOpen, toggle] = useState(false)

  return (
    <>
      <span
        onMouseEnter={() => toggle(!isOpen)}
        onMouseLeave={() => toggle(false)}
        className='ms-2 fa fa-info-circle'
        id={id}
      />
      <_Tooltip
        style={{ background: 'white' }}
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
