const isVariableNullOrUndefined = require("../functions/isVariableNullOrUndefined");

test("returns true if a variable is null or undefined, or otherwise false", () => {
  // String
  const string = "Lionel Messi";
  expect(isVariableNullOrUndefined(string)).toBeFalsy();

  // Undefined
  let variable;
  expect(isVariableNullOrUndefined(variable)).toBeTruthy();

  // Null
  const emptyRef = null;
  expect(isVariableNullOrUndefined(emptyRef)).toBeTruthy();

  // Number
  const number = 5;
  expect(isVariableNullOrUndefined(number)).toBeFalsy();

  // Object
  const obj = {};
  expect(isVariableNullOrUndefined(obj)).toBeFalsy();

  // Boolean
  const boolean = true;
  expect(isVariableNullOrUndefined(boolean)).toBeFalsy();

  // Array
  const array = [1, 2, 3, 4, 5];
  expect(isVariableNullOrUndefined(array)).toBeFalsy();
});
