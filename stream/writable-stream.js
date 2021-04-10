/*
Para saber más sobre Streams en NodeJ
se puede consultar el siguente enlac:
https://elabismodenull.wordpress.com/2017/03/28/el-manejo-de-streams-en-nodejs/
*/

const { Writable } = require("stream");

const writebleStream = new Writable({
    write(chunk, encoding, callback) {
        console.log(chunk.toString());
        callback();
    }
});

process.stdin.pipe(writebleStream);