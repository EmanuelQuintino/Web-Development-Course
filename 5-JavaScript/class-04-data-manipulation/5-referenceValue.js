// value

let a = 5;
let b = a;

a++;
b--;

console.log(a, b);

// reference

const x = { number: 1 };
const y = x;

x.number++;
y.number++;

console.log(x, y);

const z1 = [1, 2, 3];
const z2 = z1;

z2.push(4);

console.log(z1, z2);

// shallow copy and deep copy

const user = {
  name: "user",
  age: 30,
  status: ["A", "B", "C", [1]],
};

const shallowCopyUser = { ...user }; // spread operator
const deepCopyUser = structuredClone(user);
const deepCopyUserStringify = JSON.parse(JSON.stringify(user));

user.age++;
user.status[0] = "X";

console.log(user);
console.log(shallowCopyUser);

console.log(user.status);
console.log(shallowCopyUser.status);

console.log(deepCopyUser.status);
console.log(deepCopyUserStringify.status);

// object freeze
Object.freeze(user);

user.age++;
user.status[0] = "X";

console.log(user);

//deep freeze
function deepFreeze(object) {
  const keys = Reflect.ownKeys(object);

  for (let i = 0; i < keys.length; i++) {
    const value = object[keys[i]];

    if ((value && typeof value == "object") || typeof value == "function") {
      deepFreeze(value);
    }
  }

  return Object.freeze(object);
}

deepFreeze(user);

user.status[0] = "Zzzz";
user.status[3][1] = "Zzzz";
console.log(user);
