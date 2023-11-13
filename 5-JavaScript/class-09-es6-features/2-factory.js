//  Factory (Creational Design Pattern )

function person(name, age) {
  return {
    name,
    age,
    canDrive: age >= 18,
    status: function status() {
      if (this.age > 18) {
        return "Pode dirigir";
      } else {
        return "Não pode dirigir";
      }
    },
  };
}

const person2 = person("Emanuel", 30);
console.log(typeof person2);
console.log(person2.status());
