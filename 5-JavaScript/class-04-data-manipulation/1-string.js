// String Manipulation

// Prototype (Chain)

let myName = "Emanuel";

console.log(myName.__proto__);

let phrase = "Eu sou Web Developer";

console.log(myName.length);
console.log(myName[1]);
console.log(myName.toLocaleUpperCase());

console.log(typeof phrase.split(" ")[2]);
console.log(phrase.split(" ").join("_"));

console.log(phrase.includes("web")); //case-sensitive
console.log("Web" == "web");
console.log(phrase.toLocaleLowerCase().includes("web"));
