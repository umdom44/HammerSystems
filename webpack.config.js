module.exports = {
    // другие настройки...
    module: {
        rules: [
            {
                test: /\.js$/,
                enforce: 'pre',
                use: ['source-map-loader'],
                exclude: [
                    /node_modules\/@firebase\/auth/
                ]
            }
        ]
    }
};