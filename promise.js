const miPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(Math.random() > 0.5) {
            resolve("Todo salió increible 😎");
        } else {
            reject("Algo paso 😫 ");
        }
    }, 2000);
});

miPromise.then(msg => msg.toUpperCase())
.then(msg => console.log("El msneaje es", msg))
.catch(err => console.error("Ocurro un error", err));