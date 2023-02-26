import React from 'react'
import 'project/polyfill'
import { NextPageWithLayout } from '../types/nextPageWithLayout'
import { nextReduxWrapper } from 'components/util/nextReduxWrapper'
import { ServerSidePageProps } from '../types/serversidePageProps'
import Nav from 'components/Nav'
import Button from 'components/base/forms/Button'
import { toast } from 'components/Toast'
import Head from 'next/head'
import { recipes } from 'common/recipes'
import Link from 'next/link'
export type HomePageType = {}
const HomePage: NextPageWithLayout<HomePageType> = () => {
  return (
    <>
      <main className='container'>
        <Head>
          <title>Boilerplate homepage</title>
        </Head>
        <div className='row'>
          {recipes.map((v, i) => (
            <div key={i} className='col-md-4 py-2'>
              <Link href={`/${v.title}`}>{v.title}</Link>
            </div>
          ))}
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
