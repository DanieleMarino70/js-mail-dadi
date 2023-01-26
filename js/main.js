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
    console.log("Hai vinto");
    console.log(randomUser, randomCpu);
}
else if (randomUser < randomCpu){
    console.log("Hai perso");
    console.log(randomUser, randomCpu);
}
else{
    console.log("Hai pareggiato");
    console.log(randomUser, randomCpu);
}



