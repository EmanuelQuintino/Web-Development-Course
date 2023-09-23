// String Manipulation

// Prototype (Chain)

let myName = "Emanuel";

console.log(myName.__proto__);

console.log(myName.length);
console.log(myName[1]);
console.log(myName.toLocaleUpperCase());

let phrase = "  I'm a Web Developer";

console.log(phrase.replace("Web", "JavaScript"));
console.log(phrase.indexOf("W"));
console.log(phrase.trim());
console.log(phrase.substring(2, 5));

console.log(phrase.split(" ")[2]);
console.log(phrase.split(" ").join("-"));
console.log(phrase.split("").reverse().join(""));

console.log(phrase.includes("web")); //case-sensitive
console.log("Web" == "web");
console.log(phrase.toLocaleLowerCase().includes("web"));
