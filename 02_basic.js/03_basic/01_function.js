

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
console.log(loginUserMessage("Tanmay"));// output = Tanmay just logged in
console.log(loginUserMessage(""));// just logged in
console.log(loginUserMessage());// undefined just logged in