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
# Batter

1 Portion - 

**Light Fry**
- 300f 10 mins
- 400f 3 mins

`,
  ingredients: [
    GramIngredient('Batter Spice', 50),
    GramIngredient('Egg', 20),
    TeaspoonIngredient('Water', 45),
    GramIngredient('Chicken', 330),
  ],
}
