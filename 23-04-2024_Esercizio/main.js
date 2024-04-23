//------------------- Traccia 1 ---------------//

let persona = {
    nome: "Fortunato",
    cognome: "Cusati",
    età: 25,

    saluto: function (nome, cognome, età) {
        return `Ciao, sono ${this.nome}, il mio cognome è ${this.cognome} e ho ${this.età} anni.`;  
    },
}

console.log(persona.saluto());


//----------------- Traccia 2 ----------------//

let agenda = {
    contatti: [
        {
            nome: 'Nicola',
            telefono: '3453451423'
        },
        {
            nome: 'Piero',
            telefono: '3392347654'
        },
        {
            nome: 'Stefano',
            telefono: '3454565760'
        },
        {
            nome: 'Antonio',
            telefono: '3413415577'
        }

    ],
    
    mostra_contatti: function (){
        return this.contatti;
    },

    mostra_singolo_contatto: function (i) {
        return this.contatti[i];
    },

    elimina_contatto: function (nome){
        for (let i = 0; i < this.contatti.length; i++) {
            if (this.contatti[i].nome === nome){
                this.contatti.splice(i, 1);
                return `Contatto di ${nome} eliminato`
            }
        }
    },

    aggiungi_contatto: function (nuovo_nome, nuovo_numero) {
        this.contatti.push({nome: nuovo_nome, telefono: nuovo_numero});
        return `Contatto di ${nuovo_nome} aggiunto in agenda!`
        
    },

    modifica_contatto: function (nome, numero) {
        for (let i = 0; i < this.contatti.length; i++) {
            if (this.contatti[i].nome === nome){
                this.contatti[i] = {nome, numero};
                return `Contatto di ${nome} modificato`
            }
        }
    }
}

console.log(agenda.mostra_contatti());

// console.log(agenda.mostra_singolo_contatto(2));

// console.log(agenda.elimina_contatto('Nicola'));

// console.log(agenda.aggiungi_contatto('Alessio', '33567892234'));

// console.log(agenda.modifica_contatto('Piero','3407492406'));