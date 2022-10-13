// const { rejects } = require('assert');
// const http = require('http');
// const { resolve } = require('path');

                                                      // Create a local server to receive data from // 
// const server = http.createServer((req, res) => {
//     //   res.writeHead(200, { 'Content-Type': 'application/json' });
//     res.write(JSON.stringify({ name: 'nidhi ahya ', age: 26 }));
//     //   res.end(JSON.stringify({
//     //     data: 'Hello World!'
//     //   }));
//     res.end();
// });

// server.listen(7000);

// let a = 20;
// let b = 0;
// let someData = new Promise((resolve, reject) => setTimeout(() => { resolve(30), 4000 }))

// someData.then((data) => { b = data; console.log(a + b) })


// const express = require('express');
// const fs = require('fs');
// const path = require('path');
// const app = express();
// const dirPath = path.join(__dirname , 'files');                                         //creation of file through path providing //
//  const filePath = `${dirPath}/apple.txt`;

// const filePath2 =`${dirPath}/home.html`;
// console.log(filePath2);
// app.use(express.static(filePath2));


// fs.writeFileSync(filePath , "this is a simple file");                                    //enter some data in file using writefilesync //
// fs.writeFileSync(filePath2 , "this is a home page");  

// app.listen(9000);



// for reading json file //
//    const config = require('./config.json');
//    console.log(config);

//and config.json file must be in root and path is given in above line






// // connecting MONGO DB  ....................................................//                    1)

// const { MongoClient } = require('mongodb');
// const url = 'mongodb://127.0.0.1:27017';
// const database ='e-comm';
// const client =  new MongoClient(url);


// async function getData()
// {
//   let result = await client.connect();
//   let db = result.db(database);
//   console.log('database got...');
//   let collection = db.collection('products');
//   console.log(collection);

//                                              //for finding particular element ............ in DB
//   let response = await collection.find({name:'beena'}).toArray();
//   console.log(response);
// }

// getData();

// module.exports = getData;













// const mongoose = require('mongoose');

// mongoose
//    .connect("mongodb://127.0.0.1:27017/e-comm", {
//       useNewUrlParser: true,
//       // useCreateIndex:true,
//       useUnifiedTopology: true,
//       serverSelectionTimeoutMS: 5000
//    })
//    .then(async (connection) => {
//       let db='e-comm';
//       console.log('database got...');
//       let collection = db.collection('products');
//      console.log(collection);
//      let response = await collection.find({}).toArray();
//      console.log(response);
   
//    })
//    .catch(err => console.log(err))


// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/e-comm',{
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// .then(db => console.log('DB is connected'))
// .catch(err => console.log(err));




////////////////////////                                                                                    2)
// const mongoose = require('mongoose');
// const { BlogSchema } = require('./Blogs/BlogSchema');
// //  const Blogs = require('../Blogs/BlogSchema');


// const main = async () =>
// {
  
//   mongoose.connect('mongodb://127.0.0.1:27017/blog');
//   console.log("connected .. ");
//   const Blogs = mongoose.model('blogs', BlogSchema);
//   let data = new Blogs({ subTitle :"gujarati writer", author :" oza "  }); 
//   // const newBlog = mongoose.model('blogs' , BlogSchema);
//   // let data = new newBlog ({ subTitle :"gujarati writer", author :"kajal oza "  });
//   const result = await data.save();
//   console.log(result);

// }
// main();
////////////////////////