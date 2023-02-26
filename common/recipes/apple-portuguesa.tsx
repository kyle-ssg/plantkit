import { MassIngredient, MiscIngredient, VolumeIngredient } from './Ingredient'

export default {
  title: 'Apple Portuguessa',
  instructions: `
  # Apple Portuguessa
  
- Add **Coffee Liquor**, **Apple Juice** and **Elderflower Liquor**
- Stir
- Top up with **Tonic**
`,
  ingredients: [
    VolumeIngredient('Coffee Liquor', 15, 'ml'),
    VolumeIngredient('Elderflower Liquor', 35, 'ml'),
    VolumeIngredient('Apple Juice', 50, 'ml'),
    MiscIngredient('Tonic', 1),
    MiscIngredient('Cube of Ice', 1),
    MiscIngredient('Peel of Pear (Optional)', 1),
  ],
}
