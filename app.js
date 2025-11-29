
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {

    const isConnectToServer = Math.round(Math.random());
    if(isConnectToServer) {
        resolve('ok sei connesso')
    } else {
        reject('non sei connesso!!!!')
    }}, 2000)

})
promise.then(mess => console.log(mess))
.catch(err => console.error('ERROR:', err))