// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 => tra 1 e 80
// con difficoltà 2 => tra 1 e 50
var richiestaLivello;
var min = 1;
do {
  richiestaLivello = parseInt(prompt("Scegli il livello : soft = 0, medio = 1, hard = 2"));

  if (richiestaLivello === 0) {
    richiestaLivello = 100;
  }else if (richiestaLivello === 1) {
    richiestaLivello = 80;
  } else if (richiestaLivello === 2) {
    richiestaLivello = 50;
  }

} while (richiestaLivello!= 100 && richiestaLivello!= 80 && richiestaLivello!= 50);

// Il computer deve generare 16 numeri casuali tra 1 e 100.
// rifatta con ciclo while
// finchè i numeri non sono diversi da essi stessi
var arrayEstratti = randomGeneratore (min,richiestaLivello);

function randomGeneratore(min, richiestaLivello){

  var numeriEstratti = [];//array vuoto metti dentro se no non funzia
  var numeroSostituto;

  while (numeriEstratti.length < 16) {
    var numeriCpu = Math.floor(Math.random() * richiestaLivello) + 1;

     if (numeriEstratti.includes(numeriCpu) == false){
      numeriEstratti.push(numeriCpu);
      }
  }
  return numeriEstratti;
}
console.log("Numeri BOMBA: " + arrayEstratti);

// In seguito deve chiedere all’utente (84) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina,
// altrimenti si continua chiedendo all’utente un altro numero.

var numeroInserito = inserimentoNumUtente (min,richiestaLivello);

function inserimentoNumUtente (min,richiestaLivello){

  var arrayUtente = [];
  var nuovoNumeroUtente;
  var numeroVolte = 0;

  do {
    numeroUtente = parseInt(prompt("Inserire numero"));

    if (!arrayUtente.includes(numeroUtente)) {
      if ((numeroUtente >=min) && (numeroUtente <=richiestaLivello)) {
            arrayUtente.push(numeroUtente);
            numeroVolte+= 1;
        }else {
          alert("Il numero deve essere compreso tra " + min + " e " + richiestaLivello);
        }
      }else {
        alert("Il numero è già stato inserito, inseriscine uno nuovo");
      }
  // La partita termina quando il giocatore inserisce un numero “vietato”
  // o raggiunge il numero massimo possibile di numeri consentiti.
  } while (!arrayEstratti.includes(numeroUtente) && numeroVolte < (richiestaLivello-16));
  console.log ("Numeri giocati : " + arrayUtente);
  return [numeroUtente, numeroVolte];
}
// condizione slegata
// Al termine della partita il software deve comunicare il punteggio,
// cioè il numero di volte che l’utente ha inserito un numero consentito.
if ((richiestaLivello- 16 - numeroInserito[1]) == 0) {
console.log ("HAI VINTO!")
}else {
  console.log ("ATTENZIONE il numero " + numeroInserito[0] + " è un numero BOMBA, hai perso.");
}
  console.log ("Totale numeri inseriti: " + numeroInserito[1] );
  console.log ("Totale punti : " + (numeroInserito[1] - 1));
  console.log("Punti mancanti alla vittoria: " + (richiestaLivello- 16 - numeroInserito[1] + 1));
