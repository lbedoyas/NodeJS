
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

//llamar a una funcion N veces en serie, al finalizar llamar al call back de finalizacion
function serie(n, func, callbackFin){
    if(n == 0){
        callbackFin();
        return;
    }
    n--;
    func(n, function(){
            serie(n, func, callbackFin);
    })
}

serie(5, escribeTras2segundos, function(){
    console.log('he terminado');
})

