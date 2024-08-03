// singleton

// object literals
Object.create
const mySym = Symbol("key1")

const JsUser ={
    name: 'Raj Mourya',
    age: 21,
    [mySym]: "mykey1",
    location: "Bareilly",
    email : "rajmourya@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday","saturday"],
    "full name": "Raj Mourya"
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]); // syntax for symbol

// JsUser.email = "rajmourya@gpt.com"
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello js user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello js user,${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

