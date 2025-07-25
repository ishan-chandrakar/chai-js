const name ="ishan"
const repoCount = 2

// console.log(`Hello my name is ${name.toUpperCase()} and repo count is ${repoCount}`);

const nameObject = new String("ishan-chandrakar-raipur")
// console.log(nameObject.toUpperCase());
// console.log(nameObject.indexOf('i'));

const newString = nameObject.substring(1,5)
// start => included ,  end => excluded
// negative indices are treated as 0
console.log(newString);

const anotherString = nameObject.slice(1,5)
// negative values can be given
console.log(anotherString);

// trim() removes spaces from start and end

console.log(nameObject.replace('a', 'k'));
// replaces the present value to desired value

console.log(nameObject.includes('isht'));
// returns true or false

console.log(nameObject.split('-'));
// returns array are spliting the string
