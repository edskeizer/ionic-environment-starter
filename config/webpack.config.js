/*
 * The webpack config exports an object that has a valid webpack configuration
 * For each environment name. By default, there are two Ionic environments:
 * "dev" and "prod". As such, the webpack.config.js exports a dictionary object
 * with "keys" for "dev" and "prod", where the value is a valid webpack configuration
 * For details on configuring webpack, see their documentation here
 * https://webpack.js.org/configuration/
 */
const path = require('path');

const webpackConfig = require('../node_modules/@ionic/app-scripts/config/webpack.config');

webpackConfig['dev'].resolve.alias = {
  "@env": path.resolve(`./src/env/env.ts`)
}
webpackConfig['prod'].resolve.alias = {
  "@env": path.resolve(`./src/env/env.prod.ts`)
}
