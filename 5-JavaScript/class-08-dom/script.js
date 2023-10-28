// Reference: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction

// const myTitle = document.getElementById("myTitle"); // element
const myTitle = document.querySelector("h1#myTitle"); // element

console.log(myTitle);
console.log(myTitle.textContent);
console.log(myTitle.innerHTML);

myTitle.innerText = "Teste";
myTitle.innerText = "<i>Teste</i>";
myTitle.innerHTML = "<i>Teste</i>";

myTitle.style.color = "red";

const boxesHTMLCollection = document.getElementsByClassName("box");
console.log(boxesHTMLCollection);
console.log(boxesHTMLCollection[0]);

for (const box of boxesHTMLCollection) {
  console.log(box);
  box.style.color = "green";
}

// boxesHTMLCollection.forEach((value) => {
//   console.log(value);
// });

const boxesNodeList = document.querySelectorAll(".box");
console.log(boxesNodeList);

for (const node of boxesNodeList) {
  console.log(node);
}

boxesNodeList.forEach((value) => {
  value.style.color = "blue";
});

const myText = document.querySelector("#myText");
const number1 = document.querySelector("#number1");
const number2 = document.querySelector("#number2");
const myButton = document.querySelector(".sumButton");
const result = document.querySelector(".result");

function sumNumbers() {
  result.innerHTML = Number(number1.value) + Number(number2.value);
}

function typingText() {
  result.innerHTML = myText.value;
}

myButton.addEventListener("click", sumNumbers);
myText.addEventListener("keyup", typingText);
