## What's this?

Just functions I use while developing. It's imperfect but I'm learning.

```javascript
function isVariableNullOrUndefined(variable) {
  const isNull = String(variable) === "null";
  const isUndefined = String(variable) === "undefined";
  const isNullOrUndefined = isNull || isUndefined;
  return (isNullOrUndefined && true) || false;
}
```

```javascript
function uuid(seed = 100) {
  const {random} = Math;

  return random()
    .toString(36)
    .substring(2, 2 + seed);
}
```

```javascript
// Remove duplicate items from an array
function dedupe(array) {
  return [...new Set(array)];
}
```
