//Rest Parameter (Hanya dapat di tulis diakhir argumentnya)

// function myFunc() {
//     //return arguments (objek)
//     // return [...arguments] (array)
// }

// console.log(myFunc(1, 2, 3, 4, 5));


// function jumlah(...args) {

// let total = 0
// for (const iterator of args) {
//     total += iterator;
// }
// return total

//     return args.reduce((acc, num) => acc + num)
// }

// console.log(jumlah(1, 2, 3, 4, 5));

//-----------------------------------------ARRAY DESTRUCTURING
// const a = ['Dawam', 'Ikhwanud', 'Dawam2', 'Ikhwanud2'];
// const [ketua, wakil, ...anggota] = a;


//------------------------------------------------OBJECT DESTRUCTURING
// const obj = {
//     ketua: 'Dawam',
//     wakil: 'Ikhwanud',
//     bendahara: 'Mohamm'
// }

// const {
//     ketua,
//     ...teams
// } = obj

//------------------------------------------------FILTERING

function filterBy(type, ...args) {
    return args.filter(e => typeof e === type)
}

console.log(filterBy('number', 1, 2, 3, 'Dawam', 'hehe', true));