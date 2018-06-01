安装命令：
(1)npm init
(2)npm install webpack webpack-dev-server --save-dev
(3)npm i react react-dom --save



启动方式：
webpack的script下的所有命令都需要用run关键字，除了start和test可以省略run；

（1）"start": "cross-env NODE_ENV=dev webpack-dev-server --progress --colors",
webpack.config.js：是在开发环境下webpack打包采用的配置文件，npm run start
（2）"rd/s/q build && cross-env NODE_ENV=production webpack --config ./webpack.production.config.js --progress --colors"
webpack.production.config.js：是在生产环境下webpack打包采用的配置文件，run run build

命令说明：start和build中都有NODE_ENV=dev，这是在启动的时候设置一个移动参数NODE_ENV，用来区分开发环境和生产环境，
后面的一些打包配置中可以使用process.env.NODE_ENV获取值