import { MassIngredient, MiscIngredient, VolumeIngredient } from './Ingredient'

export default {
  title: 'Chilli',
  instructions: `
  # Chilli
  
- Add **Onion**
- Add **Beef** until brown
- Add **Spices**
- Slowly add **Flour**
- Slowly add **Wine**
- Slowly add **Stock**
- Add **Tomatoes** and **Puree**
- Season with **Salt** and **Pepper**
- Simmer and reduce for **45 minutes**
`,
  ingredients: [
    MassIngredient('Ground Beef', 500, 'g'),
    MiscIngredient('Onion', 2),
    MiscIngredient('Garlic Cloves', 2),
    MiscIngredient('Chilli', 1),
    VolumeIngredient('Coriander', 2, 'Tbs'),
    VolumeIngredient('Cumin', 2, 'Tbs'),
    VolumeIngredient('Flour', 2, 'Tbs'),
    VolumeIngredient('Red Wine', 150, 'ml'),
    VolumeIngredient('Beef Stock', 300, 'ml'),
    MassIngredient('Chopped Tomatoes', 500, 'g'),
    MassIngredient('Kidney Beans', 400, 'g'),
    MassIngredient('Pork Mince', 500, 'g'),
    MassIngredient('Tomato Puree', 150, 'g'),
    VolumeIngredient('Sugar', 1, 'Tbs'),
  ],
}
