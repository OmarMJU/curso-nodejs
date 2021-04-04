const HTTP = require("http");
const SERVER = HTTP.createServer();

SERVER.on("request", (req, res) => {
    if (req.method === "POST" && req.url == "/echo") {
        let body = [];

        req.on("data", chunk => body.push(chunk)).on("end", () => {
            res.writeHead(200, { "Content-Type": "text/plain" });
            body = Buffer.concat(body).toString();
            res.end(body);
        });
    } else {
        res.statusCode = 404;
        res.end();
    }
});

SERVER.listen(8081);
console.log("Servidor corriendo desde url: http://localhost:8081");