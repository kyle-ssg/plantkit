import { ImageSourcePropType } from 'react-native'

export type TPlant = {
  id: string
  title: string
  category: string
  sow: string[]
  indoorsUntil?: string[]
  durationMonths: number
  buy: string
  ph: string
  warning: string
  image?: ImageSourcePropType | null
  content: string
}

const plantData: { plants: Record<string, TPlant> } = {
  'plants': {
    'asparagus': {
      'id': 'asparagus',
      'title': 'Asparagus',
      'category': 'vegetables',
      'sow': ['March'],
      'durationMonths': 12,
      'buy':
        'https://www.rhs.org.uk/vegetables/asparagus/grow-your-own#:~:text=Asparagus-,Buy%20now,-at%20the%20RHS',
      'image': require('./images/asparagus.jpg'),
      'ph': '6.5–7.5',
      'warning': 'Leave the asparagus to grow 2 years without harvesting',
      'content': 'https://www.rhs.org.uk/vegetables/asparagus/grow-your-own',
    },
    'aubergines': {
      'id': 'aubergines',
      'title': 'Aubergines',
      'category': 'vegetables',
      'sow': ['March'],
      indoorsUntil: ['May', 'June'],
      'durationMonths': 6,
      'buy': 'https://www.rhsplants.co.uk/search/_/search.aubergine/sort.0/',
      'image': require('./images/aubergine.jpg'),
      'ph': '5.5–7.2',
      'warning':
        'If planting in May/June you will need to buy a plant. Grafted plants are also available – these grow strongly and usually cope better with cooler conditions outdoors.',
      'content': 'https://www.rhs.org.uk/vegetables/aubergines/grow-your-own',
    },
    'beans_for_drying': {
      'title': 'Beans for drying',
      'id': 'beans_for_drying',
      'category': 'vegetables',
      'sow': ['April', 'May'],
      indoorsUntil: ['May', 'June'],
      'durationMonths': 6,
      'buy': 'https://www.rhsplants.co.uk/search/_/search.aubergine/sort.0/',
      'image': require('./images/aubergine.jpg'),
      'ph': '5.5–7.2',
      'warning':
        'If planting in May/June you will need to buy a plant. Grafted plants are also available – these grow strongly and usually cope better with cooler conditions outdoors.',
      'content':
        'https://www.rhs.org.uk/vegetables/beans-for-drying/grow-your-own',
    },
  },
  // 'beetroot': {
  //   'title': 'Beetroot',
  //   'category': 'vegetables',
  // },
  // 'broad_beans': {
  //   'title': 'Broad beans',
  //   'category': 'vegetables',
  // },
  // 'broccoli': {
  //   'title': 'Broccoli',
  //   'category': 'vegetables',
  // },
  // 'brussels_sprouts': {
  //   'title': 'Brussels sprouts',
  //   'category': 'vegetables',
  // },
  // 'cabbages': {
  //   'title': 'Cabbages',
  //   'category': 'vegetables',
  // },
  // 'calabrese': {
  //   'title': 'Calabrese',
  //   'category': 'vegetables',
  // },
  // 'carrots': {
  //   'title': 'Carrots',
  //   'category': 'vegetables',
  // },
  // 'cauliflower': {
  //   'title': 'Cauliflower',
  //   'category': 'vegetables',
  // },
  // 'celeriac': {
  //   'title': 'Celeriac',
  //   'category': 'vegetables',
  // },
  // 'celery': {
  //   'title': 'Celery',
  //   'category': 'vegetables',
  // },
  // 'chard': {
  //   'title': 'Chard',
  //   'category': 'vegetables',
  // },
  // 'chicory': {
  //   'title': 'Chicory',
  //   'category': 'vegetables',
  // },
  // 'chilli_peppers': {
  //   'title': 'Chilli peppers',
  //   'category': 'vegetables',
  // },
  // 'chinese_broccoli': {
  //   'title': 'Chinese broccoli',
  //   'category': 'vegetables',
  // },
  // 'chinese_cabbage': {
  //   'title': 'Chinese cabbage',
  //   'category': 'vegetables',
  // },
  // 'courgettes': {
  //   'title': 'Courgettes',
  //   'category': 'vegetables',
  // },
  // 'cucumbers': {
  //   'title': 'Cucumbers',
  //   'category': 'vegetables',
  // },
  // 'endive': {
  //   'title': 'Endive',
  //   'category': 'vegetables',
  // },
  // 'florence_fennel': {
  //   'title': 'Florence fennel',
  //   'category': 'vegetables',
  // },
  // 'french_beans': {
  //   'title': 'French beans',
  //   'category': 'vegetables',
  // },
  // 'garlic': {
  //   'title': 'Garlic',
  //   'category': 'vegetables',
  // },
  // 'globe_artichokes': {
  //   'title': 'Globe artichokes',
  //   'category': 'vegetables',
  // },
  // 'jerusalem_artichokes': {
  //   'title': 'Jerusalem artichokes',
  //   'category': 'vegetables',
  // },
  // 'kale': {
  //   'title': 'Kale',
  //   'category': 'vegetables',
  // },
  // 'kohl_rabi': {
  //   'title': 'Kohl rabi',
  //   'category': 'vegetables',
  // },
  // 'leeks': {
  //   'title': 'Leeks',
  //   'category': 'vegetables',
  // },
  // 'lettuce': {
  //   'title': 'Lettuce',
  //   'category': 'vegetables',
  // },
  // 'marrows': {
  //   'title': 'Marrows',
  //   'category': 'vegetables',
  // },
  // 'mizuna_&_mibuna': {
  //   'title': 'Mizuna & mibuna',
  //   'category': 'vegetables',
  // },
  // 'okra': {
  //   'title': 'Okra',
  //   'category': 'vegetables',
  // },
  // 'onions': {
  //   'title': 'Onions',
  //   'category': 'vegetables',
  // },
  // 'pak_choi': {
  //   'title': 'Pak choi',
  //   'category': 'vegetables',
  // },
  // 'parsnips': {
  //   'title': 'Parsnips',
  //   'category': 'vegetables',
  // },
  // 'peas': {
  //   'title': 'Peas',
  //   'category': 'vegetables',
  // },
  // 'peppers': {
  //   'title': 'Peppers',
  //   'category': 'vegetables',
  // },
  // 'potatoes': {
  //   'title': 'Potatoes',
  //   'category': 'vegetables',
  // },
  // 'pumpkins': {
  //   'title': 'Pumpkins',
  //   'category': 'vegetables',
  // },
  // 'radishes': {
  //   'title': 'Radishes',
  //   'category': 'vegetables',
  // },
  // 'rhubarb': {
  //   'title': 'Rhubarb',
  //   'category': 'vegetables',
  // },
  // 'rocket': {
  //   'title': 'Rocket',
  //   'category': 'vegetables',
  // },
  // 'runner_beans': {
  //   'title': 'Runner beans',
  //   'category': 'vegetables',
  // },
  // 'salad_leaves': {
  //   'title': 'Salad leaves',
  //   'category': 'vegetables',
  // },
  // 'salad_onions': {
  //   'title': 'Salad onions',
  //   'category': 'vegetables',
  // },
  // 'salsify': {
  //   'title': 'Salsify',
  //   'category': 'vegetables',
  // },
  // 'shallots': {
  //   'title': 'Shallots',
  //   'category': 'vegetables',
  // },
  // 'soya_beans': {
  //   'title': 'Soya beans',
  //   'category': 'vegetables',
  // },
  // 'spinach': {
  //   'title': 'Spinach',
  //   'category': 'vegetables',
  // },
  // 'squash': {
  //   'title': 'Squash',
  //   'category': 'vegetables',
  // },
  // 'swedes': {
  //   'title': 'Swedes',
  //   'category': 'vegetables',
  // },
  // 'sweet_potatoes': {
  //   'title': 'Sweet potatoes',
  //   'category': 'vegetables',
  // },
  // 'sweetcorn': {
  //   'title': 'Sweetcorn',
  //   'category': 'vegetables',
  // },
  // 'tomatoes': {
  //   'title': 'Tomatoes',
  //   'category': 'vegetables',
  // },
  // 'turnips': {
  //   'title': 'Turnips',
  //   'category': 'vegetables',
  // },
}

const typedData: {
  plants: Record<keyof typeof plantData.plants, TPlant>
} = plantData
export default typedData
