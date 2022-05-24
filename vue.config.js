const path = require('path')
module.exports = {
  devServer: {
    compress: true,
    disableHostCheck: true,
  },
  lintOnSave: false,
  chainWebpack: config => {
    const dir = path.resolve(__dirname, 'src/assets/icons')

    config.module
      .rule('scg-sprite')
      .test(/\.svg$/)
      .include.add(dir).end()
      .use('svg-sprite-loader').loader('svg-sprite-loader').options({extract: false}).end()
    config.plugin('svg-sprite').use(require('svg-sprite-loader/plugin'), [{plainSprite: true}])
    config.module.rule('svg').exclude.add(dir)
  }
}
