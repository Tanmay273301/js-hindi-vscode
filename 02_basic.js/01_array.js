// array

const myArr = [0,1,2,3,4,5]
const myHeroes = ["shaktiman","naagraj"]

const myArr2 = new Array(1,2,3)
//console.log(myArr[0]);

//array method

//myArr.push(6)
//myArr.push(7)
//myArr.pop()  // remove the last value

myArr.unshift(8)  // firstly insert the value
myArr.shift()

//console.log(myArr.includes(9));
//console.log(myArr.indexOf(9)); // output = -1

//const newArr = myArr.join() // convert in string


//console.log(myArr);
//console.log(newArr);

// slice & splice

console.log("A",myArr);

const myn1 = myArr.slice(1,3)
console.log("B",myn1);

const myn2 = myArr.splice(1,3)
console.log("C", myn2);
console.log(myArr);

