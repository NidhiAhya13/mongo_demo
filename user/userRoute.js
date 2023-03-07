const express = require('express');
let router = express.Router();
const Users = require('./userSC');
const bcrypt = require('bcrypt');


//encryp API ************************************************//
router.post('/encr', async (req, res, next) => {

    try {
      console.log("this demo is for hashing ");                                          //for encryption of password////         // password: { type: String }  //                                                                                                                                                                                        
      const { name, email, password, role } = req.body;
  
  
      let pass = await bcrypt.hashSync(password, 10);
      console.log(pass);
      //* For checking password is hashed or not    //console.log(pass);      //console.log(bcrypt.hashSync(pass, 10));    *//
  
      //create user 
      const user = await userSchema.create({ name, email, password : pass, role });
      console.log(user);
  
       user.save();
      res.status(200).json({ success: true , user});
  
    } catch (error) {
      res.status(501).json({ success: false , error});
    }
  
  })

  //*************** TOKEN API ************************************************//
  router.post('/token', async (req, res, next) => {
  
    try {
    const { name, email, password } = req.body;
  
    const user1 = await Users.create({ name, email, password });
    console.log(user1);
  
    
  
    //TOKEN creation ..................
    const token = user1.getSignToken();
    //console.log(token);
    user1.save();
    res.status(200).json({ success: true, token });
    }
    ///////
    // const  { email , password } = req.body ;
    // if(!email || !password) 
    // {
    //   return error ;
    // }
  
    // const user = await userSchema.findOne({email });
    // console.log(user);
  
    // //check if password matches
    // const isMatch = await userSchema.matchPass(password);
  
    // if(!isMatch)
    // {
    //   console.log(error);
    // }
  
    // user.save();
  
    // //TOKEN creation ..................
    // const token = user.getSignToken();
    // //console.log(token);
    // res.status(200).json({ success : true , token});
    ///////
    catch (error) {
      res.send({ status: 0, message: error });
    }
  })
  //AUTHENTICATION //
  router.post('/auth', async (req, res, next) => {

    try {
      const { email, password } = req.body;
      let pass = await bcrypt.hashSync(req.body.password, 10);
      
      //create user 
      const user = await userSchema.create({ email, pass });
      console.log(pass);
      console.log(user);
      console.log(email);
    
      const token = user.getSignToken();
      // res.status(200).json({ success: true, token });
      if (!email || !pass ) {
        return error;
      }
  
      const user1 = await userSchema.findOne({ email }).select('+password');
      //console.log(user1);
      //check if password matches
      const isMatch = await user.matchPass(password);
  
      if (!isMatch) {
        console.log('not matched...');
      }
      console.log(isMatch);
      //{
      //   "email" : "abc.nma@gmail.com",
      //   "password" :"890aa"
      // }
  
      // user1.save();
     
      return isMatch;
    } catch (error) {
      res.status(501).json({ success: false });
    }
  
  })
  router.post('/:id', function(req, res, next){
    var user = req.params.id;
  
    Users.findById(user).then(function(user){
      if (!user) { console.log("user not found."); }                             // showing Unauthorized for { name : llllllll } & {id : 637327ae5137a2018d74bfed }
  
      return res.status(200).json({ success: true, user });
      });
    });
  
  module.exports = router;
  
  