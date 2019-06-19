const webpack = require('webpack');
const path = require('path');
const settings = require('./src/settings');

function resolve (dir) {
    return path.join(__dirname, dir)
}

module.exports =  {

    // 服务器部署的根路径
    publicPath: process.env.NODE_ENV === 'production' ? settings.PROD_ROOT_DIR : '/',

    // 输出项目目录
    outputDir: 'dist',

    // 输出静态文件目录(相对于outputDir/)
    assetsDir: 'static',

    // 输出index.html目录(相对于outputDir/)
    indexPath: 'index.html',

    // 是否开启错误源码映射(生产环境下可准确定位报错位置行数，但会增加打包后文件大小及减慢打包速度)
    productionSourceMap: false,

    // 代理设置
    devServer: {
        port: settings.SERVER_PORT,
        open: settings.AUTO_OPEN_BROWSER,
        //proxy: settings.PROXY_SERVERS
    },

    // webpack配置
    configureWebpack: {
        name: settings.DOCUMENT_TITLE,
        resolve: {
            alias: {
                '@': resolve('src'),
                'src': resolve('src'),
                'api': resolve('src/api'),
                'assets': resolve('src/assets'),
                'components': resolve('src/components'),
                'directives': resolve('src/directives'),
                'fetch': resolve('src/fetch'),
                'filters': resolve('src/filters'),
                'layout': resolve('src/layout'),
                'mixin': resolve('src/mixin'),
                'router': resolve('src/router'),
                'store': resolve('src/store'),
                'styles': resolve('src/styles'),
                'utils': resolve('src/utils'),
                'views': resolve('src/views')
            }
        },
        plugins: [
            new webpack.ProvidePlugin({
                ls: "lockr"
            })
        ]

    },

    // webpack链路细粒度配置
    chainWebpack(config) {

        config.module
            .rule('vue')
            .use('vue-loader')
            .loader('vue-loader')
            .tap(options => {
                options.compilerOptions.preserveWhitespace = true;
                return options
            })
            .end();

        config.when(
            process.env.NODE_ENV === 'development',
            config => config.devtool('cheap-source-map')
        )

    }

};
