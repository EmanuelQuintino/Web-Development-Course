const nextYear = new Date().getFullYear() + 1;
const nextYearTime = new Date(`${nextYear}-01-01 00:00:00`);

const countdown = setInterval(() => {
  const dateNow = new Date();
  const timeLeft = nextYearTime - dateNow;
  const days = Math.floor(timeLeft / 1000 / 60 / 60 / 24);
  const hours = Math.floor(timeLeft / 1000 / 60 / 60) % 24;
  const minutes = Math.floor(timeLeft / 1000 / 60) % 60;
  const seconds = Math.floor(timeLeft / 1000) % 60;

  const displayDays = document.querySelector(".days");
  const displayHours = document.querySelector(".hours");
  const displayMinutes = document.querySelector(".minutes");
  const displaySeconds = document.querySelector(".seconds");

  const displayTime = (time, length) => String(time).padStart(length, 0);
  displayDays.innerHTML = displayTime(days, 3);
  displayHours.innerHTML = displayTime(hours, 2);
  displayMinutes.innerHTML = displayTime(minutes, 2);
  displaySeconds.innerHTML = displayTime(seconds, 2);
}, 1000);
