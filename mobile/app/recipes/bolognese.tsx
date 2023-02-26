import {
  GramIngredient,
  LitreIngredient,
  MiscIngredient,
  MlIngredient,
} from './Ingredient'

export default {
  title: 'Spaghetti Bolognese',
  instructions: `
# Spaghetti Bolognese

- Add **Onion** to 310c for **5 mins** 
- Add **Celery** + **Carrots** for **5 mins** 
- Add **118ml Wine** for **5 mins** 
- Add **Mince** and **Salt & Pepper**
- Add **118ml Wine** once there is no liquid for **5 mins** 
- Add **Passata, Tomato Paste & Peeled Tomatoes**  
- Fill up with **Water** 
- Re-fill every **1 hour** for **4 hours**
`,
  ingredients: [
    MiscIngredient('Onion', 1),
    MiscIngredient('Celery', 3),
    MiscIngredient('Carrot', 3),
    GramIngredient('Beef Mince', 500),
    GramIngredient('Pork Mince', 500),
    LitreIngredient('Passata', 1),
    GramIngredient('Chopped Tomato', 400),
    GramIngredient('Tomato Puree', 42),
    MlIngredient('Red Wine', 118, 'x2'),
  ],
}
