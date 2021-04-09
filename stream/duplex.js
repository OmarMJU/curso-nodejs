const { Duplex } = require("stream");
const streamDuples = new Duplex({
    write (chunk, encoding, callback) {
        console.log(chunk.toString());
        callback();
    },

    read (size) {
        if (this.currentChartCode > 90) {
            this.push(null);
            return;
        }

        this.push(String.fromCharCode(this.currentChartCode++));
    }
});

streamDuples.currentChartCode = 65;
process.stdout.pipe(streamDuples).pipe(process.stdout);