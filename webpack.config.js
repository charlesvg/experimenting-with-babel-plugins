const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    // output: {
    //     devtoolModuleFilenameTemplate: 'webpack://myapp/[namespace]/[resource-path]?[loaders]'
    // },
    mode: 'none',
    entry: {
        main: './src/app.ts'
    },
    module: {
        rules: [
            {
                test: /\.(ts)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        sourceMaps: true
                    }
                },

            }
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({
            sourceMap: true
        })],
    },
};