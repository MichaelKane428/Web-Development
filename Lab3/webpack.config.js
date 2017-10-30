const path = require('path');
module.exports = {
    entry: './Calculator/Calculator.js',
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
		loader: 'babel-loader'
	    }
	]
    }
}
