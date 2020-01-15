const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装

module.exports = {
    mode: "development",
    entry: "./src/script/main.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "script/bundle.js"
    },
    module: {
        rules: [{
            test: require.resolve('jquery'),
            use: [{
                    loader: 'expose-loader',
                    options: '$'
                },
                {
                    loader: 'expose-loader',
                    options: 'jQuery'
                }
            ]
        },
        { //加载css
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        },
        { //配置图片文件的包
            test: /\.(png|jpg|gif|svg)$/,
            loader: 'file-loader',
            options: {
                name: 'images/[name].[ext]'//images/[name].[ext]
            }
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '淘宝购物车',
            filename: "index.html",
            template: "./src/index2.html",
            chunks: ["index", "vendor"],
            minify: { //压缩html
                removeComment: true, //去掉注释
                collapseWhitespace: true //去掉空格。
            }
        }),
        new HtmlWebpackPlugin({
            title: '淘宝购物车详情页',
            filename: "details.html",
            template: "./src/details.html",
            chunks: ["details", "vendor"],
            minify: { //压缩html
                removeComment: true, //去掉注释
                collapseWhitespace: true //去掉空格。
            }
        }),
        new HtmlWebpackPlugin({
            title: '淘宝购物车展示列表',
            filename: "cartlist.html",
            template: "./src/cartlist.html",
            chunks: ["cartlist", "vendor"],
            minify: { //压缩html
                removeComment: true, //去掉注释
                collapseWhitespace: true //去掉空格。
            }
        })
    ]
}