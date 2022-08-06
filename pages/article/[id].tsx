import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { API } from 'project/api'

const ArticlePage = () => {
  const {
    query: { id },
  } = useRouter()

  useEffect(() => {
    API.trackPage('ArticlePage')
  }, [])

  return <div className='container'>Article {id}</div>
}

// Static compilation
// export const getStaticPaths = async () => {
//   return {
//     paths: [{ params: { id: '1' } }],
//     fallback: 'blocking', // builds page that is not compiled
//   }
// }

//serverside fetching
// export const getServerSideProps = nextReduxWrapper.getServerSideProps(
//   (store) => async (context): Promise<ServerSidePageProps<HomePageType>> => {
// store.dispatch<any>(
//   defaultService.endpoints.getArticle.initiate({
//     id: ${context.params.id},
//   }),
// )
// await Promise.all(defaultService.util.getRunningOperationPromises())
// return {
//   props: {},
// }
// },
// )

export default ArticlePage
