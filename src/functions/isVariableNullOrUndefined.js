// returns true if value is null or undefined
function isVariableNullOrUndefined(variable) {
  const isNull = String(variable) === "null";
  const isUndefined = String(variable) === "undefined";
  const isNullOrUndefined = isNull || isUndefined;
  return (isNullOrUndefined && true) || false;
}

module.exports = isVariableNullOrUndefined;
