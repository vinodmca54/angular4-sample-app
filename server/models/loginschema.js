const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const loginschema = new Schema({
   usermail:String,
   userpassword:String,
}); 

module.exports = mongoose.model('Loginschema',loginschema);