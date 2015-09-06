var http = require('http');

var bravia = require('modules/bravia');

var server = http.createServer(function(req, res){
    //console.log("Hello!");
    res.writeHead(200);
    res.end(bravia.turnOn());
});

server.listen(8020);
