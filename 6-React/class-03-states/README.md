# Class 03 States

### Rendering Flow

- When the status changes
- When the property changes
- When parent component renders

### The key must be unique and not random

[1, 2, 3, 4, 5]
0, 1, 2, 3, 4

[1, 2, 5, 4, 3]
0, 1, 2, 3, 4

- Passing function is different from executing (infinite rendering)

### Closures

```js
function incrementNum() {
  setNum(num + 1);
  setNum(num + 1);
}

// log: "2"

function incrementNum() {
  setNum((prevState) => prevState + 1);
}

// log: "3"
```
