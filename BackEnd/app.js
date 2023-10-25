const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const databaseUrl = process.env.DATABASE_URL
const app = express();
mongoose.connect(databaseUrl,
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