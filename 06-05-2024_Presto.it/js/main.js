// Cattura numeri de "i nostri numeri"

let annunci = document.querySelector('#annunci');
let clienti = document.querySelector('#clienti');
let ville = document.querySelector('#ville');

// Animazione Annunci 

let controllo_ripetizione = false;

function crea_intervallo(elemento, numMax, tempo) {
    let counter = 0;
    let intervallo = setInterval(() => {
        if (counter < numMax) {
            counter++;
            elemento.innerText = counter;
        } else {
            clearInterval(intervallo);
        }
    }, tempo);
}

let osserva_annunci = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting && controllo_ripetizione == false){
            crea_intervallo(annunci, 50, 8);
            crea_intervallo(clienti, 200, 5);
            crea_intervallo(ville, 100, 8);
            controllo_ripetizione = true;  
        }
    })
});

osserva_annunci.observe(ville);










