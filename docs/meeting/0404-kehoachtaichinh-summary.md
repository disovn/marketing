# Tóm tắt Meeting - Kế hoạch Tài chính & Vận hành DISO (04/04/2026)

**Người tham gia:** Vĩnh, Hiếu, Hải

---

## CÁC Ý CHÍNH

### 1. Chuyển đổi mô hình: từ ITO sang Product-based

- Không còn bán dự án (project-based) mà chuyển sang bán product
- Cần xây lại toàn bộ kế hoạch kinh doanh giai đoạn đầu
- Bỏ hết chi phí cố định (văn phòng, back office...) trong giai đoạn đầu
- Mô hình vận hành cực kỳ lean, đơn giản

### 2. Vấn đề "con gà quả trứng"

- Chưa có deal → không có tiền → không thuê người → không có product → không có gì để sale
- Đang tìm sponsor cho MVP đầu tiên (Trafalco là ứng viên)
- Cần deal đầu tiên để làm cơ sở scale

### 3. Pricing - Cần xây dựng lại hoàn toàn

- **Vấn đề hiện tại:** Đang tính giá bằng cách lấy giá vendor + markup 20% → không ổn (phụ thuộc vendor, không kiểm soát được giá)
- **Hướng đi đúng:** Cần tìm **unit/parameter** để đo đạc chi phí vận hành (số lượng user, số giao dịch/tháng, doanh thu, số khách hàng, số employee...)
- Cần xây **bảng sizing** (tham khảo mô hình sizing của SAP) - dựa vào thông số đầu vào để tính ra package giá
- Giá phải scale được theo size doanh nghiệp (Trafalco 62tr/tháng OK, An Khang thì không, Long Châu thì quá rẻ)
- Cần xác định **cost driver** cho từng module khi vận hành
- Không dùng template ITO cũ, phải xây mới cho product-based

### 4. Solution Architecture & Product Roadmap

- Cần vẽ **kiến trúc sản phẩm** (solution architecture) cho mảng TMĐT sớm
- Cần có **product roadmap** rõ ràng: cái gì trước, cái gì sau
- Mình phải control roadmap, không chạy theo khách hàng/sếp (đang bị nhảy nhót: web TMĐT → ambassador → line khác)
- Roadmap không phụ thuộc ai làm (vendor hay mình), mình vẫn là owner

### 5. Phân loại rõ: Purchasing vs Outsourcing

- **Purchasing (Mua ngoài):** Mua sản phẩm có sẵn trên thị trường, cắm vào hệ thống (VD: Haravan, nhanh.vn) - bản chất là thương mại mua qua bán lại
- **Outsourcing (Thuê ngoài):** Thuê dev/team để phát triển sản phẩm cho mình, sản phẩm cuối thuộc về DISO
- Sếp hay gọi chung là "outsource" nhưng cần phân biệt rõ

### 6. Core Team - Bắt buộc phải có

- Phải có đội core dù lean: **team sản phẩm (dev)** + **team triển khai/vận hành**
- Core team phải ký HĐLĐ, full-time 8h/ngày, ưu tiên cho DISO
- Nhân sự theo dự án (hết dự án cắt) → coi như vendor, ký hợp đồng khoán/freelance, không ký HĐLĐ
- Ai muốn đóng góp nhưng không full-time → vào với vai trò advisor

### 7. Đầu tư giai đoạn đầu

- Giai đoạn đầu chưa có doanh thu → sếp phải đầu tư hoặc cho vay
- Sẽ tính ra cần đầu tư bao nhiêu, bao lâu thu lại
- Lãi vay tính vào chi phí vận hành

---

## ĐẦU VIỆC THEO TIMELINE

### Ưu tiên ngay (05/04)

| # | Đầu việc | Phụ trách | Deadline |
|---|----------|-----------|----------|
| 1 | Gửi báo cáo tài chính năm 2025 cho sếp | Hiếu | 05/04 |
| 2 | Call Vĩnh + Hiếu về chi phí lương Ambassador (30 phút) | Vĩnh + Hiếu | 05/04 sáng |

### Sớm nhất có thể

| # | Đầu việc | Phụ trách | Deadline |
|---|----------|-----------|----------|
| 3 | Vẽ Solution Architecture cho các sản phẩm TMĐT (danh mục sản phẩm, cách hỗ trợ nhau) | Vĩnh | ASAP |
| 4 | Xây Product Roadmap cho từng sản phẩm (cái gì trước cái gì sau, phân loại mua ngoài vs tự build) | Vĩnh | ASAP |
| 5 | Đề xuất danh sách nhân sự core team (team sản phẩm + team triển khai/vận hành, mức thu nhập dự kiến) | Vĩnh | ASAP |
| 6 | Gửi danh sách nhân sự hiện tại + chế độ + đề xuất giữ/không giữ trong core team | Vĩnh | ASAP |

### Sau khi có Product Roadmap

| # | Đầu việc | Phụ trách | Deadline |
|---|----------|-----------|----------|
| 7 | Xây bảng sizing/parameter cho pricing product (cost driver từng module, activity-based costing) | Hiếu design form → Vĩnh điền | Sau roadmap |
| 8 | Phân loại phạm vi outsource: tách rõ (a) thuê phát triển, (b) thuê vận hành, (c) mua ngoài - cho từng module | Vĩnh | Sau roadmap |

### Sau khi chốt phạm vi

| # | Đầu việc | Phụ trách | Deadline |
|---|----------|-----------|----------|
| 9 | Khảo giá vendor cho từng phần outsource/purchasing | Vĩnh | Sau chốt phạm vi |
| 10 | Xây kế hoạch chi phí tổng thể (PNL): chi phí core team + outsource + purchasing → cần đầu tư bao nhiêu, bao lâu hoàn vốn | Vĩnh + Hiếu | Sau khi có đủ input |
| 11 | Trình bày kế hoạch cho sếp để xin quyết định đầu tư/vay | Team | Sau khi hoàn thành PNL |

### Liên tục

| # | Đầu việc | Phụ trách | Ghi chú |
|---|----------|-----------|---------|
| 12 | Follow sếp Hưng về deal/sale - đặt target cụ thể (2 tuần 1 buổi demo, 1 tháng 1 kết quả) | Vĩnh | Ongoing |
