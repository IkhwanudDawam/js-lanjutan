// `string text`

// `string text baris 1
// string text baris 1
// string text baris 1`

// `string text ${expression} string text`

// tag `string text ${expression} string text`

// //Multi line string
// console.log('string1\nstring2');
// console.log(`string 1
//             string 2`);

const mhs = {
    nama: 'Dawam',
    umur: 20,
    nrp: '19106050050',
    email: 'dawam@gmail.com'
}

let el = `<div class="mhs">
<h2>${mhs.nama}</h2>
<span class="nrp">${mhs.nrp}</span>
</div>`

//Bisa diisi ternary opertion, dan function juga