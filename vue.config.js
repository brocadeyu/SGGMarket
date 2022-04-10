const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  //关闭eslint语法校验
  devServer:{
    host:'127.0.0.1',
    port:8080,
    open:true,
    proxy:{
      '/api':{
        target:"http://39.98.123.211"
      }
    }
  }
  //运行项目自动打开浏览器
})
