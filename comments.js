// Create web server
// Start server
// Listen for requests
// Parse the requests
// Return comments

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    console.log('Request was made: ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var myReadStream = fs.createReadStream(__dirname + '/comments.txt', 'utf8');
    myReadStream.pipe(res);
});

server.listen(3000, '