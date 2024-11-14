class Bird {
  constructor() {
    this.skin = "feather";
    this.header = "beak";
  }

  action() {
    return "Fly!";
  }
}

class Chicken extends Bird {
  constructor() {
    super();
  }

  action() {
    return "run!";
  }
}

class Duck extends Bird {
  constructor() {
    super();
    this.footer = "webbed foot";
  }

  action() {
    return "swims";
  }
}

const myBird = new Bird();
const myChicken = new Chicken();
const myDuck = new Duck();

console.log(myBird.action());
console.log(myChicken.skin);
console.log(myDuck.footer);
console.log(myDuck.action());
