const accountId = 144553
let accountEmail ="rajmourya@gmail.com"
var accountPassword = "123450"
accountCity ="Bareilly"
let accountState;
//accountId = 2 // not allowed

accountEmail = "hiu@gmail.com"
accountPassword = "2124121"
accountCity = "rudrapur"
console.log(accountId);


/*
Prefer not to use var
because of isuue in block scope and functional scope
*/

console.table({accountId,
     accountEmail, 
     accountPassword, 
     accountCity, 
     accountState});

