// // Mang
// // let mixed = [1,"string", true, null, undefined]
// let arr = [1,2,3,4]
// // length = 4, 4 element, index 0-3
// console.log(arr[-1]); // undefined
// console.log(arr[4]); // undefined

// // CRUD
// // Create: push(), unshift(), splice()
// arr.splice(2,0,10)
// console.log(arr);
// // Read
// // Update: arr[index] = newValue, splice()
// arr.splice(1,1,20)
// console.log(arr);
// // Delete: pop(), shift(), splice()
// arr.splice(3,1)
// console.log(arr);

// arr.splice(1)
// console.log(arr);//[1]

// // Object
// let student ={
//     id: 1,
//     name: "Bui Trung Kien",
//     phone: "0904662012",
// }

// // CRUD
// // Create:
// student.email ="kien@gmail.com"
// console.log(student);
// // Read
// // Update
// student.phone = "0909090909"
// console.log(student);
// // Delete
// delete student.email
// console.log(student);

// Mang doi tuong
// Thư viện trường Đại học cần một kịch bản JavaScript quản lý danh sách phiếu mượn sách của sinh viên.
// Mỗi phiếu mượn là một đối tượng chứa: recordId, studentId, bookTitle, borrowDays, isReturned.
// Kịch bản cần thực hiện: thêm phiếu mới, tính tiền phạt các phiếu quá hạn (> 14 ngày),
// cập nhật ngày trả sách và xóa phiếu mượn khi sinh viên tất toán nợ.

// flowchart TD
// A([Khởi tạo mảng borrowRecords: 3 phiếu]) --> B[Create: Thêm phiếu mới bằng push]
//  B --> C[Read: Duyệt mảng, tính phí phạt quá hạn > 14 ngày]
//  C --> D[Update: Cập nhật isReturned = true khi trả sách]
//  D --> E[Delete: Tìm vị trí & xóa phiếu bằng splice]
//  E --> F[/In bảng tổng kết dữ liệu thư viện ra Console/]
// 3. Quy tắc nghiệp vụ
// Khởi tạo: Mảng borrowRecords gồm 3 phiếu mượn (PM01, PM02, PM03).
// Thêm mới (Create): Thêm phiếu PM04 cho sinh viên SV104 mượn cuốn "Clean Code", số ngày mượn = 18, isReturned = false.
// Phạt quá hạn (Read): Hạn mượn tối đa là 14 ngày. Nếu borrowDays > 14, phí phạt = (borrowDays - 14) * 5000 VNĐ/ngày.
// Cập nhật (Update): Phiếu PM01 trả sách, chuyển isReturned = true.
// Xóa (Delete): Xóa phiếu PM03 khỏi danh sách sau khi sinh viên đã hoàn thành nghĩa vụ.

// Input:
// Mảng borrowRecords gồm 3 phiếu mượn (PM01, PM02, PM03).
// THong tin moi phieu se gom: recordId, studentId, bookTitle, borrowDays, isReturned.
// Phạt quá hạn (Read): Hạn mượn tối đa là 14 ngày. Nếu borrowDays > 14, phí phạt = (borrowDays - 14) * 5000 VNĐ/ngày.
// Output:
// Khi them moi PM04 => danh sach Mảng borrowRecords gồm 4 phiếu
// Tra sach PM01 => isReturned cua PM01 = true
// Xoa PM03 => Mang se con 3 phieu

// Process:
// B1: Khoi tao mang borrowRecords bao gom 3 phieu muon, moi phieu muon recordId, studentId, bookTitle, borrowDays, isReturned.
const borrowRecord = [
  {
    recordId: "PM01",
    studentId: "SV101",
    bookTitle: "Kanji Look and Learn",
    borrowDay: 18,
    isReturn: false,
  },
  {
    recordId: "PM02",
    studentId: "SV102",
    bookTitle: "HTML",
    borrowDay: 15,
    isReturn: true,
  },
  {
    recordId: "PM03",
    studentId: "SV101",
    bookTitle: "Java",
    borrowDay: 10,
    isReturn: false,
  },
];
// B2: Them phieu muon moi
// B2.1: Khoi tao cac bien luu gia tri moi ma nguoi dung nhap
// let recordID = prompt("Nhap ma phieu muon moi (VD: PM04):")
// let studentID = prompt("Nhap ma sinh vien (VD: SV104)")
// let bookTitle = prompt("Nhap ten sach:")
// let borrowDays = Number(prompt("Nhap so ngay muon:"))
// // B2.2: Validate ten sach bi trung
// let isDuplicate = false
// for (let i = 0; i < borrowRecord.length; i++) {
//     if(borrowRecord[i].bookTitle === bookTitle){
//         isDuplicate= true
//         break;
//     }
// }
// if(isDuplicate === true){
//     console.log("Ten sach da ton tai");
// }else{
//     // B2.3: Them doi tuong moi vao mang borrowRecords
//     let newTicket = {
//         recordId:  recordID,
//         studentId: studentID,
//         bookTitle: bookTitle,
//         borrowDay:borrowDays,
//         isReturn: false
//     }
//     borrowRecord.push(newTicket)
//     // B2.4: Hien thi lai danh sach cac phieu muon
//     console.log("Sau khi them moi phieu muon");
//     console.log(borrowRecord);
// }

// B3: Phat qua han (Read)
// B3.1: Khoi tao mang rong de luu toan bo cac phieu muon qua han
let reportData = [];
// (recordId, studentId, bookTitle, borrowDays, isReturned, outdate, fee)
// B3.2: Su dung vong lap for duyet qua mang borrow
for (let i = 0; i < borrowRecord.length; i++) {
  // B3.2.1: Tao bien record = borrowRecord[i]
  let record = borrowRecord[i];
  // Nếu borrowDays > 14, phí phạt = (borrowDays - 14) * 5000 VNĐ/ngày.
  // B3.2.2: Khoi tao bien luu so ngay qua han outDate
  let outDate = 0;
  // B3.2.3: Khoi tao bien luu so tien phat outDate * 5000
  let fee = 0;
  if (record.borrowDay > 14) {
    outDate = record.borrowDay - 14;

    fee = outDate * 5000;
  }
  // Tao bien kiem tra trang thai
//   let status = "";
//   if (record.isReturn) {
//     status = "Da tra";
//   } else {
//     status = "Dang muon";
//   }
  // B3.2.4: In ra thong tin phat
  reportData.push({
    "Ma phieu": record.recordId,
    "Ma SV": record.studentId,
    "Ten sach": record.bookTitle,
    "So ngay muon": record.borrowDay,
    "Trang thai": record.isReturn ? "Da tra" : "Da muon", //status
    "So ngay qua han": outDate,
    "Phi phat": fee,
  });
}
console.log(reportData);
// false = Dang muon, true = Da tra

// B4: Cap nhat trang thai tra sach
// B4.1: Cho nguoi dung nhap ma phieu muon cap nhat tra sach
let borrowTicket = prompt("Nhap phieu muon muon cap nhat tra sach")
// B4.3: Su dung vong lap for de duyet qua cac phieu muon
for (let i = 0; i < borrowRecord.length; i++) {
    if(borrowRecord[i].recordId === borrowTicket){
        borrowRecord[i].isReturn = true
        break;
    }
}
console.log(borrowRecord);

// B5: Xoa phieu muon
// B5.1: Cho nguoi dung nhap ma phieu muon xoa
// B5.2: Tao bien co = -1
// B5.3: Su dung vong lap for de duyet qua cac phieu muon
// B5.3.1: Neu nhu ton tai thi xoa
// B5.4: Ra ngoai vong lap for thi hien thi danh sach sau khi cap nhat
