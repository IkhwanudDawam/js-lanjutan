//3.1 ARROW FUNCTION

//Function Expression
// let tampilNama = function (nama) {
//     return console.log(nama);
// }

//Contoh 1 (1 param)
// const tampilNama = (nama) => {
//     return `Halo, ${nama}`;
// }
// console.log(tampilNama('Dawam'));

//Contoh 2 (1 param tapa kurung)
// const tampilNama = nama => {
//     return `Halo, ${nama}`;
// }

//Contoh 3 (1 param, impisit return)
// const tampilNama = nama => `Halo, ${nama}`;


//Contoh 4 (without param)
// const tampilNama = () => `Halo, ${nama}`;

//Contoh 5 (2 params)
// const tampilNama = (nama, waktu) => {
//     return `Selamat ${waktu}, ${nama}`;
// }
// console.log(tampilNama('Malam', 'Dawam'));

let mahasiswa = ['Mohammad', 'Ikhwanud', 'Dawam'];

//Bentuk Func Expression
// let expressJumlahHuruf = mahasiswa.map(function (nama) {
//     return nama.length;
// })
// console.log(expressJumlahHuruf);

//Bentuk Arrow Function
// let arrowJumlahHuruf = mahasiswa.map(nama => nama.length);

//Kembalian Dalam Bentuk Objek
let arrowJumlahHurufObj = mahasiswa.map(nama => ({
    nama,
    jmlHuruf: nama.length
}));

console.table(arrowJumlahHurufObj);