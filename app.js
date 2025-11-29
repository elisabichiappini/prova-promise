
const promise = new Promise((resolve, reject) => {
    const isConnectToServer = Math.round(Math.random());
    if(isConnectToServer) {
        resolve('ok sei connesso')
    } else {
        reject('non sei connesso!!!!')
    }
})
promise.then(mess => console.log(mess))
.catch(err => console.error('ERROR:', err))