const fs = require("fs");

fs.copyFile("the-start-of-something-beautiful.txt", "utilidades/operative-system/node/myFavoriteSong.txt", err => {
    if (err) {
        console.error("Ha ocurrido un error", err);
        return;
    }

    console.log("Archivo copiado con exito");
});