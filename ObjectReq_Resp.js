const express = require('express');
// const fs = require('fs');

const app = express();

app.listen(8000);

app.get("/help", (req, resp) => { resp.send("welcome to help page .. how can i help you?"); })                     //       route using / name link
app.get("", (req, resp) => { resp.send('<h1>welcome to help page .. how can i help you?</h1>'); })                 //       normal data
app.get("/datainfo", (req, resp) => {
    resp.send({
    name : "nids",
    email :"nids13@gmail.com"                                                                                      //object data
    });
})
