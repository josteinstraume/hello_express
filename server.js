var express = require('express');
var http = require('http');
var colors = require('colors');
var app = express();

colors.setTheme({
	server: 'green',
	inverted: 'inverse',
})
app.use(express.static(__dirname + '/public'));

var server = http.createServer(app);
server.listen(3000, function() {
	console.log('the server is running on port 3000'.inverted.server);
});