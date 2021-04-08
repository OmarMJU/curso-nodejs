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
