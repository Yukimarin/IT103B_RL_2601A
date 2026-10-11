// Function
// Khai bao ham, Parameter, Argument, return
// 1. Khái niệm
// - Giam thieu cac tac vu lap di lap lai, tai su dung => code de doc va de bao tri (maintance)
// 2. Cac loại function chinh - Khai bao va thuc thi
// - Buit-in Function: prompt(), parseInt(), push(), pop(),...
// - Define funtion: Ham tu dinh nghia
// + Declaration Fucntion (hoisting)
// - Giai doan khai bao (Dinh nghia ham) ham
// sayHi()
// function sayHi() {
//     console.log("Xin chao IT103B");
// }
// sayHi()
// // - Giai doan thuc thi
// // + Expression Function
// let sayHello = function () {
//     console.log("Hello IT103B");
// }
// sayHello()
// + Arrow Function
// let sum = function (a,b) {
//     return a +b
// }
// console.log(sum(2,3));

// let sum = (a,b) => {
//     return a+b
// }
// console.log(sum(2,3));

// + Invoke Function
// (function () {
//     console.log("Invoke Function");
// })();

// + Anonymous FUnction
// + Constructor Function
// function Student(name,age) {
//     this.name= name;
//     this.age = age
// }
// const SV1 = new Student("Bach", 18)
// console.log(SV1);

// + Async Function (Ham bat dong bo)
// setInterval, setTimeout
// + Callback Fucntion
// + Generator Function
// redux (ReactJS) yield

// 3. Tham so va doi so
// Tham so (Parameter)): la bien tham gia trong qua trinh khoi tao ham
// Doi so (Argument): la gia tri truyen vao trong qua trinh thuc thi ham
// 4. Tu khoa return
// return: tra ve gia tri cua ham, dung bieu thuc hay logic sau tu khoa return

// VD
// let arr = [1, 2, -3, 4, 5, 6];
// let arr1 = [1,2,-10]
// let arr2 = [-1,-2,-3,-10]
// Viet ham tinh tong cac phan tu trong mang arr
// let sum = 0
// for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i]
// }
// console.log(sum);

// function sum() {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   console.log(sum);
// }
// sum()

// function sum1() {
//   let sum = 0;
//   for (let i = 0; i < arr1.length; i++) {
//     sum = sum + arr1[i];
//   }
//   console.log(sum);
// }
// sum1()

// function sum2() {
//   let sum = 0;
//   for (let i = 0; i < arr2.length; i++) {
//     sum = sum + arr2[i];
//   }
//   console.log(sum);
// }
// sum2()

// function sum(arr) {
//     let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   console.log(sum);
// }

// sum(arr)
// sum(arr1)
// sum(arr2)

// let arr = [1,2,-3,-10,10]
// Viet ham tinh tim min trong mang 
// function findMin(arr) {
//     let min = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//        if (min > arr[i]){
//         min = arr[i]
//        }   
//     }
//     return min;
// }

// console.log(findMin(arr));

// Array Method 
// Phan biet map() vs forEach()
let arr = [1,2,3,4]
// Output: [1,4,9,16] element*element
// let result = []
// for (let i = 0; i < arr.length; i++) {
//     result.push(arr[i]*arr[i])
// }
// console.log(result);

let resultMap = arr.map(function (element) {
    return element * element
})
console.log(arr);
console.log(resultMap);

// let resultForEach = arr.forEach(function (element) {
//     return element * element
// })
// console.log(resultForEach); //undefined

let resultForEach = arr.forEach(function (element) {
    console.log(element * element);
})


