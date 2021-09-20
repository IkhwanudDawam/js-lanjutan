//===========================================FOR..OF

//------------------ARRAY
const mhs = ['Dawam', 'Ikhwanud', 'Mohammad'];

// for (let i = 0; i < mhs.length; i++) {
//     const element = mhs[i];
//     console.log(element);
// }

// mhs.forEach((e) => {
//     console.log(e);
// })

// for (const iterator of mhs) {
//     console.log(iterator);
// }

// mhs.forEach((e, i) => console.log(`${e} adalah mahasiswa ke-${i}`))

// for (const [i, e] of mhs.entries()) {
//     console.log(`${e} adalah mahasiswa ke-${i}`);
// }

//------------------STRING
const str = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, ad?'
// for (const i of str) {
//     console.log(i);
// }


//-----------------NODE LIST
const liNama = document.querySelectorAll('.nama');
// liNama.forEach(e => console.log(e.textContent));

// for (const iterator of liNama) {
//     console.log(iterator.innerHTML);
// }


//-----------------ARGUMENTS
// function jumlahAngka() {
//     //TIDAK BISA MEMAKAI FOR EACH DAN REDUCE KARENA BUKAN ARRAY
//     // return arguments.reduce((a, i) => a + i)
//     // arguments.forEach(e => console.log(e))

//     let jumlah = 0
//     for (const a of arguments) {
//         jumlah += a;
//     }
//     return console.log(jumlah);

// }
// jumlahAngka(1, 2, 3, 4, 5, 6, 7, 8, 9)


//===========================FOR..IN
// const hewan = {
//     satu: 'Kuda',
//     dua: 'Monyet',
//     tiga: 'Kudanil'
// }

// for (const key in hewan) {
//     console.log(key);
//     console.log(hewan[key]);
// }