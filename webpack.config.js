var webpack = require('webpack');
module.exports = {
    entry : './src/index.js',

    output: {
        path: __dirname + '/public/',
        filename : 'bundle.js'
    },

    devServer: {
        hot:true, // 특정부분 수정시 새로고침 없이 화면 수정
        inline:true,
        host:'0.0.0.0',
        port: 7777,
        contentBase: __dirname + '/public/',
    },

    module : {
        loaders:[
            {
                test: /\.js$/,
                loader : 'babel-loader',
                exclude: /node_modules/,
                query:{
                    cacheDirectory:true,
                    presets:['es2015','react']
                }
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};