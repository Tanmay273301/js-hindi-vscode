const user = {
    username: "Tanmay",
    price :  999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website.`);
        console.log(this);
    }

}

//user.welcomeMessage()
//user.username = "Tripathi"
//user.welcomeMessage()

//console.log(this);// output = {} empty

//function chai(){
  //  let username = "Sam"
    //console.log(this);
    //console.log(this.username); // undefined
//}

//chai()


const chai = () => {
    let username = "Tanmay Tripathi"
    console.log(this);
}
//chai()

//const addTwo = (num1,num2) =>{ // arrow function
  //  return num1 + num2

//}

//const addTwo = (num1,num2) => num1 +  num2 // implicit arrow function
//const addTwo = (num1,num2) => (num1 +  num2) // implicit arrow function

const addTwo = (num1,num2) => ({username:"Tanmay"}) // object


console.log(addTwo(85,456))

