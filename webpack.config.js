const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = (env, argv) => {
  const isProd = argv.mode === 'production'

  return {
    mode: isProd ? 'production' : 'development',
    entry: path.resolve(__dirname, 'src/js/main.js'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'main.js',
      publicPath: isProd ? '/sport-training-vue-full/' : '/'
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          use: ['vue-loader']
        },
        {
          test: /\.scss$/,
          use: ['vue-style-loader', 'css-loader', 'sass-loader']
        },
        {
          test: /\.(png|jpg|gif|svg)$/,
          type: 'asset/resource'
        }
      ]
    },
    devServer: {
      port: 9000,
      compress: true,
      hot: true,
      historyApiFallback: true,
      static: {
        directory: path.join(__dirname, 'dist')
      }
    },
    plugins: [
      new VueLoaderPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src/index.html')
      }),
      new CopyWebpackPlugin({
        patterns: [
          { from: 'src/img', to: 'img' }
        ]
      })
    ]
  }
}