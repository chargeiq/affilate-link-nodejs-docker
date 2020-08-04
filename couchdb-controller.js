const nano = require('nano');
const uuid = require('uuid');

const nanoCouchCiq = require('nano')('https://admin:admin@db.chargeiq.de/');

// node-couchdb instance talking to external service
const affilateLinkDB = nanoCouchCiq.db.use('affilate-marketing-link');

var internalId = 0;

exports.addNewAffilateDocument = function addNewAffilateDocument (affiliate){
    // generate UUID here 
    var id = uuid.v1()
    var documentName = affiliate.company + ":" + affiliate.date + "_" + internalId
    affilateLinkDB.insert(
        {
            internalID: internalId,
            date: affiliate.date,
            purchaseObject: affiliate.purchaseObject,
            company: affiliate.company,
            paid: affiliate.paid
        },
        documentName
    ).catch((e) =>{
        console.log(e);
    });
    internalId++;
}

exports.updatePaymentStatus = function updatePayment(affiliate,  _rev){
    affiliate['paid']=true;
    affilateLinkDB.insert(affiliate);
}

exports.getAffiliateObject = function getAffiliateObject(id, callback){
    affilateLinkDB.get(id, (err,body) => {
        if (!err){
            var affilateParsed = body;
            //console.log(affilateParsed);
            return callback(affilateParsed);
        }
    })
}