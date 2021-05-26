const BrotliPlugin = require('brotli-webpack-plugin')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const prod = process.env.NODE_ENV === "production"

module.exports = {
  webpack: (config, options) => {
    if(prod) {
      config.plugins.push(
        new BrotliPlugin({
          filename: "[path].br[qurey]",
          test: /\.js$|\.css$|\.html$/,
          threshold: 10240,
          minRatio: 0.8
        })
      )
    }
    config.devServer = {
      historyApiFallback: true
    }
    return config
  },
  withBundleAnalyzer: withBundleAnalyzer(),
  async rewrites() {
    return [
      {
        source: '/app/:any*',
        destination: '/app',
      },
    ];
  },
}
