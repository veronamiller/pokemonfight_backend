const express = require('express');
const PokemonController = require('../controllers/pokemoncontroller')
const pokemonroutes = express.Router();
pokemonroutes.use(express.urlencoded({
    extended : false
}))



pokemonroutes.use(require('express').json())

//!GET ALL
pokemonroutes.get('/', PokemonController.getAllPokemons);

//!GET by ID
pokemonroutes.get('/:id', PokemonController.getOnePokemonById)
//!GET by :ID :INFO
pokemonroutes.get('/:id/:info', PokemonController.getInfoOnePokemonById )


module.exports = pokemonroutes;
