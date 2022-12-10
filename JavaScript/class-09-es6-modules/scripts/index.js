// >>>>>> EcmaScript (2015) - ES6 Modules <<<<<<<

// named import
// import { sum, sub, mul, div } from "./functions.js";
// import { operations } from "./functions.js";

// console.log(sum(3, 2));
// console.log(sub(3, 2));
// console.log(mul(3, 2));
// console.log(div(3, 2));

// console.log(operations.sum(2, 4));
// console.log(operations.div(2, 4));


//>>>>>>> Class <<<<<<<<<<
class Person {
    constructor (name, age) {
        this.name = name
        this.age = age
        this.canDrive = age >= 18
        this.status = () => {
            if (this.canDrive) {
                return 'Pode dirigir';
            } else {
                return 'Não pode dirigir';;
            }
        }
    }
}

const person1 = new Person('Emanuel', 30)
// console.log(person1.status());

//>>>>>>> Factory (Creational Design Pattern ) <<<<<<<<<<
const person2 = (name, age) => {
    return {
        name,
        age,
        canDrive: age >= 18,
        status: function status(canDrive) {
            if (this.canDrive) {
                return 'Pode dirigir';
            } else {
                return 'Não pode dirigir';
            }
        }
    }
}

// console.log(person2('Emanuel', 30).status());


// function showFruits(...fruits) { // rest
//     return fruits
// }

// //destructure
// const fruits = ['Banana', 'Mamão', 'Abacaxi', 'Manga']
// const [fruit1, fruit2] = fruits

// console.log(fruit1)
// console.log(fruit2)

// console.log(showFruits(fruits, 'Maçã', 'Pêra', 'Açaí'))


// // spread
// const numbers = [1, 3, 42, 5, 87, 6]
// console.log(Math.max(...numbers))

// const listItens = document.querySelectorAll("li")
// console.log(listItens);

// let arrayListItens = Array.from(listItens)
// // console.log(arrayListItens);

// console.log([...listItens]);