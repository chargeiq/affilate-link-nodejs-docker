var url = require('url');

exports.parseUrl = function(addr){
    return url.parse(addr, true);
}