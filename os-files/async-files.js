const fs = require("fs");
const file = process.argv[2];

if (!file) {
    throw new Error("Amigo/a, te fala decirme que archivo voy a leer.");
}

const conetnt = fs.readFile(file, (error, datas) => {
    if (error) {
        console.error("Huston, tenemos un problema", error);
        return;
    }

    const lines = datas.toString().split("\n").length;
    console.log(lines);
});
