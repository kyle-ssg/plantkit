import configureMeasurements from 'convert-units-ssg'
// @ts-ignore
import { mass, MassUnits, volume, length, VolumeUnits } from 'convert-units-ssg'

/*
  `configureMeasurements` is a closure that accepts a directory
  of measures and returns a factory function (`convert`) that uses
  only those measures.
*/
export const convert = configureMeasurements({
  length,
  mass,
  volume,
})
const { create, all } = require('mathjs')

// configure the default type of numbers as Fractions
const config = {
  // Default type of number
  // Available options: 'number' (default), 'BigNumber', or 'Fraction'
  number: 'Fraction',
}

// create a mathjs instance with everything included

// create a mathjs instance with everything included
const math = create(all, config)

export default convert
function splitNum(num) {
  num = num.toString().split('.')
  num[0] = Number(num[0])
  if (num[1]) num[1] = Number(`0.${num[1]}`)
  else num[1] = 0
  return num
}

const prettyFractions = {
  '1/2': '½',
  '1/4': '¼',
  '3/4': '¾',
  '1/3': '⅓',
  '2/3': '⅔',
  '1/8': '⅛',
}
export function d2f(v) {
  const [whole, decimal] = splitNum(v)
  if (!decimal) {
    return v
  }
  const a = math.fraction(decimal)
  const fraction = math.format(a, { fraction: 'ratio' })
  return `${whole || ''}${prettyFractions[fraction] || fraction}`
}
export const IngredientConversions = {
  onion: (qty) => {
    return [
      `${parseInt(`${qty * 160}`)}g`,
      `${d2f(qty * 2)} cups`,
      `${d2f(qty * 3)} shallots (use 1:1 grams)`,
      `${d2f((qty * 160) / 260)} large onions`,
    ]
  },
  egg_yolk: (qty) => {
    return [`${parseInt(`${qty * 15}`)}g`]
  },
  shallot: (qty) => {
    return [
      `${d2f(qty * 160)}g`,
      `${d2f(qty * 2)} cups`,
      `${d2f(qty / 3)} onions (use 1:1 grams)`,
    ]
  },
  garlic_clove: (qty) => {
    return [`${d2f(qty / 4)}tsp powder`]
  },
  bicarbonate_of_soda: (qty, unit = 'tsp') => [
    `${d2f(qty * 4)}${unit} Baking soda`,
  ],
  chilli: (qty) => {
    return [`${d2f(qty)} tsp`]
  },
  carrot: (qty) => {
    return [`${qty * 61}g`]
  },
  celery: (qty) => {
    return [`${qty * 50}g`]
  },
}

export const MassIngredient = (
  name: string,
  qty: number,
  unit: MassUnits,
  notes?: string,
) => ({
  name,
  type: 'mass',
  qty,
  unit,
  notes,
})
export const MiscIngredient = (name: string, qty: number, notes?: string) => ({
  name,
  type: 'misc',
  qty,
  notes,
})

export type Ingredient = {
  name: string
  type: 'volume' | 'mass' | 'misc'
  qty: number
  unit: MassUnits | VolumeUnits
  notes?: string
}
export const VolumeIngredient = (
  name: string,
  qty: number,
  unit: VolumeUnits,
  notes?: string,
) => ({
  name,
  type: 'volume',
  qty,
  unit,
  notes,
})

export const GramIngredient = (name: string, qty: number, notes?: string) =>
  MassIngredient(name, qty, 'g', notes)
export const CupIngredient = (name: string, qty: number, notes?: string) =>
  VolumeIngredient(name, qty, 'cup', notes)
export const MlIngredient = (name: string, qty: number, notes?: string) =>
  VolumeIngredient(name, qty, 'ml', notes)

export const LitreIngredient = (name: string, qty: number, notes?: string) =>
  VolumeIngredient(name, qty, 'l', notes)

export const TbspIngredient = (name: string, qty: number, notes?: string) =>
  VolumeIngredient(name, qty, 'Tbs', notes)

export const TeaspoonIngredient = (name: string, qty: number, notes?: string) =>
  VolumeIngredient(name, qty, 'tsp', notes)
