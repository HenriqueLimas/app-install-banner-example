'use strict';

var http = require('http');
var express = require('express');
var app = express();
var server = http.createServer(app);

app.use(express.static(__dirname + '/public'));

server.listen(8080);

console.log('Listening port %d', server.address().port)
