// Remove duplicate items from an array
function dedupe(array) {
  return [...new Set(array)];
}

console.log(dedupe([1, 2, 3, 4, 4, 3, 2, 1]));
