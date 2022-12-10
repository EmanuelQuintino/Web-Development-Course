function showFruits(...fruits) { // rest
    return fruits
}

const fruits = ['Banana', 'Mamão', 'Abacaxi', 'Manga']

const [fruit1, fruit2] = fruits //destructure

console.log(fruit1)
console.log(fruit2)
console.log(showFruits(fruits, 'Maçã', 'Pêra', 'Açaí'))

const numbers = [1, 3, 42, 5, 87, 6]
console.log(Math.max(...numbers)) // spread