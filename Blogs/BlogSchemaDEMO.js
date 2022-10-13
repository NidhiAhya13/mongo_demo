const mongoose = require('mongoose');
//const Mixed = require('mongoose/lib/schema/mixed');

const BlogSchema = new mongoose.Schema({
    // createdAt:{ type: Date}, 
    // updatedAt: { type: Date},                                     //manual date entry
    subTitle :{ type: String }, 
    author :{ type: String },
    Content: { type: String },                          // we can add          type : Mixed  ---->  Used for declaring paths in your schema that Mongoose's change tracking, casting, and validation should ignore.             
    isDeleted: { type: Boolean, default: false } ,
    status: { type: String, default: 'Active' },
    },
    {
        timestamps: true
    });

//  mongoose.model('blogs', BlogSchema);

// BlogSchema.query.byName = function(author) {
//     return this.where({ author: new RegExp(author, 'i') })
//   };



//  let hy =   BlogSchema.virtual()
//  console.log(person.toObject({ virtuals: true })); 

 module.exports = mongoose.model('blogs', BlogSchema);
         
 
                     
