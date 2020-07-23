const nano = require('nano');

const nanoCouchCiq = require('nano')('https://admin:admin@db.chargeiq.de/');

// node-couchdb instance talking to external service
const affilateLinkDB = nanoCouchCiq.db.use('affilate-marketing-link');

exports.addNewAffilateDocument = function addNewAffilateDocument (affiliate){
    var documentName = affiliate.company + ":" + affiliate.year
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
