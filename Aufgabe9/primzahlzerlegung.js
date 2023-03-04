
const start = new Date();
let num = 700851475143178

const factors = [];
let divisor = 2;

while (num >= 2) {
    if (num % divisor == 0) {
        factors.push(divisor);
        num = num / divisor;
    } else {
        divisor++;
    }
}
const end = new Date();
const time = end - start;

console.log('Prime factors of', num + ':', factors.join(' '))
console.log(`Berechnungszeit: ${time} ms`)