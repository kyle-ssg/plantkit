import {
  GramIngredient,
  MiscIngredient,
  TbspIngredient,
  TeaspoonIngredient,
} from './Ingredient'

export default {
  title: 'Pasanda',
  instructions: `
# Curry Base

- Add **Onion** 
- Add **Pepper, Cabbage & tomato** 

- Fill with **Water** for **45 mins**
- Add **Remaining ingredients** for **30 mins**
`,
  ingredients: [
    GramIngredient('Onion', 900),
    TeaspoonIngredient('Salt', 1),
    MiscIngredient('Peppers', 2),
    GramIngredient('Chopped Tomato', 200),
    TbspIngredient('Garlic', 5),
    TbspIngredient('Ginger', 5),
    TbspIngredient('Garam', 1.5),
    TbspIngredient('Cumin', 1.5),
    TbspIngredient('Coriander', 1.5),
    TbspIngredient('Paprika', 1.5),
    TbspIngredient('Turmeric', 0.5),
  ],
}
