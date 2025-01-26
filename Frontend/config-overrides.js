const webpack = require('webpack');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');

module.exports = function override(config, env) {
    // Remove module scope plugin to allow importing outside of src/
    config.resolve.plugins = config.resolve.plugins.filter(plugin => !(plugin instanceof ModuleScopePlugin));

    config.resolve = {
        ...config.resolve,
        extensions: [...(config.resolve.extensions || []), '.ts', '.tsx'],
        fallback: {
            ...config.resolve.fallback,
            "crypto": require.resolve("crypto-browserify"),
            "stream": require.resolve("stream-browserify"),
            "assert": require.resolve("assert"),
            "http": require.resolve("stream-http"),
            "https": require.resolve("https-browserify"),
            "os": require.resolve("os-browserify"),
            "url": require.resolve("url"),
            "buffer": require.resolve("buffer"),
            "process": require.resolve("process/browser")
        }
    };

    config.plugins = [
        ...(config.plugins || []),
        new webpack.ProvidePlugin({
            process: 'process/browser',
            Buffer: ['buffer', 'Buffer']
        }),
        new webpack.DefinePlugin({
            'process.env': JSON.stringify(process.env)
        })
    ];

    config.module.rules.push({
        test: /\.m?js/,
        resolve: {
            fullySpecified: false
        }
    });

    return config;
}
