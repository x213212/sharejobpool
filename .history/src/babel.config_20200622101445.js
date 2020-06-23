

module.exports = function (api) {
  api.cache(true);

  const presets = [    "@babel/preset-env",
  "@babel/preset-react"  ];// 类似.babelrc.js中的presets
  const plugins = [    "@babel/plugin-proposal-class-properties"];// 类似.babelrc.js中的plugins

  return {
    presets,
    plugins
  };
}