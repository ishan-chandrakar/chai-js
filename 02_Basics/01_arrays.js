const myArr = [1,2,3,4,5]
const avtars = ["Narsimha", "Vaman", "Parshuram", "Ram"]

myArr.push(6)
console.log(myArr);

// array is stack based so copy by reference

myArr.pop()
console.log(myArr);

// shift removes first element from the array 
// unshift add an element to the 0th index changing the indices of whole array

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

// slice doesn't change the original array and range is not included

// splice cuts the specific part from the original arrayu including range

