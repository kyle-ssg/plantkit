import Text from 'components/base/type/Text'
import ScreenContainer from 'components/ScreenContainer'
import React from 'react'
import withScreen, { Screen } from './withScreen'
import MD from 'react-native-markdown-display'
type Tab3Screen = Screen & {}
const md = `
# Spaghetti Bolognese

- Add **Onion** to 310c for **5 mins** 
- Add **Celery** + **Carrots** for **5 mins** 
- Add **118ml Wine** for **5 mins** 
- Add **Mince** and **Salt & Pepper**
- Add **118ml Wine** once there is no liquid for **5 mins** 
- Add **Passata, paste & Peeled Tomatoes**  
- Fill up with **Water** 
- Re-fill every **1 hour** for **4 hours**
`
const ingredients = `
# Ingredients

- 1x **Onion**
- 3x **Celery**
- 3x **Carrots**
- 500g **Beef Mince**
- 500g **Pork Mince**
- 1 Litre **Passata**
- 400g **Tomatoes**
- 150g **Tomato Paste**
- 2x 118ml **Wine**
`
const Tab3Screen: React.FC<Tab3Screen> = ({ children }) => {
  return (
    <ScreenContainer withoutSafeAreaView withTabs>
      <Row style={{ flex: 1, alignItems: 'stretch' }}>
        <Flex value={2} style={styles.container}>
          <MD
            style={{
              // @ts-ignore
              heading1: [Styles.h1, Styles.mb10],
              list_item: [styles.text, Styles.mb5],
            }}
          >
            {md}
          </MD>
        </Flex>
        <Flex style={[styles.container, styles.dark]}>
          <MD
            style={{
              // @ts-ignore
              heading1: [Styles.h2, Styles.mb10, Styles.mt10],
              list_item: [styles.text, Styles.mb5],
            }}
          >
            {ingredients}
          </MD>
        </Flex>
      </Row>
    </ScreenContainer>
  )
}

const styles = StyleSheet.create({
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
export default withScreen(Tab3Screen)
