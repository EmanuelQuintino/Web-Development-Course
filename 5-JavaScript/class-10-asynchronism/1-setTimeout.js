// setTimeout

console.log("Antes");
let timeOut = setTimeout(() => {
  console.log("Test TimeOut ms");
}, 2000);
console.log("Depois");

let count = 0;
const array = [12, 28, 33, 46, 52, 59];
const newArray = [];
let interval = setInterval(() => {
  console.log("SetInterval");
  newArray.push(array[count]);

  let numbers = document.querySelector(".numbers");
  numbers.innerHTML = newArray.join("-");

  if (array.length == newArray.length) {
    clearInterval(interval);
  }

  count++;
}, 1400);

console.log(timeOut);
console.log(interval);

let isFinish = false;
if (isFinish) {
  clearTimeout(timeOut);
  clearTimeout(interval);
}
