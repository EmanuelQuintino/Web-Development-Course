# Class 03 State

## Component State

State in React refers to the local data that a component holds and can modify. It allows components to manage dynamic content and user interactions. When the state changes, React triggers a re-render of the component to reflect the updated state.

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

## Immutability

An immutable value is one whose content cannot be changed without creating an entirely new value.

```js
setItems((prevState) => [...prevState, newItem]);
```

## Key Props

The key must be unique and not random

- ID

<pre>
["A", "B", "C", "D", "E"]
  1,   2,   3,   4,   ?
</pre>

- Index

<pre>
["A", "B", "C", "D", "E"]
  0,   1,   2,   3,   4

["A", "B", "E", "D", "C"]
  0,   1,   2,   3,   4
</pre>

## Effects - Component Lifecycle

<img src="../documents/life-circle.png" alt="component-lifecycle" width="640">

- componentWillMount
- componentDidMount
- componentDidUpdate
- componentWillUnmount

- Derived States
