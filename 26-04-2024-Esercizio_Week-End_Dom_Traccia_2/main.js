// Benissimo Fortunato, bene così

let submit = document.querySelector('#submit');
let title = document.querySelector('#title');
let article = document.querySelector('#article');
let cont = document.querySelector('#cont');

let date = new Date();

let giorno = date.getDate();
let mese = date.getMonth() + 1;
let year = date.getFullYear();

let dataCompleta = giorno + mese + year;

submit.addEventListener('click', function() {
    if (title.value.trim() === '') {
        alert('Per favore, aggiungere un titolo!');
    } else {
        let new_title = document.createElement('h2');
        let new_article = document.createElement('p');
        let data = document.createElement('p');
        
        new_title.innerHTML = title.value;
        new_article.innerHTML = article.value;
        data = date;

        cont.appendChild(new_title);
        cont.appendChild(new_article);
        cont.append(data);
        title.value = '';
        article.value= '';
    }
  
});
