// const test = new Promise((resolve, reject) => {
//     setInterval(resolve('Berhasil!'), 3000)
// });

// console.log(test);
// test.then(e => console.log(e))


//--------------------------------------------------------
//Coba pakai function

function testAsyncAwait() {
    return new Promise((resolve, reject) => {
        const waktu = 3000;

        if (waktu < 5000) {
            setTimeout(() => {
                resolve('Berhasil!')
            }, waktu)
        } else {
            reject('Kelamaan!')
        }
    })
}

// testAsyncAwait()
//     .then(e => console.log(e))
//     .catch(e => console.log(e))


async function cobaAsync() {
    try {
        await testAsyncAwait().then(e => console.log(e))
    } catch (error) {
        console.error(error);
    }
}

cobaAsync()