const FS = require("fs");
const SERVER = require("http").createServer();

SERVER.on("request", (req, res) => {
    const SRC = FS.createReadStream("./bigFile");
    SRC.pipe(res);
});

SERVER.listen(8080);
console.log("Servidor stream para leer un archivo grande.");