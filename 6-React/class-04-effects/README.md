# Class 04 Effect

- State and Lifecycle Component
- Derived States

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

## JavaScript Compilation

- ASI (Automatic Semicolon Insertion)
- Babel (ES6 to ES5) involves three main steps
  - Parser => map code to AST (Abstract Syntex Tree)
  - Transformer => AST manipulates (JSON)
  - Generator => AST to code
