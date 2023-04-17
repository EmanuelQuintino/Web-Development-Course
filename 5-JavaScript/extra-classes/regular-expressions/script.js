// Class Regular Expressions

// g - global
// i - insensitive
// () - group
// | - or

const text = 'Aula de Expressões Regulares (Regex) no Curso de Desenvolvimento Web - Jucás'
const regex = /(Aula|Curso)( de Expressões Regulares)/ig;

// console.log(regex.test(text));

const find = regex.exec(text) 
if (find) {
    // console.log(find);
    // console.log(find[0]);
    // console.log(find[1]);
    // console.log(find[2]);
}

// console.log(text.replace(/Aula/ig, 'Class'));
console.log(text.replace(/(Aula)/ig, '"$1"'));
console.log(text.replace(/(Regex|Jucás)/ig, (word) =>{
    return word.toLocaleUpperCase()
}));