const fullName = "tanmay tripathi"
const repoCount = 40
//console.log(fullName + repoCount + " value");

console.log(`Hello my name is ${fullName} and my repoCount is ${repoCount}.`);

const fullName1 = new String("Tan-may-Trip-athi")

console.log(fullName1[0]);

console.log(fullName1.__proto__);
console.log(fullName1.length);
console.log(fullName1.toUpperCase());

console.log(fullName1.charAt(2));
console.log(fullName1.indexOf("t")); // find the position number


const newString = fullName.substring(0,5)
console.log(newString);

const anotherString = fullName.slice(-14,5)
console.log(anotherString);

const newStringOne = "    Tanmay    "
console.log(newStringOne);
console.log(newStringOne.trim()); // remove the starting & ending space


const url = "https://tanmay.com/tanmay%10tripathi"
console.log(url.replace('%10',"-"))

console.log(url.includes('sohel'));  // output is false

console.log(fullName1.split('-')); // convert the Array