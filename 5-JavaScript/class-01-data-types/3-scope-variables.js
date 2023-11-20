// Reference: https://developer.mozilla.org/en-US/docs/Glossary/Hoisting

let num = 10; // global
const pi = 3.14;
var userName = "Emanuel";

pi = 100; // const error

console.log(num);
console.log(pi);

{
  let num = 20; // local
  num = "changed";

  var userName = "Quintino";

  console.log(num);
  console.log(pi);
  console.log(userName);
}

console.log(num);
console.log(pi);
console.log(userName);
