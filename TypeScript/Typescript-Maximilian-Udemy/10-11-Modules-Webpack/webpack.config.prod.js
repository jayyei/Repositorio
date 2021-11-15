const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/app.ts',
    output: {
        // Read more about it in webpack documentation "unique hash for every version"
        // filename: 'bundle.[contenthash].js'
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        static: {
            directory: path.join(__dirname, '/')
        }
    },
    // so to tell webpack what to do with typescript files, we need to add a new entry to the configuration it is called module
    // a module in the end it is just a file, it indicates how to deal with these files
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },

    //modules are applied to every file, but plugins are applied to a certain workflow
    plugins: [
        new CleanPlugin.CleanWebpackPlugin()
    ]
};