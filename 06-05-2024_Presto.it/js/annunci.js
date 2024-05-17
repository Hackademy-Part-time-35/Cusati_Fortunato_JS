// Cattura container annunci
let cont_annunci = document.querySelector('#cont_annunci');

// Cattura container filtro per città
let cont_city_filter = document.querySelector('#cont_city_filter');

// Cattura bottoni filtri
let room_filter = document.querySelectorAll('input[name="room_filter"]');
let pool_filter = document.querySelectorAll('input[name="pool_filter"]');
let price_filter = document.querySelectorAll('input[name="price_filter"]');

let reset_filter = document.querySelector('#reset_filter');

let num_annunci_filtrati = document.querySelector('#num_annunci_filtrati');
let annunci_filtrati = [];


// Creazione card pagina annunci

fetch('../dati/elenco_annunci.json')
    .then(response => response.json())
    .then(annunci => {

        // Creazione card annunci
        function create_card_annunci (array_annunci) {
            // Svuotare il container annunci per applicare i filtri
            cont_annunci.innerHTML = '';
            array_annunci.forEach(annuncio => {
                let column = document.createElement('div');
                column.classList.add('col-12','col-md-4','mb-3');
                let pool;
                if (annuncio.pool === true){
                    pool = 'Con piscina'
                } else {
                    pool = 'Senza piscina'
                };
                column.innerHTML = `
                <div class="card">
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
        create_card_annunci(annunci);

        // Creazione radio button filtri città
        function create_city_filter () {
            let city = [];
            annunci.forEach((annuncio) =>{
                if(!city.includes(annuncio.city)){
                    city.push(annuncio.city)
                } 
            })

            city.sort()
            city.forEach((elemento) => {
                let filtro = document.createElement('div');
                filtro.classList.add('form-check', 'ps-1');
                filtro.innerHTML = `
                <input type="radio" class="btn-check form-check-input" name="city_filter" id="${elemento}" autocomplete="off">
                <label class="btn" for="${elemento}">${elemento}</label>
                `
                cont_city_filter.appendChild(filtro);
            })
        }
        create_city_filter()

        // Reset Filtri
        function restart (filter) {
            for (let i = 0; i < filter.length; i++)
            filter[i].checked = false;
        };

        // ==================== Sezione filtri ============================= //

        // Creazione funzione "filtro città"
        function filtro_città (città) {
            if (città == 'all') {
                annunci_filtrati = '';
                create_card_annunci(annunci);
            } else {
                annunci_filtrati = annunci.filter(annuncio => annuncio.city == città);
                create_card_annunci(annunci_filtrati); 
            }
        }

        // Creazione funzione "filtro camere"
        function filtro_camere (room) { 

            if (annunci_filtrati == ""){
                if (room == 'qualsiasi') {
                    create_card_annunci(annunci); 
                } else {
                    annunci_filtrati = annunci.filter(annuncio => annuncio.rooms == room);
                    create_card_annunci(annunci_filtrati);
                }  
            } else {
                if (room == 'qualsiasi') {
                    create_card_annunci(annunci_filtrati); 
                } else {
                    annunci_filtrati = annunci_filtrati.filter(annuncio => annuncio.rooms == room);
                    create_card_annunci(annunci_filtrati); 
                }  
            }
        }

        // Creazione funzione "filtro piscina"
        function filtro_piscina (piscina) {
            if (annunci_filtrati == '') {
                if (piscina == 'uguale') {
                    create_card_annunci(annunci)
                } else if (piscina == 'true') {
                    annunci_filtrati = annunci.filter(annuncio => annuncio.pool == true);
                    create_card_annunci(annunci_filtrati);
                } else if (piscina == 'false') {
                    annunci_filtrati = annunci.filter(annuncio => annuncio.pool == false);
                    create_card_annunci(annunci_filtrati);
                } 
            } else {
                if (piscina == 'uguale') {
                    create_card_annunci(annunci_filtrati) 
                } else if (piscina == 'true') {
                    annunci_filtrati = annunci_filtrati.filter(annuncio => annuncio.pool == true);
                    create_card_annunci(annunci_filtrati);
                } else if (piscina == 'false') {
                    annunci_filtrati = annunci_filtrati.filter(annuncio => annuncio.pool == false);
                    create_card_annunci(annunci_filtrati);
                } 
            }
            
        }

        // Creazione funzione "filtro prezzo"
        function filtro_prezzo (prezzo) {
            if (annunci_filtrati == '') {
                if (prezzo == 'option_1'){
                    annunci_filtrati = annunci.filter(annuncio => annuncio.price <= 300000);
                    create_card_annunci(annunci_filtrati); 
                } else if (prezzo == 'option_2') {
                    annunci_filtrati = annunci.filter(annuncio => annuncio.price > 300000 && annuncio.price < 500000);
                    create_card_annunci(annunci_filtrati);
                } else if (prezzo == 'option_3') {
                    annunci_filtrati = annunci.filter(annuncio => annuncio.price > 500000 && annuncio.price < 800000);
                    create_card_annunci(annunci_filtrati);
                } else if (prezzo == 'option_4') {
                    annunci_filtrati = annunci.filter(annuncio => annuncio.price > 800000);
                    create_card_annunci(annunci_filtrati); 
                }
            } else {
                if (prezzo == 'option_1'){
                    annunci_filtrati = annunci_filtrati.filter(annuncio => annuncio.price <= 300000);
                    create_card_annunci(annunci_filtrati); 
                } else if (prezzo == 'option_2') {
                    annunci_filtrati = annunci_filtrati.filter(annuncio => annuncio.price > 300000 && annuncio.price < 500000);
                    create_card_annunci(annunci_filtrati);
                } else if (prezzo == 'option_3') {
                    annunci_filtrati = annunci_filtrati.filter(annuncio => annuncio.price > 500000 && annuncio.price < 800000);
                    create_card_annunci(annunci_filtrati);
                } else if (prezzo == 'option_4') {
                    annunci_filtrati = annunci_filtrati.filter(annuncio => annuncio.price > 800000);
                    create_card_annunci(annunci_filtrati);
                }
            }
            
        }

        // Funzionalità dei radio button "filtro per città"
        let radio_city = document.querySelectorAll('.form-check-input');
        radio_city.forEach(city_radio => {
            city_radio.addEventListener('click', () => {
                let selected_city = city_radio.id;
                filtro_città (selected_city);
                restart(room_filter);
                restart(pool_filter);
                restart(price_filter);

            })
        })


        // Funzionalità radio button "filtro per camere"
        room_filter.forEach(room_radio => {
            room_radio.addEventListener('click', () => {
                let selected_room_filter = room_radio.id;
                filtro_camere(selected_room_filter);
            })
        })

        // Funzionalità radio button "filtro piscina"
        pool_filter.forEach(pool_radio => {
            pool_radio.addEventListener('click', () => {
                let selected_pool_filter = pool_radio.id;
                filtro_piscina(selected_pool_filter);
            })
        })
           
        // Funzionalità radio button "filtro prezzo"
        price_filter.forEach(radio_prezzo => {
            radio_prezzo.addEventListener('click', () => {
                let selected_price_filter = radio_prezzo.id;
                filtro_prezzo(selected_price_filter);
            })
        })

        // Reset Filtri
        reset_filter.addEventListener('click', () => {
            restart(radio_city);
            restart(room_filter);
            restart(pool_filter);
            restart(price_filter)
            create_card_annunci(annunci)
            annunci_filtrati = '';
        })


    });





