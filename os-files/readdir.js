const fs = require("fs");

const files = fs.readdir(__dirname, (err, file) => {
    if (err) {
        console.error("Ocurrio algo bien terrible", err );
        return;
    }

    console.log("Los archivos en el directorio actual son", file);
});