// Returns true if object is empty
function isObjectEmpty({object}) {
  return Object.keys(object).length === 0;
}

module.exports = isObjectEmpty;
