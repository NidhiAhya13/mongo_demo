const express = require('express');

require('./config/config');
const app = express();

let blogRouter = require('./Blogs/BlogRoute');
//const BlogSchema = require('./Blogs/BlogSchemaDEMO');
const bcrypt = require('bcrypt');
let userRouter = require('./user/userRoute');
// const userSchema = require('./user/userSC');

var jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

//********************/ For TIME ZONE /********************//
var moment = require('moment');     
// var a = moment().calendar();                   //Today at 2:16 PM
//var a = moment().dayOfYear();                   //319
//var a = moment().daysInMonth();                 //30
// var a = moment().fromNow( );                   //a few seconds ago
//console.log(a);
// var C = moment().format("LLLL");                  //Tuesday, November 15, 2022 2:27 PM
// console.log(C);                                   


dotenv.config({ path: './config/.env' });
//require("dotenv").config();


app.use(express.json());
app.use(blogRouter);
app.use(userRouter);




//encryp API ************************************************//
// app.post('/encr', async (req, res, next) => {

//   try {
//     console.log("this demo is for hashing ");                                          //for encryption of password////         // password: { type: String }  //                                                                                                                                                                                        
//     const { name, email, password, role } = req.body;


//     let pass = await bcrypt.hashSync(password, 10);

//     //* For checking password is hashed or not    //console.log(pass);      //console.log(bcrypt.hashSync(pass, 10));    *//

//     //create user 
//     const user = await userSchema.create({ name, email, password : pass, role });
//     console.log(user);

//     return user.save();

//   } catch (error) {
//     res.status(501).json({ success: false });
//   }

// })

//*************** TOKEN API ************************************************//
// app.post('/token', async (req, res, next) => {
  
//   try {
//   const { name, email, password } = req.body;

//   const user1 = await userSchema.create({ name, email, password });
//   console.log(user1);

  

//   //TOKEN creation ..................
//   const token = user1.getSignToken();
//   //console.log(token);
//   user1.save();
//   res.status(200).json({ success: true, token });
//   }
//   ///////
//   // const  { email , password } = req.body ;
//   // if(!email || !password) 
//   // {
//   //   return error ;
//   // }

//   // const user = await userSchema.findOne({email });
//   // console.log(user);

//   // //check if password matches
//   // const isMatch = await userSchema.matchPass(password);

//   // if(!isMatch)
//   // {
//   //   console.log(error);
//   // }

//   // user.save();

//   // //TOKEN creation ..................
//   // const token = user.getSignToken();
//   // //console.log(token);
//   // res.status(200).json({ success : true , token});
//   ///////
//   catch (error) {
//     res.send({ status: 0, message: error });
//   }
// })

//AUTHENTICATION //
// app.post('/auth', async (req, res, next) => {

//   try {
//     const { email, password } = req.body;
//     let pass = await bcrypt.hashSync(req.body.password, 10);

//     //create user 
//     const user = await userSchema.create({ email, password: pass });
//     console.log(user);
//     const token = user.getSignToken();
//     // res.status(200).json({ success: true, token });
//     if (!email || !password) {
//       return error;
//     }

//     const user1 = await userSchema.findOne({ email }).select('+password');
//     //console.log(user1);
//     //check if password matches
//     const isMatch = await user1.matchPass(password);

//     if (!isMatch) {
//       console.log('not matched...');
//     }
//     console.log(isMatch);
//     //{
//     //   "email" : "abc.nma@gmail.com",
//     //   "password" :"890aa"
//     // }

//     user1.save();
   
//     return isMatch;
//   } catch (error) {
//     res.status(501).json({ success: false });
//   }

// })

///////
// const  { email , password } = req.body ;
// if(!email || !password)
// {
//   return error ;
// }

// const user1 = await userSchema.findOne({email }).select('+password');
// console.log(user);

// //check if password matches
// const isMatch = await user1.matchPass(password);

// if(!isMatch)
// {
//   console.log(error);
// }

// user1.save();

// //TOKEN creation ..................
// const token = user1.getSignToken();
// //console.log(token);
// res.status(200).json({ success : true , token});
////

let port = 2000 ;
app.listen(port, console.log(`Server running at http://localhost:${port}`));