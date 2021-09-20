//Desctructuring Array

// const perkenalan = ['Halo', 'nama', 'saya', 'Dawam']
// const salam = perkenalan[0];


//Using desctruc arr
// const [salam, nama, saya] = perkenalan;


//Skipped items
// const [salam, , , Dawam] = perkenalan;
// console.log(Dawam);


//Swap item (menukar isi variabel)
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a, b] = [b, a]
// console.log(a);
// console.log(b);


//return value pada function
// function coba() {
//     return [1, 2]
// }
// const [a, b] = coba()
// console.log(a);


//rest parameter
// const [a, ...values] = [1, 2, 3, 4];
// console.log(a);
// console.log(values);


//-------------------------------------------------------------------


//Destructuring object (nama variabel harus sama dengan key yang ada pada objek)
// const mhs = {
//     nama: 'Dawam',
//     umur: 33
// }

// const {
//     nama,
//     umur
// } = mhs;

// console.log(nama);


//Assignment tanpa deklarasi objek
// ({
//     nama,
//     umur
// } = {
//     nama: 'Dawam',
//     umur: 33
// })

// console.log(nama);


//Alternative name
// const mhs = {
//     nama: 'Dawam',
//     umur: 33
// }

// const {
//     nama: n,
//     umur: u
// } = mhs;

// console.log(u);


//Rest parameter
// const mhs = {
//     id: 1,
//     nama: 'Dawam',
//     umur: 33,
//     email: 'dawam@gmail.com'
// }

// const {
//     nama: n,
//     umur: u,
//     ...values
// } = mhs;

// console.log();


//Mengambil field pada objek, setelah dikirim sebagai parameter untuk function
const mhs = {
    id: 1,
    nama: 'Dawam',
    umur: 33,
    email: 'dawam@gmail.com'
}

function getId({
    id
}) {
    return id;
}

console.log(getId(mhs));