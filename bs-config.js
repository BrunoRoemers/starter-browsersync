const serveIndex = require('serve-index')
const serveStatic = require('serve-static')

// config
const rootPath = 'src'

module.exports = {
  watch: true,
  server: rootPath,
  middleware: [
    serveStatic(rootPath),
    serveIndex(rootPath),
  ],
}
