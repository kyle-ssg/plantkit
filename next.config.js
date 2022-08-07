const path = require('path')
const uniq = require('lodash').uniq
const withPreact = require('next-plugin-preact')

const withTM = require('next-transpile-modules')([
    // 'react-native-safe-area-context', REACT_NATIVE_WEB
    // 'react-native-svg',
    // 'react-native-reanimated',
])

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.BUNDLE_ANALYZE === 'true',
})

const nextConfig = async (phase, { defaultConfig }) => {
    const localesStart = ['en-gb']
    const locales = uniq(
        localesStart
            .concat(
                localesStart.map((v) => {
                    // ensure a base language is set, e.g. en for en-gb
                    return v.split('-')[0]
                }),
            )
            .filter((v) => !!v),
    )
    const nextConfig = {
        i18n: {
            // These are all the locales you want to support in
            // your application
            locales,
            // This is the default locale you want to be used when visiting
            // a non-locale prefixed path e.g. `/hello`
            defaultLocale: locales[0],
        },
        eslint: {
            // Warning: Dangerously allow production builds to successfully complete even if
            // your project has ESLint errors.
            ignoreDuringBuilds: true,
        },
        swcMinify: true,
        trailingSlash: true,
        productionBrowserSourceMaps: true,
        typescript: {
            ignoreBuildErrors: true,
        },
        webpack: (config, { dev }) => {
            const base = dev
                ? require('./.bin/.webpack/webpack.config.dev')
                : require('./.bin/.webpack/webpack.config.prod')
            if (base.plugins) {
                config.plugins = config.plugins.concat(base.plugins)
            }

            config.resolve.modules = [path.resolve(__dirname), 'node_modules']

            config.resolve.alias = {
                ...(config.resolve.alias || {}),
                // REACT_NATIVE_WEB
                // 'lottie-react-native': 'react-native-web-lottie',
                // Transform all direct `react-native` imports to `react-native-web`
                // 'react-native$': 'react-native-web',
                // 'react$': path.resolve(path.resolve(__dirname), 'node_modules/react'),
            }

            config.resolve.extensions = [
                // '.web.js', REACT_NATIVE_WEB
                // '.web.ts',
                // '.web.tsx',
                ...config.resolve.extensions,
            ]

            return config
        },
    }
    return withBundleAnalyzer(withPreact(withTM(nextConfig)))
}

module.exports = nextConfig
