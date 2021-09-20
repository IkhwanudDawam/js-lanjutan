//2.1 EXECUTION CONTEXT, HOISTING, SCOPE

// console.log(nama);
// var nama = 'Dawam';

// Creation phase pada global context:
// 1. Mencari variabel dan function terlebih dahulu
//    -Untuk variabel isinya akan diset menjadi undifined
//    -Untuk function isinya akan diset menjadi keseluruhan isi dari function tersebut
// 2 .HOISTING (Menaikkan baris kode yang terdapat ada variabel dan function ke atas source code)
// 3. mendefinisikan window = global object
// 4. mendefinisikan this = window


// console.log(nama);
// console.log(umur);
// console.log(sayHello());

// var nama = 'Dawam';
// var umur = 20

// console.log(nama);
// console.log(umur);
// console.log(sayHello());

// function sayHello() {
//     return `Halo nama saya ${nama}, umur saya ${umur}`;
// }


// Execution phase:
// 1. function membuat local ececution context
// 2. yang di dalamnya terdapat creation dan execution context
// 3. window
// 4. arguments
// 5. hoisting


var nama = 'Dawam';
var username = '@dawam';

function cetakURL() {
    console.log(arguments[0]);
    var instagramURL = 'http://instagram.com/';
    return instagramURL + username;
}

console.log(cetakURL('@ikhwanud'));