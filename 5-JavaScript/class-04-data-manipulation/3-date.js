// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

// new: left-hand-side expression
let dateNow = new Date();
let date1 = new Date("2023-09-27 12:03:19");
let date2 = new Date("2023-09-29 12:03:19");

console.log(Math.abs(date1 - date2) / 1000 / 60 / 60 / 24);

console.log(dateNow);
console.log(date1);

console.log(date2.toLocaleString("pt-BR"));
console.log(date2.toLocaleDateString("pt-BR"));
console.log(date2.toLocaleTimeString("pt-BR"));

let day = dateNow.getDay();
let date = String(dateNow.getDate()).padStart(2, "0");
let month = String(dateNow.getMonth()).padStart(2, "0");
let year = dateNow.getFullYear();

console.log(day); // 0 - 6
console.log(date);
console.log(month); // 0 - 11
console.log(year);

console.log(`${date}/${month}/${year}`);

dateNow.setDate(dateNow.getDate() + 30);
dateNow.setMonth(dateNow.getMonth() + 2);
dateNow.setFullYear(dateNow.getFullYear() + 3);

console.log(dateNow.toLocaleDateString("pt-BR"));

let hour = String(dateNow.getHours()).padStart(2, "0");
let minutes = String(dateNow.getMinutes()).padStart(2, "0");
let seconds = String(dateNow.getSeconds()).padStart(2, "0");
let milliseconds = String(dateNow.getMilliseconds()).padStart(3, "0");

console.log(`${hour}:${minutes}:${seconds}:${milliseconds}`);

dateNow.setHours(dateNow.getHours() + 1);
dateNow.setMinutes(dateNow.getMinutes() + 60);
dateNow.setSeconds(dateNow.getSeconds() + 60);

console.log(dateNow.toLocaleTimeString("pt-BR"));

console.log(
  dateNow.toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  })
);
