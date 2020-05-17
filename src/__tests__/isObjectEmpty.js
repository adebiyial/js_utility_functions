const isObjectEmpty = require("../functions/isObjectEmpty");

test("returns true if object is empty", () => {
  const emptyObject = {};
  expect(isObjectEmpty({object: emptyObject})).toBeTruthy();

  const filledObject = {name: "adebiyi adedotun"};
  expect(isObjectEmpty({object: filledObject})).toBeFalsy();
});
