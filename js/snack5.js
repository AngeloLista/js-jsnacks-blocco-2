/* Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi casuali all’array che ha meno elementi,
fino a quando ne avrà tanti quanti l’altro. */

const numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const stringList = ['uno', 'due', 'tre', 'quattro', 'cinque']


if (numberList > stringList) {
    while (numberList.length > stringList.length) {
        const randNum1 = Math.floor(Math.random() * numberList.length);

        stringList.push(numberList[randNum1])
    }
} else {
    while (stringList.length > numberList.length) {
        const randNum1 = Math.floor(Math.random() * stringList.length);

        numberList.push(stringList[randNum1])
    }
}


console.table(numberList)
console.table(stringList)