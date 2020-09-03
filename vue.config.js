const path = require('path');

function resolve(dir) {
    return path.resolve(__dirname, dir);
}

module.exports = {
  
    devServer: {
    },
    chainWebpack: config => {
        if (process.env.NODE_ENV === 'development') {
            // 为开发环境修改配置...
            console.log('development');
        }
        if (process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置...
            console.log('production');
        }
        if (process.env.NODE_ENV === 'test') {
            // 为测试环境修改配置...
            console.log('test');
        }
        const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
        types.forEach(type => {
            config.module
            .rule('less')
            .oneOf(type)
            .use('less-loader')
            .tap(options => Object.assign({}, options));
        })
        config.resolve.alias
            .set('@', resolve('src'))
            .set('api', resolve('src/api'))
            .set('assets', resolve('src/assets'))
            .set('css', resolve('src/assets/styles'))
            .set('svgs', resolve('src/assets/svgs'))
            .set('components', resolve('src/components'))
            .set('store', resolve('src/store'))
            .set('router', resolve('src/router'))
            .set('pages', resolve('src/pages'))
            .set('views', resolve('src/views'))
            .set('utils', resolve('src/utils'));
    },
       
    // css打包配置
    css: {
        extract: process.env.NODE_ENV !== 'development' ? true : false, // 是否使用css分离插件 ExtractTextPlugin
        requireModuleExtension: true // 启用 CSS modules for all css / pre-processor files.
    },
    // 打包配置
    publicPath: process.env.NODE_ENV !== 'development' ? '/test/' : '',
    // 放置打包后生成的静态资源（js、css、img、fonts）的目录，该目录相对于outputDir
    assetsDir: 'static',
    // 指定生成的index.html的输出路径，相对于outputDir。也可以是一个绝对路径。
    indexPath: 'index.html'
};
