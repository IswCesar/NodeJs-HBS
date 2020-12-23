const express = require('express')
const app = express()
const hbs = require('hbs');
// Requerir hbs helpers
require('./hbs/helpers')

// Leer puerto o asignar el 3000
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
// Express HBS engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {


    res.render('home', {
        name: 'world'
    });
})

app.get('/about', (req, res) => {

    res.render('about');
})


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});