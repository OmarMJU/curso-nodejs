const OS = require("os");

// console.log("CPU info", OS.cpus());
// console.log("Network Info", OS.networkInterfaces().en0.map(i => i.address));
// console.log("Free Memory", OS.freemem());
// console.log("Type OS", OS.type());
// console.log("SO vertsion", OS.release());
console.log("User info", OS.userInfo());