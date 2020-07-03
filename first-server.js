var http = require('http');

var port = 8181;

http.createServer(function (request, response) {

    // Send HTTP Head 
    // HTTP status: 200 : OK
    // Content type: text/plain
    
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('Hello World\n');
    response.write('Double Hello World\n');
    response.write(Date.now().toString() + '\n');
    response.write(request.url)
    
    response.end();
}).listen(port);


// Print the following message in Terminal
console.log('Server running at the following port: ' + port);
console.log(Date.now().toString());