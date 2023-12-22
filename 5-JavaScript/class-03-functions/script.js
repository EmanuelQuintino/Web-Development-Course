// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions

// function statements

// named
function printText(text /*parameters*/) {
  console.log(text);
}

printText("Text"); //arguments
printText(123);

function sumNumbers(num1 = 0, num2 = 0) {
  const sum = num1 + num2; // key operator
  return sum;
}

console.log(sumNumbers(20, 3));

const resultSum = sumNumbers(2, 30);
console.log(resultSum);

// anonymous
const sumNumbers = function (num1, num2) {
  return num1 + num2;
};

// arrow *
const sumNumbers = (num1, num2) => num1 + num2;

console.log(sumNumbers(2, 5));
console.log(sumNumbers);

// callback
function show(item) {
  console.log(item);
}

function sumNumbersShow(num1, num2, callback) {
  let sum = num1 + num2;
  callback(sum);
}

sumNumbersShow(2, 3, show);

// factory (creational design pattern)

function person(name, age) {
  return {
    name,
    age,
    canDrive: age >= 18,
    status: () => {
      if (age >= 18) {
        return "Pode dirigir";
      } else {
        return "Não pode dirigir";
      }
    },
  };
}

console.log(person("Emanuel", 30));
console.log(typeof person("Emanuel", 30));
console.log(person("Emanuel", 30).status());
