const express = require('express');
const { default: mongoose, Schema } = require('mongoose');
const { $where } = require('./Blogs/BlogSchemaDEMO');
const BlogSchemaDEMO = require('./Blogs/BlogSchemaDEMO');
require('./config');
const app = express();
const BlogSchema = require('./Blogs/BlogSchemaDEMO');

app.use(express.json());


//ADD / POST  API ************************************************//


app.post('/addblog', async (req, res, next) => {
  console.log(req.body);
  let data = new BlogSchema(req.body);
  console.log(data);
  const result = await data.save();                                          //Blogschema.create ({ author : "nidhi ahya" ,               })  statically      will also work here  if dont want   to write data.save 
  console.log(result); 
  res.send("added data...");
  
 

  

})

//FIND API ************************************************//


app.get('/bloglist', async (req, res, next) => {

// let data = await BlogSchema.find({author : "nidhi ahya"});
  let data = await BlogSchema.find()
  //let data = await BlogSchema.find({ isDeleted : true })
  res.send(data);
  // res.send("list working......");
  
})

//UPDATE API ************************************************//


app.put('/uplist', async (req, res, next) => {
  // let data = await BlogSchema.find({author : "nidhi ahya"});
                  //let data = await BlogSchema.find()
    //let data = await BlogSchema.find({ isDeleted : true })
                  //res.send(data);
    // res.send("list working......");
    let data = await BlogSchema.findOneAndUpdate
    (
    {
     author : "kajal oza "  // search query
    },
    {
      author : "nidhi ahya"  // field:values to update
    },
    {
      //upsert: true,
      new: true 
    }
    )

  
     console.log(data);
    // const result = await data.save();                                          //Blogschema.create ({ author : "nidhi ahya" ,               })  statically      will also work here  if dont want   to write data.save 
    // console.log(result); 
    res.send("updated data...");
  })

//DELETE API ************************************************//


app.post('/delete', async (req, res, next) => {
  console.log(req.body.id);
  let data = await BlogSchema.updateOne({_id:req.body.id}, { isDeleted : true } );
  res.send(data);
  // res.send("DELETE working......");
  
})


//QUERY API ************************************************//

app.get('/query', async (req, res, next) => {
  BlogSchema.statics.getAvgCost() = async function(_id){

    console.log("working");
    // const obj = await this.aggregate([ {$group : { _id : 'blogs' , averageCost :{ $avg : '$tutionFee'}}}])

    // console.log(obj);
}
  
    let queryStr= JSON.stringify(req.query);

    queryStr = queryStr.replace(/\b(gt|gte|lte|lt|in)\b/g, match => `$${match}`);

    console.log(queryStr);

    let query = await BlogSchema.find(JSON.parse(queryStr));
    let data1 = await query;
    res.send(data1);
    
  })

  

app.listen(2000);

