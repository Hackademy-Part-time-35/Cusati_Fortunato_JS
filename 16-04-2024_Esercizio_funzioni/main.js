//----------- Traccia 1 ------------//

let tiri = parseInt(prompt("Quanti dadi volete tirare?"));
let risultato_player_1 = 0;
let risultato_player_2 = 0;

function dadi(){
    for (let i=1; i<=tiri; i++){
        let numero_player_1 = Math.floor(Math.random() * 6) + 1;
        risultato_player_1 += numero_player_1;
        let numero_player_2 = Math.floor(Math.random() * 6) + 1;
        risultato_player_2 += numero_player_2;
    }
    console.log(risultato_player_1);
    console.log(risultato_player_2);
}

dadi();

if ( risultato_player_1 > risultato_player_2){
    console.log("Giocatore 1 ha vinto");
}  else if (risultato_player_1 < risultato_player_2){
    console.log("Giocatore 2 ha vinto");
} else if (risultato_player_1 == risultato_player_2){
    console.log("C'è un pareggio!")
}

//----------- Traccia 2 ------------//

function number(N){
    for (let i=1; i<=N; i++){
        if (i%15==0){
            console.log("FizzBuzz");
        } else if (i%5==0){
            console.log("Buzz");
        } else if (i%3==0){
            console.log("Fizz");
        } else {
            console.log(i);
        }
    }
}

number(18)
 
//---------- Traccia 3 --------------//

function num (X){
    if (X<10){
        console.log("1 cifra");
    } else if (X<100){
        console.log("2 cifre");
    } else if (X<1000){
        console.log("3 cifre");
    } else {
        console.log("Numero troppo grande");
    }
}

num (prompt("Inserisci un numero"))