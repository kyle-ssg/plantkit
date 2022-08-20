import ScreenContainer from 'components/ScreenContainer'
import React from 'react'
import withScreen, { Screen } from './withScreen'
import MD from 'react-native-markdown-display'

type Tab3Screen = Screen & {}
const recipes = [
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require('../recipes/pasta-alla-zozzona').default,
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require('../recipes/bolognese').default,
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require('../recipes/pasanda').default,
]
const Tab3Screen: React.FC<Tab3Screen> = ({ children }) => {
  return (
    <ScreenContainer withoutSafeAreaView withTabs>
      <ScrollView style={{ flex: 1 }} bounces={false} pagingEnabled>
        {recipes.map((r, i) => (
          <Row key={i} style={styles.slide}>
            <Flex value={2} style={styles.container}>
              <MD style={mdStyle}>{r.instructions}</MD>
            </Flex>
            <Flex style={[styles.container, styles.dark]}>
              <MD style={ingredientsStyle}>{r.ingredients}</MD>
            </Flex>
          </Row>
        ))}
      </ScrollView>
    </ScreenContainer>
  )
}

const styles = StyleSheet.create({
  slide: {
    height: DeviceHeight,
    width: DeviceWidth,
    alignItems: 'stretch',
  },
  container: {
    padding: 40,
    paddingTop: 100,
  },
  dark: {
    backgroundColor: '#eaeaea',
  },
  text: {
    fontSize: 20,
    letterSpacing: 1.25,
  },
})

const ingredientsStyle = {
  // @ts-ignore
  heading1: [Styles.h2, Styles.mb15, Styles.mt15],
  list_item: [styles.text, Styles.mb5],
}
const mdStyle = {
  // @ts-ignore
  heading1: [Styles.h1, Styles.mb5],
  heading3: [Styles.textBold, Styles.mb10, { fontSize: 24 }],
  heading2: [Styles.textBold, Styles.mv10, { fontSize: 24 }],
  list_item: [styles.text, Styles.mb5],
}
export default withScreen(Tab3Screen)
