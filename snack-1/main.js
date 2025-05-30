// L'utente inserisce due numeri in successione, con due prompt.
// II software stampa il maggiore.

const numero1 = parseInt(prompt("Inserisci il primo numero"));

const numero2 = parseInt(prompt("Inserisci il secondo numero"));

if (numero1 > numero2) {
    console.log("Il numero maggiore è: " + numero1);
} else if (numero2 > numero1) {
    console.log("Il numero maggiore è: " + numero2);
} else {
    console.log("I due numeri sono uguali");
}
