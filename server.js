//Requirements
var http = require('http');
var restApi = require('./rest-apis.js')
var urlParser = require('./url-parser.js')
var dbController = require('./couchdb-controller.js')

//HTTP Port
var port = 8181;
var requestUrl = '';
var url = require('url')
var q = ''

//create Affilate Link Service Process
http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    requestUrl = request.url;
    q = url.parse(requestUrl, true);
    if(requestUrl.toString()!='/favicon.ico')
    {
        //Parse the request URL into request object
        var affilateObject = urlParser.parseUrlToObject(q)
        dbController.addNewAffilateDocument(affilateObject);
        console.log('added object');

    }
    response.end();
}).listen(port);

// Print the following message in Terminal
console.log('Server running at the following port: ' + port);
console.log('Current time: ' + Date.now().toString());