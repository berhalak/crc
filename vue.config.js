module.exports = {
	runtimeCompiler: true,
	chainWebpack: config => {
		config.module
			.rule('vue')
			.use('vue-strict')
			.loader('vue-strict')
			.tap(_ => {
				return { auto: "views" }
			})
	},
	// keep class names doesn't work, so remove for now
	configureWebpack: {
		resolve: {
			symlinks: false,
			alias: {
				// "domain": path.resolve(__dirname, '../domain/src/index.ts')
			}
		},
		optimization: {
			minimize: false
		}
	},
	css: {
		loaderOptions: {
			sass: {
				prependData: `@import "@/style/global.scss";`
			}
		}
	}

}