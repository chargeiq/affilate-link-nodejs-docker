//The same server but uses express
//Requirements

var express = require('express');
var http = require('http');

//internal requirements
var path = require('path');
var urlParser = require('./url-parser.js')
var dbController = require('./couchdb-controller.js')

//HTTP Port
var port = 8181;
var requestUrl = '';
var url = require('url')
var q = ''

var app = express();

app.get('/default', function(req,res) {
    res.send("Hello");
    console.log("Somebody said hello");
});

app.get('/link', function(req,res) {
    
    res.send("Buy something at us! " + req.query.tagId);
});

app.listen(port, function()
    {
        console.log(`Example app listening at http://localhost:${port}`)
    })
/*
//create Affilate Link Service Process
http.createServer(function (request, response) {
    //response.writeHead(200, {'Content-Type': 'text/html'});
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
console.log('Current time: ' + Date.now().toString());*/