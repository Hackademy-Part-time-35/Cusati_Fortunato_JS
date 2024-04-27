// Benissimo
//------------- Traccia 1 --------------//

let numero = Math.floor(Math.random() * 100);

for (let i = 0; i < 5; i++) {
    let numero_scelto = parseInt(prompt("Indovina il numero"));
    if (numero_scelto == numero) {
        console.log(`Hai indovinato! Il numero era ${numero}`);
        i=5;
    } else if (numero_scelto > numero) {
        console.log("Numero troppo alto, ritenta")
    } else if (numero_scelto < numero) {
        console.log("Numero troppo basso, ritenta")
    }
}

console.log(`il numero era ${numero}`);

//------------ Traccia 2 --------------//

let temperatura = parseInt(prompt("Inserisci la temperatura attuale in gradi Celsius"));

function temperature_converter(temperatura) {
    let temperatura_Fahrenheit = temperatura + 273.15;
    console.log(`La temperatura attuale convertita in Fahrenheit è di ${temperatura_Fahrenheit} F°`);   
}

temperature_converter(temperatura)

//------------ Traccia 3 --------------//

let importo = parseInt(prompt("Inserisci l'importo da covertire"));
let valuta = parseInt(prompt("Scegli il tipo di moneta in cui vuoi convertire: 1-Euro, 2-Dollari, 3-Sterline"))

if (valuta == 1){
    console.log(`Il tuo importo è pari a ${importo}€`);
} else if (valuta == 2){
    let dollaro = importo * 1.07;
    console.log(`Il tuo importo è pari a ${dollaro.toFixed(2)}$`);
} else if (valuta == 3){
    let sterlina = importo * 0.86;
    console.log(`Il tuo importo è pari a ${sterlina.toFixed(2)}£`);
}

//---------- Traccia 4 ----------------//

let numeri_casuali = [];
let numeri_utente = [];
let numeri_vincenti = [];

for (let i = 1; i <= 10; i++){
    let numero_casuale = Math.floor(Math.random()*90+1)
    numeri_casuali.push(numero_casuale);    
}

for (let u = 1; u <= 10; u++){
    let numero_utente = parseInt(prompt("Scegli un numero da 1 a 90"))
    numeri_utente.push(numero_utente)  
}

function check_number(numeri_casuali,numeri_utente) {
    for (let i = 0; i < 10; i++){
        for (let u = 0; u < 10; u++){
            if(numeri_casuali[i] == numeri_utente[u]){
                numeri_vincenti.push(numeri_utente[u])
            }
        }
    }
    return numeri_vincenti;
}

check_number(numeri_casuali,numeri_utente)

if (numeri_vincenti.length == 0){
    console.log("Mi dispiace, ma non hai indovinato nessun numero.. Ritenta, sicuramente sarai più fortunato la prossima volta");
} else if (numeri_vincenti.length == 1){
    console.log("Peccato, per poco! Hai indovinato un singolo numero..");
} else if (numeri_vincenti.length == 2){
    console.log("Hai fatto ambo");
    console.log("Hai indovinato due numeri");
} else if (numeri_vincenti.length == 3){
    console.log("Hai fatto terna");
    console.log("Hai indovinato tre numeri");
} else if (numeri_vincenti.length == 4){
    console.log("Hai fatto quaterna");
    console.log("Hai indovinato quattro numeri");
} else if (numeri_vincenti.length == 5){
    console.log("Hai fatto cinquina");
    console.log("Hai indovinato cinque numeri");
} else if (numeri_vincenti.length == 6){
    console.log("Hai fatto cinquina");
    console.log("Hai indovinato sei numeri");
} else if (numeri_vincenti.length == 7){
    console.log("Hai fatto cinquina");
    console.log("Hai indovinato sette numeri");
} else if (numeri_vincenti.length == 8){
    console.log("Hai fatto cinquina");
    console.log("Hai indovinato otto numeri");
} else if (numeri_vincenti.length == 9){
    console.log("Hai fatto cinquina");
    console.log("Hai indovinato nove numeri");
} else if (numeri_vincenti.length == numeri_utente.length){
    console.log("Ha fatto tombola!!");
    console.log("Hai indovinato tutti i numeri!");
}

//-------------- Traccia 5 -----------//

// .includes = serve a determinare se un valore è presente in un Array. 
//             la sintassi è la seguente: nome_array.includes(valore_da_determinare)
//             Come output viene rilasciato un valore booleano
// Esempio: 
let array_numeri = [1,2,3,4,5];
console.log(array_numeri.includes(2)); // <=== l'output sarà true perchè effettivamente il valore 2 è presente nell'array.
console.log(array_numeri.includes(7)); // <=== l'output sarà false perchè il 7 non è presente nell'array_numeri.


//.concat = serve a concatenare due o più array. Questo metodo non modifica gli array
//          esistenti, ma restituisce un nuovo array.
// Esempio:

let array_1 = ["a", "b", "c"];
let array_2 = ["d", "e", "f"];
// Per concatenare i due array, la sintassi è la seguente:
let array_3 = array_1.concat(array_2);
// Ora se richiamiamo l'array_3 nella console log, il risultato aspettato sarà: 
// array_3 = ["a", "b", "c","d","e","f"];

console.log(array_3);


//------------- Traccia 6 ----------//

let fibonacci = [0, 1];
for (let i= 2; i < 20; i++){
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}
console.log(fibonacci);