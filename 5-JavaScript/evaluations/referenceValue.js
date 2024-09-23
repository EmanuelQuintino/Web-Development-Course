// value

let a = 5;
let b = a;

function increment(value) {
  value++;
}

increment(a);

console.log(b);

a++;
b--;

console.log({ a, b });

// reference

const x = { number: 1 };
const y = x;

function incrementObj(obj) {
  obj.number++;
}

incrementObj(x);
console.log(y);

x.number++;
y.number++;

console.log({ x, y });

// shallow copy and deep copy

const user = {
  name: "user",
  age: 30,
  status: ["A", "B", "C"],
};

const shallowCopyUser = { ...user }; // spread operator
const deepCopyUser = structuredClone(user);
// const deepCopyUser = JSON.parse(JSON.stringify(user));

user.age++;
user.status[0] = "X";

console.log(shallowCopyUser);
console.log(deepCopyUser);
