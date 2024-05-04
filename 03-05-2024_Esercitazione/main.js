// Cattura input
let input_name = document.querySelector('#input_name');
let input_tel = document.querySelector('#input_tel');
let input_email = document.querySelector('#input_email');
let show_hide = document.querySelector('#show_hide');

// Cattura bottoni

let add_contact = document.querySelector('#add_contact');
let rmv_contact = document.querySelector('#rmv_contact');
let show_contact = document.querySelector('#show_contact');
let modify_contact = document.querySelector('#modify_contact');

// Cattura container 

let container = document.querySelector('#container');

let show_list = 'off';

let agenda = {
    contatti : [
        {
            name: 'Andrea',
            tel: '+39 333 786 45 23',
            mail: 'info@abc.it'
        },
        {
            name: 'Michele',
            tel: '+39 099 234 67 45',
            mail: 'michele@antonio.com'
        },
        {
            name: 'Lucia',
            tel: '+39 789 45 23',
            mail: 'lucia@lucia.org'
        }
    ],  
    
    show_contact : function(){
        if (show_list === 'off'){
            agenda.contatti.forEach((contatto) => {
                let list = document.createElement('div');
                list.innerHTML = `
                <div class="card mt-3 ms-3 col-4" style="width:18rem">
                    <div class="card-body shadow p-3">
                        <h5 class="card_title">${contatto.name}</h5>
                        <p class="card-text">${contatto.tel}</p>
                        <p class="card-text">${contatto.mail}</p>
                        <a href="tel:${contatto.tel}" class="btn btn-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-forward" viewBox="0 0 16 16">
                                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877zm10.762.135a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.293 4H9.5a.5.5 0 0 1 0-1h4.793l-1.647-1.646a.5.5 0 0 1 0-.708"/>
                            </svg>
                        Call
                        </a>
                        <a href="mailto:${contatto.mail}" class="btn btn-success">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-arrow-up" viewBox="0 0 16 16">
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4.5a.5.5 0 0 1-1 0V5.383l-7 4.2-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h5.5a.5.5 0 0 1 0 1H2a2 2 0 0 1-2-1.99zm1 7.105 4.708-2.897L1 5.383zM1 4v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1"/>
                                <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.354-5.354 1.25 1.25a.5.5 0 0 1-.708.708L13 12.207V14a.5.5 0 0 1-1 0v-1.717l-.28.305a.5.5 0 0 1-.737-.676l1.149-1.25a.5.5 0 0 1 .722-.016"/>
                            </svg>
                            Send Email
                        </a>
                    </div> 
                </div>
                `;
                container.appendChild(list);
                show_list = 'on';
                show_hide.innerHTML = 'Nascondi Rubrica';
            })
        } else if (show_list === 'on') {
            while (container.hasChildNodes()){
                container.removeChild(container.firstChild);
            };
            show_list = 'off';
            show_hide.innerHTML = 'Mostra Contatti'
        }
    },

    hide_list: function (){
        while (container.hasChildNodes()){
            container.removeChild(container.firstChild);
        };
        show_list = 'off';
        show_hide.innerHTML = 'Mostra Contatti'
    },

    remove_contact: function (nome){
        for (let i = 0; i < this.contatti.length; i++){
            if (this.contatti[i].name === nome){
                this.contatti.splice(i,1);
            }
        }
    },

    modify_contact: function (name, tel, mail){
        for (let i = 0; i < this.contatti.length; i++){
            if (this.contatti[i].name === name){
                this.contatti[i] = {name , tel, mail};
            }
        }
    }

};

show_contact.addEventListener('click', agenda.show_contact);

add_contact.addEventListener('click', function(){
    if (input_name.value != '', input_tel.value != '', input_email.value != ''){
        agenda.contatti.push({name: input_name.value, tel: input_tel.value, mail: input_email.value});
        alert ('Contatto aggiunto!');
        agenda.hide_list();
        agenda.show_contact();
        input_name.value = '';
        input_tel.value = '';
        input_email.value = '';
    } else {
        alert('Compilare tutti i campi!')
    }
});

rmv_contact.addEventListener('click', function(){
    if (input_name.value != ''){
        agenda.remove_contact(input_name.value);
        alert(`Contatto ${input_name.value} eliminato!`)
        agenda.hide_list();
        agenda.show_contact();
        input_name.value = '';
        input_email.value = '';
        input_tel.value = '';
    } else {
        alert('Inserisci il nome del contatto da eliminare!')
    }
});

modify_contact.addEventListener('click', function(){
    if (input_name.value != ''){
        agenda.modify_contact(input_name.value, input_tel.value, input_email.value);
        alert(`Contatto di ${input_name.value} modificato correttamente!`);
        agenda.hide_list();
        agenda.show_contact();
        input_name.value = '';
        input_email.value = '';
        input_tel.value = '';
    } else {
        alert('Inserisci il nome del contatto da modificare!')
    }
})

