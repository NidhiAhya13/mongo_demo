const BlogSchema = require('./BlogSchemaDEMO');

//ADD / POST  API ************************************************//
exports.addblog = async ( req , res , next ) =>
{
    try {

        console.log(req.body);
        let data = new BlogSchema(req.body);
        console.log(data);
        const result = await data.save();                                          //Blogschema.create ({ author : "nidhi ahya" ,               })  statically      will also work here  if dont want   to write data.save 
        console.log(result);
        res.send("added data...");
    }
    catch (error) {
        console.log(error);
        res.send({ status: 0, message: error });
    }
}

