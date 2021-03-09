// Il computer deve generare 16 numeri casuali tra 1 e 100.
var numeriEstratti = [];//array vuoto
var numeroSostituto;
for (var i = 0; i < 16; i++) {
  var numeriCpu = Math.floor(Math.random() * 100) + 1;
  // I numeri non possono essere duplicati.
  if (!numeriEstratti.includes(numeriCpu)){
      numeriEstratti.push(numeriCpu);
    }else {
      numeroSostituto = Math.floor(Math.random() * 100) + 1;
      while (!numeriEstratti.includes(numeriCpu)) {
      }
      numeriEstratti.push(numeroSostituto);
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

do {
  var numeroUtente = parseInt(prompt("inserire numero"));

  if (!arrayUtente.includes(numeroUtente)) {
    if ((numeroUtente >=1) && (numeroUtente <=100)) {
          arrayUtente.push(numeroUtente);
          numeroVolte+= 1;

      }else {
        alert("il numero deve essere compreso tra 1 e 100");
      }
    }else {
      alert("il numero è già stato inserito, inseriscine uno nuovo");
  }
  
// La partita termina quando il giocatore inserisce un numero “vietato”
// o raggiunge il numero massimo possibile di numeri consentiti.

} while (!numeriEstratti.includes(numeroUtente) && numeroVolte < 84);
// Al termine della partita il software deve comunicare il punteggio,
// cioè il numero di volte che l’utente ha inserito un numero consentito.
  console.log (arrayUtente);
  console.log (numeroUtente + " il numero esiste, hai perso");
  console.log ("totale numeri inseriti: " + numeroVolte);
  console.log("tentativi rimasti: " + (84 - numeroVolte));




// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 => tra 1 e 80
// con difficoltà 2 => tra 1 e 50
