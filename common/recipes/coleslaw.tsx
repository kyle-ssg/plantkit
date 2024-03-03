import {
  GramIngredient,
  LitreIngredient,
  MiscIngredient,
  MlIngredient,
  TbspIngredient,
} from './Ingredient'

export default {
  title: 'Coleslaw',
  instructions: `
# Coleslaw
 - Mix ingredients
`,
  ingredients: [
    MiscIngredient('Cabbage', 0.5),
    MiscIngredient('Carrots', 4),
    MiscIngredient('Red Onion', 1),
    MiscIngredient('Bunch of dill, coriander chives or parsley ', 0.5),
    TbspIngredient('Dijon Mustard', 500),
    GramIngredient('Mayonnaise', 50),
    GramIngredient('Yoghurt, sour cream or mayo', 50),
    TbspIngredient('Lemon, lime or white vinegar', 1.5),
    MiscIngredient('Pinch of paprika', 1),
  ],
}
