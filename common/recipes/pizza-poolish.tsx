import { GramIngredient, MiscIngredient, MlIngredient } from './Ingredient'

export default {
  title: 'Pizza Poolish',
  instructions: `
# Pizza Poolish

- Mix **all ingredients** until smooth
- Rest for **1 hour**
- Leave **16 hours**
`,
  ingredients: [
    MlIngredient('Water', 150),
    GramIngredient('Flour', 150),
    GramIngredient('Yeast', 3),
    GramIngredient('Honey', 3),
  ],
}
