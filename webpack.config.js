  
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    entry: {
      'product_detail': __dirname+'/src/Product_detail.js',
      'cart_list': __dirname+'/src/Cart_list.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'assets/bundles')
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          },
          {
            test: /\.vue$/,
            loader: "vue-loader"
          }
        ]
     },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
          },
        extensions: ['*', '.js', '.vue', '.json']
    },
    mode: 'development',
    plugins: [
        new VueLoaderPlugin()
    ]
}