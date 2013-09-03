var http = require('http');

var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Hello, world!');
});

server.listen(process.env.PORT || 8080, function () {
    console.log('Server started');
});

