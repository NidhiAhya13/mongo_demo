const express = require('express');
const multer = require('multer');
const app = express();


const uploadFileDemo = multer({
 storage : multer.diskStorage({

    destination : function (req, file ,cb) 
    {
        cb( null, "uploads")
    },
    filename : function (req, file ,cb) 
    {
        cb( null, file.filename+"-"+Date.now()+".jpg")
    }
 })
}).single("user_file");


app.post("/upload", uploadFileDemo, (req, resp) => {
    resp.send(" file uploaded here .");
   
});

app.listen(9000);
