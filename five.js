
const express = require('express');
const { min } = require('lodash');
// const http = require('http');
// const app = express();

// let ser = http.createServer((req, resp) => resp.write('hello there!'), ser);
// app.listen(8000);

let a = function abc(x) {
    console.log("data : ", x);
    
}
a(1);

const prices = [10.99, 5.99, 3.99, 6.59];
const asum = prices.reduce((prev, next) => {
return prev + next;
},0 );
console.log(prices);
console.log(asum);

const numbers =[ 9, 8,6,5];
let maximum = -Infinity
let minimum = Infinity

for (const number of numbers) {
    if(number > maximum)
    maximum = number
    
    if(number < minimum)
    minimum = number
}
console.log(minimum)
console.log(maximum)