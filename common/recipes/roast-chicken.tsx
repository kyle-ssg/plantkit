import { GramIngredient, MiscIngredient, MlIngredient } from './Ingredient'

export default {
  title: 'Roast Chicken',
  instructions: `
  ## Roast Chicken 
- Pull chicken out **1 hour before**
- Rub chicken with neutral oil, season with rosemary salt
- Stuff with slice of lemon, shallots and 2 cloves garlic
- Bake potato - 45 mins 220f
- Add chicken 
- After 20 mins add veg
- Take potato out after 5 mins 
- Spoon out potato after 15 mins
- Add splash of hot milk and stir in butter a bit oat a time on low
- Take out chicken at 160f at thickest part of breast from back
`,
  ingredients: [
    MiscIngredient('Whole Chicken', 1),
    MiscIngredient('Lemon', 0.5),
    MiscIngredient('Salt', 1),
    MiscIngredient('Potatoes', 4),
    MiscIngredient('Milk', 1),
    MiscIngredient('Butter', 1),
  ],
}
