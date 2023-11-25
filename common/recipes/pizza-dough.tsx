import { GramIngredient, MiscIngredient, MlIngredient } from './Ingredient'

export default {
  title: 'Pizza Dough',
  instructions: `
  ## Pizza Dough 
  **Note: needs 6 hours total**
- Leave **Poolish** out for **30 mins** 
- Mix **Water** and **Poolish** and mix with spoon
- Add **Flour** and **Salt** to *KitchenAid**
- Add **Half** of the **Poolish**
- Mix on **Speed 1** until incorparated 
-  speed up to 5 and slowly add water until all water is absorbed
- Put on **oiled counter**, stretch out and fold into parcel
- make big ball and leave for 15 minutes
- Leave 4-6 hours
- Roll into ball and leave for **1 hour**
- Cut into balls and leave for **2 hours**
- Note: 250g = roughly a 12 inch pizza 
- Note: Leave out for 10 hours before freezing 
`,
  ingredients: [
    GramIngredient('Cold Water', 250),
    GramIngredient('Salt', 12),
    GramIngredient('Flour', 400),
    GramIngredient('Oil', 2),
    GramIngredient('Poolish', 200),
  ],
}
