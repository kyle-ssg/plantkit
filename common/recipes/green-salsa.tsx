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
    MiscIngredient('Onion', 0.5),
    MiscIngredient('Tomatillo', 7),
    MiscIngredient('Corriander', 1),
    MiscIngredient('Serrano', 2),
    MiscIngredient('Jallapeno', 2),
    MiscIngredient('Arbol chillis', 2),
    TeaspoonIngredient('Salt pepper garlic', 2),
  ],
}
