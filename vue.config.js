const path = require('path');

const vueSrc = './src';

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, vueSrc),
      },
      extensions: ['.js', '.vue', '.json'],
    },
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/styles/app.scss";
        `,
      },
    },
  },
  transpileDependencies: [
    'vue-meta',
  ],

};
