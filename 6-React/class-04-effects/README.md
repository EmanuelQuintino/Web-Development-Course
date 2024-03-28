# Class 04 Effects

![component-lifecycle](../documents/life-circle.png)

- State and Lifecycle

  - componentWillMount
  - componentDidMount
  - componentDidUpdate
  - componentWillUnmount

- Derived States

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
