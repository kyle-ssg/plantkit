const path = require("path");
module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["."],
        extensions: [
          ".ios.ts",
          ".android.ts",
          ".ts",
          ".ios.tsx",
          ".android.tsx",
          ".tsx",
          ".jsx",
          ".js",
          ".json",
        ],
        alias: {
          common: '../common',
          app: './app',
          components: './app/components',
          images: './app/images',
          project: './app/project',
          screens: './app/screens',
          assets: './app/assets',
          navigation: './app/navigation',
          "lodash": "./node_modules/lodash-es"
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
  env: {
    production: {
      plugins: ["transform-remove-console"],
    },
  },
};
