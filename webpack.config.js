const webpack = require('webpack');

module.exports = {
    // ...existing code...
    stats: {
        warningsFilter: [/warning/]
    },
    resolve: {
        // ...existing code...
        fallback: {
            "crypto": require.resolve("crypto-browserify"),
            "stream": require.resolve("stream-browserify"),
            "assert": require.resolve("assert/"),
            "http": require.resolve("stream-http"),
            "https": require.resolve("https-browserify"),
            "os": require.resolve("os-browserify/browser"),
            "url": require.resolve("url/")
        }
    },
    plugins: [
        // ...existing code...
        new webpack.LoaderOptionsPlugin({
            options: {
                debug: true  // or any other valid loader options
            }
        })
        // ...existing code...
    ]
};