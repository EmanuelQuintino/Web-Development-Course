// Reference: https://developer.mozilla.org/en-US/docs/Web/API/setTimeout

console.log("Antes");

const timeOut = setTimeout(() => {
  console.log("setTimeOut");
}, 2000);

console.log("Depois");

// Reference: https://developer.mozilla.org/en-US/docs/Web/API/setInterval

let count = 0;
const interval = setInterval(() => {
  console.log("SetInterval");
  count++;
  if (count === 10) {
    clearInterval(interval);
  }
}, 1000);

console.log(timeOut);
console.log(interval);

const isFinish = false;
if (isFinish) {
  clearTimeout(timeOut);
  clearTimeout(interval);
}
