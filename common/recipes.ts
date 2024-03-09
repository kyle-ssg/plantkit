import sortBy from 'lodash/sortBy'
export const recipes = sortBy(
  [
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('common/recipes/daiquiri').default,
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('common/recipes/pasta-alla-zozzona').default,
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('common/recipes/bolognese').default,
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('./recipes/curry-base').default,
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('common/recipes/cacio').default,
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('./recipes/pasanda').default,
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('common/recipes/pizza-dough').default,
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('common/recipes/pizza-poolish').default,
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('common/recipes/cookies').default,
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('common/recipes/chilli').default,
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('common/recipes/chicken-stir-fry').default,
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('common/recipes/smoke-pairings').default,
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('common/recipes/coffee').default,
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('common/recipes/pasta').default,
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('common/recipes/tortillas').default,
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('common/recipes/meatballs').default,
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('common/recipes/ribs').default,
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('common/recipes/cottage-pie').default,
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('common/recipes/coleslaw').default,
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('common/recipes/simple-margarita').default,
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('common/recipes/carbonara').default,
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('common/recipes/roast-chicken').default,
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('./recipes/batter-spice').default,
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('./recipes/batter').default,
  ],
  'title',
)
