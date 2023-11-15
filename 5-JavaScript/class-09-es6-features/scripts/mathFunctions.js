// Reference: https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export

export function sumNumbers(num1 = 0, num2 = 0) {
  return num1 + num2;
}

function sum(num1, num2) {
  return num1 + num2;
}

function sub(num1, num2) {
  return num1 - num2;
}

function mul(num1, num2) {
  return num1 * num2;
}

function div(num1, num2) {
  return num1 / num2;
}

export { sum, sub, mul, div };
export const mathOperations = {
  sum,
  sub,
  mul,
  div,
};
