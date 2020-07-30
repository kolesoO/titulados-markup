const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const dir = 'new';
module.exports = {
  entry: {
    app: './' + dir + '/js/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './new/dist'),
    publicPath: '/' + dir + '/dist'
  },
  devServer: {
    overlay: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/'
      },
      // {
      //   test: /\.json$/,
      //   loader: 'json-loader'
      // },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js' // 'vue/dist/vue.common.js' for webpack 1
    }
  },
  node: {
     fs: "empty"
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}
