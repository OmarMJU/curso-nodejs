const fs = require("fs");

fs.mkdir("utilidades/operative-system/node", { recursive: true}, (err, dirs) => {
    if (err) {
        console.error("Oh por Dios, ocurrio un error", err);
    }
});