const http = require('http');

var str = "Hello World!";

http.createServer(function (req, res) {

  res.writeHead(200, {'Content-Type': 'text/html'});

  res.write(str.toUpperCase());

  res.end();


}).listen(8080);

console.log("Server Started");