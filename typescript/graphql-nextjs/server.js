const { createServer } = require("http")
const { parse } = require("url")
const _ = require("lodash")
const next = require("next")

const dev = process.env.NODE_ENV !== "production"
const hostname = "localhost"
const port = 3000
const app = new next({ dev, hostname, port })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      // Be sure to pass `true` as the second argument to `url.parse`.
      // This tells it to parse the query portion of the URL.
      console.log(_.capitalize("akshita"))
      const parsedUrl = parse(req.url, true)
      await handle(req, res, parsedUrl)
    } catch (err) {
      console.error("Error occurred handling", req.url, err)
      res.statusCode = 500
      res.end("internal server error")
    }
  }).listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://${hostname}:${port}`)
  })
})
