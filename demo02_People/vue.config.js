const { defineConfig } = require("@vue/cli-service")
const target = process.env.VUE_APP_MOCK_ENABLE === "true" ? "http://localhost:8090" : process.env.VUE_APP_CONSOLE_URL
module.exports = defineConfig({
  transpileDependencies: true,
	lintOnSave:false,
	// 根目录
	publicPath:'./',
	// 打包输出的文件
	outputDir:'dist',
	// 放置生成的静态资源的目录
	assetsDir:'assets',
	// dev环境下，wabpack-dev-server相关配置
	devServer:{
		//开发允许时的端口
		port:9999,
		//开发运行是域名
		host:'0.0.0.0',
		//是否启用https
		https:false,
		//npm run serve时是否启动浏览器
		open:false,
		// 跨域代理的配置proxy
		proxy:{
			[process.env.VUE_APP_BASE_API]:{
				changeOrigin:true,
				target,
				pathRewrite:{
					["^" + process.env.VUE_APP_BASE_API]: ""
				}
			}
		}
	}
})
