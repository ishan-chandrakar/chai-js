let score = "33abc"

let valueInNumber = Number(score)
// console.log(valueInNumber);

// console.log(typeof valueInNumber);

// Number(nonConvertableString) => NaN
// Number(null) => 0
// Number(undefined) => NaN
// Number(true) => 1

let isLoggedIn = "ishan"
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// Boolean(1) => true  Boolean(0) => false
// Boolean("") => false  Boolean("ishan")  => true

let someNumber = 123
let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);



//                              Operations

let str1 = "hello"
let str2 = " world"
let str3 = str1+str2
// console.log(str3);

// console.log("1" + 2);

// console.log(1 + 2 + "2");

// prefix => update before operation
// postfix => update after operation
let counter = 1
console.log(counter++);

console.log(++counter);

