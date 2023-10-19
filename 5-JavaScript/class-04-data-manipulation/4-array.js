// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

const myArray = Array(1, "a", () => "A");

console.log(myArray);
console.log(myArray.length);
console.log(myArray[2]());
console.log(myArray.join("_"));

const myName = "Emanuel";

console.log(myName.split(""));
console.log(myName.split("").reverse().join(""));

const techs = ["HTML", "CSS", "Git"];

techs.push("JavaScript");
console.log(techs);

techs.pop(); // LIFO
console.log(techs);

const removeElementEnd = techs.pop();
console.log(`${removeElementEnd} foi removido do final!`);

techs.unshift("SQL");
console.log(techs);

techs.shift(); // FIFO
console.log(techs);

const removeElementStart = techs.shift();
console.log(`${removeElementStart} foi removido do início!`);

techs.push("React");
techs.push("Node.js");

console.log(techs);
console.log(techs.includes("React"));
console.log("A" == "a");

let index = techs.indexOf("Node.js"); // -1 not exist
console.log(index);

const indexSlice = techs.slice(1, -1);
console.log(indexSlice);

const arrayLetters = ["A", "B", "C", "D", "E", "F"];

const sliceNewArray = arrayLetters.slice(1, -3); // create new array
console.log(sliceNewArray);
console.log(arrayLetters);

const spliceNewArray = arrayLetters.splice(-2, 2); // modify array
console.log(spliceNewArray);
console.log(arrayLetters);

techs.splice(techs.indexOf("CSS"), 1);
techs.splice(1, 2, "Chat GPT", "Inglês");
console.log(techs);

console.log(arrayLetters + techs);
console.log(arrayLetters.concat(techs));
