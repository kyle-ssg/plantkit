import { MassIngredient, MiscIngredient, VolumeIngredient } from './Ingredient'

export default {
  title: 'Daiquiri',
  instructions: `
  # Daiquiri
  
- Add **All ingredients** and shake
`,
  ingredients: [
    VolumeIngredient('Lime Juice', 25, 'ml'),
    VolumeIngredient('Simple Syrum', 22.5, 'ml'),
    VolumeIngredient('Rum', 50, 'ml'),
    MiscIngredient('Cube of Ice', 1),
  ],
}
