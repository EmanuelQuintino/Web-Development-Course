// prototype (chain)

let myName = "Emanuel";
console.log(myName.__proto__);

console.log(myName.length);
console.log(myName.toUpperCase());
console.log(myName.toLowerCase());

//  ["A", "B", "C"]
//   0     1    2
//  -3    -2   -1

console.log(myName.slice(2));
console.log(myName.slice(-2));
console.log(myName.slice(4, -2)); // accept negative values
console.log(myName.substring(2, 4));

console.log(myName[1]);

myName[1] = "T";
console.log(myName); // string immutable *

myName = "other string";
console.log(myName);

let phrase = "  I'm a web developer";

console.log(phrase.replace("web", "JavaScript"));
console.log(phrase.indexOf("w"));
console.log(phrase.trim());

console.log(phrase.split(" ")[2]);
console.log(phrase.split(" ").join("-"));
console.log(phrase.split("").reverse().join(""));

console.log(phrase.includes("web")); // case-sensitive
console.log("Web" == "web");
console.log(phrase.toLowerCase().includes("WEB".toLowerCase()));

function log() {
  return "print";
}
