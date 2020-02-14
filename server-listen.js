var http = require('http');
var fs = require('fs');

console.log("in server-listen");

http.createServer(function (req, res) {
    fs.readFile('index.html', function (err, data) {
        res.write(data);
        res.end();

    });
}).listen(1337);