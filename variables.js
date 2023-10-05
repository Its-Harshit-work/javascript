//Mera Apna Code
// let, var aur char ki kahani
var x = 7;
let e = 41;

if(e<50){
    var x = 45;
}
console.log(x);
let iceCream = "chocolate";
if (iceCream == 5) {
  console.log("Yay, I love chocolate ice cream!");
} else {
    console.log("Awwww, but chocolate is my favorite…");
}

const accountId = 144553
let accountEmail = "harshitfromxyz@google.com"
var accountPassword = "12345"
accountCity = "New Delhi"
let accountState;

// accountId = 2 // not allowed


accountEmail = "helloindia@test.com"
accountPassword = "21212121"
accountCity = "Ayodhya Nagri"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
