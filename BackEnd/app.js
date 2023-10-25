const express = require('express');

const app = express();

app.use((req, res) => {
    res.json({ message: 'votrre requete a bien ete reçu' })
})

module.exports = app;