import {
  CupIngredient,
  MlIngredient,
  TbspIngredient,
  TeaspoonIngredient,
} from './Ingredient'

export default {
  title: 'Tortillas',
  instructions: `
# Tortillas

- Add **Masa harina** and **Flour**
- Add **Warm water**
- Mix until the consistency of play dough 
- Rest for around **20 mins** under a damp towel
- Pull off into **35 gram** balls 
- Heat pan to very hot (450f+)
- **15 seconds** each side
- **50 seconds** on each side
- Put into tortilla pouch to steam for 15 minutes 
`,
  ingredients: [
    TeaspoonIngredient('Salt', 0.25),
    CupIngredient('Masa harina', 0.5),
    CupIngredient('Flour', 0.5),
    TbspIngredient('Fat(Any)', 1),
    TeaspoonIngredient('Honey', 0.5),
    MlIngredient('Warm Water', 85),
  ],
}
