//The same server but uses express
//Requirements

var express = require('express');
//internal requirements
var urlParser = require('./url-parser.js')
var dbController = require('./couchdb-controller.js')

//HTTP Port
var port = 8181;
var app = express();

app.get('/default', function(req,res) {
    res.send("Welcome to chargeIQ");
    console.log("Welcome to chargeIQ");
});

//initialize the first affiliate link application
app.post('/link', function(req,res) {
    var affilateObject = urlParser.parseUrlToObject(req);
    dbController.addNewAffilateDocument(affilateObject);
    res.send("Buy something at us! " + affilateObject.date + " "+affilateObject.purchaseObject+ " " + affilateObject.company);
});

app.get('/:id', function(req,res) {
    
    const affiliateId = req.params.id;
    //console.log(affiliateId);
    dbController.getAffiliateObject(affiliateId, function(response){
        console.log(response);
        
        res.status(200).send(response);
    });
    
});


//Update the payment status of a certain affiliate ID if it is paid or not
app.post('/updateaffiliatestatus/:id/:rev', (req, res, status) => {
    const affiliateId = req.params.id;
    const rev = req.params.rev;
    console.log(affiliateId);
    affiliate = dbController.getAffiliateObject(affiliateId);
    console.log(affiliate);
    dbController.updatePaymentStatus(affiliate, affiliateId, rev);
    res.status(200).send(affiliate);
});

app.listen(port, function()
{
    console.log(`Example app listening at http://localhost:${port}`)
});