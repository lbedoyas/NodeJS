'use strict'

//la siguientes variables son para poder trabajar con el sistema de ficheros(Archivos del pc)
var path = require('path');
var fs = require('fs');

//Importamos modelos 
var Artist = require('../models/artist');
var Album = require('../models/album');
var Song = require('../models/song');


function getArtist(req, res){
    res.status(200).send({message: 'Metodo getArtist del controlador Artist.js'});

}

function saveArtist(){

}


module.exports = {
    getArtist
};