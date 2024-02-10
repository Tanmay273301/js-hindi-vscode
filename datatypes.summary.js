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




