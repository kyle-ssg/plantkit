import Button from './Button'
import { FC, useState } from 'react'
interface Tabs {
  value?: any
  onChange?: (i: number) => void
  children?: { id?: string; 'data-test'?: string }[]
  className?: string
  uncontrolled?: boolean
  tabLabels: string[]
}

export const Tabs: FC<Tabs> = ({
  className = '',
  value = 0,
  children,
  tabLabels,
  onChange,
  uncontrolled,
}) => {
  const [_value, setValue] = useState<number>(value)
  return (
    <div className={`tabs ${className}`}>
      <ul className='nav nav-pills mb-3' id='pills-tab' role='tablist'>
        {children?.map((child, i) => {
          const isSelected = uncontrolled ? _value === i : value === i
          const tabLabel = tabLabels[i]
          return (
            <li key={i} className='nav-item' role='presentation'>
              <Button
                data-test={child['data-test']}
                id={child.id}
                key={`button${i}`}
                onClick={(e: React.MouseEvent) => {
                  e.stopPropagation()
                  e.preventDefault()
                  if (uncontrolled) {
                    setValue(i)
                  } else {
                    onChange && onChange(i)
                  }
                }}
                className={`nav-link${isSelected ? ' active' : ''}`}
              >
                {tabLabel || i}
              </Button>
            </li>
          )
        })}
      </ul>

      <div id='pills-tabContent'>
        {children?.map((child, i) => {
          const isSelected = uncontrolled ? _value === i : value === i
          return (
            <div
              key={`content${i}`}
              className={isSelected ? 'd-block' : 'd-none'}
            >
              {child}
            </div>
          )
        })}
      </div>
    </div>
  )
}

Tabs.displayName = 'Tabs'

// Example Usage
//   <Tabs value={this.state.tab} onChange={this.selectTab}>
//     <TabItem tabLabel={(<span className="fa fa-phone tab-icon"/>)}>
//       <h2>Tab 1 content</h2>
//     </TabItem>
//     <TabItem tabLabel={(<span className="fa fa-phone tab-icon"/>)}>
//       <h2>Tab 2 content</h2>
//     </TabItem>
//   </Tabs>
