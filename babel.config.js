/**
 * Il plugin dei worklets deve restare l'ultimo della lista: riscrive le
 * funzioni che girano sul thread dell'interfaccia, e se un'altra
 * trasformazione le tocca dopo di lui il codice generato non è più
 * riconoscibile come worklet. Reanimated 4 lo pretende esplicitamente.
 */
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['react-native-worklets/plugin'],
  };
};
