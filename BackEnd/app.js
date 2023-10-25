const express = require('express');
require('dotenv').config()

const mongoose = require('mongoose')
const app = express();
mongoose.connect('mongodb+srv://belin:<process.env.SECRET_KEY>@cluster0.xsfqrpi.mongodb.net/?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req, res, next) => {
    console.log("requete reçu");
    next()
})

app.use((req, res, next) => {
    res.status(201);
    next()
})

app.use((req, res, next) => {
    res.json({ message: 'votre requete a bien ete reçu' });
    next()
})
app.use((req, res) => {
    console.log('Reponse envoye avec success');
})

module.exports = app;