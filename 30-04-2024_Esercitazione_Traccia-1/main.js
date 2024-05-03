let input = document.querySelector('#input');

let start = document.querySelector('#start');
let pause = document.querySelector('#pause');
let reset = document.querySelector('#reset');

let countdown = document.querySelector('#countdown');
let time = document.querySelector('#time');
let stop = 'off';

let scala_secondi_check;


function leggi_secondi(){
    time.innerHTML = input.value;
};

function scala_secondi(){
    time.innerHTML--;
    if (time.innerHTML == 0){
        clearInterval(scala_secondi_check);
    }
};

start.addEventListener('click', function(){
    if (input.value <= 0){
        alert('Inserisci un numero')
    } else {
        leggi_secondi();
        scala_secondi_check = setInterval(scala_secondi,1000);
        input.value = '';
    }
});

pause.addEventListener('click', function(){
    if (stop === 'off') {
        stop = 'on';
        clearInterval(scala_secondi_check);
        pause.innerHTML = 'Resume';
    } else if (stop === 'on'){
        scala_secondi_check = setInterval(scala_secondi,1000);
        stop = 'off';
        pause.innerHTML = 'Pause';
    }
})

reset.addEventListener('click', function(){
    input.value = '';
    time.innerHTML = '';
    clearInterval(scala_secondi);
})