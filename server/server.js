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
    .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a6cad5437ae93c93a567e8c017149594&units=imperial`)
    .then(r => res.send(r.data))
    .catch(err => res.status(500).send('bad response'));
})
//how does it know what $city is?

//try other weather api that doesn't require the State or Country

module.exports = app;
