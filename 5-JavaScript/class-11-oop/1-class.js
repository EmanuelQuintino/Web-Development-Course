// Reference: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_programming

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.canDrive = age >= 18;
    this.status = () => {
      if (this.canDrive) {
        return "Pode dirigir";
      } else {
        return "Não pode dirigir";
      }
    };
  }
}

const person1 = new Person("Emanuel", 30);
// console.log(person1.status());
// console.log(typeof person1);
