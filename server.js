const express= require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const morgan = require('morgan')
var jwt    = require('jsonwebtoken'); 

const api = require ('./server/routing/api');

const port = 7777;
const app = express();


app.use(express.static(path.join(__dirname,'dist')));

app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json());
app.use(morgan('dev'));

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/ngapp',{useMongoClient:true},function(err){
   
    if(err){
       
       console.log("Error occured db not connected");
    }else{

    		console.log("db connected successfully");

     }
});


app.use('/', api);


app.get('/',(req,res) => {
   
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});



app.listen(port,function(){
  
  console.log('Server running on port number' + port);

});