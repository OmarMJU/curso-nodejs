const asyncCallback = cb => {
    setTimeout(() => {
        if (Math.random() > 0.5) {
            return cb(null, "Todo salio increible 😎")
        } else {
            return cb(new Error("Algo fallo 😫"))
        }
    }, 2000);   
}

asyncCallback((error, mensg) => {
    if(error) {
        console.error("Ocurrio un error", error);
    } else {
        console.log("El mensaje es" ,mensg);
    }
});