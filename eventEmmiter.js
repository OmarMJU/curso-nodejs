const EventEmmiter = require("events");

class Logger extends EventEmmiter {
    execute(cb) {
        console.log("Antes");
        this.emit("start");

        cb();

        this.emit("finish");
        console.log("Termina");
    }
}

const logger = new Logger();

logger.on("start", () => console.log("Estoy iniciando"));
logger.on("finish", () => console.log("Primer Fin"));
logger.on("finish", () => console.log("Segundo fin"));

// logger.execute(() => console.log("Soy la funcion Callback"));
logger.execute(() => setTimeout(() => console.log("Soy asincrono"), 500));