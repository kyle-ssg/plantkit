import React from 'react'
import 'project/polyfill'
import { NextPageWithLayout } from '../types/nextPageWithLayout'
import { nextReduxWrapper } from 'components/util/nextReduxWrapper'
import { ServerSidePageProps } from '../types/serversidePageProps'
import Nav from 'components/Nav'
import Head from 'next/head'
import { useRouter } from 'next/router'
import MD from 'react-markdown'
import { recipes } from '../common/recipes'
import {
  d2f,
  Ingredient,
  IngredientConversions,
} from '../common/recipes/Ingredient'
import { singular } from 'ssgrtk/dist/helpers/plural'
import Row from 'components/base/grid/Row'
import Tooltip from 'components/Tooltip'
export type HomePageType = {}
import { NextSeo } from 'next-seo'
const HomePage: NextPageWithLayout<HomePageType> = () => {
  const { query } = useRouter()
  const recipe = recipes.find((v) => v.title === query.id)
  return (
    <>
      <NextSeo
        title={`${query.id}`}
        openGraph={{
          title: `${query.id}`,
          description: 'View the recipe',
          images: [recipe?.image],
        }}
        description=''
      />
      <main>
        <Head>
          <title>{query.id}</title>
        </Head>
        <div className='overflow-hidden'>
          <div className='row'>
            <div
              className='col-md-6 vh-lg-100'
              style={{ background: '#f1f1f1' }}
            >
              <div className='container pt-2'>
                <h2>Ingredients</h2>
                {(recipe?.ingredients as any[]).map(
                  (ingredient: Ingredient, i) => {
                    const moreInfo = IngredientConversions[
                      singular(ingredient.name.toLowerCase().replace(/ /g, '_'))
                    ]?.(ingredient.qty)

                    return (
                      <Row className='mb-2'>
                        <strong
                          style={{
                            width: 80,
                            marginRight: 8,
                            textAlign: 'left',
                          }}
                        >
                          {d2f(ingredient.qty)} {ingredient.unit}
                        </strong>
                        <span>{ingredient.name}</span>
                        {!!moreInfo && (
                          <Tooltip id={`ing-${i}`}>
                            <div className='text-left'>
                              <h3>{ingredient.name}</h3>
                              {moreInfo.map((v, i) => (
                                <div className='mb-2' key={i}>
                                  {v}
                                </div>
                              ))}
                            </div>
                          </Tooltip>
                        )}
                      </Row>
                    )
                  },
                )}
              </div>
            </div>
            <div className='col-md-6'>
              <div className='container pt-2'>
                <h1>Instructions</h1>
                <div className='recipe'>
                  <MD>{recipe?.instructions}</MD>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

HomePage.getLayout = (page) => {
  return (
    <>
      <Nav />
      {page}
    </>
  )
}

//serverside fetching
export const getServerSideProps = nextReduxWrapper.getServerSideProps(
  () => async (): Promise<ServerSidePageProps<HomePageType>> => {
    return {
      props: {},
    }
  },
)

export default HomePage
