const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const chefs = require('./data/chefs.json');

app.get('/', (req, res) => {
    res.send('FoodGorilla is cooking...')
})

app.use(cors());

app.get('/chefs', (req, res) => {
    res.send(chefs);
})

app.listen(port, ()=> {
    console.log(`FoodGorilla API is on port: ${port}`);
})