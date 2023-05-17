import { GramIngredient, MiscIngredient, MlIngredient } from './Ingredient'

export default {
  title: 'Margarita',
  instructions: `
# Margarita
- Mix **all ingredients**
- Stir in ice
`,
  ingredients: [
    MlIngredient('Tequila', 50),
    MlIngredient('Lime Juice', 25),
    MlIngredient('Simple Syrup', 25),
    MiscIngredient('Pinch of Salt', 1),
  ],
}
