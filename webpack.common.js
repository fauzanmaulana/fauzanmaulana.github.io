const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const ServiceWorkerWepbackPlugin = require('serviceworker-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const WebpackPwaManifest = require('webpack-pwa-manifest')

module.exports = {
    entry : {
        app : "./src/app.js"
    },
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "bundle.js"
    },
    module : {
        rules : [
            {
                test : /\.css$/,
                use : [
                    { loader : "style-loader" },
                    { loader : "css-loader" }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html",
            filename: "index.html"
        }),

        new HtmlWebpackPlugin({
            template: "./src/pages/home.html",
            filename: "home.html"
        }),
        
        new HtmlWebpackPlugin({
            template: "./src/pages/matches.html",
            filename: "matches.html"
        }),

        new HtmlWebpackPlugin({
            template: "./src/pages/standings.html",
            filename: "standings.html"
        }),

        new HtmlWebpackPlugin({
            template: "./src/pages/liked.html",
            filename: "liked.html"
        }),

        new HtmlWebpackPlugin({
            template: "./src/pages/likedDetail.html",
            filename: "likedDetail.html"
        }),

        new ServiceWorkerWepbackPlugin({
            entry: path.join(__dirname, 'src/sw.js'),
        }),

        new CopyPlugin({
            patterns: [
              { from: 'src/assets', to: 'assets' },
            ],
        }),

        new WebpackPwaManifest({
            "name": "Soccers Info App",
            "short_name": "Soccers App",
            "description": "app for soccers information",
            "start_url": "./index.html",
            "display": "standalone",
            "background_color": "#4051C5",
            "theme_color": "#4051C5",
            "gcm_sender_id": "605055428101",
            "icons": [
                {
                    "src": "src/assets/icon-192.png",
                    "sizes": "192x192",
                    "type": "image/png"
                },
                {
                    "src": "src/assets/icon-384.png",
                    "sizes": "384x384",
                    "type": "image/png"
                },
                {
                    "src": "src/assets/icon-512.png",
                    "sizes": "512x512",
                    "type": "image/png"
                }
            ]
        })
    ]
}