/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
*/

//pseudocodice

/*
INIZIO
1. Chiedo all'utente il numero di chilometri che vuole percorrere
2. Chiedo all'utente la sua età
3. SE (l'età dell'utente è minore di 18 anni )
   ALLORA
         3.a prezzo del biglietto è pari ad --> (n°Km percorsi) * 0.21  - (n°Km percorsi) * 0.21  * 20 / 100
   ALTRIMENTI
            SE (l'età dell'utente è maggiore di 65)
            ALLORA
                     3.b prezzo del biglietto è pari ad --> (n°Km percorsi) * 0.21  - (n°Km percorsi) * 0.21 * 40 / 100
            ALTRIMENTI
                     3.c prezzo del biglietto è pari ad -->  (n°Km percorsi) * 0.21
FINE
*/ 

console.log('JS OK');

document.getElementById('nota').innerText = 'Programma che calcola il costo del biglietto del treno';

const numeroChilometri =parseFloat(prompt('Inserisci numero dei chilometri percorsi: ')); //per memorizzare il n° dei km
const etaUtente = parseInt(prompt('Inserisci la tua età: ')); //per memorizzare l'età dell'utente
const costoBiglietto = numeroChilometri * 0.21;
const scontoMinorenni = costoBiglietto * 20 / 100;
const scontoOver = costoBiglietto * 40 / 100;
if( etaUtente < 18)
{
    const costoBigliettoScontato = costoBiglietto - scontoMinorenni;
    alert('Il prezzo del tuo biglietto è di: ' + costoBigliettoScontato.toFixed(2));
}else if(etaUtente > 65){
    const costoBigliettoScontato = costoBiglietto - scontoOver;
    alert('Il prezzo del tuo biglietto è di: ' + costoBigliettoScontato.toFixed(2));
}
else{
    alert('Il prezzo del tuo biglietto è di: ' + costoBiglietto.toFixed(2));
}