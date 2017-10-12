var mongoose = require('mongoose');

var userlist_value=mongoose.Schema('fblist',userSchema);
//userlist_model();
var userSchema = new mongoose.Schema({
   "id":String,	
   "name": String
});
module.exports=userlist_value;