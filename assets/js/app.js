class Studente {
    constructor(nome, cognome, eta, matricola) {
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
        this.matricola = matricola;
    }

    isMaggiorenne() {
        if (this.eta >= 18) {
            return true;
        } else {
            return false;
        }
    }

    toString() {
        return `${this.nome} ${this.cognome} ${this.eta} ${this.matricola}`;
    }
}

// Regex per controlli.
const regexNome = /^[a-zA-Z']{2,}$/;
const regexCognome = /^[a-zA-Z']{2,}$/;
const regexMatricola = /^[a-zA-Z0-9]{2,}$/;

// Metodo per controlli
function verificaNome() {
    let nome = document.modulo.nome.value;

    if (regexNome.test(nome)) {
        return true;
    } else {
        return false;
    }
}

function verificaCognome() {
    let cognome = document.modulo.cognome.value;

    if (regexCognome.test(cognome)) {
        return true;
    } else {
        return false;
    }
}

function verificaEta() {
    let eta = document.modulo.eta.value;

    if (eta >= 1 && eta <= 130) {
        return true;
    } else {
        return false;
    }
}

function verificaMatricola() {
    let matricola = document.modulo.matricola.value;

    if (regexMatricola.test(matricola)) {
        return true;
    } else {
        return false;
    }
}

function invia(event) {
    let risultato = document.getElementById("risultato");
    event.preventDefault();

    if (verificaNome() && verificaCognome() && verificaEta() && verificaMatricola()) {
        risultato.innerHTML = "Persona aggiunta correttamente";
        document.modulo.reset();
    } else {
        risultato.innerHTML = "Dati non validi";
    }
}
















/*
const studente1 = new Studente("Mario", "Rossi", 20, "MR");
const studente2 = new Studente("Francesco", "Verdi", 17, "FV");

console.log(studente1.toString()); // Stampa la stringa contenente tutti gli attributi.
console.log(studente2.toString()); // Stampa la stringa contenente tutti gli attributi.

console.log("studente1 è maggiorenne? " + studente1.isMaggiorenne()); // Stampa se lo studente è maggiorenne o meno.
console.log("studente2 è maggiorenne? "+ studente2.isMaggiorenne()); // Stampa se lo studente è maggiorenne o meno.
*/
