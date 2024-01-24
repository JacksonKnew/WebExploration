const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors())

const port = 3500;

const insultList = [
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

app.get("/items", (req, res) => {
    console.log("Received GET request at /items endpoint");
    res.send({items: ["This comes from the server", "incredible", "I am absolutely loving this"]})
})

app.get("/insult", (req, res) => {
    console.log("Received GET request at /insult endpoint");
    res.send({insult: insultList[Math.floor(Math.random()*insultList.length)]})
})

app.listen(port, () => console.log(`Listening on port ${port}`));