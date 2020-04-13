// Remove duplicate items from an array
function dedupe(array) {
  return [...new Set(array)];
}

module.exports = dedupe;
