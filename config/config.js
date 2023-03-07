
const mongoose = require('mongoose');
 mongoose.connect('mongodb://127.0.0.1:27017/blog' , {
    useNewUrlParser: true,
    // useCreateIndex:true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000
 }) .then(() => console.log('DB is connected'))
  .catch(err => console.error('Something went wrong', err));


