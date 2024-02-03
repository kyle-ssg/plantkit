import {
  GramIngredient,
  LitreIngredient,
  MiscIngredient,
  MlIngredient,
  TbspIngredient,
  TeaspoonIngredient,
} from './Ingredient'

export default {
  title: 'Orange Chicken',
  instructions: `
# Orange Chicken
**Prep**
- Cut **Chicken** into **half inch strips** 
- Prepare **Dry batter ingredients**
- Juice Oranges into bowl, save peel
- Make **Slurry**
**Sauce**
- Mix **Juice** with **Sugar and vinegar** to taste
- Mix **Fish sauce** and **Salt** to taste
**Chicken**
- Mix **Salt, Cornstarch, Water, Egg**  with **chicken**
- Mix **Batter** until consistency of yoghurt
- Mix **Chicken** and **Batter**
**Cook**
- Fry in batches **300f** for **2.5-3 mins** (very light)
- Fry in batches **400f** for **2.5-3 mins** 
- Fry **Sauce**, **Slurry** and **orange peel**
- Mix ingredients
`,
  ingredients: [
    GramIngredient('Chicken', 340),
    TeaspoonIngredient('Salt (Ch)', 1),
    TbspIngredient('Cornstarch (Ch)', 1),
    TbspIngredient('Water (Ch)', 1),
    MiscIngredient('Beaten Egg(Ch)', 0.5),
    TbspIngredient('Flour(batter)', 3),
    TbspIngredient('Cornstarch(batter)', 1),
    TeaspoonIngredient('baking powder(batter)', 1),
    TbspIngredient('Water(batter)', 5),
    MiscIngredient('Egg(batter)', 0.25),
    TeaspoonIngredient('Oil(batter)', 0.25),
    TbspIngredient('Water(slurry)', 3),
    TbspIngredient('Cornstarch(slurry)', 1),
    TbspIngredient('Sugar (Sauce)', 1),
    GramIngredient('Orange Juice (Sauce)', 140),
    TbspIngredient('White vinegar (Sauce)', 1),
    TbspIngredient('Salt (Sauce)', 0.5),
    TbspIngredient('Oyster (Sauce)', 0.5),
  ],
}
