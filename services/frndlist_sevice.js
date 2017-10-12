var frnd_dao = require("../dao/frndlist_dao");

module.exports.create_list = function(corp){
	frnd_dao.create_list(corp,function(user,callback){
			callback(user);
	});
}

