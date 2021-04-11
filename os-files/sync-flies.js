const fs = require("fs");

try {
    const file = process.argv[2];
    const conetnt = fs.readFileSync(file).toString();
    const lines = conetnt.split("\n").length;
    console.log(lines);
} catch (error) {
    console.error("Ha ocurrido un error", error);
}