import sortBy from 'lodash/sortBy'
export const recipes = sortBy(
  [
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('common/recipes/apple-portuguesa').default,
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('common/recipes/daiquiri').default,
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('common/recipes/pasta-alla-zozzona').default,
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('common/recipes/bolognese').default,
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('common/recipes/beurre-blanc').default,
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('common/recipes/pasanda').default,
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('common/recipes/cacio').default,
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('common/recipes/curry-base').default,
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
    require('common/recipes/simple-margarita').default,
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('common/recipes/carbonara').default,
  ],
  'title',
)
