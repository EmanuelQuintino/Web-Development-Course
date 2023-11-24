// ⚠️ Desafio: Crie um programa para cadastrar um Jogo que irá solicitar ao usuário o nome, o gênero e o ano de lançamento do mesmo. Em seguida, monte um "OBJECT" contendo essas informações e por meio dele e imprima as características do jogo usando a função log.

const gameName = prompt("Digite o nome:");
const gameGenre = prompt("Digite o gênero:");
const gameReleaseYear = prompt("Digite o ano de lançamento:");

const game = {
  name: gameName,
  genre: gameGenre,
  releaseYear: gameReleaseYear,
};

console.log(`Nome do Jogo: ${game.name}`);
console.log(`Gênero: ${game.genre}`);
console.log(`Ano de Lançamento: ${game.releaseYear}`);
