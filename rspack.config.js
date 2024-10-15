const { composePlugins, withNx, withReact } = require('@nx/rspack');

module.exports = composePlugins(withNx(), withReact(), (config) => {
  const htmlPlugin = config.plugins.find(
    (plugin) => plugin.constructor.name === 'HtmlRspackPlugin'
  );
  console.log('HtmlRspackPlugin _args: ', htmlPlugin._args);
  return config;
});
