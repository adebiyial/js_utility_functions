// Returns a random string
function uuid(seed = 100) {
  const {random} = Math;

  return random()
    .toString(36)
    .substring(2, 2 + seed);
}

console.log(uuid());
