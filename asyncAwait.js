const functionAsync = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() > 0.5) {
            resolve("Todo está increible 😍");
        } else {
            reject(new Error("Ha ocurrido un error 😭"));
        }
    }, 2000);
});

async function awaitFunction() {
    try {
        const msg = await functionAsync();
        console.log("Mensaje", msg);
    } catch (error) {
        console.error("Error", error);
    }
}

awaitFunction();