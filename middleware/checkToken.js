const express = require('express');
jwt = require('jsonwebtoken');
require('dotenv').config();
const { SECRET } = process.env
const user = require('../controllers/userControllers')


const rutasProtegidas = express.Router();
const token = rutasProtegidas.use((req, res, next) => {

    const token = req.cookies.token
    console.log("Soy el token:", token)

    if (token){
        jwt.verify(token, SECRET, (err, decoded) => {
            if (err) {
                console.log(err, "TOKEN INVALIDO");
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        res.status(401).send({ 
            cliclk: 'https://www.youtube.com/watch?v=4MhzZsM-0kE' 
        });

    }
});

module.exports = {
    token
}