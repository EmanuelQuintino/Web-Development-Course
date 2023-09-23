// Date Manipulation

// new: left-hand-side expression
let dateNow = new Date();
let date1 = new Date("2022-03-01 12:03:19");
let date2 = new Date("2022-04-01 12:03:19");

// document.write(dateNow);
// let hour = dateNow.getHours();
// let minutes = dateNow.getMinutes();
// let seconds = dateNow.getSeconds();
// let milliseconds = dateNow.getMilliseconds();

document.write(
  `${String(hour).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(
    seconds
  ).padStart(2, "0")}:${String(milliseconds).padStart(3, "0")}`
);

date1.setHours(date1.getHours() - 3);
date1.setMinutes(date1.getMinutes() + 60);
date1.setSeconds(date1.getSeconds() + 60);

document.write(date1.toLocaleTimeString("pt-BR"));

let day = dateNow.getDay();
let date = dateNow.getDate();
let month = dateNow.getMonth() + 1;
let year = dateNow.getFullYear();
let minutes = date1.getMinutes();
let seconds = date1.getSeconds();

document.write(day + 1); // 0 - 6
document.write(date);
document.write(month + 1); // 0 - 11
document.write(year);

document.write(
  `${String(date).padStart(2, "0")}/${String(month).padStart(2, "0")}/${year}`
);

dateNow.setDate(dateNow.getDate() + 30);
dateNow.setMonth(dateNow.getMonth() + 2);
dateNow.setFullYear(dateNow.getFullYear() + 30);

document.write(
  dateNow.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  })
);

//narrow, short, long
const formatOptions = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
document.write(Intl.DateTimeFormat("pt-BR", formatOptions).format(dateNow));

document.write(dateNow.toLocaleString("pt-BR"));

//   s      m    h    d
document.write(Math.abs(date1 - date2) / 1000 / 60 / 60 / 24);
