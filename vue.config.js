const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  //关闭eslint语法校验
  devServer:{
    host:'127.0.0.1',
    port:8080,
    open:true
  }
  //运行项目自动打开浏览器
})
