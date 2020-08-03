var url = require('url');

exports.parseUrlToObject = function(q){
    request_object = q.query;

    var todayDate = new Date();
    console.log(todayDate);
    var day = ("0" + todayDate.getDate()).slice(-2);
    var month = ("0" + (todayDate.getMonth() + 1)).slice(-2);
    var year = todayDate.getFullYear();
    var hours = ("0" + todayDate.getHours()).slice(-2);
    var minutes = ("0" + todayDate.getMinutes()).slice(-2);
    var seconds = ("0" + todayDate.getSeconds()).slice(-2);
    var affilateObject = 
        {
            date: day + "-" + month + "-" + year + " " + hours + ":" + minutes + ":" +  seconds,
            purchaseObject: request_object.purchaseObject, 
            company: request_object.company
        };
    //add the data coming from the request link into CouchDB Database
    if (typeof affilateObject.purchaseObject === 'undefined'  || typeof affilateObject.company === 'undefined' ){
        console.log('one of the variables is either the special value `undefined`, or it has not been declared');
    }
    return affilateObject;
}

