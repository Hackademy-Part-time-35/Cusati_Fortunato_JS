// Cattura container annunci
let cont_annunci = document.querySelector('#cont_annunci');

// Cattura container filtro per città
let cont_city_filter = document.querySelector('.cont_city_filter');


// Creazione card pagina annunci

fetch('../dati/elenco_annunci.json')
    .then(response => response.json())
    .then(annunci => {
        
        // Creazione card annunci
        function create_card_annunci () {
            annunci.forEach(annuncio => {
                let column = document.createElement('div');
                column.classList.add('col-4','mb-3');
                let pool;
                if (annuncio.pool === true){
                    pool = 'Con piscina'
                } else {
                    pool = 'Senza piscina'
                };
                column.innerHTML = `
                <div class="card box-shadow">
                    <img src="${annuncio.img}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title" style="color: #40382A;">${annuncio.city}</h5>
                        <p class="card-text">
                            ${annuncio.mq} Metri Quadri- 
                            ${annuncio.rooms} Camere -
                            ${pool}
                        </p>
                        <a href="#" class="btn custom-button">€ ${annuncio.price},00</a>
                    </div>
                </div>`;
                cont_annunci.appendChild(column);
            })
        }
        create_card_annunci();

        // Creazione radio button filtri città
        function create_city_filter () {
            let city = [];
            annunci.forEach(annuncio =>{
                if(city.includes(annuncio.city)){

                } else {
                    city.push(annuncio.city)
                }
            })

            city.sort()
            city.forEach(elemento => {
                let filtro = document.createElement('div');
                filtro.innerHTML = `
                <input type="radio" class="btn-check" name="city_filter" id="${elemento}" autocomplete="off">
                <label class="btn" for="${elemento}">${elemento}</label>
                `
                cont_city_filter.appendChild(filtro);
            })
        }
        create_city_filter()

    });

// Sezione filtri

let apply_filter = document.querySelector('#apply_filter');
let reset_filter = document.querySelector('#reset_filter');

let city_filter = document.querySelectorAll('input[name="city_filter"]');
let room_filter = document.querySelectorAll('input[name="room_filter"]');
let pool_filter = document.querySelectorAll('input[name="pool_filter"]');
let price_filter = document.querySelectorAll('input[name="price_filter"]');

// Reset Filtri
function restart (filter) {
    for (let i = 0; i < filter.length; i++)
    filter[i].checked = false;
};

reset_filter.addEventListener('click', function(){
    restart(city_filter);
    restart(room_filter);
    restart(pool_filter);
    restart(price_filter);
});

