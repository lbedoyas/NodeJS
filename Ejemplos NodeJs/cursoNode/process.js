"use strict";

//informacion de procesos

var info = {
    pid: process.pid,
    version: process.version,
    platform: process.platform,
    title: process.title,
    argumentos: process.argv,
    execPath: process.execPath,
    carpeta: process.cwd()
};

console.log('entro en', info);

process.on('exit', function(){
    console.log('Adios. antes de terminar me despido');
});

console.log('fin de proceso');

//forzar un final
process.exit(0);

