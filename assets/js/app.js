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


const studente1 = new Studente("Mario", "Rossi", 20, "MR");
const studente2 = new Studente("Francesco", "Verdi", 17, "FV");

console.log(studente1.toString()); // Stampa la stringa contenente tutti gli attributi.
console.log(studente2.toString()); // Stampa la stringa contenente tutti gli attributi.

console.log("studente1 è maggiorenne? " + studente1.isMaggiorenne()); // Stampa se lo studente è maggiorenne o meno.
console.log("studente2 è maggiorenne? "+ studente2.isMaggiorenne()); // Stampa se lo studente è maggiorenne o meno.