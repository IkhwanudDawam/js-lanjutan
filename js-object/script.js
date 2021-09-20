// Cara membuat object pada javascript
// 1. Object Literal
// let mhs = {
//     //Property
//     nama: 'Dawam',
//     health: 100,
//     armor: 50,
//     //Method
//     drinking: function (drink) {
//         this.health = this.health + drink;
//         console.log(`Halo ${this.nama}, selamat minum`);
//     }
// }
// let mhs2 = {
//     //Property
//     nama: 'Dawam2',
//     health: 100,
//     armor: 50,
//     //Method
//     drinking: function (drink) {
//         this.health = this.health + drink;
//         console.log(`Halo ${this.nama}, selamat minum`);
//     }
// }
//(Kelemahan: tidak efektif jika objeknya banyak)













// 2. Function Declaration

// const methodMahasiswa = {
//     heal: function (drink) {
//         this.health += drink;
//         console.log(`Hello ${this.nama} selamat makan`);
//     }
// }

// function Mahasiswa(nama, health) {
//     //Obj kosong
//     // let mhs = {};

//     //THIRD ALTERNATIVE
//     let mhs = Object.create(methodMahasiswa);
//     //Property
//     mhs.nama = nama;
//     mhs.health = health;
//     //Method

//     //SECOND ALTERNATIVE
//     // mhs.heal = methodMahasiswa.heal;

//     //FIRST ALTERNATIVE
//     // heal: function (drink) {
//     //     this.health += drink;
//     //     console.log(`Hello ${this.nama} selamat makan`);
//     // }
//     return mhs;
// }

// let tes1 = Mahasiswa('Dawam', 100);
// let tes2 = Mahasiswa('Ikhwanud', 100);




















//kata kunci this sama dengan Object.create(<func>.prototype)

// function Mahasiswa(nama, health) {
//     // let mhs = Object.create(methodMahasiswa); <- Cara ke-1
//     // let mhs = {}; <- Cara ke-2
//     // let this = Object.create(Mahasiswa.prototype); <- Cara ke-3
//     this.nama = nama;
//     this.health = health;
//     // return mhs; <- Cara ke 2
// }

// Mahasiswa.prototype.heal = function (drink) {
//     this.health += drink;
//     return `Halo ${this.nama}, nyawamu bertambah menjadi ${this.health}`;
// }

// let tes4 = new Mahasiswa('Dawam', 100);














//Versi Class
class Mahasiswa {
    constructor(nama, energi) {
        this.nama = nama;
        this.energi = energi;
    }
    heal(drink) {
        this.health += drink;
        return `Halo ${this.nama}, nyawamu bertambah menjadi ${this.health}`;
    }
}

let tes5 = new Mahasiswa('Dawam', 100);


// let number = [1, 2, 3, 4, 5];
// console.log(number);














// 3. Constructor Function
//Menggunakan keyword new, tidak butuh obj kosong, tidak butuh return, yang tadinya parameternya butuh objek kosong sekarang digati dengan kata kunci this
// function Mahasiswa(nama, health) {
//     //Property
//     this.nama = nama;
//     this.health = health;
//     //Method
//     this.heal = function (drink) {
//         this.health += drink;
//         console.log(`Hello ${this.nama} selamat makan`);
//     }
// }

// let tes3 = new Mahasiswa('Dawam', 100);

// 4. Object.create