let marvel_heros = ["thor","Ironman","spiderman"]
let dc_heros = ["Superman","flash","batman"]
  // marvel_heros.push(dc_heros);

  //console.log(marvel_heros);// output = (4) ['thor', 'Ironman', 'spiderman', Array(3)]

//console.log(marvel_heros[3][2]); // output = batman

//let newArr = marvel_heros.concat(dc_heros) // create a new Array
//console.log(newArr); // output = (6) ['thor', 'Ironman', 'spiderman', 'Superman', 'flash', 'batman']

const all_heros = [...marvel_heros, ...dc_heros] //spread
//console.log(all_heros);

const another_arr = [4,5,7,[2,5,5],9,[1,4[2,5,6]]]

const real_another_arr = another_arr.flat(Infinity)

console.log(real_another_arr);



console.log(Array.isArray("Tanmay"));
const String  = "Tanmay";
const Arr1 = Array.from(String);
console.log(Arr1);

console.log(Array.isArray(Arr1));

console.log(Array.from({name:"Tanmay"}));// interesting

let score1 = 1000;
let score2 = 2000;
let score3 = 3000;

console.log(Array.of(score1,score2,score3));

console.log(Array.of(100,200,300));
console.log(Array.isArray(100,200,300));

