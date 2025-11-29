const condizione = true;

const promise = new Promise((resolve, reject) => {
    if(condizione) {
        resolve('ok')
    } else {
        reject('no')
    }
})