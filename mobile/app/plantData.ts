import { ImageSourcePropType } from 'react-native'

export type TPlant = {
  id: string
  title: string
  category: string
  sow: string[]
  indoorsUntil?: string[]
  durationMonths: number
  ph: string
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
      'image': require('./images/asparagus.jpg'),
      'ph': '6-7',
      'content': 'https://www.rhs.org.uk/vegetables/asparagus/grow-your-own',
    },
    'aubergines': {
      'id': 'aubergines',
      'title': 'Aubergines',
      'category': 'vegetables',
      'sow': ['March'],
      indoorsUntil: ['May', 'June'],
      'durationMonths': 6,
      'image': require('./images/aubergine.jpg'),
      'ph': '5.5–7.2',
      'content': 'https://www.rhs.org.uk/vegetables/aubergines/grow-your-own',
    },
    'beans_for_drying': {
      'title': 'Beans for drying',
      'id': 'beans_for_drying',
      'category': 'vegetables',
      'sow': ['April', 'May'],
      indoorsUntil: ['May', 'June'],
      'durationMonths': 2,
      'image': require('./images/beans.jpg'),
      'content':
        'https://www.rhs.org.uk/vegetables/beans-for-drying/grow-your-own',
      'ph': '6–7',
    },
    'beetroot': {
      'title': 'Beetroot',
      'id': 'beetroot',
      'category': 'vegetables',
      'sow': ['March'],
      'durationMonths': 2.5,
      'image': require('./images/beetroot.jpg'),
      'content': 'https://www.rhs.org.uk/vegetables/beetroot/grow-your-own',
      'ph': '6–7',
    },
    'broad_beans': {
      'title': 'Broad Beans',
      'id': 'broad_beans',
      'category': 'vegetables',
      'sow': ['February', 'March', 'April'],
      indoorsUntil: ['March', 'April'],
      'durationMonths': 2.5,
      'image': require('./images/broad_beans.jpg'),
      'content': 'https://www.rhs.org.uk/vegetables/broad-beans/grow-your-own',
      'ph': '6–7',
    },
    'broccoli': {
      'title': 'Broccoli',
      'id': 'broccoli',
      'category': 'vegetables',
      'sow': ['March', 'April', 'May', 'June'],
      indoorsUntil: ['April', 'May', 'June'],
      'durationMonths': 2.5,
      'image': require('./images/broccoli.jpg'),
      'content': 'https://www.rhs.org.uk/vegetables/broccoli/grow-your-own',
      'ph': '6–7',
    },
    'sprouts': {
      'title': 'Brussels sprouts',
      'id': 'sprouts',
      'category': 'vegetables',
      'sow': ['February', 'March', 'April'],

      indoorsUntil: ['May', 'June'],
      'durationMonths': 3,
      'image': require('./images/sprouts.jpg'),
      'content':
        'https://www.rhs.org.uk/vegetables/brussels-sprouts/grow-your-own',
      'ph': '6–7',
    },
    'cabbages': {
      'title': 'Cabbages',
      'id': 'cabbages',
      'category': 'vegetables',
      'sow': [
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
      ],
      'durationMonths': 5,
      'image': require('./images/cabbage.jpg'),
      'content': 'https://www.rhs.org.uk/vegetables/cabbages/grow-your-own',
      'ph': '6–7',
    },
    'carrots': {
      'title': 'Carrots',
      'id': 'cabbages',
      'category': 'vegetables',
      'sow': ['February', 'March', 'April', 'May', 'June', 'July'],
      'indoorsUntil': ['April', 'May', 'June', 'July'],
      'durationMonths': 5,
      'image': require('./images/carrots.jpg'),
      'content': 'https://www.rhs.org.uk/vegetables/carrots/grow-your-own',
      'ph': '6–7',
    },
    'cauliflower': {
      'title': 'Cauliflower',
      'id': 'cauliflower',
      'category': 'vegetables',
      'sow': [
        'February',
        'March',
        'April',
        'May',
        'October',
        'November',
        'December',
      ],
      'durationMonths': 5,
      'image': require('./images/cauliflower.jpg'),
      'content': 'https://www.rhs.org.uk/vegetables/cauliflower/grow-your-own',
      'ph': '6–7',
    },
    'celeriac': {
      'title': 'Celeriac',
      'id': 'celeriac',
      'category': 'vegetables',
      'sow': ['March', 'April'],
      'indoorsUntil': ['May'],
      'durationMonths': 4,
      'image': require('./images/celeriac.jpg'),
      'content': 'https://www.rhs.org.uk/vegetables/celeriac/grow-your-own',
      'ph': '6–7',
    },
    'celery': {
      'title': 'Celery',
      'id': 'celery',
      'category': 'vegetables',
      'sow': ['March', 'April'],
      'indoorsUntil': ['May'],
      'durationMonths': 4.5,
      'image': require('./images/celery.jpg'),
      'content': 'https://www.rhs.org.uk/vegetables/celery/grow-your-own',
      'ph': '6–7',
    },
    'chard': {
      'title': 'Chard',
      'id': 'chard',
      'category': 'vegetables',
      'sow': ['March', 'April', 'May', 'June', 'July', 'August'],
      'durationMonths': 3.5,
      'image': require('./images/chard.jpg'),
      'content': 'https://www.rhs.org.uk/vegetables/chard/grow-your-own',
      'ph': '6–7',
    },
    'chicory': {
      'title': 'Chicory',
      'id': 'chicory',
      'category': 'vegetables',
      'sow': ['June', 'July', 'August'],
      'durationMonths': 3.5,
      'image': require('./images/chicory.jpg'),
      'content': 'https://www.rhs.org.uk/vegetables/chicory/grow-your-own',
      'ph': '6–7',
    },
    'chillies': {
      'title': 'Chillies',
      'id': 'chillies',
      'category': 'vegetables',
      'sow': ['February', 'March', 'April'],
      'indoorsUntil': ['July', 'August'],
      'durationMonths': 5,
      'image': require('./images/chilli.jpg'),
      'content':
        'https://www.rhs.org.uk/vegetables/chilli-pepper/grow-your-own',
      'ph': '6–7',
    },
    'chinese_broccoli': {
      'title': 'Chinese Broccoli',
      'id': 'chinese_broccoli',
      'category': 'vegetables',
      'sow': ['March', 'April', 'May', 'June'],
      'durationMonths': 2,
      'image': require('./images/chinese_broccoli.jpg'),
      'content':
        'https://www.rhs.org.uk/vegetables/chinese-broccoli/grow-your-own',
      'ph': '6–7',
    },
    'courgettes': {
      'title': 'Courgettes',
      'id': 'courgettes',
      'category': 'vegetables',
      'sow': ['April', 'May', 'June'],
      'indoorsUntil': ['June'],
      'durationMonths': 2.5,
      'image': require('./images/courgette.jpg'),
      'content': 'https://www.rhs.org.uk/vegetables/courgettes/grow-your-own',
      'ph': '6–7',
    },
    'endive': {
      'title': 'Endive',
      'id': 'endive',
      'category': 'vegetables',
      'sow': [
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
      ],
      'indoorsUntil': ['April', 'May', 'June', 'July', 'August'],
      'durationMonths': 3,
      'image': require('./images/endive.jpg'),
      'content': 'https://www.rhs.org.uk/vegetables/endive/grow-your-own',
      'ph': '6–7',
    },
    'french_beans': {
      'title': 'French Beans',
      'id': 'french_beans',
      'category': 'vegetables',
      'sow': ['April', 'May', 'June'],
      'indoorsUntil': ['June', 'July', 'August'],
      'durationMonths': 2.25,
      'image': require('./images/french_beans.jpg'),
      'content': 'https://www.rhs.org.uk/vegetables/french-beans/grow-your-own',
      'ph': '6–7',
    },
    'garlic': {
      'title': 'Garlic',
      'id': 'garlic',
      'category': 'vegetables',
      'sow': ['October', 'November', 'December', 'January', 'February'],
      'durationMonths': 9,
      'image': require('./images/garlic.jpg'),
      'content': 'https://www.rhs.org.uk/vegetables/garlic/grow-your-own',
      'ph': '6–7',
    },
    'globe_artichokes': {
      'title': 'Globe artichokes',
      'id': 'globe_artichokes',
      'category': 'vegetables',
      'sow': ['March', 'April'],
      'durationMonths': 3.5,
      'image': require('./images/globe_artichoke.jpg'),
      'content':
        'https://www.rhs.org.uk/vegetables/globe-artichokes/grow-your-own',
      'ph': '6–7',
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
