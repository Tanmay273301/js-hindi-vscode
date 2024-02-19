

function mySayName(){
console.log("T");
console.log("A");
console.log("N");
console.log("M");
console.log("A");
console.log("Y");

}

//mySayName()

//function addTwoNumbers(Number1,Number2){
 //  console.log(Number1 + Number2); 

//}  

//const result = addTwoNumbers(85,30) // output - 115
//console.log("Result" ,result); // undefined

function addTwoNumbers(Number1,Number2){
    let result = Number1 + Number2
    console.log("Namaste"); 
    return result
    console.log("Hello"); 
 
 }



//const result = addTwoNumbers(85,30) // output - 115
//console.log("Result" ,result); 

//addTwoNumbers(85,null) // 85
//addTwoNumbers(85,"25") // 8525

function loginUserMessage(username ){
    if(username === undefined)
    {
        console.log("please enter a user name");
        return
    }
    return `${username} just logged in`
}
//console.log(loginUserMessage("Tanmay"));// output = Tanmay just logged in
//console.log(loginUserMessage(""));// just logged in
//console.log(loginUserMessage());// undefined just logged in

function calculateCartPrice(...num1){ // rest function
    return num1
}
//console.log(calculateCartPrice(200,1000,5879,4566)); // (4) [200, 1000, 5879, 4566]


function calculateCartPrice1(val1,val2,...num1){ // rest function
    return num1
}
//console.log(calculateCartPrice1(200,1000,5879,4566)); // (2) [5879, 4566]

const user = {
    username:"Tanmay Tripathi",
    price: 999
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}.`);
}

handleObject(user)

const myNewArray = [254,456,13,28]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));



