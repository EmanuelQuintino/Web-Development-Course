// Crie um sistema que receba listas de filmes por categoria
// Apresente o total das categorias e dos filmes, depois sugira as listas que deseja ver
// A sugestão deve persistir enquanto o usuário não colocar um nome válido
// Mostre o total de filmes daquela categoria e os nomes de cada filme

const listFilms = [
    {category: 'Ação', films: ['Jurassic Park', 'Transformers']},
    {category: 'Ficção', films: ['Terminator', 'Inception', 'Interestelar']},
    {category: 'Romance', films: ['Titanic', 'Seven Pounds', 'The Handmaiden']},
    {category: 'Cult', films: ['Matrix', 'Donnie Darko']}
]

let totalCategories = 0
let totalFilms = 0
const categories = []
for (let value of listFilms) {
    for(let index in value.films){
        totalFilms += 1
    }
    categories.push(value.category)
    totalCategories +=1
}

let category
while (!categories.includes(category)) {
    category = window.prompt(`São ${totalCategories} categorias com ${totalFilms} filmes
Qual lista deseja ver? (${categories.join(", ")})`)
}

let count = 0
const films = []
for(let value of listFilms){
    if(value.category == category){
        for(let film of value.films){
            count += 1
            films.push(film)
        }
    }
}

window.alert(`Total de ${count} filme(s): ${films.join(", ")}`)