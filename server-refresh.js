var process = require('process');
var cp = require('child_process');
var fs = require('fs');

const serverHost = 'server-listen.js';

var server = cp.fork(serverHost);
console.log('Server started');
debugger;

fs.watch("./", function (event, filename) {
    server.kill();
    console.log('Server stopped');
    server = cp.fork(serverHost);
    console.log('Server started');
});

process.on('SIGINT', function () {
    server.kill();
    console.log('Server stopped');
    fs.unwatchFile(serverHost);
    process.exit();
});