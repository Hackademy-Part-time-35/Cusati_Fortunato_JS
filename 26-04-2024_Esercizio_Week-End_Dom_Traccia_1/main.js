let button_1 = document.querySelector('#button_1');
let button_2 = document.querySelector('#button_2');
let button_3 = document.querySelector('#button_3');

let paragrafi = document.querySelectorAll('.paragrafi');

button_1.addEventListener('click', function() {
    paragrafi.forEach((elemento) => {
        elemento.style.color = "rgb(" + Math.floor(Math.random() * 255)
        + "," + Math.floor(Math.random() * 255) + ","
        + Math.floor(Math.random() * 255) + ")";
    });
});

button_2.addEventListener('click', function() {
    paragrafi.forEach((elemento) => {
        elemento.style.fontWeight = 'bold';
    });
});

button_3.addEventListener('click', function() {
    paragrafi.forEach((elemento) => {
        elemento.classList.toggle('switch');
    });
});