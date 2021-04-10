/*
Para saber más sobre Streams en NodeJ
se puede consultar el siguente enlac:
https://elabismodenull.wordpress.com/2017/03/28/el-manejo-de-streams-en-nodejs/
*/
const { Readable } = require("stream");
const readableStream = new Readable({
    read(size) {
        setTimeout(() => {
            if (this.currentChartCode > 90) {
                this.push(null);
                return;
            }

            this.push(String.fromCharCode(this.currentChartCode++));
        }, 100);
    }
});

readableStream.currentChartCode = 65;
readableStream.pipe(process.stdout);