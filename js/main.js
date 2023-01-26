// TRACCIA:

/*
    Mail:

    Chiedi all'utente la sua email,
    controlla che sia nella lista di chi può accedere,
    stampa un messaggio appropriato sull'esito del controllo.
*/

/* 
    Gioco dei dadi:

    Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
    Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/



// GENERO NUMERI RANDOM DA INSERIRE IN DELLE VARIABILI
// DOPODICHE LI CONFRONTO CON I RISULTATI 
//     - IL PRIMO E' MAGGIORE DEL SECONDO
//     - IL PRIMO E' MINORE DEL SECONDO
//     - IL PRIMO E' UGUALE AL SECONDO


const randomUser = Math.floor(Math.random() * 6 + 1); 
const randomCpu = Math.floor(Math.random() * 6 + 1); 


if(randomUser > randomCpu) {
    console.log("Hai vinto!");
    console.log("User: "+ randomUser, "CPU: " + randomCpu);
}
else if (randomUser < randomCpu){
    console.log("Hai perso!");
    console.log("User: "+ randomUser, "CPU: " + randomCpu);
}
else{
    console.log("Hai pareggiato!");
    console.log("User: "+ randomUser, "CPU: " + randomCpu);
}










// CREO LISTA EMAIL
const emails = ["lamiaemail@gmail.com", "emailditizio@gmail.com", "emaildicaio@hotmail.it", "email_420diluca@yahoo.com"];
// CHIEDO ALL'UTENTE LA SUA EMAIL
const emailRequired = prompt("Qual è la tua email?");
// CREO UNA VARIABILE SWITCH, IN QUANTO CI INTERESSA SAPERE SE C'E' NELLA LISTA
let isEmailValid = false;

// debug
console.log(emails);


// CREO LA CONDIZIONE IN BASE A QUANTI ELEMENTI CI SONO NELLA LISTA
for(let i = 0; i < emails.length; i++){
    // IN "currentEmail" CI RI ITERO IL VALORE CORRENTE DELL'ARRAY EMAIL GRAZIE ALL'INDICE I
    // ALL'INIZIO DEL FOR SARA' "lamiaemail@gmail.com"
    const currentEmail = emails[i];

    //QUA CHIEDO SE L'EMAIL CHE HO RICHIESTO ALL'UTENTE IN PRECEDENZA E' UGUALE A "currentEmail"
    if(emailRequired == currentEmail){
        // NEL CASO SIA UGUALE SWITCHO IL FALSE IN TRUE
        isEmailValid = true;
    }
}

//FUORI DALL'IF CHIEDO SE "isEmailValid" E' TRUE,
//SE E' TRUE DICO CHE IN PRATICA CHE C'E' NELLA LISTA E QUINDI HA IL PERMESSO
if (isEmailValid){
    alert("Hai il permesso!");
}
// ALTRIMENTI SE E' FALSE (E QUINDI NON HA SWITCHATO NEL FOR DI PRIMA) NON C'E' NELLA LISTA
// E QUINDI NON HA IL PERMESSO       
else (alert("Non hai il permesso!"));

// TUTTO QUESTO PERO' CONSIDERANDO CHE SIA TUTTO CASESENSITIVE, ALTRIMENTI DOVEVA ESSER FATTO IN UN ALTRO MODO, PENSO :P