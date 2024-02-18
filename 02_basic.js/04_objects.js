//const FacebookUser = new Object()
const FacebookUser = {}


FacebookUser.id = "125abc"
FacebookUser.name = "Tanmay Tripathi"
FacebookUser.isLoggedIn = false

//console.log(FacebookUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userFullname: {
            firstname: "Tanmay",
            lastname:  "Tripathi"
        }

    }

}

//console.log(regularUser.fullname.userFullname.firstname);


const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "c",
    4: "d"
}

//const obj3 = {obj1,obj2}
//const obj3 = Object.assign({},obj1,obj2)// target and source
const obj3 = {...obj1,...obj2}
//console.log(obj3);

//console.log(FacebookUser);

//console.log(Object.keys(FacebookUser));  // output =  ['id', 'name', 'isLoggedIn']
//console.log(Object.values(FacebookUser));// output =   (3) ['125abc', 'Tanmay Tripathi', false]

//console.log(Object.entries(FacebookUser));

//console.log(FacebookUser.hasOwnProperty('isLoggedIn'));// true


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Tanmay"
}

//course.courseInstructor

const {courseInstructor: instructor} = course
//console.log(courseInstructor);

console.log(instructor);

// json

//{
   // "name": "Tanmay",
   // "coursename": "js in hindi",
   // "price":  "free"
//}

