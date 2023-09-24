// Array Manipulation

let myArray = Array(1, "a", () => "A");
console.log(myArray);
console.log(myArray.length);
console.log(myArray[2]());
console.log(myArray.join("_"));

let myName = "Emanuel";
console.log(Array.from(myName));
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

let index = techs.indexOf("Node.js"); // -1 not exist
console.log(index);

const indexSlice = techs.slice(1, -1);
console.log(indexSlice);

const arrayNums = [2, 3, 5, 1, 4];
console.log(arrayNums.slice(1, -3));

arrayNums.splice(-2, 2);
console.log(arrayNums);

console.log(arrayNums + techs);
console.log(arrayNums.concat(techs));
