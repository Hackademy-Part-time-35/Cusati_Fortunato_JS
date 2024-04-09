// Traccia 1 

let array_1 = [

    ['un', 'per', 'incatenarli.'],
    
    ['Anello', 'trovarli,'],
    
    ['ghermirli', 'e'],
    
    ['gondor', 'mark'],
    
    ];
    
    let array_2 = [
    
    [['trovarli,']],
    
    ['tu,', 'sciocchi'],
    
    ['tu,', 'sciocchi', ['padron', 'Sauron']],
    
    ['nel', ['fuggite', 'gandalf']],
    
    [['domarli,', 'passare'], 'buio']
    
    ];

    console.log( 
        array_1 [0][0], 
        array_1 [1][0],
        array_1 [0][1],
        array_2 [4][0][0],
        array_1 [0][0], 
        array_1 [1][0],
        array_1 [0][1],
        array_1 [1][1],
        array_1 [0][0], 
        array_1 [1][0],
        array_1 [0][1],
        array_1 [2][0],
        array_1 [2][1],
        array_2 [3][0],
        array_2 [4][1],
        array_1 [0][2]);
    
// Traccia 2

    let gatti_totali = 44;
    let gatti_fila = 6;
    let file = gatti_totali / gatti_fila;
    let resto_gatti = gatti_totali % gatti_fila;
    let gatti_mancanti = gatti_fila - resto_gatti;

    console.log("Ci sono " + file.toFixed(0) + " file di gatti e ne mancano " + gatti_mancanti + " per una nuova fila, con un avanzo di " + resto_gatti);

// Traccia 3

    let v = prompt("Inserisci il tuo voto");

    if (v<18){
        console.log("insufficente");
    } else if(v>=18, v<21){
        console.log("sufficiente");
    } else if(v>=21, v<24){
        console.log("buono");
    } else if(v>=24, v<27){
        console.log("distinto");
    } else if(v>=27, v<=29){
        console.log("ottimo");
    } else if(v=30){
        console.log("eccellente");
    }

// Traccia 4

let temperatura = prompt("Inserisci la temperatura esterna")

if (temperatura<-10){
    console.log("Copriti.. ancora ti raffreddi");
} else if(temperatura<0){
    console.log("Non è tanto il freddo quanto l'umidità");
} else if(temperatura<20){
    console.log("Non ci sono più le mezze stagioni");
} else if(temperatura<30){
    console.log("Mi dia una peroni sudata");
} else if(temperatura>=30){
    console.log("Lu mare, lu sole.. lu ientu");
}

