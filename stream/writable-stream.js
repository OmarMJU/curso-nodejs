const { Writable } = require("stream");

const writebleStream = new Writable({
    write(chunk, encoding, callback) {
        console.log(chunk.toString());
        callback();
    }
});

process.stdin.pipe(writebleStream);