import { NextPage } from 'next'
import { ReactElement, ReactNode } from 'react'

export type NextPageWithLayout<T = any> = NextPage<T> & {
  getLayout?: (page: ReactElement, pageProps: T) => ReactNode
}
