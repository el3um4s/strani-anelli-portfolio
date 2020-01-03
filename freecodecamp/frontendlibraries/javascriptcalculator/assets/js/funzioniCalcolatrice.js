/*jshint esversion: 6 */

var numeroDecimale = 0;
var operazioneInMemoria = "";

$('#clear').click(function(){
	"use strict";  
    $('#display').html(0);
    numeroDecimale = 0;
    operazioneInMemoria = "";
});

$('.pulsante-numero').click(function(){
    "use strict";
    if (operazioneInMemoria == "risultato") {
        $('#display').html(0);
        operazioneInMemoria = "";
    }
    
    let numeroDaAggiungere = $(this).attr("val");
    console.log(`ok: ${numeroDaAggiungere}`);
    let contenutoDisplay = $('#display').text();
    if (contenutoDisplay == 0) {
        $('#display').html(numeroDaAggiungere);
        operazioneInMemoria = operazioneInMemoria + numeroDaAggiungere;
    } else
     {
         let regOperatore = /somma$|divide$|moltiplica$|sottrae$/;
          if (regOperatore.test(operazioneInMemoria)) {
              $('#display').html(numeroDaAggiungere);
              operazioneInMemoria = operazioneInMemoria + numeroDaAggiungere;
          } else {
              $('#display').html(contenutoDisplay + numeroDaAggiungere);
              operazioneInMemoria = operazioneInMemoria + numeroDaAggiungere;
          }
     }
});

$('#decimal').click(function(){
  "use strict";
    if (operazioneInMemoria == "risultato") {
        operazioneInMemoria = $('#display').text();
    }
    if (numeroDecimale == 0) {
        let contenutoDisplay = $('#display').text();
        $('#display').html(contenutoDisplay + ".");
         operazioneInMemoria = operazioneInMemoria + ".";
        numeroDecimale = 1;
     } 
});

$('.pulsante-operazioni').click(function(){
  "use strict";
    if (operazioneInMemoria == "risultato") {
        operazioneInMemoria = $('#display').text();
    }
    numeroDecimale = 0;
    let regOperatore = /somma$|divide$|moltiplica$|sottrae$/;
    let operatoreDaUsare = $(this).attr("operatore");
    if (regOperatore.test(operazioneInMemoria)) {
        console.log(`operatore ripetuto: sostituisco l'operatore`);
        operazioneInMemoria = operazioneInMemoria.replace(regOperatore, operatoreDaUsare);
        console.log(operazioneInMemoria);
    } else {
        operazioneInMemoria += operatoreDaUsare;
        console.log(operazioneInMemoria);
    }
    
});

$('.pulsante-uguale').click(function(){
  "use strict";
    if (operazioneInMemoria =="risultato") {
        operazioneInMemoria = $('#display').text();
    }
    numeroDecimale = 0;
    console.log(operazioneInMemoria);
    let regOperatore = /somma$|divide$|moltiplica$|sottrae$/;
    if (regOperatore.test(operazioneInMemoria)) {
        console.log(`operatore alla fine: lo elimino`);
        operazioneInMemoria = operazioneInMemoria.replace(regOperatore, "");
        console.log(operazioneInMemoria);
    }
    console.log("sostituisco le parole");
    let regOperatoreInizio = /^somma|^divide|^moltiplica|^sottrae/;
    if (regOperatoreInizio.test(operazioneInMemoria)) {
        console.log(`operatore all'inizio: lo elimino`);
        operazioneInMemoria = operazioneInMemoria.replace(regOperatoreInizio, "");
        console.log(operazioneInMemoria);
    }
    operazioneInMemoria = operazioneInMemoria.replace(/somma/g, "+");
    operazioneInMemoria = operazioneInMemoria.replace(/divide/g, "/");
    operazioneInMemoria = operazioneInMemoria.replace(/moltiplica/g, "*");
    operazioneInMemoria = operazioneInMemoria.replace(/sottrae/g, "-");
    console.log(operazioneInMemoria);
    let risultato = eval(operazioneInMemoria);
    console.log(risultato);
    $('#display').html(risultato);
    operazioneInMemoria = "risultato";
    console.log(operazioneInMemoria);
});