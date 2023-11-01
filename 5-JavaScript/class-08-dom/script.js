// Reference: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction

// const myTitle = document.getElementById("myTitle");
const myTitle = document.querySelector("h1#myTitle"); // element
const myContainer = document.querySelector(".container");

console.log(myTitle);
console.log(myTitle.textContent);
console.log(myTitle.innerHTML);

console.log(myContainer);
console.log(myContainer.textContent);
console.log(myContainer.innerHTML);

myTitle.innerText = "Text";
myTitle.innerText = "<i>HTML</i>";
myTitle.innerHTML = "<i>HTML</i>";

myTitle.style.color = "red";
myTitle.style.backgroundColor = "lightgray";

const boxesHTMLCollection = document.getElementsByClassName("box");
console.log(boxesHTMLCollection);
console.log(boxesHTMLCollection[0]);

for (const box of boxesHTMLCollection) {
  console.log(box);
  box.style.color = "orange";
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
  value.style.color = "peru";
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
