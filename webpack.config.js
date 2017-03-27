var path = require('path')
var webpack = require('webpack')
var projectRoot = path.resolve(__dirname, '/')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
            postcss: [
                require('postcss-import')({ addDependencyTo: webpack }),
                require('precss'),
                require('postcss-responsive-type'),
                require('postcss-assets')({
                    loadPaths: [
                        projectRoot + '/assets/img',
                        projectRoot + '/assets/svg'
                    ]
                }),
                require('autoprefixer')({
                    browsers: ['last 2 versions', '> 5% in GB']
                }),
                require('cssnano')({
                    discardComments: {
                        removeAll: true
                    },
                    discardEmpty: true,
                    calc: {
                        precision: 3
                    }
                })
            ]
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
