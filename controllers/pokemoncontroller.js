const pokemons = require("../data/pokemondata.json");


module.exports = {

    getAllPokemons: (req,res) => {
        res.send(pokemons);
    },

    getOnePokemonById:(req,res) => {
        const pokemon = pokemons.find(p => p.id == req.params.id);
        if (!pokemon) return res.status(404).send("There is no such pokemon");
        res.send(pokemon);
    },

    getInfoOnePokemonById:(req,res) => {
    const pokemon = pokemons.find(p =>p.id == req.params.id)
    if(!pokemon) return res.status(404).send ('There is no such pokemon')
    else if(pokemon && req.params.info=='name') res.send(pokemon.name)
    else if(pokemon && req.params.info=='base')res.send(pokemon.base)
    else if(pokemon && req.params.info=='type') res.send(pokemon.type)
    else res.send(pokemon);
}
};