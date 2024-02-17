//Object.create // singleton

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Tanmay",
    [mySym]: "myKey1", // use in symbool
    age: 22,
    add: "jaipur",
   email: "tanmay@google.com",
    isLogged: false,
    lastLogginDays: ["monday","tuesday"]
}

//console.log(JsUser.email);
//console.log(JsUser["email"]);
//console.log( JsUser[mySym]);

//console.log( typeof JsUser[mySym]);

JsUser.email = "tripathi@google.com"
//Object.freeze(JsUser) // locked object
JsUser.name = "Rahul"

//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello js user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello js user :${this.name}`);
}


console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());