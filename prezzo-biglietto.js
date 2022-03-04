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