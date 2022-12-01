// const myTitle = document.getElementById('myTitle') //element
const myTitle = document.querySelector('#myTitle') //element
// const myParagraph = document.getElementsByClassName('paragraph') // HTMLCollection
const myParagraph = document.querySelectorAll('.paragraph') // NodeList

// console.log(myTitle);
// console.log(myParagraph);
// console.log(myCommands);

// myTitle.innerHTML = "Teste"
myTitle.style.color = "yellow"
myTitle.style.background = 'green'
myParagraph.innerHTML = "Teste"

for (const iterator of myParagraph) {
    iterator.innerHTML = 'Test'
    iterator.style.color = 'blue'
}

// myParagraph.forEach(element => {
//     element.innerHTML = "<strong>Teste</strong>"
// });


// const myCommands = document.querySelectorAll('.commands')

// myCommands.forEach((element) => {
//     console.log(element.textContent.trim());
// })


const myText = document.querySelector("#myText")
const writeMyText = document.querySelector("#writeMyText")
const buttonSubmit = document.querySelector("#buttonSubmit")

writeMyText.style.background = 'lightgray'
buttonSubmit.addEventListener('click', ()=> {
    writeMyText.innerHTML = myText.value
})

myText.addEventListener('keyup', ()=> {
    writeMyText.innerHTML = myText.value
})