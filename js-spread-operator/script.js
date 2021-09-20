//==============Spread Operator 

// const mhs = ['Mohammad', 'Ikhwanud', 'Dawam'];
// console.log(...mhs);


//---------------------- Menggabungkan 2 array;
// const mhs = ['Mohammad', 'Ikhwanud', 'Dawam'];
// const umur = [1, 2, 3];

// const kumpul = [...mhs, 'Tambahan', ...umur];
// // const kumpul = mhs.concat(umur);
// console.log(kumpul);


//---------------------- Copy Array
// const mhs = ['Mohammad', 'Ikhwanud', 'Dawam'];
// // const mhs1 = mhs;
// const mhs1 = [...mhs];
// mhs1[0] = 'Hehe';
// console.log(mhs1);

// const tampung = document.querySelectorAll('li');
// const mhsTampung = [];

// for (let i = 0; i < tampung.length; i++) {
//     mhsTampung.push(tampung[i].textContent);
// }

//Menggunakan map
// const mapTampung = [...tampung].map(e => e.textContent)


//--------------------------- Animasi per huruf di html file
const pickH1 = document.querySelector('h1');
const pecahH1 = [...pickH1.textContent].map(e => `<span>${e}</span>`).join('');

pickH1.innerHTML = pecahH1;