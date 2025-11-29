
// const promise = new Promise((resolve, reject) => {
//     const randomTime = Math.round(Math.random() * 4000);
//     let checkTimeout, checkServer;

//     checkTimeout = setTimeout(() => {
//         reject('500 server offline');
//         clearTimeout(checkServer);
//     }, 200);

//     checkServer = setTimeout(() => {
//  const isConnectToServer = Math.round(Math.random());
//     if(isConnectToServer) {
//         resolve('ok sei connesso')
//     } else {
//         reject('non sei connesso!!!!')
//     }
//     clearTimeout(checkTimeout);
//     }, randomTime)
// })


// promise.then(mess => console.log(mess))
// .catch(err => console.error('ERROR:', err))


//prova con fetch!

const fetch = (url) => new Promise((resolve, reject) => {
    const randomTime = Math.round(Math.random() * 4000);
    let checkTimeout, checkServer;

    checkTimeout = setTimeout(() => {
        reject(new Error('500 server offline'));
        clearTimeout(checkServer);
    }, 2000);

    checkServer = setTimeout(() => {
        const isConnectToServer = Math.round(Math.random());
        if (isConnectToServer) {
            resolve(new Response('ok sei connesso'))
        } else {
            reject(new Error('non sei connesso!!!!'))
        }
        clearTimeout(checkTimeout);
    }, randomTime);
})


fetch('http://blaVla.com')
    .then(mess => console.log(mess))
    .catch(err => console.error('ERROR:', err));
//npm run dev