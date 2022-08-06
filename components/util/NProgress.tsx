import Router from 'next/router'

if (typeof document !== 'undefined') {
  const NProgress = require('nprogress')
  let timer: any
  let state: string
  const activeRequests = 0
  const delay = 100

  // @ts-ignore
  // eslint-disable-next-line no-inner-declarations
  function load() {
    // @ts-ignore
    if (state === 'loading') {
      return
    }

    state = 'loading'

    timer = setTimeout(function () {
      NProgress.start()
    }, delay) // only show progress bar if it takes longer than the delay
  }

  // @ts-ignore
  // eslint-disable-next-line no-inner-declarations
  function stop() {
    if (activeRequests > 0) {
      return
    }

    state = 'stop'

    // @ts-ignore
    clearTimeout(timer)
    NProgress.done()
  }

  Router.events.on('routeChangeStart', load)
  Router.events.on('routeChangeComplete', stop)
  Router.events.on('routeChangeError', stop)
}
export default function () {
  return null
}
