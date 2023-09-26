// String Manipulation

// Prototype (Chain)

let myName = "Emanuel";
console.log(myName.__proto__);

console.log(myName.length);
console.log(myName.toUpperCase());
console.log(myName.toLowerCase());

console.log(myName[1]);

myName[1] = "T";
console.log(myName); // string immutable

myName = "test";
console.log(myName);

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

function log() {
  return "print";
}
