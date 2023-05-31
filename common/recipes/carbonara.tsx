import { GramIngredient, MiscIngredient } from './Ingredient'

export default {
  title: 'Carbonara',
  instructions: `
# Carbonara

## Guanciale 
- Add **Guanciale** on low for **15 mins**
- Set aside, leave fat in pan
- **Set aside**

### Egg & Pecorino Paste
- Gradually add **Pecorino** to **Egg** 
- Add **Pepper**

### Pasta
- Cook pasta for 10 minutes

## Combine 
- Add 1/4 cup **Pasta Water** to **Egg & Pecorino Paste**
- Add **Pasta gradually** with 1/3 cup **Pasta Water** for **3 minutes**
- **Keep extra pasta water** in case needed 
- **Turn off heat** and add **remaining ingredients** stirring Rapidly.
- Optionally, top with some parmesan.
`,
  serves: 4,
  ingredients: [
    MiscIngredient('Egg Yolk', 1),
    MiscIngredient('Always One extra Egg', 1),
    GramIngredient('Pecorino Cheese', 30),
    GramIngredient('Guanciale', 60),
    GramIngredient('Pasta', 100),
  ],
}
