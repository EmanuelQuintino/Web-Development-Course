# Class 02 Components

## Component

- Props
- Types

## TypeScript

- Static
- Inference
- Generics
- Assertion

```ts
type User = {
  name: string;
  age: number;
};

function user(user: User) {
  console.log(user);
  console.log(user.name);
  console.log(user.age);
}

user({ name: "Emanuel", age: 30 });
```
