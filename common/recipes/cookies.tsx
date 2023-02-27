import {
  CupIngredient,
  GramIngredient,
  MassIngredient,
  MiscIngredient,
  MlIngredient,
  TbspIngredient,
  TeaspoonIngredient,
  VolumeIngredient,
} from './Ingredient'

export default {
  title: 'Cookies',
  instructions: `
  # Cookies
  
- Preheat oven to **190c**
- Add **Sugar, egg, butter, vanilla** in mixer **speed 2** for **1 minute**
- Sift together **bicarbonate**, **salt** and **flour**
- Gradually add **flour mixture**
- Gradually add **chocolate**
- Add a bit more flour if needed
- Roll balls into size of 2TBSP
- Cook for **11 minutes**
`,
  ingredients: [
    CupIngredient('Sugar', 1 / 2),
    CupIngredient('Brown Sugar', 1 / 2),
    CupIngredient('Butter', 1 / 2),
    MiscIngredient('Egg', 1),
    TeaspoonIngredient('Vanilla', 1),
    TeaspoonIngredient('Bicarbonate of Soda', 1 / 8),
    TeaspoonIngredient('Salt', 1 / 2),
    CupIngredient('Flour', 1.5),
    GramIngredient('Chocolate Pretzels', 120),
    GramIngredient('Chocolate Chips', 50),
  ],
}
