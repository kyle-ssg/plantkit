import {
  CupIngredient,
  GramIngredient,
  MiscIngredient,
  MlIngredient,
  TbspIngredient,
  TeaspoonIngredient,
} from './Ingredient'

export default {
  title: 'Rost Pork',
  instructions: `
  # Roast Pork
- Preheat oven to 200c
- Oil then season bottom
- Salt skin
- Lay on garlic and onion, make sure pork is even in height
- Fill with apple cider vinegar
- Turn down to 160, roast until 140, add more liquid if necessary 
- After 1 hour, boil potatoes 
- Wrap pork in foil, add potatoes and veg Increase oven to max for 30 mins 
- Strain juices, add flour, butter and chicken stock
`,
  ingredients: [
    GramIngredient('Pork', 1500),
    MiscIngredient('Onion', 1),
    MiscIngredient('Salt', 1),
    MiscIngredient('Pepper', 1),
    CupIngredient('Flour', 0.25),
    GramIngredient('Butter', 50),
    MlIngredient('Stock', 500),
  ],
}
