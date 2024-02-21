const userEmail = "t@tanmay@.ai"
const userEmail1 = ""  //output = false
const userEmail3 = [] // output = true
if (userEmail3) {
    console.log("got user email");
    
}
else{
    console.log("Don't have user email");
}

// falsy value 
//false, 0 , -0, BigInt 0n, "", null, undefined, Nan

//truthy value
// [], "0","false"," ", {}, function(){}

//if (userEmail1.length === 0) {
  //  console.log("Array is empty");
//}

const myObj = {}

if (Object.keys(myObj.length == 0)) {
    console.log("Object is empty");
}

//Nullish Coalescing Operator(??) : null , undefined

let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10

//val1 = undefined ?? 15

val1 = null ?? 10 ?? 20


console.log(val1);

// Terniary Operator

//condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")


