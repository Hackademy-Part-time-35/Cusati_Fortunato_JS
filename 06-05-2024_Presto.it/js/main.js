// Cattura numeri de "i nostri numeri"

let annunci = document.querySelector('#annunci');
let clienti = document.querySelector('#clienti');
let ville = document.querySelector('#ville');

// Animazione Annunci 

let counter_annunci = 0;

let osserva_annunci = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            let intervallo1 = setInterval(() => {
                if (counter_annunci < 135) {
                    counter_annunci ++;
                    annunci.innerText = counter_annunci;
                } else {
                    clearInterval(intervallo1);
                }
            }, 10)
        }
    })
});
osserva_annunci.observe(annunci);

// Animazione Clienti 

let counter_clienti = 0;

let osserva_clienti= new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            let intervallo1 = setInterval(() => {
                if (counter_clienti < 200) {
                    counter_clienti ++;
                    clienti.innerText = counter_clienti;
                } else {
                    clearInterval(intervallo1);
                }
            }, 8)
        }
    })
});
osserva_clienti.observe(clienti);

// Animazione Ville vendute 

let counter_ville = 0;

let osserva_ville = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            let intervallo1 = setInterval(() => {
                if (counter_ville < 100) {
                    counter_ville ++;
                    ville.innerText = counter_ville;
                } else {
                    clearInterval(intervallo1);
                }
            }, 15)
        }
    })
});
osserva_ville.observe(ville);