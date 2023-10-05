// Reference: https://developer.mozilla.org/en-US/docs/Glossary/Hoisting

let num = "global";
const pi = 3.14;

// var num = "global";
// var num

console.log(num);
console.log(pi);

{
  let num = "local";
  num = "changed";

  // pi = 3;

  // var num = "local";
  // var pi = 1

  console.log(num);
  console.log(pi);
}

console.log(num);
console.log(pi);
