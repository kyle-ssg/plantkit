import ScreenContainer from 'components/ScreenContainer'
import React from 'react'
import withScreen, { Screen } from './withScreen'
import MD from 'react-native-markdown-display'

type Tab3Screen = Screen & {}
const recipes = [
  {
    instructions: `
# Pasta alla Zozzona

### Egg & Pecorino Paste
- Beat **Egg** & **Pecorino** 
- Add **Pepper**

## Guanciale 
- Add **Guanciale** on low for **15 mins**
- Set Aside

## Pasta Sauce 
- Cook **Onion** & **Chorizo** at 310c for **5 mins**
- Add **Salt** & **Pepper flakes**
- **Start Pasta 3 mins less than package**
- Add **Passata** after **5 mins**


## Combine 
- Add 1/4 cup **Pasta Water** to **Egg & Pecorino Paste**
- Add **Pasta** with 1/2 cup **Pasta Water** for **2 minutes**
- **Turn off heat** and add **remaining ingredients** stirring Rapidly.
`,
    ingredients: `
# Ingredients

- 3x **Egg Yolk** (45g)
- 60g **Pecorino Cheese**
- 115g **Guanciale**
- 170g **Chorizo**
- 1 **Onion**
- 500g **Passata**
- 400g **Pasta**
`,
  },
  {
    instructions: `
# Spaghetti Bolognese

- Add **Onion** to 310c for **5 mins** 
- Add **Celery** + **Carrots** for **5 mins** 
- Add **118ml Wine** for **5 mins** 
- Add **Mince** and **Salt & Pepper**
- Add **118ml Wine** once there is no liquid for **5 mins** 
- Add **Passata, paste & Peeled Tomatoes**  
- Fill up with **Water** 
- Re-fill every **1 hour** for **4 hours**
`,
    ingredients: `
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
`,
  },
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
