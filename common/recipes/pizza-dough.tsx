import { GramIngredient, MiscIngredient, MlIngredient } from './Ingredient'

export default {
  title: 'Pizza Dough',
  instructions: `
  ## Pizza Dough 
- Leave **Poolish** out for **30 mins** 
- Mix **Salt** and **Water**
- Add to **Poolish** and mix with spoon
- Add **Poolish** to *KitchenAid**
- Slowly Add **Flour**
- Mix for **1 minute** on **speed 2**
- Keep covered for **15 minutes**
- Roll into ball and leave for **3-4 hours**
`,
  ingredients: [
    GramIngredient('Cold Water', 10),
    GramIngredient('Salt', 5),
    GramIngredient('Flour', 65),
    GramIngredient('Poolish', 200),
  ],
}
