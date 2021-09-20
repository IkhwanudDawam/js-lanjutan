//Tagged Template

const nama = 'Dawam';
const umur = 20;
const email = 'd4w4m123@gmail.com'

// function coba(strings, ...args) { // Setiap parameter menampung isi dari string literals dari variabel str
//     let result = '';

//     strings.forEach((e, i) => {
//         result += `${e}${args[i] || ''}`
//     });
//     return result

// return strings.reduce((result, str, i) => `${result}${str}${args[i]||''}`, '')

// }

// const str = coba `Halo, nama saya ${nama}, saya ${umur} tahun`;
// console.log(str);



function highlights(strings, ...args) {

    return strings.reduce((result, str, i) => `${result}${str}<span class ="h1">${args[i]||''}</span>`, '')

}

const str = highlights `Halo, nama saya ${nama}, saya ${umur} tahun, email saya ${email}`;

document.body.innerHTML = str;