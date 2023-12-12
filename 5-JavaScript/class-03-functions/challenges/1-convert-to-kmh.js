// ⚠️ Desafio: Declare uma função para converter velocidade de m/s para km/h e solicite a velocidade via prompt e passe como argumento. Execute a função e escreva o resultado

function convertToKmh(speedMs) {
  return speedMs * 3.6;
}

const userSpeedMs = Number(prompt("Digite a velocidade em M/s:"));

const convertedSpeed = convertToKmh(userSpeedMs);

window.alert(`${userSpeedMs}m/s é ${convertedSpeed}km/h`);
