// for while do while 
// for loop 
// debugger
// for (let i = 0; i < 10; i = i + 1) {
//     if (i===5) {
//         break;
//     }
//     console.log(i);
// }

// for (let i = 0; i < 10; i = i + 2) {
//     console.log(i);
// }

// for (let i = 5; i < 10; i ++) {
//     console.log(i);
// }

// let fullName = "Rikkei Education"
// console.log(fullName[0]);
// console.log(fullName[15]);
// console.log(fullName.length); //16
// for (let i = 0; i < fullName.length; i++) {
//   console.log(fullName[i]);
// }
// BT1: R -> n Muốn in ngược lại từ n -> R
// for (let i = fullName.length - 1; i >=0 ; i--) {
//     console.log(fullName[i]);
// }

// BT2: Output: noitacudE iekkiR
// let reverseFullName = ""
// for (let i = fullName.length - 1; i >=0 ; i--) {
//     reverseFullName += fullName[i]
//     // console.log(fullName[i]);
// }
// console.log(reverseFullName);

// BT3: Cho nguoi dung nhap vao 1 ky tu bat ky, kiem tra ky tu do 
// co xuat hien trong chuoi trne không? 
// Nêu khong hien thi ra khong tim thay 
// Neu co thi hien thi ra so lan xuat hien cua ky tu trong chuoi 

let fullName = "Rikkei Education"
// // B1: Cho nguoi dung nhap vao 1 ky tu 
// let charToFind = prompt("Nhap vao ky tu muon tim kiem")
// // B2: Khoi tao bien count = 0
// let count = 0
// // B3: Su dung vong lap duyet qua chuoi 
// for (let i = 0; i < fullName.length; i++) {
//     // B3.1: Su dung if else de kiem tra 
//     if(fullName[i]===charToFind){
//         count++;
//     }
// }

// if(count ===0){
//     console.log("Khong tim thay");
// }else{
//     console.log(`Ky tu ${charToFind} xuat hien ${count} so lan`);
// }

// for (; ;) {
// }

// While: 
// So lan lap biet truoc
// let i = 0 
// while (i<fullName.length) {
//     console.log(fullName[i]);
//     i++
// }

// So lan khong biet truoc 
let randomNumber = 68 
// Viet chuong trinh de nguoi dung du doan so can doan 
// Neu so nguoi dung nhap vao lon hon so can doan thi => lon hon 
// Neu so nguoi dung nhao vao nho hon so can doan thi => nho hon 
// Neu so nguoi dung = so can doan thi => Bingo va ket thuc chuong trinh 
// BT: Chi cho phep nguoi dung nhap dung 3 lan. Qua 3 lan hien thi ban thua cuoc 
// let count = 0
// for ( ; ; ) {
//     let guessNumber = Number(prompt("Nhap vao so nguyen bat ky"))
//     count ++
//     if(guessNumber > randomNumber){
//         console.log("lon hon")
//     }else if (guessNumber < randomNumber){
//         console.log("nho hon");
//     }else{
//         console.log("Bingooo");
//         break;
//     }
// }


// let count = 3
// let guessNumber 
// while (count < 3) {
//     guessNumber = Number(prompt("Nhap vao so nguyen bat ky")) 
//     console.log("Vong while", count);
//     count++
//     if( guessNumber > randomNumber){
//         console.log("lon hon")
//     }else if (guessNumber < randomNumber){
//         console.log("nho hon");
//     }else{
//         console.log("Bingooo");
//         break;
//     }
//     if(count === 3){
//         console.log("Ban thua cuoc");
//     }
// }
// console.log("sau while");

// do while 
let count = 3
let guessNumber 
do {
    guessNumber = Number(prompt("Nhap vao so nguyen bat ky")) 
    console.log("Vong do while", count);
    count++
    if( guessNumber > randomNumber){
        console.log("lon hon")
    }else if (guessNumber < randomNumber){
        console.log("nho hon");
    }else{
        console.log("Bingooo");
        break;
    }
    if(count === 3){
        console.log("Ban thua cuoc");
    }
} while (count < 3);
console.log("sau do while");