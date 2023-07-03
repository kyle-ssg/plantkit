import { GramIngredient, MiscIngredient, MlIngredient } from './Ingredient'

export default {
  title: 'Pizza Dough',
  instructions: `
  ## Pizza Dough 
- Leave **Poolish** out for **30 mins** 
- Mix **Salt**, **Oil** and **Water**
- Add to **Poolish** and mix with spoon
- Add **Poolish** to *KitchenAid**
- Slowly Add **Flour**
- Mix for **8-10 minutes** on **speed 2**
- Keep covered for **15 minutes**
- Roll into ball and leave for **1 hour**
- Cut into balls and leave for **2 hours**
- Note: 250g = roughly a 12 inch pizza 
- Note: Leave out for 10 hours before freezing 
`,
  ingredients: [
    GramIngredient('Cold Water', 230),
    GramIngredient('Salt', 12),
    GramIngredient('Flour', 420),
    GramIngredient('Oil', 2),
    GramIngredient('Poolish', 200),
  ],
}
