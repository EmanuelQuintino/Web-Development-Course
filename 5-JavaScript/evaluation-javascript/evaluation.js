// Question 1 (Data Types):

let number = 1;
let sting = "1";
let boolean = true;
let myFunction = () => {};
let array = [];
let object = {};

// Question 2 (Operators):

console.log(12 + 3);
console.log(12 - 3);
console.log(12 * 3);
console.log(12 / 3);
console.log(12 % 3);
console.log(12 ** 3);
console.log(144 ** (1 / 2));

// Question 3 (Functions):

function test(value) {
  return "JavaScript " + value;
}

console.log(test("test"));

// Question 4 (Data Manipulation):

const list = ["A", "B", "C"];
list.push("D");
list.shift();
list.unshift("E");
console.log(list);

// Question 5 (for):

for (let index = 0; index < list.length; index++) {
  console.log(list[index]);
}

for (const value of list) {
  console.log(value);
}

// Question 6 (while):

let count = 0;
while (count <= 500) {
  if (count < 200 || count >= 400) {
    console.log(count);
  }
  count++;
}

// Question 7 (if):

const speed = 75;
const maxSpeed = 60;

if (speed > maxSpeed || speed < maxSpeed / 2) {
  situation = "multado!";
} else {
  situation = "não multado!";
}

console.log(`Motorista ${situation}`);

// Question 8 (array methods):

const salary = [2000, 2800, 3000, 4000, 2200, 7500, 3650, 8000, 2000, 5000];
const newSalary = salary.map((salary) => (salary * 10) / 100 + salary);
const sumNewSalary = newSalary.reduce((a, b) => a + b);

console.log(sumNewSalary.toLocaleString("pt-br", { style: "currency", currency: "brl" }));
