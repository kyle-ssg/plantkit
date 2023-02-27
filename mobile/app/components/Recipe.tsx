import React, { FC, useState } from 'react'
import { Dimensions, Share, TouchableOpacity } from 'react-native'
import MD from 'react-native-markdown-display'
import {
  d2f,
  Ingredient,
  IngredientConversions,
} from 'common/recipes/Ingredient'
import { singular } from 'ssgrtk/dist/helpers/plural'
import Tooltip from 'components/Tooltip'
import { useBreakpointSmaller } from 'components/base/BreakpointProvider'
import useInsets from 'components/base/useInset' // we need this to make JSX compile

type RecipeType = { recipe: any }

const Recipe: FC<RecipeType> = ({ recipe: r }) => {
  const [tab, setTab] = useState(0)
  const tabs = useBreakpointSmaller('lg')
  const insets = useInsets()
  const [multiply, setMultiply] = useState(1)
  return tabs ? (
    <Flex
      style={[
        styles.container,
        {
          height: Dimensions.get('window').height,
          paddingTop: insets.top + 50,
        },
      ]}
    >
      <Row style={Styles.p10}>
        <TouchableOpacity onPress={() => setTab(0)}>
          <Text weight={tab === 0 ? 'bold' : 'regular'} style={[Styles.mr5]}>
            Ingredients
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setTab(1)}>
          <Text weight={tab === 1 ? 'bold' : 'regular'} style={[Styles.ml5]}>
            Recipe
          </Text>
        </TouchableOpacity>
      </Row>
      <View style={[Styles.ph10]}>
        <View style={!tab ? { display: 'none' } : null}>
          <MD style={mdStyleSmall}>{r.instructions}</MD>
        </View>
        <View style={tab ? { display: 'none' } : null}>
          <Row style={Styles.mb10}>
            <TouchableOpacity
              onPress={() => {
                Share.share({
                  title: r.title,
                  url: `https://plantkit.vercel.app/${encodeURIComponent(
                    r.title,
                  )}`,
                })
              }}
            >
              <Row>
                <Text size='h3' weight='bold'>
                  {r.title}
                </Text>
              </Row>
            </TouchableOpacity>
            <Row style={Styles.ml10}>
              <TouchableOpacity
                onPress={() => setMultiply(multiply - 1)}
                disabled={multiply === 1}
              >
                <FA5Pro style={styles.icon} name='minus' />
              </TouchableOpacity>
              <Text style={{ color: palette.primary }} weight='bold'>
                x{multiply}
              </Text>
              <TouchableOpacity onPress={() => setMultiply(multiply + 1)}>
                <FA5Pro style={styles.icon} name='plus' />
              </TouchableOpacity>
              <View></View>
            </Row>
          </Row>

          {(r.ingredients as any[]).map((ingredient: Ingredient, i) => {
            const moreInfo = IngredientConversions[
              singular(ingredient.name.toLowerCase().replace(/ /g, '_'))
            ]?.(ingredient.qty)

            return (
              <Row key={i} style={Styles.mb10}>
                <Text
                  weight='bold'
                  style={{
                    width: 80,
                    marginRight: 8,
                    textAlign: 'left',
                  }}
                >
                  {d2f(ingredient.qty * multiply)} {ingredient.unit}
                </Text>
                <Row>
                  <Text>{ingredient.name}</Text>
                </Row>
                {!!moreInfo && (
                  <Tooltip>
                    <View style={Styles.ph10}>
                      <Text style={Styles.mv10} size='h4' weight='bold' key={i}>
                        {d2f(ingredient.qty * multiply)} {ingredient.unit}
                        {ingredient.name}
                      </Text>
                      {moreInfo.map((v, i) => (
                        <Text style={Styles.mb10} key={i}>
                          {v}
                        </Text>
                      ))}
                    </View>
                  </Tooltip>
                )}
              </Row>
            )
          })}
        </View>
      </View>
    </Flex>
  ) : (
    <Row style={styles.slide}>
      <Flex
        value={2}
        style={[styles.container, { height: Dimensions.get('window').height }]}
      >
        <MD style={mdStyle}>{r.instructions}</MD>
      </Flex>
      <Flex
        style={[
          styles.container,
          {
            height: Dimensions.get('window').height,
          },
          styles.dark,
        ]}
      >
        <MD style={ingredientsStyle}>{r.ingredients}</MD>
      </Flex>
    </Row>
  )
}

const styles = StyleSheet.create({
  slide: {
    alignItems: 'stretch',
  },
  container: {
    paddingTop: 70,
  },
  dark: {
    backgroundColor: '#eaeaea',
  },
  text: {
    fontSize: 20,
    letterSpacing: 1.25,
  },
  icon: {
    padding: 8,
    color: palette.primary,
  },
})

const ingredientsStyle = {
  // @ts-ignore
  heading1: [Styles.h2, Styles.mb15, Styles.mt15],
  list_item: [styles.text, Styles.mb5],
}
const mdStyle = {
  // @ts-ignore
  heading1: [Styles.h1, Styles.mb5],
  heading3: [Styles.textBold, Styles.mb10, { fontSize: 24 }],
  heading2: [Styles.textBold, Styles.mv10, { fontSize: 24 }],
  list_item: [styles.text, Styles.mb5],
}
const mdStyleSmall = {
  // @ts-ignore
  heading1: [Styles.h3, Styles.mb10],
  heading3: [Styles.textBold, Styles.mv5, { fontSize: 18 }],
  heading2: [Styles.textBold, Styles.mv5, { fontSize: 18 }],
  list_item: [
    {
      fontSize: 18,
      letterSpacing: 1.25,
    },
    Styles.mb10,
  ],
}
export default Recipe
