const accountId = 144553
let accountEmail = "tanmay@11.com"
var accountPassword = "123456"
accountCity = "Jaipur"
let accountState;

//accountId = 2
accountEmail = "tripathi123@gmail.com"
accountPassword = "6394"
accountCity = "Auraiya"

console.log(accountId);

/*
prefer not to use var
becaue of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])