import { palette } from 'app/style/style_variables'
import em from '../../style/style-utils/style_pxToEm'
import { FC } from 'react'

import { TabBar, TabView } from 'react-native-tab-view'
import { Dimensions } from 'react-native'
interface Props {
  tabBarRow?: boolean
  navigationState?: {}
  tabBarStyle?: any
  renderScene?: () => void
  onIndexChange?: (index: number) => void
  scrollEnabled?: boolean
  lazy?: boolean
  tabStyle?: {}
  indicatorStyle?: {}
  labelStyle?: {}
  renderLabel?: () => void
}

export const Tabs: FC<Props> = ({
  tabBarRow,
  navigationState,
  tabBarStyle,
  renderScene,
  onIndexChange,
  scrollEnabled,
  lazy,
  tabStyle = {},
  indicatorStyle,
  labelStyle = {},
  renderLabel,
}) => {
  // @ts-ignore
  if (typeof TabBar === 'undefined') {
    // @ts-ignore
    alert('Install react-native-tab-view')
    return null
  }
  const renderTabBar = (props) => {
    return (
      //@ts-ignore
      // eslint-disable-next-line react/jsx-no-undef
      <TabBar
        {...props}
        scrollEnabled={scrollEnabled}
        labelStyle={[styles.TabText, labelStyle]}
        getLabelText={({ route: { title } }) => title}
        style={{ ...styles.tabPrimary, ...tabBarStyle }}
        tabStyle={tabBarRow ? { ...Styles.row, ...tabStyle } : tabStyle}
        indicatorStyle={{
          ...styles.indicatorPrimary,
          ...indicatorStyle,
        }}
        renderIcon={({ route }) => route.icon || null}
        renderLabel={renderLabel}
      />
    )
  }

  return (
    //@ts-ignore
    // eslint-disable-next-line react/jsx-no-undef
    <TabView
      useNativeDriver
      lazy={lazy}
      navigationState={navigationState}
      renderTabBar={renderTabBar}
      renderScene={renderScene}
      timingConfig={{ duration: 100 }}
      onIndexChange={(index) => onIndexChange(index)}
      initialLayout={{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      }}
    />
  )
}

const styles = StyleSheet.create({
  tabPrimary: {
    height: 65,
    justifyContent: 'flex-end',
    backgroundColor: palette.primary,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderColor: palette.primary,
    elevation: 0,
  },
  tabSecondary: {
    borderBottomWidth: 1,
    borderColor: palette.secondary,
    elevation: 0,
  },
  TabText: {
    color: palette.textLight,
    fontSize: em(1),
  },

  indicatorPrimary: {
    backgroundColor: palette.primary,
  },

  TabTextLight: {
    fontSize: 11,
    color: palette.secondary,
  },
  bar: {
    backgroundColor: 'white',
  },
  tab: {
    borderRightWidth: StyleSheet.hairlineWidth,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: palette.secondary,
    borderRightColor: palette.secondary,
    elevation: 0,
  },
})
