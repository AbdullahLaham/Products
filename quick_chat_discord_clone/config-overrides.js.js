const { override, addBabelPlugin } = require('customize-cra');

module.exports = override(
  addBabelPlugin([
    'module-resolver',
    {
      alias: {
        '@': './src',  // '@' will point to the 'src' directory
      },
    },
  ])
);