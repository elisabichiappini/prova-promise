
const promise = new Promise((resolve, reject) => {
    const randomTime = Math.round(Math.random() * 4000);
    setTimeout(() => {
    const isConnectToServer = Math.round(Math.random());
    if(isConnectToServer) {
        resolve('ok sei connesso')
    } else {
        reject('non sei connesso!!!!')
    }}, randomTime)

})
promise.then(mess => console.log(mess))
.catch(err => console.error('ERROR:', err))