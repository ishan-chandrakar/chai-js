// 2 categories based on how data is stored
// Primitive
    // 7 types - String, number, boolean, null, undefined, symbol, bigInt

// dynamically typed language

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id===anotherId);

const bigNumber = 1234n
console.log(typeof bigNumber);


// Non-primitive (reference)
    // Arrays, Objects, Functions

const heros = ["shakltiman", "spiderman", "ironman"]

let obj = {
    name: "ishan",
    age: 24
}

const myfunction = function(){
    console.log(obj);
}

console.log(typeof obj);

//  Arrays  =>  object
//  Function  =>  function
//  Object  =>  object