# Class 09 Queries

## useQuery

- queryKey
- queryFn
- data
- isLoading
- error

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
