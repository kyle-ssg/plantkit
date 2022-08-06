import { ImageSourcePropType } from 'react-native'

export type TPlantContent = {
  category: string
  content: string
  image?: ImageSourcePropType | null
  imageDescription?: string
}
export type TPlant = {
  title: string
  category: string
  sow: string[]
  durationMonths: number
  buy: string
  ph: string
  warning: string
  image?: ImageSourcePropType | null
  content: TPlantContent[]
}

const plantData: { plants: Record<string, TPlant> } = {
  'plants': {
    'asparagus': {
      'title': 'Asparagus',
      'category': 'vegetables',
      'sow': ['March'],
      'durationMonths': 12,
      'buy':
        'https://www.rhs.org.uk/vegetables/asparagus/grow-your-own#:~:text=Asparagus-,Buy%20now,-at%20the%20RHS',
      'image': require('./images/asparagus.png'),
      'ph': '6.5–7.5',
      'warning': 'Leave the asparagus to grow 2 years without harvesting',
      'content': [
        {
          'category': 'Sow',
          'content':
            "Asparagus is usually grown from 1+ year domrmant crowns, but can also be grown from seed, these plants take one year longer before you can start cropping – three years as opposed to two years grown from crowns.\\nIt is best to choose an all-male \\n\\nThese are cultivars, usually of vegetables or annual flowers, that have been bred to offer uniformity and specific desirable characteristics, such as strong, healthy growth and abundant flowers or fruits. They are produced by crossing two stable seed lines (called inbred lines). Seeds of F1 hybrids tend to be more expensive, but generally produce more robust, uniform plants that are better able to cope with adverse conditions. However, seeds saved from F1 hybrids will not produce offspring that are identical to the parents.\\n\\nGardeners often use the word variety when referring to a specific plant, but the correct botanical term is 'cultivar'. Whichever word you use, it means a distinctive plant or plants, given a specific cultivar name and usually bred to enhance certain characteristics, such as flower or fruit size, colour, flavour or fragrance, plant size, hardiness, disease resistance, etc. Additionally, it is worth knowing that, botanically, variety has another meaning - it refers to a naturally-occurring distinct plant that only has slight differences in its looks. For example, Malva alcea var. fastigiata differs from typical plants by having an upright habit.\\n\\ncultivar, as these tend to produce better and stronger spears. Non-hybrid seeds produce female as well as male plants, and these will in turn produce \\n\\nA seedling is a young plant grown from seed.\\n\\nseedlings that will need to be weeded out to prevent competition with the existing plants. Even F1 all-male seeds can produce the occasional female plant.\\n\\nSow seeds indoors in February at 13–16°C (55–61°F). Sow them singly into \\n\\nSmall individual cells, usually in a tray, used for sowing seeds. The resulting seedlings can be transplanted with minimal root disturbance.\\n\\nmodules filled with \\n\\nSeed compost is a free draining compost formulated for germinating seed. It often contains a mix of fine materials including sterilised loam, coir, coarse sand, grit or perlite. It contains low level of nutrients (High levels\\ncould damage seedlings).\\n\\nseed compost. Harden them off and transplant into their final positions in early June. Prepare the planting site by weeding thoroughly, then dig in at least one bucketful of organic matter, such as garden \\n\\nCan refer to either home-made garden compost or seed/potting compost:• Garden compost is a soil improver made from decomposed plant waste, usually in a compost bin or heap. It is added to soil to improve its fertility, structure and water-holding capacity. • Seed or potting composts are used for growing seedlings or plants in containers – a wide range of commercially produced composts are available, made from a mix of various ingredients, such as loam, coir, peat, sand and fertiliser, although you can mix your own.\\n\\ncompost or well-rotted farmyard manure, every square metre/yard.\\n\\nAlternatively, sow outside in March or April, in drills 2.5cm (1in) deep and 30–45cm (12–18in) apart. Thin the seedlings to 15cm (6in) apart and protect from slugs and snails. Transplant them to their final positions the following March.",
          'image': require('./images/asparagus-grow.png'),
          'imageDescription': 'Line up roots 30cm apart',
        },
        {
          'category': 'Grow',
          'content':
            'To grow well, asparagus plants should be fed well and kept weed free. If you have any female plants (which produce orange-red berries), you will need to weed out any seedlings. Plants may need supporting as they grow quite tall, and should be cut down at the end of the season.',
        },
        {
          'category': 'Feeding',
          'content':
            'In early spring, apply 100g per sq m (3oz per sq yd) of general fertiliser such as Growmore, or blood, fish and bone. If growth is weak, repeat this application once harvesting has finished.',
        },
        {
          'category': 'Supporting',
          'content':
            'Asparagus grows into a tall, feathery plant over the summer. To avoid the stems breaking in windy weather and damaging the \\n\\n1) The crown is usually at the base of herbaceous plants, often identified by buds at ground level, usually where the roots and stems join at soil level. See plants such as rhubarb, chrysanthemum or Hylotelephium (sedum). 2) A crown can refer to the branches on a tree located at the top of a trunk, for example the canopy of an oak.\\n\\ncrown, support plants using stakes and \\n\\nTwine is a soft, fine loosely woven string treated with preservatives for outdoor use. Used for tying in climbers and other plants to supports.\\n\\ntwine to make a ‘fence’ either side of the row.',
        },
        {
          'category': 'Growing out',
          'content': 'In autumn, let it grow out.',
        },
        {
          'category': 'Harvesting',
          'content':
            'Cut spears 8 inches leaving bottoms in the soil. Harvest often.',
        },
      ],
    },
  },
  // 'aubergines': {
  //   'title': 'Aubergines',
  //   'category': 'vegetables',
  // },
  // 'beans_for_drying': {
  //   'title': 'Beans for drying',
  //   'category': 'vegetables',
  // },
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
