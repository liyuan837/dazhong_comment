var path = require('path')
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

//add 引入项目配置文件，为了读取其中的dependencies依赖
var pkg = require('./package.json')

module.exports = {
  entry: {
    //  将index的逻辑单独打成一个app.js文件
    app: path.resolve(__dirname, 'app/index.jsx'),
    // 将 第三方依赖 单独打包成一个vendor.js文件
      vendor:Object.keys(pkg.dependencies)
    // vendor: [
    //   'react',
    //   'react-dom',
    //   'react-redux',
    //   'react-router',
    //   'redux',
    //   'es6-promise',
    //   'whatwg-fetch',
    //   'immutable'
    // ]
  },
  output: {
    //生产环境：发布到
    path: __dirname + "/build",
    filename: "/js/[name].[chunkhash:8].js"
    // publicPath: '/'
  },

  resolve:{
      extensions:['', '.js','.jsx'],
      alias: {
          //这样，@ 就表示在项目根目录中的src这一层路径
          '@':path.join(__dirname,'./app')
      }
  },

  module: {
    loaders: [
        { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel' },
        { test: /\.less$/, exclude: /node_modules/, loader: ExtractTextPlugin.extract('style', 'css!postcss!less') },
        { test: /\.css$/, exclude: /node_modules/, loader: ExtractTextPlugin.extract('style', 'css!postcss') },
        { test:/\.(png|gif|jpg|jpeg|bmp)$/i, loader:'url-loader?limit=5000&name=img/[name].[chunkhash:8].[ext]' },
        { test:/\.(png|woff|woff2|svg|ttf|eot)($|\?)/i, loader:'url-loader?limit=5000&name=fonts/[name].[chunkhash:8].[ext]'}
    ]
  },
  postcss: [
    require('autoprefixer')
  ],

  plugins: [
    // webpack 内置的 banner-plugin：这样生成的打包文件中或出现这样的注释头
    new webpack.BannerPlugin("Copyright by liyuan837@github.com."),

    // html 模板插件
    new HtmlWebpackPlugin({
        template: __dirname + '/app/index.tmpl.html'
    }),

    // 定义为生产环境，编译 React 时压缩到最小，前端识别到process.env.NODE_ENV为生产环境时
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    }),

    // 为组件分配ID，通过这个插件webpack可以分析和优先考虑使用最多的模块，并为它们分配最小的ID
    new webpack.optimize.OccurenceOrderPlugin(),
    
    new webpack.optimize.UglifyJsPlugin({
        compress: {
          //去掉所有警告信息
          //supresses warnings, usually from module minification
          warnings: false
        }
    }),
    
    // 分离CSS和JS文件
    new ExtractTextPlugin('/css/[name].[chunkhash:8].css'),
    
    // 提供公共代码
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: '/js/[name].[chunkhash:8].js'
    }),

    // 可在业务 js 代码中使用 __DEV__ 判断是否是dev模式（dev模式下可以提示错误、测试报告等, production模式不提示）
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
    })
  ]
}