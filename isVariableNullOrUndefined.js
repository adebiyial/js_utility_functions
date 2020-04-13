// returns true if value is null or undefined
function isVariableNullOrUndefined(variable) {
  const isNull = String(variable) === "null";
  const isUndefined = String(variable) === "undefined";
  const isNullOrUndefined = isNull || isUndefined;
  return (isNullOrUndefined && true) || false;
}

// String
const string = "Lionel Messi";
console.log(isVariableNullOrUndefined(string)); // false

// Undefined
let variable;
console.log(isVariableNullOrUndefined(variable)); // true

// Null
const emptyRef = null;
console.log(isVariableNullOrUndefined(emptyRef)); // true

// Number
const number = 5;
console.log(isVariableNullOrUndefined(number)); // false

// Object
const obj = {};
console.log(isVariableNullOrUndefined(obj)); // false

// Boolean
const boolean = true;
console.log(isVariableNullOrUndefined(boolean)); // false

// Array
const array = [1, 2, 3, 4, 5];
console.log(isVariableNullOrUndefined(array)); // false
