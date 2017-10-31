var express = require('express');
var http = require('http');
var fs = require('fs');


var server = express();

const srv = http.createServer(server);
srv.listen(80, 'localhost');
srv.on('listening', onListening);

function onListening() {
	let addr = srv.address();
	let host = (addr.address) ? `${addr.address} ` : '';
	let bind = (typeof addr === 'string') ? `pipe ${addr}` : `port ${addr.port}`;
	console.log(`HTTP server is listening on ${host}${bind}`);
}


server.get('/', function (req, res) {
    res.send("Hello World!");
});

