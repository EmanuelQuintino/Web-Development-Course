class AirControl {
  constructor(temp, color) {
    this.color = color;
    this.temp = temp;
    this.isOn = false;
  }

  power() {
    this.isOn = !this.isOn;
  }

  up() {
    if (this.temp < 30) {
      this.temp++;
    }
    return this.temp;
  }

  down() {
    if (this.temp > 16) {
      this.temp--;
    }
    return this.temp;
  }
}

const airControl1 = new AirControl(18, "Branco");
const airControl2 = new AirControl(22, "Preto");

console.log(airControl1.temp);
console.log(airControl2.temp);
console.log(airControl2.color);

airControl1.power();
airControl1.power();
console.log(airControl1.isOn);

airControl1.down();

console.log(airControl1.temp);

const buttonUpper = document.querySelector(".buttonUpper");
const buttonLower = document.querySelector(".buttonLower");
const buttonPower = document.querySelector(".buttonPower");
const display = document.querySelector(".display");

buttonUpper.addEventListener("click", () => {
  airControl1.up();
  display.innerHTML = airControl1.up();
});

buttonLower.addEventListener("click", () => {
  airControl1.down();
  display.innerHTML = airControl1.down();
});

buttonPower.addEventListener("click", () => {
  airControl1.power();
  display.innerHTML = airControl1.isOn;
});
