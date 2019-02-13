ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
path=require('path')
webpack=require('webpack')
pathOutput=path.join(__dirname, 'dist')
isProduction=process.env.NODE_ENV === 'production'
entry=[
    './src/index'
]
output={
    path: pathOutput,
    publicPath: '/dist/',
    filename: 'bundle'+(isProduction?'.[hash]':'')+'.js'
}
plugins=[
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextWebpackPlugin({ 
        filename: 'bundle'+(isProduction?'.[hash]':'')+'.css',
        disable: false, 
        allChunks: true 
    }) //提取出来的样式放在bundle.css文件中
]
if(isProduction){
    plugins=plugins.concat([ // 补充生产环境要使用的插件
        new webpack.optimize.UglifyJsPlugin({ // 丑化js
            mangle: true,
            compress: {
                warnings: false // Suppress uglification warnings 阻止难看的警告
            },
            output: {
                comments: false
            }
        })
        ,new webpack.LoaderOptionsPlugin({ // css怎么进行压缩呢？就用插件cssnano加这个配置
            minimize: true
        })
    ])
}
rules=[
    {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
        include: __dirname
    },
    { 
        test: /\.(png|gif|jpe?g|eot|ttf|woff|woff2|svg)$/i, //解析图片
        use: 'url-loader?limit='+(8*1024)+'&name=./images/[name].[hash].[ext]' //这样在小于8K的图片将直接以base64的形式内联在代码中，可以减少一次http请求。
    },
    {
        test: /\.css$/, 
        use: ExtractTextWebpackPlugin.extract({ fallback: 'style-loader', use: 'css-loader!postcss-loader' })
    },
    {
        test: /\.scss/,
        use: ExtractTextWebpackPlugin.extract({ fallback: 'style-loader', use: 'css-loader!sass-loader!postcss-loader' }) //必须css、sass loader都有，缺一不可，缺sass没法处理sass语法，缺sass没办法转成css

    }
]
module.exports={
    devtool: 'eval',
    module:{
        rules
    },
    entry,
    output,
    plugins,
    mode: 'development'
}
