const consoleOMJU = new  console.Console(process.stdout, process.stderr);

const emojis = {
    info: "  \u001b[37m ☺",
    error: "  \u001b[31m ☠",
    warning: "  \u001b[33m ⚠",
    succes: "  \u001b[34m ℹ"
};

consoleOMJU.info = message => {
    console.log(`${emojis.info}[INFO]: ${message}`);
};

consoleOMJU.error = message => {
    console.log(`${emojis.error}[ERROR]: ${message}`);
};

consoleOMJU.warn = message => {
    console.log(`${emojis.warning}[WARNING]: ${message}`);
};

consoleOMJU.success = message => {
    console.log(`${emojis.succes}[SUCCESS]: ${message}`);
};

consoleOMJU.info("Hola info");
consoleOMJU.error("Hola error");
consoleOMJU.warn("Hola warinig");
consoleOMJU.success("Hola succes");

