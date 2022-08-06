// @ts-ignore
require('@babel/polyfill')

const { join } = require('path')
const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT||`${3000}`, 10)
const dev = process.env.NODE_ENV !== 'production'
console.log('Running NEXTJS Dev:', dev)
const app = next({ dev })
const handle = app.getRequestHandler()

Promise.all([app.prepare()]).then(() => {
  const server = express()
  const sw = join(__dirname, '.next/service-worker.js')
  const favicon = join(__dirname, '/static/images/favicon.ico')
  const sitemap = join(__dirname, '/static/sitemap.xml')
  const robots = join(__dirname, '/static/robots.txt')
  const apple = join(__dirname, '/static/apple-app-site-association')

  server.get('/sitemap.xml', (req, res) => {
    app.serveStatic(req, res, sitemap)
  })

  server.get('/robots.txt', (req, res) => {
    app.serveStatic(req, res, robots)
  })

  server.get('/favicon.ico', (req, res) => {
    app.serveStatic(req, res, favicon)
  })

  server.get('/service-worker.js', (req, res) => {
    app.serveStatic(req, res, sw)
  })

  server.get('/apple-app-site-association', (req, res) => {
    // req.setHeader('Content-Type', 'application/json');
    res.setHeader('Content-Type', 'application/json')
    app.serveStatic(req, res, apple)
  })

  server.get('*', (req, res) => handle(req, res))
  server.post('*', (req, res) => handle(req, res))
  server.delete('*', (req, res) => handle(req, res))
  server.patch('*', (req, res) => handle(req, res))
  server.put('*', (req, res) => handle(req, res))

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`) // eslint-disable-line no-console
    if (process.send) {
      process.send({ done: true })
    }
  })
})
