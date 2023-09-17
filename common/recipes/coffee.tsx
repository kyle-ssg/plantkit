import { GramIngredient } from './Ingredient'

export default {
  title: 'Coffee',
  instructions: `
  # Coffee
  
  - Espresso: see finger print / not gritty
  
  - **18g** in **50g** out in **25-30 seconds** - Light
  - **18g** in **36g** out in **25 seconds** - Medium / Dark
  
  - Make sure porter filter is dry
  - Darker roasts should be coarser 
  - **Sour = Short/not long enough**  : (Lemon sharp / feel on side of tongue)
  - **Bitter = long/too long** (strong / ashy (Coating in mouth))

`,
  ingredients: [GramIngredient('Coffee Beans', 18)],
}
