console.log("Un %s y un %s estaban jugando", "perrito", "gatito");
console.info("Esto es un info");
console.warn("Esto es un warning");
console.assert(42 === "42");
console.trace("Error rastreable");

const util = require("util");
const logdebbuging = util.debuglog("foo");
logdebbuging("Hola mundo desde el foo")