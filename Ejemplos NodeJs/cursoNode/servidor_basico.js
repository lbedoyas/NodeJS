var http = require('http');

var server = http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
    response.end('<h1>Wake up, Lucho and Neo...</h1>');
});

//Arrancar servidor 

server.listen(1337, '127.0.0.1');
console.log('servidor arrancado en 127.0.0.1');


