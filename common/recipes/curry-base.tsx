import {
  GramIngredient,
  MiscIngredient,
  MlIngredient,
  TbspIngredient,
} from './Ingredient'

export default {
  title: 'Curry Base',
  instructions: `
# Chicken Pasanda

- Add **Oil** for **high heat**
- Add **Ginger** & **Garlic** for **30 seconds**
- Add **Flour**, **Almonds** & **sugar** for **30 seconds**
- Add **half Curry Base**
- Add **Chicken** 
- Add **Coconut** and **Cream**
- Add **remaining Curry Base** 
`,
  ingredients: [
    TbspIngredient('Oil', 2),
    TbspIngredient('Garlic', 1),
    TbspIngredient('Ginger', 1),
    TbspIngredient('Flour', 1.5),
    TbspIngredient('Ground Almonds', 1.5),
    GramIngredient('Curry Base', 300),
    GramIngredient('Coconut', 50),
    MlIngredient('Cream', 125),
    MiscIngredient('Chicken Breast', 2),
  ],
}
