// const express=require('express');
// const getData = require('./index.js');
// const app = express();

// app.get('/', async (req, resp ) =>{
//     let data  = await getData();                                                //from copyindex.js file
//     data = await data.find().toArray();
//     console.log(data);
//     resp.send(data);

// })



// app.listen(5000)


  //search api //

  const express=require('express');
  // require('./middleware_next');
  const app = express();



                                                                            //async await error handling   ******** ............................................
  // const asyncHandler = require('./async.js');

  // app.get('/hello', asyncHandler( (req, res, next) => {
  //   // Some code here. Any error will be catch and pass to expressjs
  // }) );


                                                                             //async await error handling  ********
  
  app.get('/search/:key', async (req, resp ) =>{
  
      console.log(req.params.key);                        //getting key value in console

      
      // let data  = await getData();
      // data = await data.find().toArray();
      // console.log(data);
      resp.send("search is done");
  
  })
 
  
  app.post("/datainfo", (req, resp) => 
  {
    
    // console.log(req.headers.authorization);
    // console.log(req.body);
    resp.send("posted.........");
  })
  app.listen(5000)
  //app.listen(9000)