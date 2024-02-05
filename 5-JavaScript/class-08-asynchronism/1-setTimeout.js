// Reference: https://developer.mozilla.org/en-US/docs/Web/API/setTimeout

console.log("Antes");

const timeoutID = setTimeout(() => {
  console.log("setTimeOut");
}, 2000);

console.log("timeout", timeoutID);
console.log("Depois");

// Reference: https://developer.mozilla.org/en-US/docs/Web/API/setInterval

let count = 10;
const intervalID = setInterval(() => {
  console.log("SetInterval");
  count--;
  if (count <= 0) {
    clearInterval(intervalID);
  }
}, 1000);

console.log("interval", intervalID);

const isFinish = false;
if (isFinish) {
  clearTimeout(timeoutID);
  clearTimeout(intervalID);
}
