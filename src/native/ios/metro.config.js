/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const path = require('path');

module.exports = {
  projectRoot: path.resolve(__dirname),
  resetCache: true,
  resolver: {
    extraNodeModules: {
      "@babel/runtime": path.resolve(__dirname, "./node_modules/@babel/runtime"),
      "@reducers": path.resolve(__dirname, "../../reducers"),
      "@sagas": path.resolve(__dirname, "../../sagas"),
      "@selectors": path.resolve(__dirname, "../../selectors"),
      "@store": path.resolve(__dirname, "../../store"),
      "@components": path.resolve(__dirname, "./components"),
      "@features": path.resolve(__dirname, "./features"),
      "@navigators": path.resolve(__dirname, "./navigators"),
      "react": path.resolve(__dirname, "./node_modules/react"),
      "redux": path.resolve(__dirname, "./node_modules/redux"),
      "react-redux": path.resolve(__dirname, "./node_modules/react-redux"),
      "redux-saga": path.resolve(__dirname, "./node_modules/redux-saga"),
      "@views": path.resolve(__dirname, "./views")
    }
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
  watchFolders: [
    path.resolve(__dirname, "./components"),
    path.resolve(__dirname, "./features"),
    path.resolve(__dirname, "./navigators"),
    path.resolve(__dirname, "./node_modules/@babel/runtime"),
    path.resolve(__dirname, "./node_modules/react"),
    path.resolve(__dirname, "./node_modules/redux"),
    path.resolve(__dirname, "./node_modules/react-redux"),
    path.resolve(__dirname, "./node_modules/redux-saga"),
    path.resolve(__dirname, "../../reducers"),
    path.resolve(__dirname, "../../sagas"),
    path.resolve(__dirname, "../../selectors"),
    path.resolve(__dirname, "../../store"),
    path.resolve(__dirname, "./views"),
  ]
};