//Desctruturing Function Return Value

//ARRAY

// function kalkulasi(a, b) {
//     return [a + b, a * b, a / b, a - b];
// }

//CARA TRADISIONAL
// const jumlah = kalkulasi(2, 3)[0];
// const jumlah = kalkulasi(2, 3)[1];

//BASIC
// const [jumlah, kali] = kalkulasi(2, 3)
// console.log(jumlah);
// console.log(kali);

//Contoh lain
// const [tambah, kali, bagi, kurang] = kalkulasi(2, 3);

//-----------------------------------------------------------------------
//OBJECT

// function kalkulasi(a, b) {
//     return {
//         tambah: a + b,
//         kali: a * b,
//         bagi: a / b,
//         kurang: a - b
//     };
// }
// const {
//     tambah,
//     bagi,
//     kurang,
//     kali
// } = kalkulasi(2, 3);


//Destructuring Function Arguments

const mhs1 = {
    nama: 'Dawam',
    umur: 20,
    email: 'dawam@gmail.com',
    nilai: {
        tugas: 80,
        uts: 90,
        uas: 85
    }
}

// function cetakMhs(mhs) {
//     return `Halo, nama saya ${mhs1.nama}, umur saya ${mhs1.umur} tahun. Nilai UAS saya: ${mhs1.nilai.uas}`
// }

//Menggunakan Destruction
function cetakMhs({
    nama,
    umur,
    nilai: {
        tugas,
        uts,
        uas
    }
}) {
    return `Halo, nama saya ${nama}, umur saya ${umur} tahun. Nilai UAS saya: ${uas}`
}

console.log(cetakMhs(mhs1));