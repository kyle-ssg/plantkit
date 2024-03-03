import {
  GramIngredient,
  LitreIngredient,
  MiscIngredient,
  MlIngredient,
  TbspIngredient,
  TeaspoonIngredient,
} from './Ingredient'

export default {
  title: 'Batter',
  instructions: `
  
## Prep
- Marinade chicken and ingredients up to lemon juice
- Prepare **Stock, Worcestershire Sauce, thyme and bay**
- Fine chop **Onions, Celery and Carrots**
- Peel Potatoes and add to water
- Measure milk and butter, cheeses
## Cook
- Brown Mince, set aside
- Cook **Onion mix** **Low 20 mins**
- Add **Garlic Mix** for **2 Mins**
- Re-add **Mince**  and cook alcohol off of **Wine**
- simmer for **45 mins**, start **Boiling potatoes**
## Potatoes
- Boil potatoes until tender
- Pass through potato ricer and mix with milk, butter and cheese
- Season potato with salt and pepper
## Finish
- Prepare in oven proof dish
- 200C for 25-30 mins

`,
  ingredients: [
    GramIngredient('Chicken', 800),
    TbspIngredient('Ginger Paste', 0.5),
    TbspIngredient('Garlic Paste', 0.5),
    TbspIngredient('Kashmiri Chilli', 0.5),
    MiscIngredient('Pinch of Turmerik', 1),
    MiscIngredient('Pinch of Salt', 1),
    TeaspoonIngredient('Lemon Juice', 1),
  ],
}
