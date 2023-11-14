//  Factory (Creational Design Pattern)

function person(name, age) {
  return {
    name,
    age,
    canDrive: age >= 18,
    status: () => {
      if (age >= 18) {
        return "Pode dirigir";
      } else {
        return "Não pode dirigir";
      }
    },
  };
}

console.log(person("Emanuel", 30));
console.log(typeof person("Emanuel", 30));
console.log(person("Emanuel", 30).status());
