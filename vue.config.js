module.exports = {
    configureWebpack: {
        performance: {
            maxEntrypointSize: 1000000,
            maxAssetSize: 200000,
            assetFilter: function (assetFilename) {
                return assetFilename.endsWith('.js');
            }
        }
    },
    publicPath:"./"
}