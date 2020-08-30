const secure = false
const target = "http://vue-test.test"

module.exports = {
    devServer: {
        https: secure,
        disableHostCheck: !secure,

        proxy: {
            '^/app': {
                target: target,
                changeOrigin: true,
                secure: 'secure',
                ws: true
            },
        }
    },

    // output built static files to Laravel's public dir.
    // note the "build" script in package.json needs to be modified as well.
    outputDir: '../public/',

    publicPath: '/',

    // modify the location of the generated HTML file.
    indexPath: process.env.NODE_ENV === 'production'
        ? '../resources/views/app.blade.php'
        : 'index.html',
}
