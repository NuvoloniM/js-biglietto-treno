/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/

//chiedo i chilometri da percorrere e ne imposto la variabile

let distanza = prompt( "Perfavore, inserisci i chilometri che vuoi percorrere" );

// controllo che l'informazione sia valida
if (isNaN(distanza)) {
    alert("Perfavore, inserisci un numero valido")
} else {
    alert("Grazie per aver inserito l'informazione")
}

//chiedo età del passeggero e ne imposto la variabile

let userAge = prompt ( "Perfavore, inserisci l'età del passeggero" );

// controllo che l'informazione sia valida 
if (isNaN(userAge)) {
    alert("Perfavore, inserisci un numero valido")
} else {
    alert("Grazie per aver inserito l'informazione")
}

// clacolo il prezzo del biglietto secondo le variabili impostate differenziando i casi

