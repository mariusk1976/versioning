let http = require('http');

let pjson = require('./package.json');
console.log(pjson.version);

var server = http.createServer(function(req, res) {
res.writeHead(200);
res.end('Hi everybody! Version from package.json:' + pjson.version);
});
console.log('Started')
server.listen(8081);