const { defineConfig } = require("@vue/cli-service");
const path = require("path");
module.exports = defineConfig({
  transpileDependencies: true,
  // 配置别名
  configureWebpack: {
    resolve: {
      alias: {
        src: "@/src",
        components: "@/components",
        views: "@/views",
      },
    },
  },
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [
        // 注意路径，不能使用配置中的别名路径（例如：alias 配置下的路径别名）
        path.resolve(__dirname, "./src/assets/style/variable.less"),
      ],
    },
  },
});
