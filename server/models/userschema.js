const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Userdata = new Schema({
   username:String,
   usermobilenum:String,
   usermail:String,
   userpassword:String,
   salt:String
  
}); 

module.exports = mongoose.model('userdata',Userdata);