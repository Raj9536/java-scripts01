// dates

let myDate = new Date()
console.log(myDate.toString()); 
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate); //date is a object in js

// let myCreatedDate = new Date(2024, 0, 23)
// let myCreatedDate = new Date(2024, 0, 23, 5, 3)

let myCreatedDate = new Date("01-14-2024")
console.log(myCreatedDate.toLocaleString());

// let myTimeStamp = Date.now()
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());