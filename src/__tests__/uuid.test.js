const uuid = require("../functions/uuid");
const dedupe = require("../functions/dedupe");

test("return duplicates", () => {
  let ids = new Array(500).fill(null);
  ids = new Array(500).fill(null).map(() => uuid());

  expect(dedupe(ids)).toHaveLength(ids.length);
});
