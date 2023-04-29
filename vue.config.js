const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  configureWebpack: {
    resolve: {
      alias: {
        "components": "@/components",
      }
    }
  },
  devServer: {
    open: true,
    // host: 'local-ip',
    host: 'localhost',
    proxy: {
      "/usm": {
        target: "http://10.10.3.239:12501/",
      },
      "/v1": {
        target: "wss://127.0.0.1:8443/v1/",
      },
    }
  },
  transpileDependencies: true,
  //全局样式；npm install sass sass-loader -D；如果 Node Sass 与脚手架版本不兼容，先卸载
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "./src/theme/element-variable.scss";`
        //旧版本用prependData，新版比如cli5本用additionalData
        //注意：sass-loader将文件引用写入每个组件，适合全局引入变量，但不适合在单页面应用中添加样式，如果是全局样式（非变量），建议在main.js里引入
      },
    },
  }
  //全局样式↑=====================================================
})