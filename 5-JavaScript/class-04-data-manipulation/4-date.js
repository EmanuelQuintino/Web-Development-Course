// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

// new: left-hand-side expression
const dateNow = new Date();

console.log(dateNow);
console.log(new Date().getTime());

console.log(dateNow.toLocaleString("pt-BR"));
console.log(dateNow.toLocaleDateString("pt-BR"));
console.log(dateNow.toLocaleTimeString("pt-BR"));
console.log(dateNow.toLocaleDateString("pt-BR"));

console.log(
  dateNow.toLocaleString("pt-BR", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })
);

console.log(dateNow.getDay()); // 0 - 6
console.log(dateNow.getDate());
console.log(dateNow.getMonth()); // 0 - 11
console.log(dateNow.getFullYear());

console.log(dateNow.getHours());
console.log(dateNow.getMinutes());
console.log(dateNow.getSeconds());
console.log(dateNow.getMilliseconds());

const createDate = new Date("2024-01-10T00:00:00");
console.log(createDate);

createDate.setDate(createDate.getDate() + 30);
createDate.setMonth(12);
createDate.setFullYear(10);

createDate.setHours(23);
createDate.setMinutes(60);
createDate.setSeconds(60);
createDate.setMilliseconds(1000);

console.log(createDate.toLocaleTimeString("pt-BR"));

const date1 = new Date("2023-12-27");
const date2 = new Date("2023-09-25");
console.log((date1 - date2) / 1000 / 60 / 60 / 24); // days
