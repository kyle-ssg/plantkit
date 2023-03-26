import {
  GramIngredient,
  MassIngredient,
  MiscIngredient,
  TbspIngredient,
  TeaspoonIngredient,
  VolumeIngredient,
} from './Ingredient'

export default {
  title: 'Chicken Stir-Fry',
  instructions: `
  # Chilli
  
- Mix **Chicken** Ingredients** and leave to marinate
- Add **Shallots** to heated pan
- Add **Chicken** until browned on all sides
- Remove **Chicken**
- Add **Vegetables**
- Add **Spices** 
- Add in **Pineapple and Chicken** 
- Add **Sauce**
- Cook until **165f**
`,
  ingredients: [
    { title: 'Chicken' },
    GramIngredient('Chicken', 200),
    TbspIngredient('Soy Sauce', 1),
    TbspIngredient('Mirin', 1),
    TeaspoonIngredient('Oil', 1),
    TeaspoonIngredient('Corn Flour', 2),
    { title: 'Sauce' },
    TbspIngredient('Soy Sauce', 1),
    TbspIngredient('Mirin', 1),
    TbspIngredient('Rice wine vinegar', 1),
    TbspIngredient('Pineapple Juice', 1),
    { title: 'Main' },
    TbspIngredient('Oil', 1),
    MiscIngredient('Shallot', 2),
    MiscIngredient('Red Pepper', 0.5),
    GramIngredient('Mangetout/Baby Corn', 200),
    GramIngredient('Pineapple', 100),
    GramIngredient('Cashews(Optional)', 35),
    { title: 'Spices' },
    MiscIngredient('Chilli', 1),
    MiscIngredient('Garlic Cloves', 2),
    TeaspoonIngredient('Ginger', 1),
  ],
}
