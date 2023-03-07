
const express = require('express');
let router = express.Router();
const BlogSchema = require('./BlogSchemaDEMO');

let {  addblog , blogByID } = require('./BlogController');
const {protect } = require('../Auth');

 //router.route('/addblog').post(addblog);  

const mongoose = require('mongoose');

const { query } = require('express');
const userSC = require('../user/userSC');

//GET AUTHENTICATED PERSON ONLY TO CREATE NEW BLOG  ------>>>>>>>>>>>>>> IN POSTMAN //
//****************************const {protect } = require('../Auth');                 //Auth.JS//
// router.route('/addblog').post(protect , addblog);    **************************** //                               // one line code to use controller file in route 


router.route('/addblog').post(addblog);
router.route('/addblog/admin').post(protect , addblog);

// router.post('/addblog', async (req, res, next) => {
//     try {
  
//       console.log(req.body);
//       let data = new BlogSchema(req.body);
//       console.log(data);
//       const result = await data.save();                                          //Blogschema.create ({ author : "nidhi ahya" ,               })  statically      will also work here  if dont want   to write data.save 
//       console.log(result);
//       res.send("added data...");
//     }
//     catch (error) {
//       console.log(error);
//       res.send({ status: 0, message: error });
//     }
//   })
  
  //GET SINGLE BLOG API ************************************************//
  router.post('/getsingleBlog/:id', async (req, res, next) => {
  
    try {
           
    // let data = await BlogSchema.find({author : "nidhi ahya"});
    let data = await BlogSchema.findById(req.params.id)
    //let data = await BlogSchema.find({ isDeleted : true })
    res.status(200).json({ success: true, data });
    // res.send("list working......");
    }
    catch (error) {
      console.log(error);
      res.send({ status: 0, message: error });
    }
  
  })
  
  
  //FIND API ************************************************//
  
  
  router.get('/bloglist', async (req, res, next) => {
  
    try {
    // let data = await BlogSchema.find({author : "nidhi ahya"});
    //let data = await BlogSchema.find()


    //let data = await BlogSchema.find().limit(10);                        //first 10 documents fetching ************************************************//  
    
    
    let data = await BlogSchema.find().skip(10).limit();                //skips first 10 data and shows remaining 
    //let data = await BlogSchema.find({ isDeleted : true })
    res.send(data);
    // res.send("list working......");
  }
  catch (error) {
    console.log(error);
    res.send({ status: 0, message: error });
  }
  })
  
  //UPDATE API ************************************************//
  
  
  router.put('/uplist', async (req, res, next) => {
    // let data = await BlogSchema.find({author : "nidhi ahya"});
    //let data = await BlogSchema.find()
    //let data = await BlogSchema.find({ isDeleted : true })
    //res.send(data);
    // res.send("list working......");
  
    try {
    //*********** FOR PATH =>   app.put('/uplist', async (req, res, next) => {   } 
    let data = await BlogSchema.findOneAndUpdate
      (
        {
          author: "armstrong"  // search query
        },
        {
          author: "PAGAL"  // field:values to update
        },
        {
          //upsert: true,
          new: true,
          //runValidators : true
        }
      )
    res.status(201).json({ success: true, data });
    console.log(data);
    }
    //*********** FOR PATH =>   app.put('/uplist', async (req, res, next) => {   } 
  
  
    //%%%%%%*****FROM PARAMS *****%%%%%%//
  
    // let data = await BlogSchema.findByIdAndUpdate(req.params.id , req.body , { new : true });
    // res.status(200).json({ success : true , data});
  
    //%%%%%%*****FROM PARAMS *****%%%%%%//
  
    //console.log(data);
    //const result = await data.save();                                          //Blogschema.create ({ author : "nidhi ahya" ,               })  statically      will also work here  if dont want   to write data.save 
  
  
    //res.send("updated data...");
    catch (error) {
      console.log(error);
      res.send({ status: 0, message: error });
    }
  })
  
  //DELETE API ************************************************//
  
  
  router.post('/delete', async (req, res, next) => {
    try {
    console.log(req.body);
    let data = await BlogSchema.updateOne({ _id: req.body.id }, { isDeleted: true });
    res.send(data);

    // let data = await BlogSchema.deleteOne( { });                     // first document deleted in document
    // res.send(data);

    //let data = await BlogSchema.deleteMany();                                  // all documents deleted
    // res.send(data);                               
    }
    // res.send("DELETE working......");
    catch (error) {
      console.log(error);
      res.send({ status: 0, message: error });
    }
  
  })
  
  
  //QUERY API ************************************************//
  
  router.get('/query', async (req, res, next) => {
    // BlogSchema.statics.getAvgCost() = async function(_id){
  
    //   console.log("working");
    // const obj = await this.aggregate([ {$group : { _id : 'blogs' , averageCost :{ $avg : '$tutionFee'}}}])
  
    // console.log(obj);
  
    try
    {
    let queryStr = JSON.stringify(req.query);
  
    queryStr = queryStr.replace(/\b(gt|gte|lte|lt|in)\b/g, match => `$${match}`);
  
    console.log(queryStr);
  
    let query = await BlogSchema.find(JSON.parse(queryStr));
    let data1 = await query;
    res.send(data1); 
    }
    catch (error) {
      console.log(error);
      res.send({ status: 0, message: error });
    }
  
  })

  // new select query  /////

  router.get('/selectquery', async (req, res, next) => {
   
    try {
   
    const reqQuery = {...req.query};
    //console.log(reqQuery);
    const removeFields = ['select' , 'sort'];

    removeFields.forEach( param => delete reqQuery[param]);

    let queryStr = JSON.stringify( reqQuery);
    queryStr = queryStr.replace(/\b(gt|gte|lte|lt|in)\b/g, match => `$${match}`);
    let query;
    query = await BlogSchema.find(JSON.parse(queryStr));
    console.log(queryStr);
   
    console.log(req.query.select);
    
    
    ///************** *************//
    // if (req.query.select) {
    //   const fields = req.query.select.split(',').join(' ');
    //    query = query.select(fields);
    //   console.log(fields); 
    // }
    ///************** *************//
    let data1 = await query;
    //res.send(data1);

    res.status(200).json({ success : true , data1});
    }
    catch (error) {
      console.log(error);
      res.send({ status: 0, message: error });
    }
  
  })
/////////////////////////////************* */
  router.get('/Blogby/:id', async (req, res, next) => {
  
    try {
     var id = req.params.id;
    let data = await BlogSchema.findById(id).select("author subTitle");              //select for particular blog Id


    //let data = await BlogSchema.find({ isDeleted : true })
    res.status(200).json({ success: true, data });
    // res.send("list working......");
    }
    catch (error) {
      console.log(error);
      res.send({ status: 0, message: error });
     //return res.redirect('/bloglist') ;                                 //if we give wrong id then it will throw                 ----->WHOLE BLOG LIST<-----
    } 
  
  })

/////////////////////////////************* */

router.get('/getPop', async (req, res, next) => {
  
  try {
   var id = req.params.id;
  let data = await BlogSchema.find({"author" : " sss"}).populate("author BlogId");              //select for particular blog Id


  //let data = await BlogSchema.find({ isDeleted : true })
  res.status(200).json({ success: true, data });
  // res.send("list working......");
  }
  catch (error) {
    console.log(error);
    res.send({ status: 0, message: error });
  }

})

module.exports = router;
    
