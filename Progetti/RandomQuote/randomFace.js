//**********************************************************************************************************// 
//                                  randomFace.js DESCRIZIONE                                               //
//**********************************************************************************************************//
//
//  Costruttore:
//          var viso = new RandomFace();
//
//  Proprietà:
//          visoArray   un array con tutte le proprietà
//          visoTesto   la stringa di testo con le caratteristiche del viso
//          visoHTML    una stringa di testo con il codice html da isnerire nella pagina
//
// Metodi:
//          .cambiaColore(strColore);   cambia il colore del viso senza modificarne la fisionomia 
//                                      (se non c'è alcun argomento il colore è random)
//          .nuovoViso();               cambia completamente il viso in maniera random
//
//
// Crea un oggetto RandomFace per disegnare un viso tramite Opentype ligatures
//          https://en.wikipedia.org/wiki/List_of_typographic_features
//
// da usare in combinazione con:
//          http://rrry.me/nosydemo/NOSY_Facetype_by_Rory_Harnden.otf
//          https://github.com/davidmerfield/randomColor/blob/master/randomColor.js

/*
usato come base:
            https://gist.github.com/denilsonsa/a518a7825e727e55b6fb
            http://rrry.me/nosy/

per i colori random:
        usare randomColor.js:
            https://github.com/davidmerfield/randomColor/
            https://randomcolor.llllll.li/

per le parti del viso:
            NOSY_Facetype_by_Rory_Harnden.otf
*/

var RandomFace = function () {
    'use strict';

    //**********************************************************************************************************// 
    //                                          FUNZIONI PRIVATE                                                //
    //**********************************************************************************************************//

    // Un oggetto generico per contenere le varie parti del viso
    function ParteDelViso(nome, massimo, probability, colore) {
        this.nome = nome; // il nome in inglese - quello usato da NOSY
        this.massimo = massimo; // numero massimo di varibili possibili
        this.probability = probability; // probabilità di usare questa parte
        this.colore = colore; // inserisco subito un colore, nel caso qualcosa vada storto con la funzione che dà il colore random
        this.valoreAttuale = 1;
    }

    // restituisce un array generico con le parti del viso disponibili
    function elencoPartiDelViso() {
        return [new ParteDelViso('face', 1, 1.0, '#f1dabf'),
                new ParteDelViso('ears', 9, 0.5, '#f1dabf'),
                new ParteDelViso('mask', 9, 0.2, '#f40e3f'),
                new ParteDelViso('glassesalt', 5, 1.0, '#e6db94'),
                new ParteDelViso('eyes', 9, 1, '#392d2f'),
                new ParteDelViso('mouth', 9, 0.9, '#39d59b'),
                new ParteDelViso('mouthalt', 9, 0.5, '#00c9ef'),
                new ParteDelViso('cheeks', 9, 0.3, '#ef3527'),
                new ParteDelViso('eyebrows', 9, 0.4, '#422f28'),
                new ParteDelViso('glasses', 5, 0.2, '#b31e43'),
                new ParteDelViso('hair', 9, 0.4, '#422f28'),
                new ParteDelViso('hat', 9, 0.1, '#b31e43'),
                new ParteDelViso('skin', 5, 0.3, '#302238'),
                new ParteDelViso('beard', 5, 0.3, '#00c9ef'),
                new ParteDelViso('moustache', 5, 0.4, '#4ec500'),
                new ParteDelViso('nose', 9, 0.4, '#25b68f')];
    }

    // sceglie a caso quali parti del viso utilizzare per creare il viso
    function selezionaPartiVisoDaMostrare(viso) {

        // torna vero se il numero random è minore della probabilità indicata
        function filtraRandom(val) {
            return Math.random() < val.probability;
        }

        return viso.filter(filtraRandom);
    }

    // assegna un valore a caso agli elementi del viso da visualizzare, ed elimino le parti che non mi servono più
    function assegnaFormeACaso(viso) {

        function randomRange(myMin, myMax) {
            return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
        }

        function scegliACaso(val) {
            val.valoreAttuale = randomRange(1, val.massimo);
            return val;
        }

        return viso.map(scegliACaso);
    }

    // assegna un colore a caso agli elementi del viso
    function assegnaColoreACaso(viso, stileColore) {

        function coloreACaso(val) {
            //val.colore = randomColor();
            if (stileColore === undefined) {
                val.colore = randomColor({
                    luminosity: 'light'
                });
            } else {
                val.colore = randomColor({
                    luminosity: 'light',
                    hue: stileColore
                });
            }

            return val;
        }

        return viso.map(coloreACaso);
    }

    // pulisco il viso da tutto quello che non serve più
    function pulisciViso(viso) {
        function pulisci(val) {
            val.nome = val.nome.toUpperCase();
            delete val.massimo;
            delete val.probability;
            return val;
        }

        return viso.map(pulisci);
    }

    // creo un viso random
    function visoRandom() {
        // mi creo una variabile viso (per semplicità mia, in realtà potrei fare tutta una concatenazione, ma mi pare illeggibile)
        var viso = elencoPartiDelViso();
        viso = selezionaPartiVisoDaMostrare(viso);
        viso = assegnaFormeACaso(viso);
        viso = assegnaColoreACaso(viso);
        viso = pulisciViso(viso);
        return viso;
    }

    // converte un viso in testo
    function visoRandomInTesto(viso) {

        function appendCurrent(previousValue, currentValue) {
            return previousValue + currentValue.nome + currentValue.valoreAttuale;
        }

        return viso.reduce(appendCurrent, '');
    }

    // converte un viso in codice HTML (dentro uno span, con stile colore)
    function visoRandomInSpan(viso) {
        /*
        <span style="color: ' + form[name + '_color'].value + '">' + name.toUpperCase() + form[name + '_number'].value + '</span>'
		*/
        function appendCurrent(previousValue, currentValue) {
            var span = "<span style='color:" + currentValue.colore + "'>" + currentValue.nome + currentValue.valoreAttuale + "</span>";
            return previousValue + span;
        }

        return viso.reduce(appendCurrent, '');
    }


    //**********************************************************************************************************// 
    //                                         PROPRIETA' PUBBLICHE                                             //
    //**********************************************************************************************************//

    // le proprietà dell'oggetto
    this.visoArray = visoRandom(); // l'array contentente le varie parti del viso
    this.visoTesto = visoRandomInTesto(this.visoArray); // la versione in puro testo del viso
    this.visoHTML = visoRandomInSpan(this.visoArray); // la versione in HTML (con le parti separate da span e il colore come style css)


    //**********************************************************************************************************// 
    //                                         METODI PUBBLICI                                                  //
    //**********************************************************************************************************//

    /* cambia solo il colore dell'oggetto, usando come base una stringa:
        red
        orange
        yellow
        green
        blue
        purple
        pink
        monochrome
        random
    */
    this.cambiaColore = function (newColore) {
        var viso = this.visoArray;
        viso = assegnaColoreACaso(viso, newColore);
        this.visoArray = viso;
        this.visoTesto = visoRandomInTesto(this.visoArray);
        this.visoHTML = visoRandomInSpan(this.visoArray);
    };

    // ricrea completamente il viso
    this.nuovoViso = function () {
        this.visoArray = visoRandom();
        this.visoTesto = visoRandomInTesto(this.visoArray);
        this.visoHTML = visoRandomInSpan(this.visoArray);

    };

    // verifica
    this.verifica = function () {
        console.log("2017.02.16 17.25");
    };

};
