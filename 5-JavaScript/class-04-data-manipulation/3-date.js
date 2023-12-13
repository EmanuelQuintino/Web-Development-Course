// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

// new: left-hand-side expression
const dateNow = new Date();

console.log(dateNow);
console.log(new Date().getTime());

console.log(dateNow.toLocaleString("pt-BR"));
console.log(dateNow.toLocaleDateString("pt-BR"));
console.log(dateNow.toLocaleTimeString("pt-BR"));

console.log(dateNow.getDay()); // 0 - 6
console.log(dateNow.getDate());
console.log(dateNow.getMonth()); // 0 - 11
console.log(dateNow.getFullYear());

dateNow.setDate(dateNow.getDate() + 30);
dateNow.setMonth(dateNow.getMonth() + 12);
dateNow.setFullYear(dateNow.getFullYear() + 10);

console.log(dateNow.toLocaleDateString("pt-BR"));

console.log(dateNow.getHours());
console.log(dateNow.getMinutes());
console.log(dateNow.getSeconds());
console.log(dateNow.getMilliseconds());

dateNow.setHours(dateNow.getHours() + 23);
dateNow.setMinutes(dateNow.getMinutes() + 60);
dateNow.setSeconds(dateNow.getSeconds() + 60);
dateNow.setMilliseconds(dateNow.getMilliseconds() + 1000);

console.log(dateNow.toLocaleTimeString("pt-BR"));

console.log(
  dateNow.toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  })
);

const date1 = new Date("2023-12-27");
const date2 = new Date("2023-09-25");
console.log((date1 - date2) / 1000 / 60 / 60 / 24); // days
