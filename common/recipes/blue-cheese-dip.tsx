import { MassIngredient, MiscIngredient, VolumeIngredient } from './Ingredient'

export default {
  title: 'Blue Cheese Dip',
  instructions: `
  # Blue Cheese Dip
  
- Add all ingredients
- Grate on cheese

`,
  ingredients: [
    VolumeIngredient('Mayonnaise', 0.5, 'cup'),
    VolumeIngredient('Sour cream', 0.5, 'cup'),
    VolumeIngredient('Milk', 0.25, 'cup'),
    MiscIngredient('Garlic', 1),
    VolumeIngredient('Pepper', 0.5, 'tsp'),
    VolumeIngredient('Salt', 0.5, 'tsp'),
    VolumeIngredient('Mustard Poweder', 0.5, 'tsp'),
    MassIngredient('Blue Cheese', 50, 'g'),
  ],
}
