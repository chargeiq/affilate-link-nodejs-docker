var url = require('url');

exports.parseUrlToObject = function(q){
    request_object = q.query;
     
    var affilateObject = {year: request_object.year, purchaseObject: request_object.purchaseObject, company: request_object.company};
    //add the data coming from the request link into CouchDB Database
    if (typeof affilateObject.year === 'undefined' || typeof affilateObject.purchaseObject === 'undefined'  || typeof affilateObject.company === 'undefined' ){
        console.log('one of the variables is either the special value `undefined`, or it has not been declared');
    }
    return affilateObject;
}

