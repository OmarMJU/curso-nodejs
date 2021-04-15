const express = require("express");
const app = express();
const { config } = require("./config/index");
const _PORT = config.port;

app.post("/", (req, res) => {
    res.send("Ya tienes tu servidor en POST");
});

app.listen(_PORT, () => console.log(`Escuchando desde http://localhost:${_PORT}`));