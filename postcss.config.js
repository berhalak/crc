const path = require('path');

const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
	plugins: [
		postcssPresetEnv({ stage: 0 }),
		require('tailwindcss'),
		require('autoprefixer'),
		require('postcss-animation'),
		require('postcss-mixins')({
			mixinsFiles: path.join(__dirname, 'src/style/mixins.css')
		})
	]
}
