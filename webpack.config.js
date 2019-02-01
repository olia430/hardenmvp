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
    new webpack.HotModuleReplacementPlugin()
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