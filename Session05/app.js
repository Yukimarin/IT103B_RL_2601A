// String, str[index], Do dai chuoi string.length, slice(), trim(), toUpperCase()
// Tinh bat bien immutable(), startWith(), endWith(), includes(),

// let str ="HELLO"
// console.log(str);
// console.log("Do dai chuoi", str.length);
// Index 0 -> length -1 
// String: H  E  L  L  O 
// Index:  0  1  2  3  4  5 
// Length: 5
// console.log("Lay ra chu cai dau tien trong chuoi", str[0]);

// let emoji = "😀"
// console.log(emoji.length);
// console.log(emoji[0]);
// console.log(emoji[1]);
// UTF-16 
// String -> UTF 16 -> JS Engine -> Bo nho may tinh 


// Tinh bat bien (immutable)
// let str ="HELLO"
// console.log(str);
// // str = "Lop IT103B-2601A"
// // console.log(str);
// console.log(str[0]); // Chu H 
// str[0] = "B"
// console.log(str[0]); // B - ket qua chu H
// console.log(str); // BELLO - ket qua chu HELLO

// slice() substring() - Cat chuoi
// let str = "HELLO"
// // Cu phap slice: string.slice(start(required), end(optional))
// // Cu phap substring: string.substring(start, end)
// // TH1: Nhap day du start, end (start<end)
// // console.log(str.slice(1,2)); // E
// // console.log(str.substring(1,2)); // E

// // TH2:Index nam ngoai 0 -> length-1
// // String: H  E  L  L  O 
// // Index(positive):  0  1  2  3  4
// // INdex(nagative):  -5 -4  -3  -2  -1
// console.log(str.slice(-1)); // O
// console.log(str.slice(5)); // chuoi rong 
// console.log(str.substring(5)); // chuoi rong 
// console.log(str.substring(-1)); // HELLO chuyen start am thanh start 0

// // TH3 start > end
// // console.log(str.slice(3,1));// chuoi rong 
// console.log(str.substring(3,1));// Chuyen thanh substring(1,3) => EL

// Pagination

// toLowerCase(), toUpperCase(), trim()
// let str="   HeLlO    "
// console.log(str.length);
// console.log("Su dung toLowerCase()", str.toLowerCase());
// console.log("Su dung toUpperCase()", str.toUpperCase());
// console.log(str.trim().length); //5
// console.log(str.trimStart().length); // 9
// console.log(str.trimEnd().length); // 8
// Kiem tra du lieu dau vao (validate dang ky dang nhap)

// startWith(), endWith(), includes(),
// string.starstWith(searchValue, start)
// // Kiem tra chuoi co bat dau bang chuoi con hay khong
// let email = "bachnx1991@gmail.com"
// console.log(email.startsWith("b"));// true
// console.log(email.startsWith("x"));// fasle

// // string.endsWith(searchvalue, length)
// // Kiem tra chuoi co ket thuc bang chuoi con hay khong
let mail = "bachnx1991@gmail.com"
// console.log(mail.endsWith("@gmail.com"));// true
// console.log(mail.endsWith("@yahoo.com"));// fasle

// //string.includes(searchvalue, start)
// // Kiem tra chuoi co chua chuoi con ben trong hay khong
// console.log(mail.includes("bach"));// true
// console.log(mail.includes("@yahoo.com"));// fasle

let inputValue = "   OA    "
let bookName = "Toi thay hoa vang tren co xanh"
// inputValue === bookName => true
inputValue= inputValue.trim().toLowerCase() // => oa
console.log("Sau khi xu ly chuoi", inputValue);
console.log(bookName.includes(inputValue));





