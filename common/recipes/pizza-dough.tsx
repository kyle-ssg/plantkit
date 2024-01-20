import { GramIngredient, MiscIngredient, MlIngredient } from './Ingredient'

export default {
  title: 'Pizza Dough Quick',
  instructions: `
  ## Pizza Dough Day 1
- Leave **Poolish** out for **30 mins** 
- Mix **Half Water** and **Salt + Poolish** to **Kitchen Aid Speed 1** for **1 min**
- Add **Flour** to *KitchenAid** until **Smooth**
- Speed up to **3** and **Very slowly** add water until all water is absorbed
- Once mixed, add oil **on top of dough**
- Put on **oiled counter** pull apart dough into rectangle and fold into center
- make big ball and leave covered for 30 minutes
- Roll into 250g balls and leave for **1.5 hour**
- Note: 250g = roughly a 12 inch pizza 
- Note: Can freeze but do so on a flat container
`,
  ingredients: [
    GramIngredient('Poolish', 300),
    GramIngredient('Cold Water', 350),
    GramIngredient('Salt', 18),
    GramIngredient('Flour', 560),
    GramIngredient('Oil', 13),
  ],
}
