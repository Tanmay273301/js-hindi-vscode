const myObj = {
    js: "javaScript",
    cpp: "c++",
    rb:  "ruby",
    swift: "swift by app"
}

for(const key in myObj)
{
    //console.log(key);

    //console.log(`${key} shortcut is for ${myObj[key]}`);
}

const programming = ["js","cpp","rb","py"]

for(const num in programming)
{
    //console.log(num);
    //console.log(programming[num]);
}

const map = new Map()
map.set('IN',"India")
map.set('USA',"united State of America")
map.set('Fr',"France")
map.set('IN',"India")
 
for(const key in map)
{
    //console.log(key);// not work
} 

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ for each loop ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const coding = ["js","ruby","java","python","cpp"]

coding.forEach(function (items){
    //console.log(items);
})

coding.forEach( (val) => {
  //console.log(val);
})

function printMe(item){
   // console.log(item);
}

coding.forEach(printMe)

coding.forEach( (item,index,arr) => {
   // console.log(item,index,arr);
})

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})
