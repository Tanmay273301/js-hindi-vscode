// for of

const arr = [1,2,3,4,5]

for (const num of arr) {

    //console.log(num);
    
}
//console.log(num);

const greetings = "hello world"

for(const num of greetings)
{
   // console.log(`Each char is: ${num}`);
}

// Maps all unique values

const map = new Map()
map.set('IN',"India")
map.set('USA',"united State of America")
map.set('Fr',"France")
map.set('IN',"India")
 
//console.log(map);

for (const [key, value] of map) {
   // console.log(key);
    //console.log(value);
    
}

const myObj = {
    game1: "NFS",
    game2: "Spiderman"
}

for(const num of myObj)
{
    //console.log(num); // not work
}