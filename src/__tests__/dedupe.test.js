const dedupe = require("../functions/dedupe");

test("remove duplicates", () => {
  const arrayWithDuplicate = [1, 2, 3, 3, 2, 1];
  expect(dedupe({array: arrayWithDuplicate})).toStrictEqual([1, 2, 3]);
});
