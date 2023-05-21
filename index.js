const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware')

/** @type {import('http-proxy-middleware/dist/types').Options} */
const options = {
  target: 'https://api.openai.com',
  changeOrigin: true,
  pathRewrite: {
    '^/proxy': '/'
  }
}
const proxy = createProxyMiddleware(options)

const app = express()
app.use('/proxy', proxy)
app.listen(4000)
