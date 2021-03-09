// Il computer deve generare 16 numeri casuali tra 1 e 100.
var numeriEstratti = [];//array vuoto
var nuovo;
for (var i = 0; i < 16; i++) {
  var numeriCpu = Math.floor(Math.random() * 100) + 1;
  // I numeri non possono essere duplicati.
  if (!numeriEstratti.includes(numeriCpu)){
    numeriEstratti.push(numeriCpu);
    }else {
      nuovo = Math.floor(Math.random() * 100) + 1;
      while (!numeriEstratti.includes(numeriCpu)) {
      }
      numeriEstratti.push(nuovo);
    }
  console.log(numeriEstratti[i]);
}
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.



// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 => tra 1 e 80
// con difficoltà 2 => tra 1 e 50
