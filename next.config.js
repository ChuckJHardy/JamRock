const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')
const withTypescript = require('@zeit/next-typescript')
const withCSS = require('@zeit/next-css')

// fix: prevents error when .css files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.css'] = () => {}
}

module.exports = withTypescript(
  withCSS({
    webpack(config) {
      config.module.rules.push({
        test: /\.(png|svg|eot|otf|ttf|woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000,
            publicPath: './',
            outputPath: 'static/',
            name: '[name].[ext]'
          }
        }
      })

      // https://github.com/Aerolab/nextjs-pwa
      config.plugins.push(
        new SWPrecacheWebpackPlugin({
          verbose: true,
          staticFileGlobsIgnorePatterns: [/\.next\//],
          runtimeCaching: [
            {
              handler: 'networkFirst',
              urlPattern: /^https?.*/
            }
          ]
        })
      )

      return config
    }
  })
)