import React from 'react'
import 'project/polyfill'
import { NextPageWithLayout } from '../types/nextPageWithLayout'
import { nextReduxWrapper } from 'components/util/nextReduxWrapper'
import { ServerSidePageProps } from '../types/serversidePageProps'
import Nav from 'components/Nav'
import Button from 'components/base/forms/Button'
import { toast } from 'components/Toast'
import Head from 'next/head'

export type HomePageType = {}
const HomePage: NextPageWithLayout<HomePageType> = () => {
  return (
    <>
      <main className='container'>
        <Head>
          <title>Boilerplate homepage</title>
        </Head>
        <div className='bg-light p-5 rounded'>
          <h1>Toast example</h1>
          <p className='lead'>The button below will show a toast message.</p>
          <Button
            size='large'
            onClick={() => toast(<div>Title</div>, <div>Content</div>)}
          >
            Click me!
          </Button>
          <div className='mb-2'>
            <Button
              size='large'
              onClick={() => toast(<div>Title</div>, <div>Content</div>)}
            >
              Click me!
            </Button>
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
