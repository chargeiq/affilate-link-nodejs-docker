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
    res.send("Buy something at us! " + affilateObject.date + " "+affilateObject.purchaseObject+ " " + affilateObject.company);
});

/*
//JSON object to be added to cookie 
let affilateUser = { 
    name : "ChargeIQ", 
    Age : "30",
    company : "enbw"
};
    
//Route for adding cookie 
app.get('/setuser', (req, res)=>{ 
    res.cookie("userData", affilateUser,  {maxAge: 300000}); //The cookie will be killed after 300 seconds.
    res.send('user data ' + affilateUser.name + ' added to cookie'); 
}); 
    
//Iterate users data from cookie 
app.get('/getuser', (req, res)=>{ 
    //shows all the cookies 
    res.send(req.cookies); 
}); */
      
app.post('/updateaffiliatepaid/:id/:rev', (req, res) => {
    const affiliateId = req.params.id;
    const rev = req.params.rev;
    console.log(affiliateId);
    dbController.updatePaymentStatus(affiliateId, rev)
    res.status(200).send(affiliateId);
});

app.listen(port, function()
{
    console.log(`Example app listening at http://localhost:${port}`)
});