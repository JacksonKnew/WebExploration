const express = require("express");
const fs = require('fs');
var http = require('http');
var https = require('https');
const cors = require("cors");

const privateKey = fs.readFileSync('certs/private.key');
const certificate = fs.readFileSync('certs/certificate.crt');

const credentials = {key: privateKey, cert: certificate};

const app = express(credentials);
app.use(cors())

const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

const httpPort = 3499;
const httpsPort = 3500;

const insultListEn = [
    "YOU SON OF A BITCH",
    "YOU'RE AS USELESS AS THE POPE'S BALLS",
    "MY GRANDMA LIFTS HEAVIER THAN YOU",
    "YOUR PARENTS WOULD BE ASHAMED OF YOU",
    "AN ANNOREXIC MIDGET WOULD BE MORE SEXY",
    "YOUR DICK IS BELOW AVERAGE",
    "NOONE LOVES YOU",
    "WHO CARES ABOUT THE STUFF YOU DO",
    "YOU'VE DONE NOTHING OF YOUR DAY AGAIN",
    "FUCK YOU",
    "STOP FUCKING AROUND AND GET TO WORK",
    "WHO THE FUCK ARE YOU",
]

const insultListFr = [
    "T'ES AUSSI INUTILE QUE LES COUILLES DU PAPE",
    "MA GRAND MERE SOULEVE PLUS LOURD QUE TOI",
    "TES PARENTS AURAIENT HONTE DE TOI",
    "UN NAIN ANNOREXIQUE EST PLUS SEXY QUE TOI",
    "TA BITE EST MINUSCULE",
    "PERSONNE NE T'AIME",
    "RIEN A FOUTRE DE CE QUE TU FAIS",
    "T'AS ENCORE RIEN BRANLE DE TA JOURNÉE",
    "VA TE FAIRE FOUTRE",
    "PETIT CON",
    "ARRETE DE RIEN FOUTRE ET TAF",
    "T'AS CRU T'ETAIS QUI?",
    "FILS DE PUTE",
    "ESPECE DE MOULE A GAUFRE",
    "ESPECE DE GROS PORC ESPAGNOL",
    "TON NOM DE SCENE C'EST DJ SNACK",
    "EN BOITE DE CONSEIL TU SERAIS ROLAND BURGER",
    "T'ES PAS LA FRITE LA PLUS DOREE DU FOUR",
    "ZEMMOUR",
    "CHIEN GALEUX",
    "SAC A FOUTRE",
    "TETE DE GLAND",
    "TU RESSEMBLES A LADY CACA"
]

app.get("/items", (req, res) => {
    console.log("Received GET request at /items endpoint");
    res.send({items: ["This comes from the server", "incredible", "I am absolutely loving this"]})
})

app.get("/insult", (req, res) => {
    console.log("Received GET request at /insult endpoint");
    res.send({insult: insultListFr[Math.floor(Math.random()*insultListFr.length)]})
})

http.listen(httpPort, () => console.log(`Listening on port ${httpPort}`));
https.listen(httpsPort, () => console.log(`Listening on port ${httpsPort}`));