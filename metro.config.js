const defaultSourceExts = require('metro-config/src/defaults/defaults').sourceExts
const sourceExts = [ 'jsx', 'js', 'ts', 'tsx', 'json', 'svg', 'd.ts', 'mjs', 'native' ].concat(defaultSourceExts)

module.exports = {
  resolver: {
    sourceExts
  },
}

// const { getDefaultConfig } = require('expo/metro-config');

// const config = getDefaultConfig(__dirname);

// config.resolver.assetExts.push(
//   'ttf',
//   'db'
// );

// config.resolver.sourceExts.push(
//   'jsx', 'js', 'ts', 'tsx', 'json', 'svg', 'd.ts', 'mjs', 'native'
// )

// module.exports = config;