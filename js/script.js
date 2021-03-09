// Il computer deve generare 16 numeri casuali tra 1 e 100.
var numeriEstratti = [];//array vuoto
var numeroSostituto;
var richiestaLivello;
// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 => tra 1 e 80
// con difficoltà 2 => tra 1 e 50
do {
  richiestaLivello = parseInt(prompt("scegli il livello: soft = 0, medio = 1, hard = 2"));

  if (richiestaLivello === 0) {
    richiestaLivello = 100;
  }else if (richiestaLivello === 1) {
    richiestaLivello = 80;
  } else if (richiestaLivello === 2) {
    richiestaLivello = 50;
  }

} while (richiestaLivello!= 100 && richiestaLivello!= 80 && richiestaLivello!= 50);


randomGeneratore (1,richiestaLivello);

function randomGeneratore(min, richiestaLivello){
for (var i = 0; i < 16; i++) {
  var numeriCpu = Math.floor(Math.random() * richiestaLivello) + 1;
  // I numeri non possono essere duplicati.
  if (!numeriEstratti.includes(numeriCpu)){
      numeriEstratti.push(numeriCpu);
    }else {
      numeroSostituto = Math.floor(Math.random() * richiestaLivello) + 1;
      while (!numeriEstratti.includes(numeriCpu)) {
      }
      numeriEstratti.push(numeroSostituto);
    }
}
}
console.log(numeriEstratti);

// In seguito deve chiedere all’utente (84) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina,
// altrimenti si continua chiedendo all’utente un altro numero.
var arrayUtente = [];
var numeriScartati = [];
var nuovoNumeroUtente;
var numeroVolte = 0;

inserimentoNumUtente (1,richiestaLivello);

function inserimentoNumUtente (min,richiestaLivello){
do {
  var numeroUtente = parseInt(prompt("inserire numero"));

  if (!arrayUtente.includes(numeroUtente)) {
    if ((numeroUtente >=min) && (numeroUtente <=richiestaLivello)) {
          arrayUtente.push(numeroUtente);
          numeroVolte+= 1;

      }else {
        alert("il numero deve essere compreso tra" + min + "e" + richiestaLivello);
      }
    }else {
      alert("il numero è già stato inserito, inseriscine uno nuovo");
  }

// La partita termina quando il giocatore inserisce un numero “vietato”
// o raggiunge il numero massimo possibile di numeri consentiti.

} while (!numeriEstratti.includes(numeroUtente) && numeroVolte < (richiestaLivello-16));

if ((richiestaLivello- 16 - numeroVolte) == 0) {
console.log ("HAI VINTO!")
}else {
  console.log (numeroUtente + " il numero è ILLEGAL, hai perso");
}
// Al termine della partita il software deve comunicare il punteggio,
// cioè il numero di volte che l’utente ha inserito un numero consentito.
  console.log (arrayUtente);
  console.log ("totale numeri inseriti: " + numeroVolte);
  console.log("tentativi rimasti: " + (richiestaLivello- 16 - numeroVolte));
}
