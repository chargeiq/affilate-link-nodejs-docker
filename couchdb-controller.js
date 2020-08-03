const nano = require('nano');
const uuid = require('uuid');

const nanoCouchCiq = require('nano')('https://admin:admin@db.chargeiq.de/');

// node-couchdb instance talking to external service
const affilateLinkDB = nanoCouchCiq.db.use('affilate-marketing-link');

exports.addNewAffilateDocument = function addNewAffilateDocument (affiliate){
    // generate UUID here 
    var documentName = affiliate.company + ":" + affiliate.date + "_" + uuid.v1()
    affilateLinkDB.insert(
        {
            purchaseObject: affiliate.purchaseObject,
            test: 'false'
        },
        documentName
    ).catch((e) =>{
        console.log(e);
    });
}
