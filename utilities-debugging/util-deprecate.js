const util = require("util");

const helloCapAmerica = util.deprecate(() => {
    console.log("Hello, Steve Rogers");
}, "Steve Rogers is deprecated. He is not the Capitan America anymore!");

helloCapAmerica();