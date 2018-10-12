'use strict';

var casa = {
    ventanas: 2,
    cuantasVentanas: function(){
        console.log('la casa tiene ' + this.ventanas + ' ventanas');
    }
};

function Coche(){
    this.ruedas = 4;
    this.cuantasRuedas = function(){
        console.log('el coche tiene ' + this.ruedas + ' Ruedas');
    }
}

casa.cuantasVentanas();
//el bind es para que no se pierda la referencias del this
setTimeout(casa.cuantasVentanas.bind(casa), 2000);

var carro = new Coche();
carro.cuantasRuedas();

setTimeout(carro.cuantasRuedas.bind(carro), 2000);

