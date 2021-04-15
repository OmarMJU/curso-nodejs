const express = require("express");
const app = express();
const { config } = require("./config/index");

app.get("/", (req, res) => {
    res.send("Mi primer servidor con express 😎")
});

app.get("/json", (req, res) => {
    res.json({ hola: "Mi primer servidor con express" });
});

app.listen(config.port, () => console.log(`Escuchand en http://localhost${config.port}`));