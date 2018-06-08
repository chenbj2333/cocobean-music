module.exports = {
  // 配置 webpack-dev-server 行为。
  devServer: {
    open: process.platform === "darwin",
    host: "0.0.0.0",
    port: 9090,
    https: false,
    hotOnly: false,
    // 查阅 https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli/cli-service.md#配置代理
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        pathRewrite: { "^/api": "/pep" }
      }
    }
  }
};
