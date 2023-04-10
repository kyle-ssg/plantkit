import { CupIngredient, TeaspoonIngredient } from './Ingredient'

export default {
  title: 'Tortillas',
  instructions: `
# Tortillas

- Add **Masa harina**
- Add **Warm water**
- Mix with for around **5 mins** 
- Rest for around **20 mins** under a damp towel
- Pull off into **28 gram** balls 
- 15-20 seconds on each side * 3
- Put back under towel 
`,
  ingredients: [
    TeaspoonIngredient('Salt', 0.25),
    CupIngredient('Masa harina', 1.5),
    CupIngredient('Warm Water', 1),
  ],
}
