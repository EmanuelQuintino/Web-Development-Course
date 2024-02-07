// Reference: https://developer.mozilla.org/en-US/docs/Glossary/Call_stack

function sayHi() {
  // throw new Error("Call Stack Error!");
  return "Hi!";
}

function greeting() {
  return sayHi();
}

function printGreeting() {
  console.log(greeting());
}

printGreeting();

function exceededCallStack() {
  exceededCallStack();
}

exceededCallStack();
