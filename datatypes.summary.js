// # Primitive 
// 7 types : String , Number , Boolean , Null, undefined , Symbol , BigInt 

const score = 100
const scoreValue = 100.3

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

//const bigNumber = 32548648612145862n

//Reference(non-primitive) 

// Array , objects , Functions

const heros = ["shaktiman","naagraj", "doga"] // array
let myObj =  { 

    fullName: "Tanmay",
    age:       22
}


const myFunction = function(){
    console.log("Hello World");

}

console.log(typeof bigNumber); // undefined

console.log(typeof heros); // object

console.log("____________________________________________________________________________________________________");

//******************************************************************************************************************************* */

// Stack(primitive) & heap memory(non-primitive)

let fullName = "Tanmay  Tripathi"
let anotherName = fullName
 anotherName = "Sohel"
console.log(fullName);  // No change original value
console.log(anotherName);
console.log("______________________________________________________________________________________________________________________");

// Heap memory

let userOne = {
    email: "user@google.com",
    upi:   "user@ybl"

}
let userTwo = userOne
userTwo.email = "tanmay@google.com"
console.log(userOne); // change the original value
console.log(userTwo);






