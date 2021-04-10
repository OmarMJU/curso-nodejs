/*
Para saber más sobre Streams en NodeJ
se puede consultar el siguente enlac:
https://elabismodenull.wordpress.com/2017/03/28/el-manejo-de-streams-en-nodejs/
*/

const { Readable } = require("stream");
const readableStream = new Readable();

readableStream.push(`${0/0} `.repeat(10).concat("Batman, Batman!"));
readableStream.push(null);
readableStream.pipe(process.stdout);