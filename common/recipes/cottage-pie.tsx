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
- Measure / mix **Garlic, Tomato, Flour**
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

`,
  ingredients: [
    GramIngredient('Cheese', 100),
    GramIngredient('Potatoes', 1800),
    GramIngredient('Milk', 225),
    GramIngredient('Butter', 25),
    GramIngredient('Mince', 1250),
    MiscIngredient('Onion', 2),
    MiscIngredient('Carrot', 3),
    MiscIngredient('Celery Stick', 3),
    TbspIngredient('Flour', 3),
    TbspIngredient('Tomato Puree', 1),
    MiscIngredient('Garlic', 2),
    MlIngredient('Wine', 250),
    MlIngredient('Stock', 850),
    TbspIngredient('Worcestershire Sauce', 4),
    MiscIngredient('Bay leaves', 2),
    GramIngredient('Cheese', 100),
  ],
}
