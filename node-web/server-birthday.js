const HTTP = require("http");
const SERVER = HTTP.createServer();

function searchDayBirthday(datas) {
    datas = Buffer.concat(datas).toString();
    const DAYS = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
    const DATE = new Date(datas);
    return `El ${datas} fue ${DAYS[DATE.getDay()]}`;
}

SERVER.on("request", (req, res) => {
    if (req.method === "POST" && req.url == "/birthday") {
        let body = [];

        req.on("data", chunk => body.push(chunk)).on("end", () => {
            res.writeHead(200, { "Content-Type": "text/plain" });
            body = searchDayBirthday(body);
            res.end(body);
        });
    } else {
        res.statusCode = 404;
        res.end();
    }
});

SERVER.listen(8080);
console.log("Servidor para calculo de cumpleaños en http://localhost:8080");