const express = require('express');
const morgan = require('morgan');
const axios = require('axios');
const app = express();

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));

app.get('/api/:name', (req,res) => {
    console.log(req.params.name);
    const city = req.params.name;
    axios
    .get(`http://api.wunderground.com/api/2d0b2b49f5e95886/forecast/geolookup/conditions/q/CA/${city}.json`)
    .then(r => res.send(r.data))
    .catch(err => res.status(500).send('bad response'));
})

//try other weather api that doesn't require the State or Country

module.exports = app;
