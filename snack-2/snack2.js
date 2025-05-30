// L'utente inserisce due parole in successione, con due prompt.
// II software stampa prima la parola più corta, poi la parola più lunga.

const parola1 = prompt("Inserisci la prima parola");

const parola2 = prompt("Inserisci la seconda parola");

if (parola1.length > parola2.length) {
    console.log("La parola più lunga è: " + parola1);
} else if (parola2.length > parola1.length) {
    console.log("La parola più lunga è: " + parola2);
} else {
    console.log("Le due parole sono lunghe uguali");
}
