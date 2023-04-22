import { GramIngredient, MiscIngredient, TbspIngredient } from './Ingredient'

export default {
  title: 'Meatballs',
  instructions: `
# Meatballs

- Combine **ingredients**
- Roll into **1oz balls**
`,
  ingredients: [
    GramIngredient('Ground Beef', 500),
    GramIngredient('Ground Pork', 250),
    MiscIngredient('Onion', 1),
    MiscIngredient('Garlic Clove', 1),
    GramIngredient('Breadcrumbs', 30),
    MiscIngredient('Egg', 1),
    TbspIngredient('Whole Milk', 5),
  ],
}
