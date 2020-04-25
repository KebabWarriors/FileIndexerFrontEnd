const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const mode = process.env.NODE_ENV || 'development';
const prod = mode === 'production';

module.exports = {
  devServer: {
    historyApiFallback: true,
  },
	entry: {
		bundle: ['./src/main.js']
	},
	resolve: {
		alias: {
			svelte: path.resolve('node_modules', 'svelte')
		},
		extensions: ['.mjs', '.js', '.svelte'],
		mainFields: ['svelte', 'browser', 'module', 'main']
	},
	output: {
		path: __dirname + '/public',
		filename: '[name].js',
		chunkFilename: '[name].[id].js'
	},
	module: {
		rules: [
			{
				test: /\.svelte$/,
				use: {
					loader: 'svelte-loader',
					options: {
						emitCss: true,
						hotReload: true,
            dev: true,
            preprocess: require('svelte-preprocess')({
            }),
            externalDependencies: ['src/assets'],
					}
				}
			},
			{
				test: /\.css$/,
        exclude: '/node_modules/',
				use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { hmr: !prod }
          },
          'css-loader'
				]
			}
		]
	},
	mode,
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css',
      chunkFilename: '[name].[id].css'
		})
	],
	devtool: prod ? false: 'source-map'
};
