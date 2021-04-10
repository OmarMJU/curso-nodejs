/*
Para saber más sobre Streams en NodeJ
se puede consultar el siguente enlac:
https://elabismodenull.wordpress.com/2017/03/28/el-manejo-de-streams-en-nodejs/
*/

const { Duplex } = require("stream");

class StreamDuplex extends Duplex {
    constructor(count, options) {
        super(options);
        this.count = count;
    }

    _read(size) {
        this.push(this.count.toString());

        if (this.count-- === 0) {
            this.push(null);
        }
    }

    _write(chunk, encoding, callback) {
        console.log(`Escribiendo: ${chunk.toString()} `);
        callback();
    }
}

const myDuplex = new StreamDuplex(100);
myDuplex.pipe(process.stdout);
