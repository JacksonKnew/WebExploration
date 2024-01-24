const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors())

const port = process.env.PORT || 3500;

app.get("/items", (req, res) => {
    console.log("Received GET request at /items endpoint")
    res.send({items: ["This comes from the server", "incredible", "I am absolutely loving this"]})
})

app.listen(port, () => console.log(`Listening on port ${port}`));