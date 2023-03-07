const mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


const userSchema = new mongoose.Schema({
    name : { type: String },
    email :{ type: String  
    // match :[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'please valid email']
    },
    password: { type: String },
    role : { type: String ,
        // enum : ['user ' , 'publisher'] , 
        // default : 'user' }
    },
    token : { type : Buffer },
});

                                                        //middleware function for TOKEN <------------------

userSchema.methods.getSignToken = function(){
    console.log(process.env.JWT_SECRET);
    return jwt.sign({id:this._id} , process.env.JWT_EXPIRE,{expiresIn : process.env.JWT_EXPIRE})    //secretOrPrivateKey value <------------------
}


userSchema.methods.matchPass = async function(enteredpassword){
    return await bcrypt.compare(enteredpassword, this.password);
  
}



const Users = mongoose.model('users', userSchema);

module.exports = Users;