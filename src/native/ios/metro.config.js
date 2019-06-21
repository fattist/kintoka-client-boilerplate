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
      "@assets": path.resolve(__dirname, "../../assets"),
      "@babel/runtime": path.resolve(__dirname, "./node_modules/@babel/runtime"),
      "@components": path.resolve(__dirname, "./components"),
      "@features": path.resolve(__dirname, "./features"),
      "@navigators": path.resolve(__dirname, "./navigators"),
      "@reducers": path.resolve(__dirname, "../../reducers"),
      "@sagas": path.resolve(__dirname, "../../sagas"),
      "@selectors": path.resolve(__dirname, "../../selectors"),
      "@shared": path.resolve(__dirname, "./shared"),
      "@store": path.resolve(__dirname, "../../store"),
      "@views": path.resolve(__dirname, "./views"),
      "react": path.resolve(__dirname, "./node_modules/react"),
      "redux": path.resolve(__dirname, "./node_modules/redux"),
      "react-redux": path.resolve(__dirname, "./node_modules/react-redux"),
      "redux-saga": path.resolve(__dirname, "./node_modules/redux-saga")
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
    path.resolve(__dirname, "../../assets"),
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
    path.resolve(__dirname, "./shared"),
    path.resolve(__dirname, "../../store"),
    path.resolve(__dirname, "./views"),
  ]
};