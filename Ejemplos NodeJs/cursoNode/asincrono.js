"use strict";


//funcion para ejecutar funciones en cierto periodo de tiempo
console.log('empiezo');

function escribeTras2segundos(texto, callback){
    setTimeout(function(){
        console.log(texto);
        callback();
    }, 2000);
}

escribeTras2segundos('hola',function(){
    console.log('fin de hola');
});
escribeTras2segundos('hola2',function(){
    console.log('fin de hola 2');
});


//Callbacks


