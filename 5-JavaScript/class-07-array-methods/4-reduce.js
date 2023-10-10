let initial = 200;
const sumReal = real.reduce((a, b) => a + b, initial);
console.log(sumReal);

const sumConvertedDollar = convertDollar.reduce((a, b) => a + b);
console.log(sumConvertedDollar);

console.log(real.map((value) => value * 5.36).reduce((a, b) => a + b));
