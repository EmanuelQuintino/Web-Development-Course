# Class 09 Queries

## API (Application Programming Interface)

An API, or Application Programming Interface, is a set of rules, protocols, and tools that allows different software applications to communicate with each other. It defines the methods and data formats that developers can use to interact with a software component, service, or system. APIs are commonly used to enable integration between different software systems, allowing them to share data and functionality. They provide a standardized way for applications to interact, making it easier for developers to build software that works together seamlessly. APIs are widely used in web development, mobile app development, and many other areas of software engineering.

## useQuery

- queryKey
- queryFn
- data
- isLoading
- error

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
