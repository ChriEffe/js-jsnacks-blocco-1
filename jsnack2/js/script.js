/*In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.*/

// Lista invitati
const listName = ['Aldo', 'Giovanni', 'Giacomo', 'Ringhio', 'Claudia'];

// Chiedo nome utente
const nameUser = prompt('Inserisci nome invito');

let find = false;

for (let i = 0; i < listName.length; i++) {
    if (listName[i].toLowerCase() == nameUser.toLowerCase()) {
         find = true;
    }
}

if (find == true) {
    document.writeln('Puoi partecipare');
} else {
    document.writeln('Non puoi partecipare');
}

console.log('Lista invitati ' + listName);
console.log('Nome utente ' + nameUser);
console.log('Esito ' + find);





     