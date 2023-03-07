const jwt = require('jsonwebtoken');
const Users = require('./user/userSC');

//route

exports.protect = async (req, res, next) =>{
   let token ;

   if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];

    console.log(token);
    
   }

   if (!token) {
    
    return next('No TOKEN IS THERE  ', 501);
   }

   try {
    const decoded = jwt.sign(token , process.env.JWT_SECRET) ;
    console.log(decoded);

     req.Users = await Users.findById(decoded.id);
     console.log(decoded.id);
    next();
   } catch (error) {
    return next('not autherised party.', 402);
   }

}