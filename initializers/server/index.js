const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const config = require('../../webpack.config.js');

new webpackDevServer(webpack(config), {
  hot: true,
  historyApiFallback: true,
  publicPath: config.output.publicPath,
  stats: {
    colors: true
  }
}).listen(7777, 'localhost', (err) => {
  if (err)
    console.log(err);
  console.log('Listening');
});
