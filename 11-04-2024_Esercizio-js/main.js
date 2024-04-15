// //-------- Traccia 1 ---------- //

// let valore = parseInt(prompt("Inserisci un numero"));

// for (let index = 1; index <=10; index++) {
//     totale = valore * index;
//     console.log(`${valore} x ${index} = ${totale}`);
// }

// //-------- Traccia 2 --------- // 

// console.log("=============================");

// let resto = 0;
// let dispari = 0;

// for (let i = 1; i <=20; i++){

//     resto=i%2;

//     if(resto == 0){
//         console.log(i);
//     } else {
//         dispari ++;
//     }
// }

// console.log (`i numeri dispari sono ${dispari}`);

//---------- Traccia 3 ---------//

console.log("==============================");

let h = 0;
while (h == 0) {
    let h = prompt("Inserisci il numero desiderato:");
    switch (true) {
        case h == 1:
            console.log("E’ stata selezionata l’acqua");
            h = 1;
            break;
        case h == 2:
            console.log("E’ stata selezionata coca cola");
            h = 1;
            break;
        case h == 3:
            console.log("E’ stata selezionata birra");
            h = 1;
            break;
        default:
            break;
    }
} 


