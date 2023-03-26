import {
  GramIngredient,
  MassIngredient,
  MiscIngredient,
  VolumeIngredient,
} from './Ingredient'

export default {
  title: 'Coffee',
  instructions: `
  # Coffee
  
  - **18g** in **38g** out in **28 seconds** - Light
  - **18g** in **36g** out in **25 seconds** - Medium / Dark
  
  
  - **Sour = Short/not long enough**  : (Lemon sharp / feel on side of tongue)
  - **Bitter = long/too long** (strong / ashy (Coating in mouth))

`,
  ingredients: [GramIngredient('Coffee Beans', 18)],
}
