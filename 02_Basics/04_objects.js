const tinderUser = new Object()
// const tinderuser{}

tinderUser.id ="123abc"
tinderUser.name = "John Doe"
tinderUser.isLoggesIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullName:{
        userfullname:{
            firstname: "raj",
            lastname: "kumar"
        }
    }
}

// console.log(regularUser.fullName.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2}
// const obj3=Object.assign(obj1,obj2)

const obj3 = {...obj1,...obj2}
// console.log(obj3);

const users = {
    id: 1,
    email: "h@gamil.com"
}

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggesIn"));

const course ={
    name: "javascript",
    price: "999",
    instructor:"raj"
}

// course.instructor

const {instructor: instructor} =course
// console.log(instructor);
// console.log(course);

