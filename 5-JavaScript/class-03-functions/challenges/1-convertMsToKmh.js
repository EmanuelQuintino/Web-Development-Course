// Declare uma função para converter velocidade de m/s para km/h
// Solicite a velocidade via prompt e passe como argumento
// Execute a função e escreva o resultado

function convertMsToKmh(speed) {
  return speed * 3.6;
}

const userSpeed = Number(prompt("Digite a velocidade em m/s para coverter em km/h:"));

document.write(`${userSpeed}m/s é ${convertMsToKmh(userSpeed)}km/h`);
