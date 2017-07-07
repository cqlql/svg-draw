
let path = require('path');
const webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('stylesheets/[name].css');

// let demoName = 'draw-arc'
let demoName = 'draw-radar'

module.exports = function (env, options) {
    return {
        entry: {
            index: ['./src/demo/'+demoName+'/index.js']
        },

        output: {
            path: path.resolve(__dirname, 'dist'), // string
            filename: 'demo/'+demoName+'/[name].js',
        },
        plugins: [
            extractCSS,

            new HtmlWebpackPlugin({
                filename: 'demo/'+demoName+'/index.html',
                template: './src/demo/'+demoName+'/index.html',
                chunks: ['index'],
                minify:{
                    removeComments: true,
                    collapseWhitespace: true,
                    removeAttributeQuotes: true,
                    minifyCSS: true
                    // more options:
                    // https://github.com/kangax/html-minifier#options-quick-reference
                }
            })

        ],

        module: {
            //加载器配置
            rules: [
                {
                    test: /\.js$/,
                    // exclude: /node_modules/,
                    loader: 'babel-loader',
                    include: [path.join(__dirname, 'src')]
                },
                {
                    test: /\.(css|pcss)$/,
                    // use: ['style-loader',
                    //     'css-loader',
                    //     'postcss-loader'],
                    use: extractCSS.extract(['css-loader','postcss-loader']),
                },
                {
                    test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                    loader: 'url-loader',
                    query: {
                        limit: 100,//单位 字节，1千字节(kb)=1024字节(b)
                        publicPath:'../',
                        name: 'imgs/[name].[hash:7].[ext]'
                    }
                },
                {
                    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                    loader: 'url-loader',
                    query: {
                        limit: 100,
                        publicPath:'../',
                        name: 'fonts/[name].[hash:7].[ext]'
                    }
                }
            ]
        },
        // 分解
        resolve: {

            // 寻找模块的目录
            modules: [
                'node_modules',
                'E:/_work/Dropbox/github',

                // cqlql.github.io 项目
                'E:/_work/Dropbox/github/modules/base-libs/css',
                'E:/_work/Dropbox/github/modules/base-libs/js',
                'E:/_work/Dropbox/github/modules/base-libs/js/dom',

            ],

            extensions: ['.js'],
        }
    }
};
