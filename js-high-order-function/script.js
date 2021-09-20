const angka = [9, 6, 4, 7, 5, 3, -3, -6, -1, -7];
// const angkaBaru = [];
// Mencari angka lebih dari 3

// FOREACH
// angka.forEach((e, i) => {
//     if (e >= 3) {
//         angkaBaru[i] = e;
//     }
// })

// console.log(angkaBaru);


// PENGGUNAAN FILTER
// const newAngka = angka.filter((a) => {
//     return a >= 3;
// });



// PENGGUNAAN MAP
// Kalikan semua angka dengan 2

// const newAngka = angka.map((e) => {
//     return e * 2;
// })



// PENGGUNAAN REDUCE
// jumlahkan seluruh elemen pada
// const newAngka = angka.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// })


// Method Chaining
const newAngka = angka.filter((a) => {
    return a > 5;
}).map((b) => {
    return b * 3
}).reduce((acc, cur) => {
    return acc + cur
})


console.log(newAngka);