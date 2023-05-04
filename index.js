const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const chefs = require('./data/chefs.json');
const recipes = require('./data/recipes.json');

//ensuring that the server is running
app.get('/', (req, res) => {
    res.send('FoodGorilla is cooking...')
})

//cors policy
app.use(cors());

//send chefs list
app.get('/chefs', (req, res) => {
    res.send(chefs);
})

//send recipes list
app.get('/recipes', (req, res) => {
    res.send(recipes);
})

//send custom recipes 
app.get('/recipes/:id', (req, res) => {
    const id = req.params.id;
    const selectedRecipes = recipes.find(n => n.id === id)
    res.send(selectedRecipes);
})


app.listen(port, ()=> {
    console.log(`FoodGorilla API is on port: ${port}`);
})