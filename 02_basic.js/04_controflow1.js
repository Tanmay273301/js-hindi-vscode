// if

//const isUserloggedIn = true
const temperature =  45

//if(temperature < 50){
  //  console.log("less than 50");

//}
//else{ 
//console.log("It is not less than 50");
//}

//const score = 200

//if(score > 100)
//{
  //  const power = "fly"
    //console.log(`User power: ${power}`);
//}
//console.log(`User power: ${power}`);

const balance = 1000

//if(balance > 500)  console.log("test"), console.log("test2"); // implicit scope

//if(balance < 500){
  //  console.log("less than 500");

//}
//else if(balance < 750)
//{
  //  console.log("less than 750");
//}
//else if(balance < 1000)
//{
  //  console.log("less than 1000");
//}
//else{
  //  console.log("greater than 1000");
//}

const isUserloggedIn = true
const debitCart  =  true
const loggedInFromGoogle = false 
const loggedInFromEmail = true

if(isUserloggedIn && debitCart && 2 == 2)
{
    console.log("Allow to buy courses");
}

if(loggedInFromGoogle || loggedInFromEmail)
{
    console.log("user logged in");
}