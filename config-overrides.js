const { override } = require('customize-cra');

module.exports = override(
  (config) => {
    // Remove ignoreWarnings if it exists
    if (config.ignoreWarnings) {
      delete config.ignoreWarnings;
    }

    // Move any fallback configurations to resolve.alias if they exist
    if (config.resolve && config.resolve.fallback) {
      config.resolve.alias = {
        ...(config.resolve.alias || {}),
        ...config.resolve.fallback
      };
      delete config.resolve.fallback;
    }

    return config;
  }
);
