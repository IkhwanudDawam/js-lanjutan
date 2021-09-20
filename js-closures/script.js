// 2.2 CLOSURE


// function init() {
//     let nama = 'Dawam';
//     let umur = 20;

//     function tampilNama() {
//         console.log(nama);
//         console.log(umur);
//     }
//     console.dir(tampilNama);
// }
// init();

//------------------------------------------------------

// function init() {

//     function tampilNama(nama) {
//         console.log(nama);
//     }
//     return tampilNama;
// }
// init();

// let panggilNama = init();
// panggilNama('Dawam');

//---------------OR------------------

// function init() {

//     return function (nama) {
//         console.log(nama);
//     }

// }
// init();

// let panggilNama = init();
// panggilNama('Dawam');


//Factory Funciton
// function ucapkanSalam(waktu) {
//     return function (nama) {
//         console.log(`Halo ${nama} selamat ${waktu} semogAa harimu menyenangkan`);
//     }
// }

// let selamatPagi = ucapkanSalam('pagi');
// let selamatSiang = ucapkanSalam('siang');
// let selamatSiang = ucapkanSalam('malam');

// selamatPagi('Dawam');

//----------------------------------------------

let add = (function () {
    let counter = 0;
    return function () {
        return ++counter;
    }
})();

// let funCounter = add();
// console.log(funCounter());
// console.log(funCounter());
// console.log(funCounter());


console.log(add());
console.log(add());
console.log(add());