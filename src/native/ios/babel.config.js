const cwd = process.cwd();

module.exports = {
  plugins: [
    ['babel-plugin-module-resolver', {
      root: [cwd],
      alias: {
        "@components": `./components`,
        "@features": `./features`,
        "@navigators": `./navigators`,
        "@reducers": `../../reducers/`,
        "@sagas": `../../sagas/`,
        "@selectors": `../../selectors/`,
        "@store": `../../store/`,
        "@views": `./views`
      }
    }]
  ],
  presets: ['module:metro-react-native-babel-preset'],
};
