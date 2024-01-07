// exercise 1

// function getSum(n) {
//     let sum1 = 1;
//     let sum2 = 0;

//     for (let i = 1; i <= n; i++) {
//         sum1 *= 2 * i - 1;
//         sum2 += 2 * i;
//     }

//     return sum1 + sum2;
// }

// let n = 3;
// let result = getSum(n);
// console.log(result);


// exercise 2



// exercise 3

// function getStringArr(arr) {
//     return arr.filter(element => typeof element === 'string');
// }

// let arr = [1, "Abdulaziz", "Elbek", false, [], "Jurabek", {}];
// let result = getStringArr(arr);
// console.log(result); 


// exercise 4



// exercise 5

// function switchLetters(str) {
//     return str.split('').map(char => {
//         if (char === char.toUpperCase()) {
//             return char.toLowerCase();
//         } else if (char === char.toLowerCase()) {
//             return char.toUpperCase();
//         }
//         return char;
//     }).join('');
// }

// let str = "Abdulaziz Programmer";
// let result = switchLetters(str);
// console.log(result); 


// exercise 6

// function changeObjToArr(obj) {
//     return Object.entries(obj).map(([key, value]) => key + value);
// }

// let obj = { a: 1, b: 2, c: 3 };
// let result = changeObjToArr(obj);
// console.log(result); 


// exercise 7



// exercise 8

// function getTotalPages(books) {
//     return books.reduce((totalPages, book) => totalPages + (book.isReadFinished ? book.pages : 0), 0);
// }

// const books = [
//     { name: "The Great Gatsby", pages: 180, isReadFinished: true },
//     { name: "To Kill a Mockingbird", pages: 336, isReadFinished: false },
//     { name: "Atom habits", pages: 328, isReadFinished: true },
//     { name: "Pride and Prejudice", pages: 432, isReadFinished: false },
//     { name: "The Catcher in the Rye", pages: 224, isReadFinished: true },
//     { name: "The Hobbit", pages: 310, isReadFinished: false },
//     { name: "The Lord of the Rings", pages: 1178, isReadFinished: true },
//     { name: "Harry Potter", pages: 320, isReadFinished: true },
//     { name: "Fahrenheit 451", pages: 249, isReadFinished: false },
//     { name: "To the Lighthouse", pages: 209, isReadFinished: true }
// ];

// const totalPages = getTotalPages(books);
// console.log(totalPages);


// exercise 9

// Object.prototype.keys = function () {
//     return Object.keys(this);
// };

// let obj = { a: 1, b: 2, c: 3 };
// let keysArray = obj.keys();
// console.log(keysArray); 


// exercise 10

