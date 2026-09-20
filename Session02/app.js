// If else, switch case
// 1. Toan tu
// Toan tu so hoc: cong tru nhan chia
// Toan tu so sanh: >, < , ==,===, !=, !==
// let a = 5
// let b = "5"
// console.log("So sanh 2 dau =",a == b); // so sanh ve gia tri
// console.log("So sanh 3 dau =",a === b); // so sanh ve gia tri va kieu du lieu

// Toan tu logic : &&, ||
// console.log("Toan tu &&", 2 > 5 && 2 < 3 ); // false && true => false
// console.log("Toan tu ||", 2 > 5 ||2 < 3); // false || true => true

// // Tien to va hau to (i++ va ++i)
// let i = 1 
// // i++(Hậu tố):  Bien sẽ được sử dụng trước khi mà tăng hoặc giảm giá tri
// // ++i(Tiền tố): bien se duoc tang hoac giam truoc khi duoc gan lai gia tri (su dung bien do)
// console.log(i++); // 1 => i = 2
// console.log(i++); // 2 => i = 3
// console.log(++i); // 4

// Ket qua tra ra khi so sanh la kieu du lieu boolean (true/false)

// Menh de dieu kien if ... else...
// TH1: chi co menh de if
// let age = 18
// console.log(Number.isInteger(age)); // kiem tra so nguyen

// if (age == 18) {
//     console.log("Bạn đã đủ tuổi lấy vợ");
// }
// console.log("Câu lênh tiếp theo");

// TH2: Su dung menh de if...else..
// if (age === 18) {
//     console.log("Ban 18 tuổi");
// } else {
//     console.log("Bạn không phải 18 tuổi");
// }
// console.log("Câu lênh tiếp theo");

// TH3: Su dung menh de if..elseif..else
// if(!Number.isInteger(age)){
//     console.log("Du lieu nhap vao khong phai la so");
// }else if (age >18){
//     console.log("Ban lon hon 18 tuổi");
// }else if (age ===18){
//     console.log("Ban 18 tuổi");
// }else {
//     console.log("Ban duoi 18 tuoi");
// }
// console.log("Câu lênh tiếp theo");

// Toan tu 3 ngoi (Tenary Operator)
// Syntax: condition ? expression1 : expression2
// age===18 ? console.log("Ban 18 tuổi") : console.log("Bạn không phải 18 tuổi");

// Cau lenh switch case
// Khi nao dung if else, khi dung switchcase
// Dùng if else khi bieu thuc condition la bieu thuc logic phuc tap
// Neu bo break thi sao
// Chay den khi gap break hoặc ket thuc switch
// Dưa phần default lên trên cùng thì sao
// Mac dinh break
// let month = 3;

// switch (month) {
//   case 1:
//   case 2:
//   case 3:
//     console.log("Đây là mua xuân");
//     break;
//   case 4:
//     console.log("Đây là mua he");
//     break;
//   case 5:
//     console.log("Đây là mua he 5");
//     break;
//   case 6:
//     console.log("Đây là mua he");
//     break;
//   default:
//     console.log("Dữ liệu không hợp lệ");
//     break;
// }
// console.log("Câu lênh tiếp theo");

// BTTH: 
// BIKE: Cước mở cửa 12.000 VNĐ, km tiếp theo 4.500 VNĐ.
// CAR_4: Cước mở cửa 20.000 VNĐ, km tiếp theo 9.000 VNĐ.
// CAR_7: Cước mở cửa 25.000 VNĐ, km tiếp theo 11.000 VNĐ.
// DELIVERY: Cước cố định 15.000 VNĐ cho 3 km đầu, sau đó 5.000 VNĐ/km.
// Lập bảng so sánh kỹ thuật và đưa ra khuyến nghị khi nào dùng switch-case, 
// khi nào dùng if-else.
// Triển khai mã nguồn phân loại cước phương tiện bằng switch-case, 
// có khối default bắt lỗi loại xe không tồn tại.
// Tích hợp kiểm tra phụ phí cao điểm 1.2x và xuất hóa đơn ra console.

// Input: 
// BIKE: Cước mở cửa 12.000 VNĐ, km tiếp theo 4.500 VNĐ.
// CAR_4: Cước mở cửa 20.000 VNĐ, km tiếp theo 9.000 VNĐ.
// CAR_7: Cước mở cửa 25.000 VNĐ, km tiếp theo 11.000 VNĐ.
// DELIVERY: Cước cố định 15.000 VNĐ cho 3 km đầu, sau đó 5.000 VNĐ/km.
// Output:
// Hiển thị tiền cước tương ứng với từng loại xe
// Hiển thị lỗi nếu xe không tồn tại
// Process:  
// B1: Khai bao bien va luu giờ khách hàng muốn sử dụng phương tiện
// B2: Sử dụng if..else de kiem tra gio cao diem 
// B3: Khai báo biên và lưu loại xe ma nguoi dung nhâp giá tri
// B3: Sử dung switch case để phân loại cước phương tiện theo giá trị mà người dung đã chọn 
// B4: Hiển thị giá cước tương ứng với từng loại xe 
// B5: Trong khối default thì hiển thị lỗi không tồn tại xe 
// B6: Xuất hóa đơn: giá cước 1.2 