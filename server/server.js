const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));

// app.get('/api', (req,res) => {
//     axios
//     .get("http://api.wunderground.com/api/2d0b2b49f5e95886/forecast/geolookup/conditions/q/CA/San_Francisco.json")
//     .then(r => res.send(r.data))
//     .catch(err => res.status(500).send('bad response'));
// })

module.exports = app;
