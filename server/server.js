const express = require('express');
// const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const axios = require('axios')

app.use(express.static(path.join(__dirname, 'build')));

app.get('/search', (req, res) => {
  res.set('Access-Control-Allow-Origin', "*");/*res.render('search')*/res.json({some:"OK"})
 // axios.get(`http://api.petfinder.com/pet.getrandom?key=6152de828cbb983db14ca8d3ed12f1a9&format=json`)
    .then((result) =>{res.set('Access-Control-Allow-Origin', "*");/*res.render('search')*/res.json({some:"OK"})})
})

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080);
