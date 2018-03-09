const express  = require('express');
const router = express.Router();
const mongoose =require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const  videoschem = require('../models/videos');
const  userdata = require('../models/userschema');
const  loginschema = require('../models/loginschema');
const jwt    = require('jsonwebtoken'); 

// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/ngapp',{useMongoClient:true},function(err){
   
//     if(err){
       
//        console.log("Error occured db not connected");
//     }else{

//     		console.log("db connected successfully");

//      }
// });


router.get('/getuserdetails',(req,res)=>{

   console.log("user entered in api");
   
   userdata.find(function(err,doc){
      
      if(doc != null){
        console.log("user enterd into responce secction");
        res.json(doc);
        console.log(doc);
      }else{
          console.log("error occured at server side");
          res.send(err);
      }

   })

})


//var videoschemss = new videoschems();

router.post('/userdata',(req,res)=>{
    console.log(req.body);
   var pswd = req.body.userpassword;

   bcrypt.genSalt(saltRounds, function(err, salt) {
       req.body.salt = salt;

        bcrypt.hash(pswd, salt, function(err, hash) {
            // Store hash in your password DB.
            req.body.userpassword = hash;

             userdata.create(req.body,(err,doc) =>{
                if(err){
                    res.send("error occured");
                }else{

                    res.send(doc);
                }

           })

        })
    })
})


router.post('/login',(req,res)=>{

    console.log("login route");
    console.log(req.body);

     var pswd = req.body.Userpassword;

     userdata.findOne({"usermail":req.body.Usermail},function(err,doc){

        if(doc != null){

          bcrypt.hash(pswd,doc.salt, function(err,hash){

              pswd = hash;

               userdata.findOne({"usermail":req.body.Usermail,"userpassword":pswd},function(err,doc){

                if(doc != null){
                    console.log("vinod==========");
                  console.log(doc);
                  // var docdata = json({doc});
                  var user = {
                      username:doc.username,
                      usermail:doc.usermail
                  };
                    var token = jwt.sign(user,'shhhh', {
                        expiresIn: 60 * 60 * 24 // expires in 24 hours
                      });

                    res.send({message:"userAuthenticated",status:true,token:token});

                }else{

                    res.send({message:"User not authenticated",status:false});
                }
            })

          })
        }else{
          console.log("err",err);
          console.log("doc",doc);
          res.send({message:"User not authenticated",status:false});
        }

     })   

})

router.get('/videos',function(req,res){

	//var videoschems = new videoschems();
  var objs = {title:'Angular- by ram',url:'https://www.youtube.com/watch?v=CX9hdwfnlco&index=58&list=PLC3y8-rFHvwg5gEu2KF4sbGvpUqMRSBSW',description:'learn angular4444'};
	videoschem.find(function(err,doc){
      if(err){
            
            res.send("error occured");

       }else{
           //console.log(doc);    
           res.json(doc);
       }
   
      
	})

	// var objs = {title:'Angular- by ram',url:'https://www.youtube.com/watch?v=CX9hdwfnlco&index=58&list=PLC3y8-rFHvwg5gEu2KF4sbGvpUqMRSBSW',description:'learn angular4444'};

 //   videoschem.update(objs)
 //    .exec(function(err,doc){
 //    	 if(err){
 //    	 	console.log("fdsfdsfdsf");
 //    	 }else{
 //    	 	res.json(doc);
 //    	 }
 //    })

});

router.use(function(req, res, next) {
    var token = req.body.token;
    delete req.body.token;
  
    if (token) {
        // verifies secret and checks exp
        jwt.verify(token, 'shhhh', function(err, decoded) {
            if (err) {
                return res.status(403).send({ success: false, mCode: "expToken", message: 'Failed to authenticate token------- Error: ' + err + ' URL: ' });
            } else {
                req.decoded = decoded;
                if ('vinod' == decoded.username) {
                    next();
                } else {
                    return res.status(403).send({ success: false, mCode: "expToken", message: 'Failed to authenticate token--- req from other userid.' + ' Auth UID: ' });
                }
            }
        });
    } else {
        // if there is no token
        // return an error
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });
    }
  });


module.exports= router;