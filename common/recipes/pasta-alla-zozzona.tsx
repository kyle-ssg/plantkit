import { GramIngredient, MiscIngredient } from './Ingredient'

export default {
  title: 'Pasta alla Zozzona',
  instructions: `
# Pasta alla Zozzona

## Guanciale 
- Add **Guanciale** on low for **15 mins**
- **Set aside**

## Pasta Sauce 
- Cook **Onion** & **Chorizo** at 310c for **5 mins**
- Add **Salt** & **Pepper flakes**
- Add **Passata** for **15 mins(5x portion size)** on low
- Boil Pasta for **13 minutes**

### Egg & Pecorino Paste
- Gradually add **Pecorino** to **Egg** 
- Add **Pepper**

## Combine 
- Add 1/4 cup **Pasta Water** to **Egg & Pecorino Paste**
- Add **Pasta gradually** with 1/3 cup **Pasta Water**
- Mix for a minute **add extra pasta water** if needed 
- **Turn off heat** and add **remaining ingredients** stirring Rapidly.
- Optionally, top with some parmesan.
`,
  serves: 4,
  ingredients: [
    MiscIngredient('Egg Yolk', 3),
    GramIngredient('Pecorino Cheese', 65),
    GramIngredient('Guanciale', 150),
    GramIngredient('Chorizo', 115),
    MiscIngredient('Onion', 0.5),
    GramIngredient('Passata', 750),
    GramIngredient('Pasta', 300),
  ],
}
