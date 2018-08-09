var http = require('http');

var server = http.createServer( function(req, res){

    switch (req.url) {
        case '/': 
            break;
        case '/teste':
            res.end('<html><body><h1>TESTE</h1></body></html>');
        default:
            break;
    }
});

server.listen(3000);