const express = require('express');

const app = express();

let reqFilter = (req, resp, next) => {
    console.log(" middleware here .");
    next();
}

app.use(reqFilter)

app.get('/', (r, s) => s.send(" welcome to middleware !  "))

app.listen(3000);