const dedupe = require("../functions/dedupe");

test("remove duplicates", () => {
  const arrayWithDuplicate = [1, 2, 3, 3, 2, 1];
  expect(dedupe(arrayWithDuplicate)).toStrictEqual([1, 2, 3]);
});
