const express = require("express");
const { config } = require("./config/index");

const app = express();
const _PORT = config.port;

const searchDayWeek = date => {
    const DAYS = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
    return DAYS[date.getDay()];
}

const dateProcess = date => {
    const dateArray = date.toString().split("-");
    const year = dateArray[0];
    const month = dateArray[1] - 1;
    const day = dateArray[2];
    const dateReal = new Date(year, month, day);
    const dayWeek = searchDayWeek(dateReal);
    const bisiesto = isBisiesto(year) ? "es bisiesto" : "no es bisiesto";

    return {
        dayWeek: dayWeek,
        bisiesto: bisiesto
    }
}

const isBisiesto = year => {
    return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}

app.post("/:data", (req, res) => {
    const datas = dateProcess(req.params.data);
    res.send(`El anio ${datas.bisiesto} y el dia fue ${datas.dayWeek}`);
});

app.listen(_PORT, () => console.log(`Escuchando desde http://localhost:${_PORT}`));