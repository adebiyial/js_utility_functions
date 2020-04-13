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
