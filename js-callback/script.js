// Callback
// Synchronus callback

// function halo(nama) {
//     alert(`halo ${nama}`)
// }

// function tampilkanPesan(callbackArg) {
//     const nama = prompt('Masukkan nama: ')
//     callbackArg(nama)
// }

// tampilkanPesan((nama) => alert(`halo ${nama}`))




// KELEMAHAN SYNCRONUS (kalau data banyak maka kode di baris selanjutnya tidak akan berjalan-jalan)
// const mhs = [{
//     "nama": "Dawam",
//     "nim": "19106060050"
// }, {
//     "nama": "Dawam2",
//     "nim": "19106060051"
// }, {
//     "nama": "Dawam3",
//     "nim": "19106060052"
// }]
// console.log('mulai');
// mhs.forEach(e => {
//     for (let i = 0; i < 1000000; i++) {
//         let date = new Date();
//     }
//     console.log(e.nama)
// });
// console.log('selesai');





//ASINCHRONUS CALLBACK
//http://www.omdbapi.com/?apikey=dca61bcc&s=avengers

//-------------------------------------USING VANILLA JAVASCRIPT

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

// console.log('mulai');
// getDataMovie('http://www.omdbapi.com/?apikey=dca61bcc&s=avengers', results => {
//     const mov = JSON.parse(results);
//     mov.Search.forEach(e => console.log(e.Title))
// }, error => {
//     console.log(error);
// })
// console.log('selesai');


//-------------------------------USING JQuery
console.log('mulai');
$.ajax({
    url: 'http://www.omdbapi.com/?apikey=dca61bcc&s=avengers',
    success: (mov) => {
        mov.Search.forEach(e => console.log(e.Title));
    },
    error: (e) => {
        console.log(e.responseText);
    }
})
console.log('selesai');