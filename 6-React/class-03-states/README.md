# Class 03 States

### Rendering Flow

- When the status changes
- When the property changes
- When parent component renders
- Passing function is different from executing (infinite rendering)

### The key must be unique and not random

<pre>
["A", "B", "C", "D", "E"]
  0,   1,   2,   3,   4

["A", "B", "E", "D", "C"]
  0,   1,   2,   3,   4
</pre>

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
