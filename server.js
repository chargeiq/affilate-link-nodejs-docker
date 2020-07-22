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
var request_object = ''

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    requestUrl = request.url;
    q = url.parse(requestUrl, true);
    if(requestUrl.toString()!='/favicon.ico')
    {
        //Parse the request URL into request object
        request_object = q.query;

        //Mapping of the request object values into variables
        year = request_object.year;
        company = request_object.company;
        

        //add the data coming from the request link into CouchDB Database
        dbController.addNewAffilateDocument(company +  ':'+ year +'' +  Date.now().toString())


    }
    response.end();
}).listen(port);

// Print the following message in Terminal
console.log('Server running at the following port: ' + port);
console.log('Current time: ' + Date.now().toString());