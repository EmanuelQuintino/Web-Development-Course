// const myTitle = document.getElementById("myTitle") // element
// const myTitle = document.querySelector("body h1#myTitle") // element

// console.log(myTitle)
// console.log(myTitle.textContent)

// myTitle.innerHTML = "Teste"
// myTitle.innerText = "<h3>Teste</h3>"
// myTitle.innerHTML = "<h3>Teste</h3>"

myTitle.style.color = "red"

// const myParagraph = document.getElementsByClassName("paragraph") //HTMLCollection
// console.log(myParagraph[0]);

// for (const value of myParagraph) {
    // console.log(value);
// }

const myParagraph = document.querySelectorAll(".paragraph") // NodeList
console.log(myParagraph);

myParagraph.forEach((value) => {
    value.style.color = 'green'
})

const myText = document.querySelector("#myText")
const myButton = document.querySelector("#myButton")
const writeText = document.querySelector("#writeText")

myButton.addEventListener("click", () =>{
    writeText.innerHTML = myText.value
})

myText.addEventListener("keyup", () =>{
    writeText.innerHTML = myText.value
})
