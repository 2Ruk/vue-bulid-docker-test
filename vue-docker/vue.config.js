module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  lintOnSave: false, //eslint 끄기
  devServer: { //api 설정
    proxy: {
      '/api': {
        target: 'http://localhost:3001'
      }
    }
  }
}
