const { defineConfig } = require("@vue/cli-service")
const target = process.env.VUE_APP_MOCK_ENABLE === "true" ? "http://localhost:8090" : process.env.VUE_APP_CONSOLE_URL
console.log(process.env);
module.exports = defineConfig({
	transpileDependencies: true,
	lintOnSave: false,
	productionSourceMap: false,//生产环境的构造
	publicPath: './',//根目录
	outputDir: "dist",//打包输出文件地址
	assetsDir: 'assets',//放置生成的静态资源(js、img、css、fonts)的(相对于 outputDir 的)目录
	devServer: {
		// dev环境下,webpack-dev-server 相关配置
		port: 8090,
		host: '0.0.0.0',
		https: false,
		open: true,
		proxy: {
			[process.env.VUE_APP_BASE_API]: {
				changeOrigin: true,
				secure: false,
				target,
				pathRewrite: {
					["^" + process.env.VUE_APP_BASE_API]: ''
				}
			}
		}
	}
})
