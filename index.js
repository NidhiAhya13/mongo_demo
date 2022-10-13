const express = require('express');
const { default: mongoose, Schema } = require('mongoose');
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


app.listen(2000);

