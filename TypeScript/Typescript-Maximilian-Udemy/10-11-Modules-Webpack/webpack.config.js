const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/app.ts',
    output: {
        // Read more about it in webpack documentation "unique hash for every version"
        // filename: 'bundle.[contenthash].js'
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/'
    },
    devServer: {
        static: {
            directory: path.join(__dirname, '/'),
        }
    },
    devtool: 'inline-source-map',
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
    }
};