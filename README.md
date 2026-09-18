<!-- Phân tích lỗi & Lập bảng Test Cases (trình bày trong README.md):
Giải thích chi tiết tại sao biểu thức rawBaseDeliveryFee + rawDeliveryDistance * 4000 lại sinh ra chuỗi "1600012800" thay vì con số 28800.
Vi bien rawBaseDeliveryFee la kieu du lieu chuoi co gia tri la 16000
Vi bien rawDeliveryDistance la chuoi * 4000 (number) => number = 12800
=> Cong string voi number "16000" + 12800= 1600012800

Lập bảng 02 Test Cases đối chứng gồm các cột: Trường hợp kiểm thử, Dữ liệu đầu vào, Kết quả sai thực tế, Kết quả đúng mong đợi. -->
<!-- Truong hop kiem thu -->
VD: Tinh cuoc van chuyen 

<!-- Dữ liệu đầu vào -->
rawBaseDeliveryFee => string
rawDeliveryDistance => string 

<!-- Kết quả sai thực tế -->
1600012800
<!-- Kết quả đúng mong đợi -->
288000