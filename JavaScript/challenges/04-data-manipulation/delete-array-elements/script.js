// Crie uma função que remova os elementos de um Array através do parâmetro
// O algoritimo deve funcionar com tipo texto e tipo numérico
// Valide para receber espaços, letras maiúsculas e letras minúsculas. 

let techs = ['HTML', 15, 'CSS', 15, 'JavaScript', 30, 'SQL', 10, 'Git', 8]

function deleteArrayElements(techName) {
    let aux = techs
    techs = []

    aux.map((element) => {
        if( String(element).toLocaleLowerCase().split(" ").join("") !=
            String(techName).toLocaleLowerCase().split(" ").join("")) {
                techs.push(element)
            }
    })
} 

deleteArrayElements("Java Script")
document.write(techs)