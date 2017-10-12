var https = require('https');
//var userlist_model=('../models/friendlist_model');
//var service=require('../services/frndlist_service');

exports.getFbData = function(accessToken, apiPath, callback) {
    var options = {
        host: 'graph.facebook.com',
        port: 443,
        path: '/me/friends?access_token='+'EAAB0BDPPIW0BAKyZC7IZAiUv9C5P0ejNZBTkaPLuZCk68r4RE4oaK44qfrlPRRNZAV7WJLRbhdGpju3vp9u8swZANiFIFCOLQOtWp9AqBiddSLalK50Rha0C1ytOZAB5k28A3wkKoM0UezukGUeOvms6rrngDMh1UZCbsBCluZAF2nnt5UEVFAhr8xamxQBC2ciZC8wXmipRVNuQZDZD',
        method: 'GET'
};


      console.log('next step');
    	var buffer = ''; //this buffer will be populated with the chunks of the data received from facebook
    	var request = https.request(options, function(result){
        result.setEncoding('utf8');
        result.on('data', function(chunk){
            buffer += chunk;
        });

        result.on('end', function(){
            callback(buffer);
        });
        console.log('request step is over');
           });

    request.on('error', function(e){
        console.log('error from facebook.getFbData: ' + e.message)
    });

    request.end();
}
module.exports.getFbData('EAAB0BDPPIW0BAKyZC7IZAiUv9C5P0ejNZBTkaPLuZCk68r4RE4oaK44qfrlPRRNZAV7WJLRbhdGpju3vp9u8swZANiFIFCOLQOtWp9AqBiddSLalK50Rha0C1ytOZAB5k28A3wkKoM0UezukGUeOvms6rrngDMh1UZCbsBCluZAF2nnt5UEVFAhr8xamxQBC2ciZC8wXmipRVNuQZDZD', '/me/friends?', function(data){
console.log("=========================");
res1 = JSON.parse(data);
this.create_value(data)
console.log(res1);
});

module.exports.create_value = function(res1){
   console.log("========",res1);  
    service.create_list(res1, function (corp){
              res1.json(corp);
 
    })
}
 

























// To get access for User's Group

/*exports.getFbData = function(accessToken, apiPath, callback) {
    var options = {
        host: 'graph.facebook.com',
        port: 443,
        path: '/me/groups?access_token='+'EAACEdEose0cBAAXRPk7BQvpAXRPlO3rsux48XDOu1ZCl5Xu9diKk0fZABdRUJaxOT0W3cn7iWjOuxym8AhSmW3Uu1f3uLFrLOtxQtVVZA1tWUHqHikzV507urZAvmUVdXbsPbXkDT9WNAumrIPyB3P6fSQj4TJZAzMjMSYmEd3JcxZASBZCXUG0yLjV0WwKulye3ffSChNATgZDZD',
        method: 'GET'
};
        console.log('User Group step');
      var buffer = ''; //this buffer will be populated with the chunks of the data received from facebook
      var request = https.get(options, function(result){
        result.setEncoding('utf8');
        result.on('data','parent', function(chunk){
            buffer += chunk;
        });

        result.on('end', function(){
            callback(buffer);
        });
        console.log('request step is over');
           });

    request.on('error', function(e){
        console.log('error from facebook.getFbData: ' + e.message)
    });

    request.end();
}
exports.getFbData('EAACEdEose0cBAAXRPk7BQvpAXRPlO3rsux48XDOu1ZCl5Xu9diKk0fZABdRUJaxOT0W3cn7iWjOuxym8AhSmW3Uu1f3uLFrLOtxQtVVZA1tWUHqHikzV507urZAvmUVdXbsPbXkDT9WNAumrIPyB3P6fSQj4TJZAzMjMSYmEd3JcxZASBZCXUG0yLjV0WwKulye3ffSChNATgZDZD', '/me/friends?', function(data){
    console.log(data);
});
*/