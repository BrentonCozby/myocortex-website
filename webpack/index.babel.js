import { resolve } from 'path'
import { DefinePlugin, NoEmitOnErrorsPlugin, ProvidePlugin } from 'webpack'
import merge from 'webpack-merge'
import HtmlPlugin from 'html-webpack-plugin'
import CopyPlugin from 'copy-webpack-plugin'

import { Dir, rootUrl, title, description, site_url } from '../config.js'
import devConfig from './dev.js'
import prodConfig from './prod.js'

const TARGET = process.env.npm_lifecycle_event
const env = (TARGET === 'dev') ? 'dev' : 'prod'

let common = {
    output: {
        path: Dir.dist,
        publicPath: rootUrl
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['env', {modules: false}],
                            'stage-0'
                        ]
                    }
                }]
            }, {
                test: /\.(woff|woff2|eot|ttf)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 100000,
                        name: '[path][name].[ext]'
                    }
                }
            }, {
                test: /\.(pug)$/,
                use: ['pug-loader']
            }
        ]
    },
    plugins: [
        new HtmlPlugin({
            filename: 'index.html',
            template: resolve(Dir.pages, 'homepage.pug'),
            title, description, site_url, rootUrl
        }),
        new HtmlPlugin({
            filename: '404.html',
            template: resolve(Dir.pages, '404.pug'),
            title, description, site_url, rootUrl
        }),
        new HtmlPlugin({
            filename: 'private-training/index.html',
            template: resolve(Dir.pages, 'private-training.pug'),
            title, description, site_url, rootUrl
        }),
        new HtmlPlugin({
            filename: 'group-training/index.html',
            template: resolve(Dir.pages, 'group-training.pug'),
            title, description, site_url, rootUrl
        }),
        new HtmlPlugin({
            filename: 'analysis/index.html',
            template: resolve(Dir.pages, 'analysis.pug'),
            title, description, site_url, rootUrl
        }),
        new HtmlPlugin({
            filename: 'systems/index.html',
            template: resolve(Dir.pages, 'systems.pug'),
            title, description, site_url, rootUrl
        }),
        new HtmlPlugin({
            filename: 'tools/index.html',
            template: resolve(Dir.pages, 'tools.pug'),
            title, description, site_url, rootUrl
        }),
        new HtmlPlugin({
            filename: 'sign-up/index.html',
            template: resolve(Dir.pages, 'sign-up.pug'),
            title, description, site_url, rootUrl
        }),
        new DefinePlugin({
            'process.env': {
               'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new CopyPlugin([
            {from: resolve(Dir.src, 'crossdomain.xml')},
            {from: resolve(Dir.src, '.htaccess')},
            {from: resolve(Dir.src, 'humans.txt')},
            {from: resolve(Dir.src, 'robots.txt')},
            {
                from: resolve(Dir.src, 'vendor'),
                to: resolve(Dir.dist, 'vendor')
            },
            {
                from: resolve(Dir.src, 'mail'),
                to: resolve(Dir.dist, 'mail')
            },
            {
                from: Dir.assets,
                to: resolve(Dir.dist, 'assets')
            }
        ])
    ],
    resolve: {
        modules: [
            Dir.src,
            'node_modules'
        ]
    }
}

let config;

if(env === 'dev') {
    config = merge(common, devConfig)
}

if(env === 'prod') {
    config = merge(common, prodConfig)
}

export default config
