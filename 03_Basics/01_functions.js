// console.log("h");
// console.log("i");
// console.log("j");
// console.log("k");
// console.log("l");

function sayMyName(){
    console.log("h");
console.log("i");
console.log("j");
console.log("k");
console.log("l");
}

// sayMyName()

// function addTwoNumbers(Number1, Number2){
    // console.log( Number1 + Number2);
// }
// function addTwoNumbers(Number1, Number2){
//     console.log( Number1 + Number2);
// }


// addTwoNumbers(3,4)
// addTwoNumbers(3,"4")
// addTwoNumbers(3,'a')

// const result = addTwoNumbers(3,5)
// // console.log(result) // undefined


// function loginUserMessage(username){
//     if(username===undefined){
//         console.log("Please enter your username");
//         return
//     }
//     return `${username} just logged in`
// }
    // console.log(loginUserMessage("John"))
    // console.log(loginUserMessage())

function calculateCartPrice(...num1){  //rest operator
      return num1
}

// console.log(calculateCartPrice(200,400,500));


const user ={
    name: "John",
    price: "99"
}
function handleObject(anyobject){
    console.log(`username ${anyobject.name} and price is ${anyobject.price}`);
    
}

handleObject({
    name: "Johraj",
    price: "200"
})


const mynewarray = [5000, 500, 400, 200]
function handleArray(...array){
    return (array)
}   

console.log(handleArray(mynewarray));
