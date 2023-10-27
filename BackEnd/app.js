const express = require('express');

const userRoutes = require('./routes/user.routes.js');
const saucesRoutes = require('./routes/sauces.routes.js');

const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json());


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

const helmet = require("helmet");
app.use(helmet());

const rateLimit = require("express-rate-limit");
app.use(
    rateLimit({
        windowMs: 10 * 60 * 1000,
        max: 100,
        message:
            "Vous avez effectué plus de 100 requêtes dans une limite de 10 minutes!",
        headers: true,
    })
);
app.use('/api/auth', userRoutes)
app.use('/api/sauces', saucesRoutes)

module.exports = app;