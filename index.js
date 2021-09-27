const express = require('express');
const app = express();
const PORT = process.env.PORT || 3002;
const cors = require('cors');
const pokemonroutes = require('./routes/pokemonroutes');


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


app.use(cors());
app.use('/pokemons', pokemonroutes);



app.listen(PORT, ()=>console.log(`listening on port ${PORT}...`))