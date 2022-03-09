/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/

//chiedo i chilometri da percorrere e ne imposto la variabile

let distanza = prompt( "Perfavore, inserisci i chilometri che vuoi percorrere" );
console.log(distanza)
// controllo che l'informazione sia valida
if (isNaN(distanza)) {
    alert("Perfavore, inserisci un numero valido");
} else {
    alert("Grazie per aver inserito l'informazione");
}

//chiedo età del passeggero e ne imposto la variabile

let userAge = prompt ( "Perfavore, inserisci l'età del passeggero" );

// controllo che l'informazione sia valida 
if (isNaN(userAge)) {
    alert("Perfavore, inserisci un numero valido")
} else {
    alert("Grazie per aver inserito l'informazione")
}

// calcolo il prezzo base del biglietto dati i chilometri
let total = 0.21 * distanza

// clacolo il prezzo del biglietto secondo le variabili impostate differenziando i casi

//caso in cui ci sia un dato non valido
if (isNaN(userAge)== true || isNaN(distanza)== true) {
    alert ("Informazioni non valide, controlla e ripeti l'operazione");
//caso minorenne
} else if (userAge < 18){
    var price = (total - (total * 0.2 ) );
//caso over 65
} else if (userAge > 65) {
    var price = (total - (total * 0.4) );
    console.log(price)
//tutti gli altri casi 
} else {
    var price = total;
    console.log(price)
}

//converti stringa in numero


//stampa in html il risultato

if (price == undefined ) {
    document.getElementById('prezzo_biglietto').innerHTML = `OPS. Qualcosa è andato storto. Riprova!`
} else {
    price = Number(price.toFixed(2));
    document.getElementById('prezzo_biglietto').innerHTML = ` Il prezzo del biglietto è ${price} &euro;. Buon Viaggio!` 
}
