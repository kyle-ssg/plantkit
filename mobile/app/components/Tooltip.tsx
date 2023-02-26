import React, { FC, ReactNode } from 'react' // we need this to make JSX compile
import CustomModal from 'components/CustomModal'

type TooltipType = { children: ReactNode }

const Tooltip: FC<TooltipType> = ({ children }) => {
  const [isVisible, toggle] = React.useReducer((state) => !state, false)
  return (
    <>
      <TouchableOpacity onPress={toggle} style={Styles.ph5}>
        <FA5Pro name='info-circle' />
      </TouchableOpacity>
      <CustomModal
        onDismissPress={toggle}
        visible={isVisible}
        style={Styles.centeredContainer}
      >
        <View
          style={[Styles.p5, { borderRadius: 10, backgroundColor: 'white' }]}
        >
          {children}
        </View>
      </CustomModal>
    </>
  )
}

export default Tooltip
