const path = require('path')

module.exports = {
  chainWebpack: (config) => {
    config.plugins.delete('prefetch') // prefetch 삭제
  }
}
