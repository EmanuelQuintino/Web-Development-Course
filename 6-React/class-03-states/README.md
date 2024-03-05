# Class 03 States

## React Render Flow

- When the state or property changes
- When parent component renders
- Passing function is different from executing (infinite rendering)

## Closures

A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment)

```js
function outerFunction() {
  const outerVariable = "lexical environment";

  function innerClosureFunction() {
    console.log(outerVariable);
  }

  innerClosureFunction();
}

outerFunction();
```

In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

```js
function incrementNum() {
  setNum(num + 1);
  setNum(num + 1);
}

// log: "1"

function incrementNum() {
  setNum((prevState) => prevState + 1);
  setNum((prevState) => prevState + 1);
}

// log: "2"
```
