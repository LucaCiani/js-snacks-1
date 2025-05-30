// Crea un array vuoto.
// Chiedi per 6 volte all'utente di inserire un numero, se è dispari inseriscilo nell'array.
let numeriDispari = [];

for (let i = 1; i <= 6; i++) {
    let numeri = Number(prompt("Inserisci un numero"));

    if (!isNaN(numeri) && numeri % 2 !== 0) {
        numeriDispari.push(numeri);
    }
}

console.log(numeriDispari);
