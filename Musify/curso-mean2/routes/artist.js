'use strict'

var express = require('express');
var ArtistController = require('../controllers/artist.js');
//al importar los metodos de Router() ya se puede aplicar get,post y put
var api = express.Router();
//restringe el acceso a usuarios logeados solo con este controlador
var md_auth = require('../middlewares/authenticated');

api.get('/artist', md_auth.ensureAuth, ArtistController.getArtist);

module.exports = api;