import React, { FC } from 'react'
import '../style/style_variables'
import Flex from 'components/base/grid/Flex'
import useInsets from 'components/base/useInset'
import { SafeAreaView, ViewProps } from 'react-native'

type ComponentType = ViewProps & {
  withoutSafeAreaView?: boolean
  withTabs?: boolean
}

const ScreenContainer: FC<ComponentType> = ({
  children,
  withoutSafeAreaView,
  withTabs,
  ...props
}) => {
  const insets = useInsets()
  // Note: if we use a transparent status bar we need to add StatusBar.currentHeight to padding top for android
  return !withoutSafeAreaView ? (
    <SafeAreaView
      style={[{ flex: 1 }, { marginTop: insets.top + (withTabs ? 50 : 0) }]}
      {...props}
    >
      {children}
    </SafeAreaView>
  ) : (
    <Flex {...props}>{children}</Flex>
  )
}

export default ScreenContainer
