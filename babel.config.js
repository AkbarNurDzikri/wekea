module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    env: {
      production: {
        plugins: [
          "modul-resolver",
          {
            extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
          },
          "react-native-paper/babel",
          "react-native-reanimated/plugin",
        ],
      },
    },
  };
};
