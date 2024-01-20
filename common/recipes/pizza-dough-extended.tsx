import { GramIngredient, MiscIngredient, MlIngredient } from './Ingredient'

export default {
  title: 'Pizza Dough',
  instructions: `
  ## Pizza Dough Day 1
- Leave **Poolish** out for **30 mins** 
- Mix **Half Water** and **Salt + Poolish** to **Kitchen Aid Speed 1** for **1 min**
- Add **Flour** to *KitchenAid** until **Smooth**
-  speed up to **3** and **Very slowly** add water until all water is absorbed
- Put on **oiled counter**, roll into ball
- Put into oiled container **Fridge** for **24 hours**
- make big ball and leave for 15 minutes
- Leave 4-6 hours
- Roll into ball and leave for **1 hour**
- Cut into balls and leave for **2 hours**
- Note: 250g = roughly a 12 inch pizza 
- Note: Leave out for 10 hours before freezing 
`,
  ingredients: [
    GramIngredient('Cold Water', 350),
    GramIngredient('Salt', 18),
    GramIngredient('Flour', 525),
    GramIngredient('Flour if doing day 1', 560),
    GramIngredient('Oil', 15),
    GramIngredient('Oil', 13),
    GramIngredient('Poolish', 300),
    GramIngredient('Flour', 120),
    GramIngredient('Water', 50),
  ],
}
