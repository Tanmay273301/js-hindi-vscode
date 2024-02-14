const score = 400

const balance = new Number(100)
console.log(balance);
console.log(score);

console.log(typeof balance.toString());
console.log( balance.toString().length);

console.log( balance.toFixed(5));

const otherNumber = 123.8976

console.log(otherNumber.toPrecision(4));

const hundred = 1000000
console.log(hundred.toLocaleString('en-IN'));

console.log("__________________________________________________________________________________________________________________________");

//++++++++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math);

console.log(Math.abs(-4));

console.log(Math.round(5.248)); // output = 5
console.log(Math.ceil(5.1)); // output = 6
console.log(Math.floor(5.8));  // output = 5

console.log(Math.min(4,5,1,9));

console.log(Math.max(4,5,1,9));

console.log("_____________________________________________________________________________________________");
console.log(Math.random());
console.log((Math.random() *10) + 1);

console.log("__________________________________________________________________________________________");

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1) + min));



