import Row from '../base/grid/Row'
import { FC, ReactNode } from 'react'

interface Panel {
  title?: ReactNode
  icon?: string
  className?: ReactNode
  action?: ReactNode
}

const Panel: FC<Panel> = ({ title, icon, className, action, children }) => (
  <div className={`card ${className || ''}`}>
    <div className='card-body'>
      <Row space>
        <Row>
          {icon && (
            <span className='me-3'>
              <span className={`${icon}`} />
            </span>
          )}
          <h5 className='card-title mb-0'>{title}</h5>
        </Row>
        {action}
      </Row>
      <div className='pt-3'>{children}</div>
    </div>
  </div>
)

Panel.displayName = 'Panel'
export default Panel
