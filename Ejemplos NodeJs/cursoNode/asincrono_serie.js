
console.log('empiezo');

function escribeTras2segundos(texto, callback){
    setTimeout(function(){
        console.log(texto);
        callback();
    }, 2000);
}

//bucle asincrono en paralelo

/*var acabado = 0;

for (var i = 0; i<5; i++){
    escribeTras2segundos('texto' + i, function(){
        acabado++;
        if(acabado >= 5)
        {
            console.log('fin');
        }
    });
}*/

//bucle asincrono en serie

//llamar a una funcion N veces en serie con un array, 
//al finalizar llamar al call back de finalizacion
function serie(lista, func, callbackFin){
    if(lista.lenght == lista[0]){
        callbackFin();
        return;
    }
    
    func(lista.shift(), function(){
            serie(lista, func, callbackFin);
    })
}

var lista = [0,1,2,"tres",4,5];

serie(lista, escribeTras2segundos, function(){
    console.log('he terminado');
})

