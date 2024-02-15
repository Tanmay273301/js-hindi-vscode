// Dates

let myDate = new Date()
console.log(myDate);

console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toJSON());

console.log(typeof myDate);
console.log("________________________________________________________________________________________________________________________");


//let myCreatedDate = new Date(2024, 0,25 ,5,12,14)
let myCreatedDate = new Date("2024-02-10")
console.log(myCreatedDate.toLocaleString());

console.log("_______________________________________________________________________________________________________________________");

let myTimeStamp = Date.now()

console.log(myTimeStamp); // output in milisecond
console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));// convert to second

let newDate = new Date()
//console.log(newDate);
//console.log(newDate.getDay());

console.log(
    newDate.toLocaleString('default',{
        weekday: "long"
    }));