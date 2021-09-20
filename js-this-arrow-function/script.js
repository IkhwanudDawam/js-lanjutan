//3.2 THIS PADA ARROW FUNCTION


//Constructor Function
// const Mahasiswa = function () {
//     this.nama = 'Dawam';
//     this.umur = 20;
//     this.sayHello = function () {
//         console.log(`Halo nama saya ${this.nama}, dan umur saya ${this.umur}`);
//     }
// }
// const dawam = new Mahasiswa();




//Tidak semua function bisa dijadikan arrow function
// const Mahasiswa = function () {
//     this.nama = 'Dawam';
//     this.umur = 20;
//     this.sayHello = () => {
//         console.log(`Halo nama saya ${this.nama}, dan umur saya ${this.umur}`);
//     }
// }
// const dawam = new Mahasiswa();




//Object literal
// const mhs = {
//     nama: 'Dawam',
//     umur: 20,
//     sayHello: () => {
//         console.log(`Halo nama saya ${this.nama}, dan umur saya ${this.umur}`);
//         console.log(this);
//     }
// }




// const Mahasiswa = function () {
//     this.nama = 'Dawam';
//     this.umur = 20;
//     this.sayHello = function () {
//         console.log(`Halo nama saya ${this.nama}, dan umur saya ${this.umur}`);
//     }

//     setInterval(() => { //Jika pakai function biasa maka outputnya NaN karena this didalam function ini mengaju pada window
//         console.log(this.umur++);
//     }, 500)

// }
// const dawam = new Mahasiswa();


const box = document.querySelector('.box');

box.addEventListener('click', function () {
    console.log(this);
    let satu = 'size';
    let dua = 'caption';

    if (this.classList.contains(satu)) {
        [satu, dua] = [dua, satu];
    }

    this.classList.toggle(satu);
    setTimeout(() => {
        this.classList.toggle(dua);
    }, 600)
})