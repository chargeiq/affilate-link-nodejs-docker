//The same server but uses express
//Requirements

var express = require('express');
var cookieParser = require('cookie-parser');
//internal requirements
var urlParser = require('./url-parser.js')
var dbController = require('./couchdb-controller.js')

//HTTP Port
var port = 8181;

var app = express();
app.use(cookieParser());

app.get('/default', function(req,res) {
    res.send("Hello");
    console.log("Somebody said hello");
});

app.post('/link', function(req,res) {
    var affilateObject = urlParser.parseUrlToObject(req);
    dbController.addNewAffilateDocument(affilateObject);
    res.send("Buy something at us! " + affilateObject.year + " "+affilateObject.purchaseObject+ " " + affilateObject.company);
});

//JSON object to be added to cookie 
let users = { 
    name : "ChargeIQ", 
    Age : "30"
} 
    
//Route for adding cookie 
app.get('/setuser', (req, res)=>{ 
    res.cookie("userData", users); 
    res.send('user data added to cookie'); 
}); 
    
//Iterate users data from cookie 
app.get('/getuser', (req, res)=>{ 
    //shows all the cookies 
    res.send(req.cookies); 
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