"use strict";

var fs = require('fs');
var path = require('path');

var versionModulo = function(moduleName, callBack){
    var fichero = path.join('./node_modules', moduleName, 'package.json');
    fs.readFile(fichero, 'utf-8', function(err, data){
        if(err){
            callBack(err);
            return;
        }
        var packageJson = {};
        try{
            var packageJson = JSON.parse(data);
        }
        catch(e)
        {
            callBack('error al parsear ' + fichero + '-');
            return;
        }
        
        //console.log(err, data);
        if(packageJson && !packageJson.version)
        {
            callBack('no se encuentra la etiqueta version en ' + fichero);
            return;
        }
        //llamamos al callback de finalizacion
        callBack(null, packageJson.version);
    })

};
//uso de la funcion
var modulo = 'chance';

versionModulo(modulo, function(err, version){
    if(err){console.log('hubo un error:' , err); return; }
    console.log('version del modulo ' + modulo + 'es' + version);
});
