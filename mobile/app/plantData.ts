import { ImageSourcePropType } from 'react-native'

export type TPlant = {
  id: string
  title: string
  category: string
  notes?: string
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
    'kale': {
      'title': 'Kale',
      'id': 'kale',
      'category': 'vegetables',
      'sow': ['March', 'April', 'May', 'June'],
      'durationMonths': 2.5,
      'image': require('./images/kale.jpg'),
      'content': 'https://www.rhs.org.uk/vegetables/kale/grow-your-own',
      'ph': '6–7',
    },
    'kohl_rabi': {
      'title': 'Kohl rabi',
      'id': 'kohl_rabi',
      'category': 'vegetables',
      'sow': ['February', 'March', 'April', 'May', 'June', 'July', 'August'],
      'durationMonths': 2,
      'image': require('./images/kohl.jpg'),
      'content': 'https://www.rhs.org.uk/vegetables/kohl-rabi/grow-your-own',
      'ph': '6–7',
    },
    'leeks': {
      'title': 'Leeks',
      'id': 'leeks',
      'category': 'vegetables',
      'sow': ['February', 'March', 'April'],
      'indoorsUntil': ['March', 'April'],
      'durationMonths': 4.5,
      'image': require('./images/leeks.jpg'),
      'content': 'https://www.rhs.org.uk/vegetables/leeks/grow-your-own',
      'ph': '6–7',
    },
    'lettuce': {
      'title': 'Lettuce',
      'id': 'lettuce',
      'category': 'vegetables',
      'sow': ['March', 'April', 'May', 'June', 'July'],
      'durationMonths': 1,
      'image': require('./images/lettuce.jpg'),
      'content': 'https://www.rhs.org.uk/vegetables/lettuce/grow-your-own',
      'ph': '6–7',
    },
    'marrows': {
      'title': 'Marrows',
      'id': 'marrow',
      'category': 'vegetables',
      'sow': ['April', 'May', 'June'],
      'indoorsUntil': ['May', 'June'],
      'durationMonths': 4,
      'image': require('./images/marrow.jpg'),
      'content': 'https://www.rhs.org.uk/vegetables/marrow/grow-your-own',
      'ph': '6–7',
    },
    'mizuna_mibuna': {
      'title': 'Mizuna & mibuna',
      'id': 'mizuna_mibuna',
      'category': 'vegetables',
      'sow': [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
      'indoorsUntil': [
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
      ],
      'durationMonths': 2.5,
      'image': require('./images/mizuna.jpg'),
      'content':
        'https://www.rhs.org.uk/vegetables/mizuna-mibuna/grow-your-own',
      'ph': '6–7',
    },
    'onion': {
      'title': 'Onions',
      'id': 'onion',
      'category': 'vegetables',
      'sow': ['February', 'March', 'April'],
      'indoorsUntil': ['March', 'April'],
      'durationMonths': 4,
      'image': require('./images/onion.jpg'),
      'content': 'https://www.rhs.org.uk/vegetables/onions/grow-your-own',
      'ph': '6–7',
    },
    'pak_choi': {
      'title': 'Pak choi',
      'id': 'pak_choi',
      'category': 'vegetables',
      'sow': ['April', 'May', 'June', 'July'],
      'durationMonths': 2,
      'image': require('./images/pakchoi.jpg'),
      'content': 'https://www.rhs.org.uk/vegetables/pak-choi/grow-your-own',
      'ph': '6–7',
    },
    'parsnips': {
      'title': 'Parsnips',
      'id': 'parsnips',
      'category': 'vegetables',
      'sow': ['March', 'April', 'May'],
      'durationMonths': 5.5,
      'image': require('./images/parsnips.jpg'),
      'content': 'https://www.rhs.org.uk/vegetables/parsnips/grow-your-own',
      'ph': '6–7',
    },
    'peas': {
      'title': 'Peas',
      'id': 'peas',
      'category': 'vegetables',
      'indoorsUntil': ['March', 'April', 'May', 'June'],
      'sow': ['February', 'March', 'April', 'May', 'June'],
      'durationMonths': 4,
      'image': require('./images/peas.jpg'),
      'content': 'https://www.rhs.org.uk/vegetables/peas/grow-your-own',
      'ph': '6–7',
    },
    'peppers': {
      'title': 'Peppers',
      'id': 'peppers',
      'category': 'vegetables',
      'indoorsUntil': ['March', 'April'],
      'sow': ['February', 'March', 'April'],
      'durationMonths': 2.5,
      'image': require('./images/peppers.jpg'),
      'content': 'https://www.rhs.org.uk/vegetables/peppers/grow-your-own',
      'ph': '6–7',
    },
    'potatoes': {
      'title': 'Potatoes',
      'id': 'potatoes',
      'category': 'vegetables',
      'sow': ['April', 'May'],
      'durationMonths': 3,
      'image': require('./images/potatoes.jpg'),
      'content': 'https://www.rhs.org.uk/vegetables/potatoes/grow-your-own',
      'ph': '6–7',
    },
    'pumpkin': {
      'title': 'Pumpkin',
      'id': 'pumpkin',
      'category': 'vegetables',
      'indoorsUntil': ['May', 'June'],
      'sow': ['April', 'May', 'June'],
      'durationMonths': 3,
      'image': require('./images/pumpkin.jpg'),
      'content': 'https://www.rhs.org.uk/vegetables/pumpkin/grow-your-own',
      'ph': '6–7',
    },
    'radishes': {
      'title': 'Radishes',
      'id': 'radishes',
      'category': 'vegetables',
      'sow': ['March', 'April', 'May', 'June', 'July', 'August'],
      'durationMonths': 1.25,
      'image': require('./images/radishes.jpg'),
      'content': 'https://www.rhs.org.uk/vegetables/radishes/grow-your-own',
      'ph': '6–7',
    },
    'rhubarb': {
      'title': 'Rhubarb',
      'id': 'radishes',
      'category': 'vegetables',
      'sow': [
        'January',
        'February',
        'March',
        'October',
        'November',
        'December',
      ],
      'durationMonths': 3.5,
      'image': require('./images/rhubarb.jpg'),
      'content': 'https://www.rhs.org.uk/vegetables/radishes/grow-your-own',
      'ph': '6–7',
    },
    'rocket': {
      'title': 'Rocket Salad',
      'id': 'radishes',
      'category': 'vegetables',
      'sow': ['April', 'May', 'June', 'July', 'August', 'September'],
      'durationMonths': 2,
      'image': require('./images/rocket.jpg'),
      'content': 'https://www.rhs.org.uk/vegetables/radishes/grow-your-own',
      'ph': '6–7',
    },
    'runner_beans': {
      'title': 'Runner beans',
      'id': 'runner_beans',
      'category': 'vegetables',
      'sow': ['April', 'May', 'June'],
      'indoorsUntil': ['June'],
      'durationMonths': 6,
      'image': require('./images/runner_beans.jpg'),
      'content': 'https://www.rhs.org.uk/vegetables/runner-beans/grow-your-own',
      'ph': '6–7',
    },
    'salad': {
      'title': 'Salad leaves',
      'id': 'salad',
      'category': 'vegetables',
      'sow': ['April', 'May', 'June', 'July', 'August', 'September'],
      'durationMonths': 2,
      'image': require('./images/salad.jpg'),
      'content': 'https://www.rhs.org.uk/vegetables/salad-leaves/grow-your-own',
      'ph': '6–7',
    },
    'shallots': {
      'title': 'Shallots',
      'id': 'shallots',
      'category': 'vegetables',
      'sow': ['January', 'February', 'March', 'April'],
      'indoorsUntil': ['April'],
      'durationMonths': 3,
      'image': require('./images/shallots.jpg'),
      'content': 'https://www.rhs.org.uk/vegetables/shallots/grow-your-own',
      'ph': '6–7',
    },
    'spinach': {
      'title': 'Spinach',
      'id': 'spinach',
      'category': 'vegetables',
      'sow': ['March', 'April', 'May', 'August', 'September'],
      'durationMonths': 2,
      'image': require('./images/spinach.jpg'),
      'content': 'https://www.rhs.org.uk/vegetables/shallots/grow-your-own',
      'ph': '6–7',
    },
    'sweet_potato': {
      'title': 'Sweet Potato',
      'id': 'sweet_potato',
      'category': 'vegetables',
      'sow': ['March', 'April'],
      'indoorsUntil': ['June'],
      'durationMonths': 2,
      'image': require('./images/sweet_potato.jpg'),
      'content':
        'https://www.rhs.org.uk/vegetables/sweet-potatoes/grow-your-own',
      'ph': '6–7',
    },
    'sweetcorn': {
      'title': 'Sweetcorn',
      'id': 'sweetcorn',
      'category': 'vegetables',
      'sow': ['April', 'May'],
      'indoorsUntil': ['June'],
      'durationMonths': 2,
      'image': require('./images/sweetcorn.jpg'),
      'content': 'https://www.rhs.org.uk/vegetables/sweetcorn/grow-your-own',
      'ph': '6–7',
    },
    'tomatoes': {
      'title': 'Tomatoes',
      'id': 'tomatoes',
      'category': 'vegetables',
      'sow': ['February', 'March', 'April'],
      'indoorsUntil': ['June'],
      'durationMonths': 2,
      'image': require('./images/tomatoes.jpg'),
      'content': 'https://www.rhs.org.uk/vegetables/tomatoes/grow-your-own',
      'ph': '6–7',
    },
    'turnips': {
      'title': 'Turnips',
      'id': 'turnips',
      'category': 'vegetables',
      'sow': ['April', 'May', 'June', 'July', 'August'],
      'durationMonths': 3,
      'image': require('./images/turnip.jpg'),
      'content': 'https://www.rhs.org.uk/vegetables/turnips/grow-your-own',
      'ph': '6–7',
    },
    'apricot': {
      'title': 'Apricot',
      'id': 'apricot',
      'category': 'fruit',
      'sow': ['January', 'February', 'March'],
      'durationMonths': 36,
      'image': require('./images/apricot.jpg'),
      'content': 'https://www.rhs.org.uk/fruit/apricots/grow-your-own',
      'ph': '6–7',
    },
    'blackberries': {
      'title': 'Blackberries',
      'id': 'blackberries',
      'category': 'fruit',
      'sow': ['January', 'February', 'March', 'April'],
      'durationMonths': 36,
      'image': require('./images/blackberries.jpg'),
      'content':
        'https://www.rhs.org.uk/fruit/blackberries-and-hybrid-berries/grow-your-own',
      'ph': '6–7',
    },
    'blueberries': {
      'title': 'Blueberries',
      'id': 'blueberries',
      'category': 'fruit',
      'sow': ['January', 'February', 'March', 'June', 'November'],
      'durationMonths': 36,
      'notes': 'Low PH',
      'image': require('./images/blueberries.jpg'),
      'content': 'https://www.rhs.org.uk/fruit/blueberries/grow-your-own',
      'ph': '4.5–5.5',
    },
    'cherries': {
      'title': 'Cherries',
      'id': 'cherries',
      'category': 'fruit',
      'sow': [
        'January',
        'February',
        'March',
        'October',
        'November',
        'December',
      ],
      'durationMonths': 24,
      'image': require('./images/cherries.jpg'),
      'content': 'https://www.rhs.org.uk/fruit/cherries/grow-your-own',
      'ph': '4.5–5.5',
    },
    'damsons': {
      'title': 'Damsons',
      'id': 'damsons',
      'category': 'fruit',
      'sow': ['January', 'February', 'March', 'November', 'December'],
      'durationMonths': 24,
      'image': require('./images/damson.jpg'),
      'content': 'https://www.rhs.org.uk/fruit/damsons/grow-your-own',
      'ph': '6.5–7.5',
    },
    'kiwis': {
      'title': 'Kiwis',
      'id': 'damsons',
      'category': 'fruit',
      'sow': ['March', 'April', 'May'],
      'durationMonths': 3,
      'image': require('./images/kiwis.jpg'),
      'content': 'https://www.rhs.org.uk/fruit/kiwi/grow-your-own',
      'ph': '6.5–7.5',
    },
    'melon': {
      'title': 'Melon',
      'id': 'melon',
      'category': 'fruit',
      'sow': ['April'],
      'indoorsUntil': ['June'],
      'durationMonths': 3,
      'image': require('./images/melon.jpg'),
      'content': 'https://www.rhs.org.uk/fruit/melons/grow-your-own',
      'ph': '6.5–7.5',
    },
  },
}

const typedData: {
  plants: Record<keyof typeof plantData.plants, TPlant>
} = plantData
export default typedData
