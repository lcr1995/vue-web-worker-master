const path = require ('path');
function resolve (resolvePath) {
  return path.join (__dirname, resolvePath);
}
module.exports = {
  lintOnSave: false,
  chainWebpack: (config) => {
    config.module
      .rule("worker")
      .test(/\.worker\.js$/)
      .use("worker-loader")
      .loader("worker-loader")
      .options({
        worker:{
          type: "Worker", // Worker(default) SharedWorker
          options: {
            // type: "classic", // 用以指定 worker 类型。该值可以是 classic 或 module. 默认 classic.
            // credentials: "omit", // *omit*, same-origin，或 include
            name: "myWorker",
          }
        },
        filename: "js/[name].[contenthash:8].js",
        // chunkFilename: "js/[id].[contenthash:4].worker.js",
        // inline: "fallback", // Type: 'fallback' | 'no-fallback' Default: undefined
      })
      .end();
    // config.module.rule("js").exclude.add(/\.worker\.js$/);
    config.module.rule("js").exclude.add(resolve ('./src/worker'))
  }
};
