var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './index.js',
    output: { path: __dirname, filename: 'bundle.js' },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel",
                query: {
                    presets: [
                        'es2015',
                        "react",
                        "stage-3",
                    ],
                },
            }
        ]
    },
};