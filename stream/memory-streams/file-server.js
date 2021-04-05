const FS = require("fs");
const SERVER = require("http").createServer();

SERVER.on("request", (req, res) => {
    FS.readFile("./bigFile", (err, data) => {
        if (err) {
            console.error("Ocurrio un error no controlado", err);
        }

        res.end(data);
    });
});

SERVER.listen(8080);
console.log("Servidor para leer un archivo grande");