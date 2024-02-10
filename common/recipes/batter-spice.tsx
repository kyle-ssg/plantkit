import {
  GramIngredient,
  LitreIngredient,
  MiscIngredient,
  MlIngredient,
  TbspIngredient,
  TeaspoonIngredient,
} from './Ingredient'

export default {
  title: 'Batter',
  instructions: `
Mix
`,
  ingredients: [
    GramIngredient('Flour', 30),
    TbspIngredient('Cornstarch', 10),
    TeaspoonIngredient('Baking powder', 5),
    TeaspoonIngredient('Salt', 3),
  ],
}
