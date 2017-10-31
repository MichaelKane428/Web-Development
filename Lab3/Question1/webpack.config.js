const path = require('path');
module.exports = {
    entry: './Calculator.js',
    output: {
        path: path.resolve(__dirname,'./'),
        filename: 'index.js'
    },
    devServer: {
        inline: true,
	port: 1111
    },
    module: {
        loaders: [
	    {
		exclude: '/node_modules/',
		loader: 'babel-loader'
	    }
	]
    }
}
