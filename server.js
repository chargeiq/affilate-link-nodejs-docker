//Requirements
var http = require('http');
var restApi = require('./rest-apis.js')
var urlParser = require('./url-parser.js')

//HTTP Port
var port = 8181;
var requestUrl = '';
var url = require('url')
var q = ''
var request_object = ''

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    requestUrl = request.url;
    q = url.parse(requestUrl, true);
    if(requestUrl.toString()!='/favicon.ico')
    {
        console.log(requestUrl.toString());
        request_object = q.query;
        year = request_object.year;
        console.log('Year: ' + year);
        console.log(request_object.query);
        console.log('------');
    }
    response.end();
}).listen(port);

// Print the following message in Terminal
console.log('Server running at the following port: ' + port);
console.log('Current time: ' + Date.now().toString());