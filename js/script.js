/*Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari */

/* Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo */
let sum = 0

for (let i = 0; i < 5; i++) {
    const num = parseInt(prompt(`Inserisci un numero (${i + 1}/5)`));
    if (!isNaN(num)) {
        sum += num;
    }
}

console.log(sum)