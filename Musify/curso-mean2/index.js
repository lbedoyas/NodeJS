'use strict'

//importar la dependencia
var mongoose = require('mongoose');
var app = require('./app');
//definicion de puerto en el backend
var port = process.env.PORT || 3977;

//este comando es para lograr la conexion con la bd
mongoose.connect('mongodb://localhost:27017/curso_mean2', (err, res) => {
    if(err){
        throw err;
    }
    else
    {
        console.log("la base de datos esta corriendo correctamente");

        app.listen(port, function(){
            console.log("servidor del APIRest de musica escuchando en http://localhost:"+port);
        })
    }
})

