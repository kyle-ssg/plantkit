import {
  GramIngredient,
  MassIngredient,
  MiscIngredient,
  VolumeIngredient,
} from './Ingredient'

export default {
  title: 'Cacio e Pepe',
  instructions: `
  # Cacio e Pepe
  
  - 10 min **Linguine**
  - 14 min **Rigatoni / Spaghetti**
  - Mix into bowl of pecorino + pepper 
  - Mix with splash of pasta water 
  - Finish with olive oil 
`,
  ingredients: [
    GramIngredient('Pecorino Cheese', 25),
    MiscIngredient('Pepper', 1),
  ],
}
