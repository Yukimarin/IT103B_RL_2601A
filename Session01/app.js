// 1. Biến 
// Syntax (Cú pháp): Tu khoa khai bien (var, let, const) + variableName = value 
// Quy tac dat ten bien: camelCase (firstNumber)
// Snakecase: first_number
// KebapCase: first-number
// let number = 1
// var name = "Nguyen Van A"
// const age = 18
// console.log(year); // loi => khong phai la var
// year = 18 // tu khoa let 
// year = 5 // gan lai duoc => khong phai la const 
// console.log(year);

// // Tu khoa var co the khai bao lai, co the gan lai gia tri
// // debugger
// console.log(a);// undefined => Hoisting: dua moi khai bao len tren cung 
// var a = 5 
// var a = 10
// a = 7 
// console.log(a);
// // Tu khoa let khong the khai bao lai, co the gan lai tri 
// let b = 2
// b = 3
// console.log(b);

// // Tu khoa const khong the khai bao lai, khong the gan lai gia tri 
// const c = 10 
// // c = 20 
// console.log(c);

// 2. Kieu du lieu trong JS
// Kieu du lieu nguyen thuy (7): number, string, boolean, undefined, null, symbol, bigInt 
// Kieu du lieu tham chieu: Array, Object 

// 3. Nhap va xuat trong JS 
// let fullName = prompt("Nhap ten cua ban")
// // Convert string to Number
// let age = Number(prompt("Nhap vao so tuoi cua ban"))
// let age = +prompt("Nhap vao so tuoi cua ban")
// let age = parseInt(prompt("Nhap vao so tuoi cua ban"))
// console.log(typeof(name));
// console.log(typeof(age));
// Output: Ten sinh vien la ..., tuoi ...
// console.log("Tên sinh vien là " + fullName + ", tuoi " + age);
// console.log(`Ten sinh vien la ${fullName}, tuoi ${age}`);// Template String ES6

// // 4. Chuyen doi kieu du lieu 
// let a = 5 // number 
// // let b = "5"
// let b = "-5" //string 
// console.log("Tong a+b", a+b); //55 5-5
// console.log("Hieu a-b", a-b); //0 10
// console.log("Tich a*b", a*b); //25 -25

// 5. Math
// let result = Math.ceil(Math.random()*10) // 0-0.9999
// console.log(result);

// Tiếp nhận dữ liệu giỏ hàng dạng chuỗi thô từ hệ thống
const rawItemPrice = "45000";
const rawItemQuantity = "2";
const rawBaseDeliveryFee = "16000";
const rawDeliveryDistance = "3.2";
const comboDiscountPercent = 10; // Giảm 10% tổng tiền món

// 1. Tính tổng tiền món ăn và giảm giá combo
const rawSubtotal = rawItemPrice * rawItemQuantity;
const discountAmount = (rawSubtotal * comboDiscountPercent) / 100;
const foodTotalAfterDiscount = rawSubtotal - discountAmount;

// 2. Tính cước vận chuyển (16.000đ cơ bản + 4.000đ/km) - Đang phát sinh lỗi nối chuỗi
const deliveryFee = rawBaseDeliveryFee + rawDeliveryDistance * 4000;

// 3. Quyết toán hóa đơn thanh toán
const finalPayment = foodTotalAfterDiscount + deliveryFee;

// 4. Xuất kết quả kiểm tra
console.log(`Tiền món sau giảm: ${foodTotalAfterDiscount} VND`);
console.log(`Phí giao hàng: ${deliveryFee} VND`);
console.log(`Tổng thanh toán: ${finalPayment} VND`);



