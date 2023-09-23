// Array Manipulation

let myArray = Array(1, "a", () => "A");
console.log(myArray);
console.log(myArray.length);
console.log(myArray[2]());

let techs = ["HTML", "CSS", "Git"];

techs.push("JavaScript");
techs.pop(); // LIFO
let removeElementEnd = techs.pop();

techs.unshift("SQL");
techs.shift(); // FIFO
let removeElementStart = techs.shift();

console.log(`${removeElementEnd} foi removido do final!`);
console.log(`${removeElementStart} foi removido do início!`);

let indexSlice = techs.slice(1, -2);

let index = techs.indexOf("Git");
techs.splice(index, 1);
console.log(techs.splice(index, 1));
techs.splice(techs.indexOf("SQL"), 1);

console.log(index);
