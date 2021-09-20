// $.ajax({
//     url: '',
//     success: movies => console.log(movies)
// })

// function getDataMovie(url, success, error) {
//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4) {
//             if (xhr.status === 200) {
//                 success(xhr.response)
//             } else if (xhr.status = 404) {
//                 error();
//             }
//         }
//     }

//     xhr.open('get', url)
//     xhr.send()
// }


// fetch('http://www.omdbapi.com/?apikey=dca61bcc&s=avengers')
//     .then(response => response.json())
//     .then(response => console.log(response));


// PROMISE
//Objek yang mempresentasikan keberhasilan / kegagalan sebuah event yang asincronus di masa yang akan datang
// janji (terpenuhi/ingkar)
// states (fulfiled/rejected/pending)
// callback (resolve/reject/finnaly)
// aksi (then / catch)


// Contoh 1
// let ditepati = true;

// const janji1 = new Promise((resolve, reject) => {
//     if (ditepati) {
//         resolve('Janji telah ditepati')
//     } else {
//         reject('Ingkar janji')
//     }
// })

// janji1
//     .then(response => console.log('OK!:' + response))
//     .catch(response => console.log('NOT OK!:' + response))


// Contoh2
// let ditepati = true

// const janji2 = new Promise((resolve, reject) => {
//     if (ditepati) {
//         setTimeout(() => {
//             resolve('Ditepati setelah beberapa detik')
//         }, 2000)
//     } else {
//         setTimeout(() => {
//             resolve('Tidak ditepati setelah beberapa waktu')
//         }, 2000)
//     }
// })

// console.log('mulai');
// console.log(janji2.then(() => console.log(janji2)));
//------------------------------------------------------------
// janji2
//     .finally(() => console.log('selesai menunggu'))
//     .then(response => console.log('OK!:' + response))
//     .catch(response => console.log('NOT OK!:' + response))

// console.log('selesai');




// Promise.all()
//Untuk konek kebanyak API (misal 2 API berbeda)


const film = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            judul: 'Qwerty',
            sutradara: 'Dawam'
        }])
    }, 1000)
})

const cuaca = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            kota: 'Jogja',
            temp: 27
        }])
    }, 500)
})

// film.then(response => console.log(response))
// cuaca.then(response => console.log(response))

Promise.all([film, cuaca])
    // .then(response => console.log(response))
    // .then(([a, b]) => console.log(a, b))
    //OR
    .then(response => {
        const [film, cuaca] = response
        console.log(film);
        console.log(cuaca);
    })