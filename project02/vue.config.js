const path = require('path')

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src/')
      }
    }
  }
}

module.exports = {
  chainWebpack: (config) => {
    config.plugins.delete('prefetch') // prefetch 삭제
  }
}
