let contact_list = document.querySelector('.contact_list');
let show_list = 'off';

let input_name = document.querySelector('#input_name');
let input_tel = document.querySelector('#input_tel');

let add = document.querySelector('#add');
let remove = document.querySelector('#remove');
let show = document.querySelector('#show');
let modify = document.querySelector('#modify');

let contact = {
    contatti: [
        {
            nome: 'Fortunato',
            telefono: '+39 347 840 0509',
        },
        {
            nome: 'Piero',
            telefono: '+39 353 456 0912',
        },
        {
            nome: 'Franco',
            telefono: '+39 311 234 4582',
        },
    ],

    show_contact : function(){
        if (show_list === 'off'){
            contact.contatti.forEach((contatto) => {
                let list = document.createElement('p');
                list.innerHTML = `
                    Nome: <strong>${contatto.nome}</strong> - 
                    Telefono: <strong>${contatto.telefono}</strong>`;
                contact_list.appendChild(list);
                show_list = 'on'; 
                show.innerHTML = 'Nascondi rubrica';
            })
        } else if (show_list === 'on') {
            while (contact_list.hasChildNodes()){
                contact_list.removeChild(contact_list.firstChild);
            };
            show_list = 'off';
            show.innerHTML = 'Mostra rubrica';
        }
    },

    remove_contact : function (nome) {
        for (let i = 0; i < this.contatti.length; i++){
            if (this.contatti[i].nome === nome){
                this.contatti.splice(i,1);
            }
        }
    },

    modify_contact : function (nome, telefono){
        for (let i = 0; i < this.contatti.length; i++){
            if (this.contatti[i].nome === nome){
                this.contatti[i] = {nome, telefono};
            }
        }
    }
};

add.addEventListener('click', function(){
    contact.contatti.push({nome: input_name.value, telefono: input_tel.value});
    alert ('Contatto aggiunto!');
    input_name.value = '';
    input_tel.value = '';
});

show.addEventListener('click', contact.show_contact);

remove.addEventListener('click', function(){
    contact.remove_contact(input_name.value);
    alert(`Contatto ${input_name.value} eliminato`)
    input_name.value = '';
    input_tel.value = '';
});

modify.addEventListener('click', function(){
    contact.modify_contact(input_name.value, input_tel.value);
    alert(`Contatto di ${input_name.value} modificato correttamente!`);
    input_name.value = '';
    input_tel.value = '';
});
