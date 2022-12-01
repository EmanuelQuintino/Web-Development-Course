// Criar função que insira a categoria e mostre o número total e o nome dos filmes

const filmsList = [
    {category: 'Ação', films: ['Jurassic Park', 'Transformers']},
    {category: 'Ficção', films: ['Terminator', 'Inception', 'Interestelar']},
    {category: 'Romance', films: ['Titanic', 'Seven Pounds', 'The Handmaiden']},
    {category: 'Cult', films: ['Matrix', 'Donnie Darko']}
]

totalCategories = 0
totalFilms = 0

for (let v of filmsList) {
    for(let i in v.films){
        totalFilms += 1
    }

    totalCategories +=1
}

let categoria = prompt(`São ${totalCategories} categorias com ${totalFilms} filmes
Digite o nome de uma categoria: `)

let count = 0
for(let v of filmsList){
    if(v.category == categoria){
        for(let film of v.films){
            document.write(`${film}</br>`)
            count += 1
        }
    }
}

window.alert(`Total de ${count} filme(s)`)