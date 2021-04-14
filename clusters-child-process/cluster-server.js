const clutser = require("cluster");
const http = require("http");
const numCpus = require("os").cpus().length;

if (clutser.isMaster) {
    console.log(`El proceso maestro ${process.pid} esta corriendo`);

    // Si el cluster es maestro se crean tantos procesos como la cantidad de CPUs disponibles.
    for (let i = 0; i < numCpus; i++) {
        clutser.fork();
    }

    // Si por alguna razón el cluster finaliza, se informa.
    clutser.on("exit", (worker, code, signal) => {
        console.log(`El proceso ${worker.process.pid} termino`);
    });
} else {
    // Los workers pueden compartir una conexion TCP, para esta caso es un servidor HTTP.
    http.createServer((req, res) => {
        res.writeHead(200);
        res.end("Hello world");
    }).listen(8080);

    console.log(`El worker ${process.pid} se inicio.`);
}