module.exports = {
  devServer: {
    disableHostCheck: true
  },
  pluginOptions: {
    apollo: {
      lintGQL: true
    }
  },
  transpileDependencies: [
    'vuetify'
  ]
}
