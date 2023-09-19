// Crie um programa para cadastrar Jogo que irá solicitar ao usuário o nome, o gênero e o ano de lançamento do mesmo. Em seguida, monte um objeto contendo essas informações e imprima as características do jogo usando a função log.

const gameName = prompt("Digite o nome do jogo:");
const gameGenre = prompt("Digite o gênero do jogo:");
const gameReleaseYear = prompt("Digite o ano de lançamento do jogo:");

const game = {
  name: gameName,
  genre: gameGenre,
  releaseYear: gameReleaseYear,
};

console.log(`Nome do Jogo: ${game.name}`);
console.log(`Gênero: ${game.genre}`);
console.log(`Ano de Lançamento: ${game.releaseYear}`);
