const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env, argv) => {
	
	const devMode = argv.mode === 'production' ? true : false;

	return {
		'entry': {
			app: [
				'./src/index.js',
				'./src/sass/app.scss'
			]
		},

		'output':{
			path: path.resolve(__dirname, './dist'),
			filename: 'app.js'
		},

		module: {
			rules: [
				{
					test: /\.css$/,
					use: ['style-loader', 'css-loader']
				},

				{
					test: /\.js$/,
					exclude: /node_modules/,
					loader: "babel-loader"
				},

				{
					test: /\.s[ac]ss$/,
					use: ExtractTextPlugin.extract({
						fallback: 'style-loader',
						//use: ['css-loader', 'sass-loader']
						use: [
							{
								loader: 'css-loader',
								options: {
									url: false
								}	
							},
							'sass-loader'
						]
					})
				}
			]
		},

		plugins:[
			new ExtractTextPlugin('app.css'),

			new webpack.LoaderOptionsPlugin({
				minimize: devMode
			})

		]
	}
};