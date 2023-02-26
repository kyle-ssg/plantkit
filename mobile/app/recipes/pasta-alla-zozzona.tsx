import { GramIngredient, MiscIngredient } from './Ingredient'

export default {
  title: 'Pasta alla Zozzona',
  instructions: `
# Pasta alla Zozzona

### Egg & Pecorino Paste
- Beat **Egg** & **Pecorino** 
- Add **Pepper**

## Guanciale 
- Add **Guanciale** on low for **15 mins**
- **Set aside**

## Pasta Sauce 
- Cook **Onion** & **Chorizo** at 310c for **5 mins**
- Add **Salt** & **Pepper flakes**
- Start Pasta **3 mins less than package**
- Add **Passata** after **5 mins**


## Combine 
- Add 1/4 cup **Pasta Water** to **Egg & Pecorino Paste**
- Add **Pasta** with 1/2 cup **Pasta Water** for **2 minutes**
- **Turn off heat** and add **remaining ingredients** stirring Rapidly.
`,
  serves: 4,
  ingredients: [
    MiscIngredient('Egg Yolk', 3),
    GramIngredient('Pecorino Cheese', 60),
    GramIngredient('Guanciale', 115),
    GramIngredient('Chorizo', 170),
    MiscIngredient('Onion', 1),
    GramIngredient('Passata', 500),
    GramIngredient('Pasta', 400),
  ],
}
