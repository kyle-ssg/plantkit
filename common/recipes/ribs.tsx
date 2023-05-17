import {
  GramIngredient,
  TbspIngredient,
  TeaspoonIngredient,
} from './Ingredient'

export default {
  title: 'Ribs',
  instructions: `
# Ribs

- Rub **Olive Oil** onto ribs
- Rub a light coating of **Spice Mix**
- Preheat to **175c** for **10m**
- Add to middle shelf in a tray with foil for **1h 30m**
- Toothpick test
- Turn oven up to **230c** and cook for **10m** 

**If Adding sauce**
- If adding sauce, add a layer(on chopping board)
- Add for 3 mins
- Add another layer of sauce and blowtorch
 
`,
  ingredients: [
    GramIngredient('Pepper', 9),
    TbspIngredient('Garlic Powder', 1),
    TbspIngredient('Salt', 1),
    TbspIngredient('Seasoned Salt', 1),
    TbspIngredient('Sugar', 1.5),
    TeaspoonIngredient('Onion Powder', 1),
    TeaspoonIngredient('Paprika', 1),
  ],
}
