
const mongoose = require('mongoose');
const userSchema = require('../user/userSC');

//const Mixed = require('mongoose/lib/schema/mixed');

const BlogSchema = new mongoose.Schema({
    // createdAt:{ type: Date}, 
    // updatedAt: { type: Date}, 
    BlogId :{ type: mongoose.Schema.Types.ObjectId,
        ref: 'users'}   ,                            //manual date entry
    subTitle :{ type: String }, 
    author :{ type: String , required : [true , 'Please add author name. ']},
    Content: { type: String },
    tutionFee : { type: Number },                          // we can add          type : Mixed  ---->  Used for declaring paths in your schema that Mongoose's change tracking, casting, and validation should ignore.             
    isDeleted: { type: Boolean, default: false } ,
    status: { type: String, default: 'Active' },
     averageCost : { type: Number },
     // email :{ type: mongoose.Schema.Types.ObjectId , ref : 'users'},
     
    
     password: { type: String , minlength : 8 , maxlength : 25 }, 
    },
    {
        timestamps: true
    });

//  mongoose.model('blogs', BlogSchema);

// BlogSchema.query.byName = function(author) {
//     return this.where({ author: new RegExp(author, 'i') })
//   };

// populate  ************************************************//

//  let hy =   BlogSchema.virtual()
//  console.log(person.toObject({ virtuals: true })); 
                                                                        
 module.exports = mongoose.model('blogs', BlogSchema);

         
 
                     
