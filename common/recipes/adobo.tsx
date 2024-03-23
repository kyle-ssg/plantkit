import {
  CupIngredient,
  GramIngredient,
  MiscIngredient,
  TbspIngredient,
  TeaspoonIngredient,
} from './Ingredient'

export default {
  title: 'Adobo',
  instructions: `
  # Adobo
- De-seed every chilli except Arbol
- Grind cloves and cinamon
- Boil chillis and bay leave for 15 mins
- Blend chillis and rest of ingredients with a cup of the liquid
- Blend until texture of pizza sauce 
`,
  ingredients: [
    CupIngredient('Pineapple Juice', 0.5),
    CupIngredient('Pineapple', 0.25),
    MiscIngredient('Ancho chili', 4),
    MiscIngredient('Arbol chili', 4),
    MiscIngredient('Bay leave', 1),
    MiscIngredient('Cloves', 2),
    MiscIngredient('Garlic Cloves', 6),
    MiscIngredient('Guajillo chili', 15),
    MiscIngredient('Onion', 0.5),
    TbspIngredient('Apple Cider Vinegar', 2),
    TbspIngredient('Achiote Paste', 2),
    TeaspoonIngredient('Adobo', 2),
    TeaspoonIngredient('BBQ Rub', 2),
    TeaspoonIngredient('Oregano', 0.5),
    TeaspoonIngredient('Salt', 2),
    MiscIngredient('Cinamon stick', 0.5),
  ],
}
