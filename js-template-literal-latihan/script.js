// 1. HTML Fragments

// const mhs = {
//     nama: 'Dawam',
//     umur: 20,
//     nrp: '19106050050',
//     email: 'dawam@gmail.com'
// }

// let el = `<div class="mhs">
// <h2>${mhs.nama}</h2>
// <span class="nrp">${mhs.nrp}</span>
// </div>`

// 2. Looping
// const mhs = [{
//     nama: 'Dawam',
//     email: 'dawam@gmail.com'
// }, {
//     nama: 'Dawam2',
//     email: 'dawam2@gmail.com'
// }, {
//     nama: 'Dawam3',
//     email: 'dawam3@gmail.com'
// }]

// const el = `${mhs.map(e => `<ul><li>${e.nama}</li><li>${e.email}</li></ul>`).join('')}`

// 3. Conditionals
// ternary

// const lagu = {
//     judul: 'a',
//     penyanyi: 'hehe',
//     feat: 'huhu'
// }

// const el = `<div>
//     <h2>${lagu.judul}</h2>
//     <span>${lagu.penyanyi} ${lagu.feat ? `${lagu.feat}` : ''}</span>
// </div>`


// 4. Nested
const mhs = {
    nama: 'Dawam',
    umur: 20,
    nrp: '19106050050',
    email: 'dawam@gmail.com',
    mataKuliah: [
        'A',
        'B',
        'C'
    ]
}

function cetakMataKuliah(matKul) {
    return `
        <ol>
            ${matKul.map(mk => `<li>${mk}</li>`).join('')}
        </ol>
    `
}

const el = `<div>
    <h2>Nama: ${mhs.nama}</h2>
    <span>Umur: ${mhs.umur}</span>
    <h4>Mata Kuliah:</h4>
    ${cetakMataKuliah(mhs.mataKuliah)}
    <ol>
        ${mhs.mataKuliah.map(mtkl => `<li>${mtkl}</li>`).join('')}
    </ol>
</div>`

document.body.innerHTML = el;