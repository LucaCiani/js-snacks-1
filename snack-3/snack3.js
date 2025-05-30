// II software deve chiedere per 10 volte all'utente di inserire un numero.
// II programma stampa la somma di tutti i numeri inseriti.

let somma = 0;

for (let i = 1; i <= 10; i++) {
    let numero = parseInt(prompt("Inserisce un numero"));

    if (isNaN(numero)) {
        numero = 0;
    }

    somma += numero;
}

console.log("La somma dei tuoi numeri è: " + somma);
