const express = require('express')
const debug = require('debug')('app:server')
const http = require('http')
const path = require('path')
const webpack = require('webpack')
const webpackConfig = require('../config/webpack.config')
const project = require('../config/project.config')
const compress = require('compression')

const app = express();

const fs = require('fs');

const server = http.createServer(app);

// Apply gzip compression
app.use(compress())


console.log(path.join(__dirname, '../dist'));
app.use(express.static(path.join(__dirname, '../dist')));

// This rewrites all routes requests to the root /index.html file
// (ignoring file requests). If you want to implement universal
// rendering, you'll want to remove this middleware.
app.use('*', function (req, res, next) {
	fs.createReadStream('../dist/index.html')
		.pipe(res);
})

server.listen(3000, () => {
	console.log('Express server listening on port %d in %s mode', 3000, app.get('env'));
});

module.exports = app
