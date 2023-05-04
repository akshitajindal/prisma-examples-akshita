// const BundleAnalyzerPlugin =
//   require("webpack-bundle-analyzer").BundleAnalyzerPlugin
// const withPlugins = require("next-compose-plugins")

// const nextConfig = {
//   reactStrictMode: true,
// }

// const plugins = [
//   new BundleAnalyzerPlugin({
//     generateStatsFile: true,
//   }),
// ]

// module.exports = withPlugins(plugins, nextConfig)

// const withBundleStats = require("next-plugin-bundle-stats")

// module.exports = withBundleStats()

// const withBundleAnalyzer = require("@next/bundle-analyzer")({
//   enabled: process.env.ANALYZE === "true",
// })
// const plugins = [withBundleAnalyzer({})]

// module.exports = withPlugins(plugins, nextConfig)

// module.exports = (nextConfig = {}) =>
//   Object.assign({}, nextConfig, {
//     webpack(config, options) {
//       const MyFirstWebpackPlugin = require("./my-first-webpack-plugin")
//       config.plugins.push(new MyFirstWebpackPlugin({}))

//       return config
//     },
//   })

// module.exports = nextConfig

// const withPlugins = require("next-compose-plugins")
const MyCustomPlugin = require("./my-first-webpack-plugin")

const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.plugins.push(new MyCustomPlugin({}))
    }

    return config
  },
}

module.exports = nextConfig

// const MyFirstWebpackPlugin = require("./my-first-webpack-plugin")
// const plugins = [new MyFirstWebpackPlugin({})]

// module.exports = withPlugins(plugins, nextConfig)
