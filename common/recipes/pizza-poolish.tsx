import { GramIngredient, MiscIngredient, MlIngredient } from './Ingredient'

export default {
  title: 'Pizza Poolish',
  instructions: `
# Pizza Poolish

- Mix **all ingredients** until smooth
- Leave **24 hours**
`,
  ingredients: [
    MlIngredient('Water', 100),
    GramIngredient('Flour', 100),
    GramIngredient('Yeast', 2),
    MiscIngredient('Drop of Honey', 1),
  ],
}
