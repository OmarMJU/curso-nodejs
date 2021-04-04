const http = require("http");
const server = http.createServer();

server.on("request", (req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hola mundo desde un server con NodeJS");
});

server.listen(8080);
console.log("Servidor corriendo desde http://localhost:8080");