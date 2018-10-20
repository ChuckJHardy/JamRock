const { createServer } = require('http')
const { join } = require('path')
const { parse } = require('url')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    createServer((req, res) => {
      const parsedUrl = parse(req.url, true)
      const { pathname } = parsedUrl

      const directoryMapping = {
        '/service-worker.js': '.next',
        '/robots.txt': 'static',
        '/sitemap.xml': 'static',
        '/favicon.ico': 'static'
      }

      const match = directoryMapping[pathname]

      if (match) {
        app.serveStatic(req, res, join(__dirname, match, pathname))
      } else {
        handle(req, res, parsedUrl)
      }
    })
    .listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })