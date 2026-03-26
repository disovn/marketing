# Brainstorming: Project Roadmap & Dự Toán Tài Chính — Dự Án E-Commerce Tổng Thể

**Ngày:** 2026-03-25
**Mục tiêu:** Xây dựng roadmap 12-18 tháng, dự toán nhân sự & chi phí cho dự án e-commerce tổng thể, phục vụ trình phương án tài chính cho Ban Giám đốc
**Kỹ thuật:** Mind Mapping + SWOT Analysis + Reverse Brainstorming
**Context:** Dựa trên Diso Commerce Suite (5 pillars hiện có), brainstorm Medusa.js v2 (21/03/2026), và báo giá Trường Nhân Pharma

---

## BẢNG RATE NHÂN SỰ

| Vị trí | Rate/tháng (VNĐ) |
|--------|-------------------|
| **PM (Project Manager)** | 60.000.000 |
| **BE (Backend Developer)** | 40.000.000 |
| **DevOps** | 40.000.000 |
| **FE (Frontend Developer)** | 30.000.000 |
| **QC (Quality Control)** | 25.000.000 |
| **BA (Business Analyst)** | 25.000.000 |
| **Design (UI/UX)** | 25.000.000 |

---

## TỔNG QUAN 10 MODULE

```
┌─────────────────────────────────────────────────────────────────┐
│                    DISO COMMERCE PLATFORM                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─── TẦNG BÁN HÀNG ────────────────────────────────────────┐  │
│  │ M1. Website TMĐT        M2. Bán hàng Đa kênh            │  │
│  │     & Storefront             (Omnichannel)               │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                 │
│  ┌─── TẦNG GIAO DỊCH ───────────────────────────────────────┐  │
│  │ M3. Thanh toán & COD    M4. Vận chuyển & Fulfillment     │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                 │
│  ┌─── TẦNG VẬN HÀNH ────────────────────────────────────────┐  │
│  │ M5. Quản lý Đơn hàng & Vận hành                          │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                 │
│  ┌─── TẦNG TĂNG TRƯỞNG ─────────────────────────────────────┐  │
│  │ M6. Affiliate    M7. Reseller    M8. Đại sứ Thương hiệu │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                 │
│  ┌─── TẦNG CHĂM SÓC & PHÂN TÍCH ────────────────────────────┐  │
│  │ M9. CRM, Loyalty          M10. Admin, Analytics           │  │
│  │     & Chăm sóc KH              & Infrastructure          │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## MODULE 1: WEBSITE TMĐT & STOREFRONT

### Mô tả
Website bán hàng thương hiệu riêng, white-label, mobile-first. Nền tảng chính để khách hàng mua sắm trực tiếp.

### Chức năng Core (Bắt buộc) — 12 chức năng

| # | Chức năng | Mô tả |
|---|-----------|-------|
| 1 | **Quản lý sản phẩm** | SKU, biến thể (size/màu/combo), giá bán/gốc/KM, ảnh, mô tả |
| 2 | **Danh mục & bộ lọc** | Phân loại sản phẩm, bộ lọc theo giá/loại/thương hiệu |
| 3 | **Giỏ hàng** | Thêm/xóa/sửa số lượng, lưu giỏ hàng, mini cart |
| 4 | **Checkout flow** | Thông tin giao hàng, chọn thanh toán, xác nhận đơn, tối ưu tỷ lệ chuyển đổi |
| 5 | **Tài khoản khách hàng** | Đăng ký/đăng nhập, lịch sử đơn hàng, thông tin cá nhân |
| 6 | **White-label branding** | Domain riêng, logo, màu sắc, font, layout tùy chỉnh |
| 7 | **SEO built-in** | URL thân thiện, meta tags, schema markup, sitemap tự động |
| 8 | **Responsive mobile** | UI/UX tối ưu cho mobile (60%+ traffic), tốc độ tải nhanh |
| 9 | **Trang tĩnh (CMS cơ bản)** | Trang giới thiệu, chính sách, liên hệ, blog/tin tức |
| 10 | **Mã giảm giá & Voucher** | Tạo mã giảm theo %, số tiền, điều kiện áp dụng |
| 11 | **Flash Sale** | Đếm ngược, giới hạn số lượng, scheduled start/end |
| 12 | **Tìm kiếm sản phẩm** | Full-text search, suggest, filter kết quả |

### Chức năng Mở rộng (Option) — 4 chức năng

| # | Chức năng | Mô tả | Ghi chú |
|---|-----------|-------|---------|
| O1 | **Zalo Mini App** | Storefront trên Zalo, mua hàng trong app Zalo | 70M+ users Zalo VN |
| O2 | **PWA (Progressive Web App)** | Cài website như app trên điện thoại, push notification | Thay thế mobile app |
| O3 | **Multi-language** | Hỗ trợ đa ngôn ngữ (Việt, Anh, Trung...) | Cho khách quốc tế |
| O4 | **Product Reviews** | Đánh giá sao, review ảnh, verified purchase badge | Tăng trust |

### Dự toán nhân sự — Module 1

| Vị trí | Số người | Thời gian | Rate/tháng | Thành tiền |
|--------|----------|-----------|------------|------------|
| PM | 1 | 3 tháng | 60.000.000 | 180.000.000 |
| BA | 1 | 1.5 tháng | 25.000.000 | 37.500.000 |
| Design | 1 | 2 tháng | 25.000.000 | 50.000.000 |
| BE | 2 | 3 tháng | 40.000.000 | 240.000.000 |
| FE | 2 | 3 tháng | 30.000.000 | 180.000.000 |
| QC | 1 | 2 tháng | 25.000.000 | 50.000.000 |
| **Tổng Core** | | | | **737.500.000** |

**Option Zalo Mini App:**

| Vị trí | Số người | Thời gian | Rate/tháng | Thành tiền |
|--------|----------|-----------|------------|------------|
| BE | 1 | 2 tháng | 40.000.000 | 80.000.000 |
| FE | 1 | 2 tháng | 30.000.000 | 60.000.000 |
| QC | 1 | 1 tháng | 25.000.000 | 25.000.000 |
| **Tổng Option Zalo Mini App** | | | | **165.000.000** |

**Option PWA:**

| Vị trí | Số người | Thời gian | Rate/tháng | Thành tiền |
|--------|----------|-----------|------------|------------|
| FE | 1 | 1.5 tháng | 30.000.000 | 45.000.000 |
| QC | 1 | 0.5 tháng | 25.000.000 | 12.500.000 |
| **Tổng Option PWA** | | | | **57.500.000** |

---

## MODULE 2: BÁN HÀNG ĐA KÊNH (OMNICHANNEL)

### Mô tả
Đồng bộ bán hàng trên nhiều kênh: Shopee, Lazada, TikTok Shop + tích hợp Pancake để quản lý tập trung.

### Chức năng Core (Bắt buộc) — 10 chức năng

| # | Chức năng | Mô tả |
|---|-----------|-------|
| 1 | **Tích hợp Shopee** | Đồng bộ sản phẩm, đơn hàng, tồn kho 2 chiều |
| 2 | **Tích hợp Lazada** | Đồng bộ sản phẩm, đơn hàng, tồn kho 2 chiều |
| 3 | **Quản lý sản phẩm đa kênh** | 1 nơi quản lý, push lên nhiều sàn |
| 4 | **Đồng bộ tồn kho** | Tồn kho real-time across channels, tránh oversell |
| 5 | **Đồng bộ đơn hàng** | Kéo đơn từ tất cả sàn về 1 dashboard |
| 6 | **Đồng bộ giá** | Quản lý giá theo kênh, giá sàn vs giá website |
| 7 | **Mapping danh mục** | Map danh mục nội bộ → danh mục từng sàn |
| 8 | **Báo cáo đa kênh** | Doanh thu, đơn hàng, so sánh hiệu quả theo kênh |
| 9 | **Xử lý đơn tập trung** | Xác nhận, in vận đơn, tracking từ 1 nơi |
| 10 | **Quản lý trả hàng đa kênh** | Xử lý return/refund cho đơn từ mọi kênh |

### Chức năng Mở rộng (Option) — 5 chức năng

| # | Chức năng | Mô tả | Ghi chú |
|---|-----------|-------|---------|
| O1 | **Tích hợp Pancake** | Quản lý đơn hàng, chat, CRM đa kênh qua Pancake | Tool phổ biến VN |
| O2 | **Tích hợp TikTok Shop** | Đồng bộ sản phẩm, đơn từ TikTok Shop | Kênh đang tăng mạnh |
| O3 | **Tích hợp Sendo** | Đồng bộ với Sendo | Sàn VN |
| O4 | **Auto-pricing** | Tự điều chỉnh giá theo cạnh tranh trên sàn | AI pricing |
| O5 | **Livestream selling** | Quản lý đơn từ livestream Facebook/TikTok | Social commerce |

### Dự toán nhân sự — Module 2

| Vị trí | Số người | Thời gian | Rate/tháng | Thành tiền |
|--------|----------|-----------|------------|------------|
| PM | 1 | 2.5 tháng | 60.000.000 | 150.000.000 |
| BA | 1 | 1.5 tháng | 25.000.000 | 37.500.000 |
| BE | 2 | 3 tháng | 40.000.000 | 240.000.000 |
| FE | 1 | 2 tháng | 30.000.000 | 60.000.000 |
| QC | 1 | 2 tháng | 25.000.000 | 50.000.000 |
| **Tổng Core** | | | | **537.500.000** |

**Option Pancake:**

| Vị trí | Số người | Thời gian | Rate/tháng | Thành tiền |
|--------|----------|-----------|------------|------------|
| BE | 1 | 1.5 tháng | 40.000.000 | 60.000.000 |
| FE | 1 | 1 tháng | 30.000.000 | 30.000.000 |
| QC | 1 | 0.5 tháng | 25.000.000 | 12.500.000 |
| **Tổng Option Pancake** | | | | **102.500.000** |

**Option TikTok Shop:**

| Vị trí | Số người | Thời gian | Rate/tháng | Thành tiền |
|--------|----------|-----------|------------|------------|
| BE | 1 | 2 tháng | 40.000.000 | 80.000.000 |
| FE | 1 | 1 tháng | 30.000.000 | 30.000.000 |
| QC | 1 | 1 tháng | 25.000.000 | 25.000.000 |
| **Tổng Option TikTok Shop** | | | | **135.000.000** |

---

## MODULE 3: THANH TOÁN & COD

### Mô tả
Tích hợp các cổng thanh toán phổ biến tại Việt Nam + xử lý COD (67% giao dịch VN).

### Chức năng Core (Bắt buộc) — 10 chức năng

| # | Chức năng | Mô tả |
|---|-----------|-------|
| 1 | **VNPay Payment Gateway** | Thanh toán qua thẻ ATM/Visa/Master, QR Pay, ví VNPay |
| 2 | **MoMo Payment** | Thanh toán qua ví MoMo (31M+ users) |
| 3 | **COD — Thu hộ** | Khai báo COD khi tạo shipment, tracking thu hộ |
| 4 | **COD — Đối soát** | Đối soát tiền thu hộ từ shipping provider (hàng ngày/tuần) |
| 5 | **Chuyển khoản ngân hàng** | Xác nhận chuyển khoản thủ công/tự động |
| 6 | **VietQR** | Tạo mã QR thanh toán chuẩn VietQR, xác nhận tự động |
| 7 | **Quản lý giao dịch** | Lịch sử giao dịch, trạng thái, filter, export |
| 8 | **Refund/Hoàn tiền** | Hoàn tiền qua cùng kênh thanh toán, partial refund |
| 9 | **Payment webhook** | Nhận callback từ cổng thanh toán, cập nhật đơn real-time |
| 10 | **Báo cáo thanh toán** | Tổng hợp doanh thu theo phương thức, kỳ, so sánh |

### Chức năng Mở rộng (Option) — 5 chức năng

| # | Chức năng | Mô tả | Ghi chú |
|---|-----------|-------|---------|
| O1 | **ZaloPay** | Thanh toán qua ví ZaloPay | Hệ sinh thái Zalo |
| O2 | **BNPL (Mua trước trả sau)** | Tích hợp Fundiin/Kredivo | Thị trường BNPL tăng 36.5%/năm |
| O3 | **Trả góp qua thẻ** | Trả góp 0% qua thẻ tín dụng | Cho SP giá cao |
| O4 | **Ví điện tử nội bộ** | Ví tiền trên platform, nạp/rút, dùng mua hàng | Tăng retention |
| O5 | **Subscription/Recurring** | Thanh toán định kỳ cho SP đăng ký | TPCN, membership |

### Dự toán nhân sự — Module 3

| Vị trí | Số người | Thời gian | Rate/tháng | Thành tiền |
|--------|----------|-----------|------------|------------|
| PM | 1 | 2 tháng | 60.000.000 | 120.000.000 |
| BA | 1 | 1 tháng | 25.000.000 | 25.000.000 |
| BE | 2 | 3 tháng | 40.000.000 | 240.000.000 |
| FE | 1 | 1.5 tháng | 30.000.000 | 45.000.000 |
| QC | 1 | 2 tháng | 25.000.000 | 50.000.000 |
| **Tổng Core** | | | | **480.000.000** |

**Option ZaloPay:**

| Vị trí | Số người | Thời gian | Rate/tháng | Thành tiền |
|--------|----------|-----------|------------|------------|
| BE | 1 | 1.5 tháng | 40.000.000 | 60.000.000 |
| QC | 1 | 0.5 tháng | 25.000.000 | 12.500.000 |
| **Tổng Option ZaloPay** | | | | **72.500.000** |

**Option BNPL:**

| Vị trí | Số người | Thời gian | Rate/tháng | Thành tiền |
|--------|----------|-----------|------------|------------|
| BE | 1 | 2 tháng | 40.000.000 | 80.000.000 |
| FE | 1 | 1 tháng | 30.000.000 | 30.000.000 |
| QC | 1 | 0.5 tháng | 25.000.000 | 12.500.000 |
| **Tổng Option BNPL** | | | | **122.500.000** |

---

## MODULE 4: VẬN CHUYỂN & FULFILLMENT

### Mô tả
Tích hợp các hãng vận chuyển lớn nhất VN, tự động hóa quy trình giao hàng, tracking real-time.

### Chức năng Core (Bắt buộc) — 10 chức năng

| # | Chức năng | Mô tả |
|---|-----------|-------|
| 1 | **Tích hợp GHN** | Tạo vận đơn, tracking, webhook, tính phí ship |
| 2 | **Tích hợp GHTK** | Tạo vận đơn, tracking, webhook, tính phí ship |
| 3 | **Tích hợp Viettel Post** | Tạo vận đơn, tracking, webhook, tính phí ship |
| 4 | **Tạo vận đơn 1 click** | Chọn hãng → tạo vận đơn tự động từ đơn hàng |
| 5 | **So sánh phí ship** | Auto so sánh phí giữa các hãng, gợi ý tối ưu |
| 6 | **Tracking real-time** | Cập nhật trạng thái giao hàng trên 1 dashboard |
| 7 | **In phiếu giao hàng** | In label/phiếu giao hàng theo format từng hãng |
| 8 | **Webhook trạng thái** | Nhận callback từ hãng VC, cập nhật đơn hàng real-time |
| 9 | **Xử lý hoàn hàng** | Flow trả hàng: tiếp nhận → kiểm tra → refund |
| 10 | **Hệ thống địa chỉ VN** | Tỉnh → Quận/Huyện → Phường/Xã chuẩn, autocomplete |

### Chức năng Mở rộng (Option) — 5 chức năng

| # | Chức năng | Mô tả | Ghi chú |
|---|-----------|-------|---------|
| O1 | **Tích hợp J&T Express** | Hãng VC phổ biến cho COD | Thêm lựa chọn |
| O2 | **Tích hợp Ninja Van** | Hãng VC Đông Nam Á | Mở rộng khu vực |
| O3 | **Multi-warehouse** | Quản lý nhiều kho, chọn kho gần nhất giao | Doanh nghiệp lớn |
| O4 | **Giao hàng nhanh (same-day)** | Tích hợp Ahamove/Grab Express cho nội thành | HCM, HN |
| O5 | **Phí ship theo vùng** | Cấu hình phí ship khác nhau theo khu vực | Tối ưu chi phí |

### Dự toán nhân sự — Module 4

| Vị trí | Số người | Thời gian | Rate/tháng | Thành tiền |
|--------|----------|-----------|------------|------------|
| PM | 1 | 2 tháng | 60.000.000 | 120.000.000 |
| BA | 1 | 1 tháng | 25.000.000 | 25.000.000 |
| BE | 2 | 2.5 tháng | 40.000.000 | 200.000.000 |
| FE | 1 | 1.5 tháng | 30.000.000 | 45.000.000 |
| QC | 1 | 1.5 tháng | 25.000.000 | 37.500.000 |
| **Tổng Core** | | | | **427.500.000** |

**Option J&T + Ninja Van:**

| Vị trí | Số người | Thời gian | Rate/tháng | Thành tiền |
|--------|----------|-----------|------------|------------|
| BE | 1 | 2 tháng | 40.000.000 | 80.000.000 |
| QC | 1 | 1 tháng | 25.000.000 | 25.000.000 |
| **Tổng Option thêm hãng VC** | | | | **105.000.000** |

---

## MODULE 5: QUẢN LÝ ĐƠN HÀNG & VẬN HÀNH (OMS)

### Mô tả
Hệ thống quản lý đơn hàng tập trung (OMS), tồn kho, đối soát 4 loại, tích hợp kế toán MISA.

### Chức năng Core (Bắt buộc) — 12 chức năng

| # | Chức năng | Mô tả |
|---|-----------|-------|
| 1 | **Dashboard đơn hàng** | Tất cả đơn từ mọi kênh trên 1 màn hình, filter/search |
| 2 | **Xử lý đơn hàng** | Xác nhận, hủy, sửa, split đơn, gộp đơn |
| 3 | **Trạng thái đơn real-time** | Mới → Xác nhận → Đang giao → Hoàn thành → Hoàn trả |
| 4 | **Quản lý tồn kho** | Số lượng real-time, cảnh báo hết hàng, nhập/xuất kho |
| 5 | **Đối soát đơn hàng** | Khớp đơn → vận chuyển → thanh toán tự động |
| 6 | **Đối soát hoa hồng affiliate** | Đơn từ affiliate → hoa hồng → chi trả |
| 7 | **Đối soát hoa hồng reseller** | Doanh số reseller → tier → hoa hồng → chi trả |
| 8 | **Đối soát thưởng đại sứ** | Content → views/engagement → thưởng |
| 9 | **Xuất báo cáo** | Export Excel/PDF: đơn hàng, doanh thu, đối soát |
| 10 | **Phân quyền admin** | Root/Admin/Collaborator, phân quyền theo role |
| 11 | **Xử lý đổi trả** | Flow return: tiếp nhận → kiểm tra → hoàn tiền/đổi SP |
| 12 | **Nhật ký hoạt động** | Audit log: ai làm gì, khi nào, trên đơn nào |

### Chức năng Mở rộng (Option) — 6 chức năng

| # | Chức năng | Mô tả | Ghi chú |
|---|-----------|-------|---------|
| O1 | **Tích hợp MISA kế toán** | Đồng bộ đơn hàng, doanh thu, công nợ sang MISA | Kế toán VN phổ biến nhất |
| O2 | **Hóa đơn điện tử (E-Invoice)** | Auto-generate HDDT, submit GDT, tích hợp FPT.eInvoice/MISA | Bắt buộc theo luật |
| O3 | **Quản lý nhà cung cấp** | Đặt hàng NCC, theo dõi nhập kho, công nợ NCC | Cho dropship/multi-supplier |
| O4 | **Barcode/QR quản lý kho** | Scan barcode nhập/xuất kho, kiểm kê | Kho lớn |
| O5 | **Phiếu xuất/nhập kho** | Quản lý phiếu xuất nhập, in phiếu | Nghiệp vụ kho |
| O6 | **Auto-fulfillment rules** | Quy tắc tự động xử lý đơn (auto-confirm, auto-ship) | Scale lớn |

### Dự toán nhân sự — Module 5

| Vị trí | Số người | Thời gian | Rate/tháng | Thành tiền |
|--------|----------|-----------|------------|------------|
| PM | 1 | 3 tháng | 60.000.000 | 180.000.000 |
| BA | 1 | 2 tháng | 25.000.000 | 50.000.000 |
| BE | 2 | 3.5 tháng | 40.000.000 | 280.000.000 |
| FE | 2 | 3 tháng | 30.000.000 | 180.000.000 |
| QC | 1 | 2.5 tháng | 25.000.000 | 62.500.000 |
| **Tổng Core** | | | | **752.500.000** |

**Option MISA:**

| Vị trí | Số người | Thời gian | Rate/tháng | Thành tiền |
|--------|----------|-----------|------------|------------|
| BA | 1 | 1 tháng | 25.000.000 | 25.000.000 |
| BE | 1 | 2 tháng | 40.000.000 | 80.000.000 |
| QC | 1 | 1 tháng | 25.000.000 | 25.000.000 |
| **Tổng Option MISA** | | | | **130.000.000** |

**Option E-Invoice (Hóa đơn điện tử):**

| Vị trí | Số người | Thời gian | Rate/tháng | Thành tiền |
|--------|----------|-----------|------------|------------|
| BA | 1 | 1 tháng | 25.000.000 | 25.000.000 |
| BE | 1 | 2.5 tháng | 40.000.000 | 100.000.000 |
| FE | 1 | 1 tháng | 30.000.000 | 30.000.000 |
| QC | 1 | 1 tháng | 25.000.000 | 25.000.000 |
| **Tổng Option E-Invoice** | | | | **180.000.000** |

---

## MODULE 6: AFFILIATE MARKETING

### Mô tả
Hệ thống tiếp thị liên kết — biến KOL/KOC/người dùng thành kênh bán hàng, chỉ trả tiền khi có đơn.

### Chức năng Core (Bắt buộc) — 12 chức năng

| # | Chức năng | Mô tả |
|---|-----------|-------|
| 1 | **Quản lý campaign** | Tạo chiến dịch, chọn SP, thời gian, điều kiện |
| 2 | **Link tracking** | Tạo link riêng cho từng affiliate, tracking click/đơn |
| 3 | **Hoa hồng theo sản phẩm** | Cấu hình % hoặc số tiền cố định theo từng SP |
| 4 | **Hoa hồng theo tier** | Bronze → Silver → Gold, bán nhiều = % cao hơn |
| 5 | **Hoa hồng theo campaign** | Rate đặc biệt cho campaign mùa vụ |
| 6 | **Dashboard affiliate** | Affiliate tự xem: click, đơn, thu nhập, lịch sử |
| 7 | **Duyệt affiliate** | Approve/reject đơn đăng ký, whitelist/blacklist |
| 8 | **Mã giảm giá riêng** | Mỗi affiliate có mã giảm riêng cho followers |
| 9 | **Promotion tools** | Banner, landing page, content sẵn cho affiliate dùng |
| 10 | **Chống gian lận** | Phát hiện click ảo, đơn ảo, IP tracking, device fingerprint |
| 11 | **Đối soát & chi trả** | Đối soát tự động, lịch chi trả tuần/tháng |
| 12 | **Báo cáo hiệu quả** | Top affiliate, conversion rate, ROI theo campaign |

### Chức năng Mở rộng (Option) — 4 chức năng

| # | Chức năng | Mô tả | Ghi chú |
|---|-----------|-------|---------|
| O1 | **Multi-level commission** | Hoa hồng đa tầng (affiliate giới thiệu affiliate) | Mở rộng network |
| O2 | **Auto-approve rules** | Tự động duyệt affiliate theo điều kiện | Scale lớn |
| O3 | **API cho affiliate network** | Mở API cho bên thứ 3 tích hợp | B2B |
| O4 | **Affiliate marketplace** | Sàn kết nối brand — affiliate | Phase sau |

### Dự toán nhân sự — Module 6

| Vị trí | Số người | Thời gian | Rate/tháng | Thành tiền |
|--------|----------|-----------|------------|------------|
| PM | 1 | 2.5 tháng | 60.000.000 | 150.000.000 |
| BA | 1 | 1.5 tháng | 25.000.000 | 37.500.000 |
| BE | 2 | 3 tháng | 40.000.000 | 240.000.000 |
| FE | 1 | 2.5 tháng | 30.000.000 | 75.000.000 |
| QC | 1 | 2 tháng | 25.000.000 | 50.000.000 |
| **Tổng Core** | | | | **552.500.000** |

---

## MODULE 7: RESELLER NETWORK

### Mô tả
Xây dựng đội ngũ bán hàng không giới hạn — mỗi reseller có storefront riêng, hoa hồng đa cấp, gamification.

### Chức năng Core (Bắt buộc) — 12 chức năng

| # | Chức năng | Mô tả |
|---|-----------|-------|
| 1 | **Reseller storefront** | Shop riêng cho mỗi reseller, URL riêng, branding gốc |
| 2 | **Đăng ký reseller** | Form đăng ký, duyệt thủ công/tự động |
| 3 | **Quản lý đội ngũ** | Danh sách reseller, trạng thái, hiệu quả |
| 4 | **Hoa hồng theo doanh số** | Bán nhiều = % cao hơn, tier system |
| 5 | **Tier system** | Bronze → Silver → Gold → Platinum, auto-upgrade |
| 6 | **Mã giới thiệu (referral)** | Reseller giới thiệu reseller mới → thưởng |
| 7 | **Dashboard reseller** | Reseller tự xem: đơn, doanh thu, hoa hồng, tier |
| 8 | **Gamification — Bảng xếp hạng** | Top reseller tuần/tháng/quý |
| 9 | **Gamification — Nhiệm vụ** | Hoàn thành task → nhận thưởng |
| 10 | **Gamification — Đổi quà** | Tích điểm → đổi voucher/SP/tiền mặt |
| 11 | **Đối soát & chi trả** | Tính hoa hồng tự động, lịch chi trả |
| 12 | **Báo cáo network** | Tổng reseller, doanh thu, tăng trưởng, churn |

### Chức năng Mở rộng (Option) — 4 chức năng

| # | Chức năng | Mô tả | Ghi chú |
|---|-----------|-------|---------|
| O1 | **Group/Team reseller** | Nhóm reseller, leader quản lý team | Đội bán hàng |
| O2 | **Training center** | Tài liệu training, video hướng dẫn cho reseller | Onboarding |
| O3 | **Reseller app (mini)** | App riêng cho reseller quản lý trên mobile | UX tốt hơn |
| O4 | **Territory management** | Phân vùng bán hàng theo địa lý | Tránh xung đột |

### Dự toán nhân sự — Module 7

| Vị trí | Số người | Thời gian | Rate/tháng | Thành tiền |
|--------|----------|-----------|------------|------------|
| PM | 1 | 2.5 tháng | 60.000.000 | 150.000.000 |
| BA | 1 | 1.5 tháng | 25.000.000 | 37.500.000 |
| Design | 1 | 1.5 tháng | 25.000.000 | 37.500.000 |
| BE | 2 | 3 tháng | 40.000.000 | 240.000.000 |
| FE | 2 | 3 tháng | 30.000.000 | 180.000.000 |
| QC | 1 | 2 tháng | 25.000.000 | 50.000.000 |
| **Tổng Core** | | | | **695.000.000** |

---

## MODULE 8: ĐẠI SỨ THƯƠNG HIỆU (AMBASSADOR)

### Mô tả
Quản lý KOL/KOC tạo content marketing — duyệt nội dung, đo lường hiệu quả trên 7 nền tảng, chống gian lận.

### Chức năng Core (Bắt buộc) — 14 chức năng

| # | Chức năng | Mô tả |
|---|-----------|-------|
| 1 | **Tạo campaign** | Brief chi tiết: SP, tone, message, hashtag, deadline |
| 2 | **Điều kiện tham gia** | Followers tối thiểu, ngành hàng, kênh |
| 3 | **Tuyển đại sứ** | Mở đăng ký / invite, duyệt theo điều kiện |
| 4 | **Tích hợp TikTok** | Crawl/API: views, likes, comments, shares |
| 5 | **Tích hợp YouTube** | API: views, likes, comments, watch time |
| 6 | **Tích hợp Facebook** | Crawl: reactions, comments, shares |
| 7 | **Tích hợp Instagram** | API/Crawl: likes, comments, reach |
| 8 | **Duyệt nội dung** | Submit link → review → approve/reject, batch duyệt |
| 9 | **Analytics chi tiết** | Views, engagement rate, so sánh giữa đại sứ |
| 10 | **Chống gian lận** | Phát hiện fake views/followers, flagging |
| 11 | **Thưởng theo thống kê** | Dựa trên views, likes, engagement |
| 12 | **Thưởng theo milestone** | Đạt mốc views → bonus |
| 13 | **Đối soát & chi trả** | Tính thưởng tự động, filter fake, chi trả |
| 14 | **Báo cáo campaign** | ROI, top đại sứ, so sánh nền tảng, export |

### Chức năng Mở rộng (Option) — 5 chức năng

| # | Chức năng | Mô tả | Ghi chú |
|---|-----------|-------|---------|
| O1 | **Tích hợp Threads** | Crawl content Threads | Nền tảng mới |
| O2 | **Tích hợp Shopee Reviews** | Crawl review + video trên Shopee | Social proof |
| O3 | **Tích hợp Google Reviews** | Google Maps review, SEO content | Local SEO |
| O4 | **Content library** | Kho content từ đại sứ, brand tái sử dụng | UGC |
| O5 | **Influencer scoring** | Chấm điểm influencer dựa trên data lịch sử | AI matching |

### Dự toán nhân sự — Module 8

| Vị trí | Số người | Thời gian | Rate/tháng | Thành tiền |
|--------|----------|-----------|------------|------------|
| PM | 1 | 3 tháng | 60.000.000 | 180.000.000 |
| BA | 1 | 1.5 tháng | 25.000.000 | 37.500.000 |
| BE | 2 | 3.5 tháng | 40.000.000 | 280.000.000 |
| FE | 1 | 2.5 tháng | 30.000.000 | 75.000.000 |
| QC | 1 | 2 tháng | 25.000.000 | 50.000.000 |
| **Tổng Core** | | | | **622.500.000** |

---

## MODULE 9: CRM, LOYALTY & CHĂM SÓC KHÁCH HÀNG

### Mô tả
Quản lý quan hệ khách hàng, tích điểm loyalty, chăm sóc qua Zalo OA, SMS — tăng tỷ lệ tái mua.

### Chức năng Core (Bắt buộc) — 10 chức năng

| # | Chức năng | Mô tả |
|---|-----------|-------|
| 1 | **Database khách hàng** | Thông tin, lịch sử mua, giá trị đơn TB, nguồn |
| 2 | **Phân nhóm khách** | Mới/Quay lại/VIP, RFM segmentation |
| 3 | **Lịch sử tương tác** | Mua hàng, support, voucher đã dùng |
| 4 | **Loyalty — Tích điểm** | Mua hàng tích điểm, quy đổi theo giá trị |
| 5 | **Loyalty — Đổi thưởng** | Đổi điểm → voucher/SP/giảm giá |
| 6 | **Loyalty — Hạng thành viên** | Member → Silver → Gold → Platinum, quyền lợi theo hạng |
| 7 | **Email marketing** | Gửi email chăm sóc, abandoned cart, KM theo segment |
| 8 | **SMS notification** | Xác nhận đơn, cập nhật giao hàng, KM qua SMS |
| 9 | **Voucher cá nhân hóa** | Voucher sinh nhật, voucher tái mua, voucher VIP |
| 10 | **Báo cáo CRM** | Customer lifetime value, churn rate, segment analysis |

### Chức năng Mở rộng (Option) — 6 chức năng

| # | Chức năng | Mô tả | Ghi chú |
|---|-----------|-------|---------|
| O1 | **Tích hợp Zalo OA** | Gửi thông báo, chăm sóc qua Zalo Official Account | 70M+ users Zalo |
| O2 | **Zalo OA — Chatbot** | Chatbot tự động trả lời trên Zalo | Giảm tải CS |
| O3 | **Zalo OA — Broadcast** | Gửi tin nhắn hàng loạt theo segment | Marketing |
| O4 | **Referral program** | Giới thiệu bạn → cả 2 nhận thưởng | Viral growth |
| O5 | **NPS/CSAT survey** | Khảo sát mức độ hài lòng sau mua | Feedback loop |
| O6 | **Abandoned cart recovery** | Tự động nhắc khách quên giỏ hàng qua email/SMS/Zalo | Tăng conversion |

### Dự toán nhân sự — Module 9

| Vị trí | Số người | Thời gian | Rate/tháng | Thành tiền |
|--------|----------|-----------|------------|------------|
| PM | 1 | 2.5 tháng | 60.000.000 | 150.000.000 |
| BA | 1 | 1.5 tháng | 25.000.000 | 37.500.000 |
| Design | 1 | 1 tháng | 25.000.000 | 25.000.000 |
| BE | 2 | 3 tháng | 40.000.000 | 240.000.000 |
| FE | 1 | 2.5 tháng | 30.000.000 | 75.000.000 |
| QC | 1 | 2 tháng | 25.000.000 | 50.000.000 |
| **Tổng Core** | | | | **577.500.000** |

**Option Zalo OA (Full — OA + Chatbot + Broadcast):**

| Vị trí | Số người | Thời gian | Rate/tháng | Thành tiền |
|--------|----------|-----------|------------|------------|
| BA | 1 | 1 tháng | 25.000.000 | 25.000.000 |
| BE | 1 | 2.5 tháng | 40.000.000 | 100.000.000 |
| FE | 1 | 1.5 tháng | 30.000.000 | 45.000.000 |
| QC | 1 | 1 tháng | 25.000.000 | 25.000.000 |
| **Tổng Option Zalo OA** | | | | **195.000.000** |

---

## MODULE 10: ADMIN, ANALYTICS & INFRASTRUCTURE

### Mô tả
Admin dashboard tổng thể, BI analytics, hạ tầng kỹ thuật, bảo mật, CI/CD — nền tảng vận hành toàn hệ thống.

### Chức năng Core (Bắt buộc) — 14 chức năng

| # | Chức năng | Mô tả |
|---|-----------|-------|
| 1 | **Admin dashboard** | Tổng quan: doanh thu, đơn, khách, kênh bán |
| 2 | **Doanh thu real-time** | Doanh thu theo ngày/tuần/tháng/năm, so sánh kỳ |
| 3 | **Báo cáo theo kênh** | Website vs Sàn vs Affiliate vs Reseller |
| 4 | **Top products** | Sản phẩm bán chạy, tồn kho chậm, margin analysis |
| 5 | **Hệ thống phân quyền** | RBAC: Root/Admin/Manager/Staff, phân quyền chi tiết |
| 6 | **Audit log** | Lịch sử thao tác, ai làm gì khi nào |
| 7 | **Server infrastructure** | Cloud hosting (AWS/GCP), auto-scaling, load balancer |
| 8 | **CI/CD pipeline** | Build → Test → Deploy tự động |
| 9 | **Monitoring & alerting** | Server health, error tracking, uptime monitoring |
| 10 | **Database management** | PostgreSQL, backup daily, migration, replication |
| 11 | **CDN & caching** | Tối ưu tốc độ tải, Redis cache, image CDN |
| 12 | **SSL & bảo mật** | HTTPS, data encryption, OWASP compliance |
| 13 | **API gateway** | Rate limiting, authentication, API versioning |
| 14 | **Backup & disaster recovery** | Backup tự động, restore plan, failover |

### Chức năng Mở rộng (Option) — 4 chức năng

| # | Chức năng | Mô tả | Ghi chú |
|---|-----------|-------|---------|
| O1 | **BI nâng cao (Metabase/Superset)** | Dashboard BI tùy chỉnh, drill-down, data warehouse | Cho leadership |
| O2 | **Multi-tenant** | Kiến trúc multi-tenant cho SaaS model | Scale B2B |
| O3 | **Staging environment** | Môi trường staging riêng để test trước deploy | Best practice |
| O4 | **Pentest & security audit** | Kiểm tra bảo mật chuyên nghiệp | Compliance |

### Dự toán nhân sự — Module 10

| Vị trí | Số người | Thời gian | Rate/tháng | Thành tiền |
|--------|----------|-----------|------------|------------|
| PM | 1 | 2 tháng | 60.000.000 | 120.000.000 |
| DevOps | 1 | 12 tháng | 40.000.000 | 480.000.000 |
| BE | 1 | 3 tháng | 40.000.000 | 120.000.000 |
| FE | 1 | 2 tháng | 30.000.000 | 60.000.000 |
| QC | 1 | 1.5 tháng | 25.000.000 | 37.500.000 |
| **Tổng Core** | | | | **817.500.000** |

> **Lưu ý:** DevOps 12 tháng vì cần maintain infrastructure xuyên suốt dự án.

---

## TỔNG HỢP DỰ TOÁN TÀI CHÍNH

### Bảng tổng hợp 10 Module — Chi phí Core

| # | Module | Chi phí Core (VNĐ) | Thời gian |
|---|--------|---------------------|-----------|
| M1 | Website TMĐT & Storefront | 737.500.000 | 3 tháng |
| M2 | Bán hàng Đa kênh (Omnichannel) | 537.500.000 | 3 tháng |
| M3 | Thanh toán & COD | 480.000.000 | 3 tháng |
| M4 | Vận chuyển & Fulfillment | 427.500.000 | 2.5 tháng |
| M5 | Quản lý Đơn hàng & Vận hành (OMS) | 752.500.000 | 3.5 tháng |
| M6 | Affiliate Marketing | 552.500.000 | 3 tháng |
| M7 | Reseller Network | 695.000.000 | 3 tháng |
| M8 | Đại sứ Thương hiệu | 622.500.000 | 3.5 tháng |
| M9 | CRM, Loyalty & Chăm sóc KH | 577.500.000 | 3 tháng |
| M10 | Admin, Analytics & Infrastructure | 817.500.000 | 12 tháng |
| | **TỔNG CORE** | **6.200.000.000** | |

### Bảng tổng hợp Options

| # | Option | Thuộc Module | Chi phí (VNĐ) | Ưu tiên |
|---|--------|-------------|---------------|---------|
| O1 | Zalo Mini App | M1 | 165.000.000 | MEDIUM |
| O2 | PWA | M1 | 57.500.000 | LOW |
| O3 | Tích hợp Pancake | M2 | 102.500.000 | HIGH |
| O4 | Tích hợp TikTok Shop | M2 | 135.000.000 | HIGH |
| O5 | ZaloPay | M3 | 72.500.000 | MEDIUM |
| O6 | BNPL (Mua trước trả sau) | M3 | 122.500.000 | LOW |
| O7 | J&T + Ninja Van | M4 | 105.000.000 | MEDIUM |
| O8 | Tích hợp MISA kế toán | M5 | 130.000.000 | HIGH |
| O9 | Hóa đơn điện tử (E-Invoice) | M5 | 180.000.000 | HIGH |
| O10 | Zalo OA (OA + Chatbot + Broadcast) | M9 | 195.000.000 | HIGH |
| | **TỔNG OPTIONS** | | **1.265.000.000** | |

### Tổng chi phí theo kịch bản

```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│  Kịch bản 1: CORE ONLY                                  │
│  ════════════════════════                                │
│  Tổng: 6.200.000.000 VNĐ (~6.2 tỷ)                     │
│  → 10 module core, đủ dùng production                   │
│                                                          │
│  Kịch bản 2: CORE + OPTIONS ƯU TIÊN CAO                 │
│  ════════════════════════════════════════                 │
│  Core:     6.200.000.000                                 │
│  Pancake:    102.500.000                                 │
│  TikTok:     135.000.000                                 │
│  MISA:       130.000.000                                 │
│  E-Invoice:  180.000.000                                 │
│  Zalo OA:    195.000.000                                 │
│  ─────────────────────                                   │
│  Tổng: 6.942.500.000 VNĐ (~6.9 tỷ)                     │
│                                                          │
│  Kịch bản 3: FULL (CORE + TẤT CẢ OPTIONS)               │
│  ══════════════════════════════════════════               │
│  Core:     6.200.000.000                                 │
│  Options:  1.265.000.000                                 │
│  ─────────────────────                                   │
│  Tổng: 7.465.000.000 VNĐ (~7.5 tỷ)                     │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

---

## ROADMAP 12-18 THÁNG

### Phase 1: NỀN TẢNG (Tháng 1-3)
> **Mục tiêu:** Launch được website bán hàng cơ bản, nhận đơn, thanh toán, giao hàng

```
Tháng 1-3 (Song song)
├── M1.  Website TMĐT & Storefront ───────── [████████████]
├── M3.  Thanh toán & COD ────────────────── [████████████]
├── M4.  Vận chuyển & Fulfillment ────────── [████████░░░░]
├── M10. Infrastructure (bắt đầu) ────────── [████░░░░░░░░]
│
└── Milestone: Website bán hàng LIVE
    ├── Khách truy cập → mua hàng → thanh toán → giao hàng
    ├── VNPay + MoMo + COD hoạt động
    └── GHN + GHTK + Viettel Post hoạt động
```

**Chi phí Phase 1:** ~1.645.000.000 + DevOps 3 tháng (120tr) = **~1.765.000.000**

### Phase 2: VẬN HÀNH (Tháng 4-6)
> **Mục tiêu:** Backend vận hành mạnh mẽ, đa kênh, quản lý đơn tập trung

```
Tháng 4-6 (Song song)
├── M5.  Quản lý Đơn hàng & Vận hành ────── [██████████████]
├── M2.  Bán hàng Đa kênh (Omnichannel) ─── [████████████]
├── M10. Infrastructure (tiếp tục) ────────── [████████░░░░]
│
├── Option: Tích hợp Pancake ──────────────── [██████░░░░░░]
├── Option: Tích hợp MISA ────────────────── [████████░░░░]
│
└── Milestone: Omnichannel hoạt động
    ├── Shopee + Lazada đồng bộ
    ├── 1 dashboard quản lý tất cả đơn
    └── Đối soát tự động 4 loại
```

**Chi phí Phase 2:** ~1.290.000.000 + DevOps 3 tháng (120tr) + Options (~232.5tr) = **~1.642.500.000**

### Phase 3: TĂNG TRƯỞNG (Tháng 7-9)
> **Mục tiêu:** Kênh bán hàng mở rộng — Affiliate + Reseller

```
Tháng 7-9 (Song song)
├── M6.  Affiliate Marketing ─────────────── [████████████]
├── M7.  Reseller Network ────────────────── [████████████]
├── M10. Infrastructure (tiếp tục) ────────── [████████░░░░]
│
├── Option: TikTok Shop ──────────────────── [████████░░░░]
│
└── Milestone: Kênh phân phối online
    ├── Affiliate network hoạt động
    ├── Reseller storefront live
    └── Gamification, hoa hồng tự động
```

**Chi phí Phase 3:** ~1.247.500.000 + DevOps 3 tháng (120tr) + Options (~135tr) = **~1.502.500.000**

### Phase 4: BRAND & CRM (Tháng 10-12)
> **Mục tiêu:** Đại sứ thương hiệu, CRM, loyalty — tăng retention & brand awareness

```
Tháng 10-12 (Song song)
├── M8.  Đại sứ Thương hiệu ─────────────── [██████████████]
├── M9.  CRM, Loyalty & Chăm sóc KH ─────── [████████████]
├── M10. Infrastructure (hoàn thiện) ──────── [████████████]
│
├── Option: Zalo OA ──────────────────────── [██████████░░]
├── Option: E-Invoice ────────────────────── [██████████░░]
│
└── Milestone: Full Commerce Platform
    ├── Ambassador campaign hoạt động
    ├── Loyalty/tích điểm live
    ├── Zalo OA chăm sóc khách
    └── Hóa đơn điện tử tự động
```

**Chi phí Phase 4:** ~1.200.000.000 + DevOps 3 tháng (120tr) + Options (~375tr) = **~1.695.000.000**

### Phase 5: MỞ RỘNG (Tháng 13-18) — Optional
> **Mục tiêu:** Các option còn lại + tối ưu + scale

```
Tháng 13-18 (Theo nhu cầu)
├── Zalo Mini App ────────────────────────── [████████░░░░]
├── ZaloPay ──────────────────────────────── [██████░░░░░░]
├── BNPL ─────────────────────────────────── [████████░░░░]
├── J&T + Ninja Van ──────────────────────── [████████░░░░]
├── Performance optimization ─────────────── [████████████]
├── Security audit ───────────────────────── [████░░░░░░░░]
│
└── Milestone: Enterprise-ready
    ├── Zalo ecosystem đầy đủ
    ├── Thêm payment/shipping options
    └── Production-hardened, scalable
```

**Chi phí Phase 5:** ~522.500.000 (các options còn lại)

---

## TỔNG CHI PHÍ THEO PHASE

| Phase | Thời gian | Chi phí (VNĐ) | Ghi chú |
|-------|-----------|---------------|---------|
| **Phase 1** Nền tảng | Tháng 1-3 | ~1.765.000.000 | Website + Payment + Shipping + Infra |
| **Phase 2** Vận hành | Tháng 4-6 | ~1.642.500.000 | OMS + Omnichannel + Pancake + MISA |
| **Phase 3** Tăng trưởng | Tháng 7-9 | ~1.502.500.000 | Affiliate + Reseller + TikTok Shop |
| **Phase 4** Brand & CRM | Tháng 10-12 | ~1.695.000.000 | Ambassador + CRM + Zalo OA + E-Invoice |
| **Phase 5** Mở rộng | Tháng 13-18 | ~522.500.000 | Options còn lại |
| **TỔNG** | **12-18 tháng** | **~7.127.500.000** | |

---

## NHÂN SỰ TỐI THIỂU CẦN CÓ (TEAM CORE)

> Nhân sự cần duy trì xuyên suốt dự án (12 tháng):

| Vị trí | Số người | Rate/tháng | 12 tháng |
|--------|----------|------------|----------|
| PM | 1 | 60.000.000 | 720.000.000 |
| BA | 1 | 25.000.000 | 300.000.000 |
| Design | 1 | 25.000.000 | 300.000.000 |
| BE (Senior) | 2 | 40.000.000 | 960.000.000 |
| FE (Senior) | 2 | 30.000.000 | 720.000.000 |
| DevOps | 1 | 40.000.000 | 480.000.000 |
| QC | 1 | 25.000.000 | 300.000.000 |
| **TỔNG** | **9 người** | **285.000.000/tháng** | **3.780.000.000/năm** |

> **So sánh:**
> - Dự toán theo module: **~6.2 tỷ** (core) → tính theo effort thực tế từng module
> - Team cố định 12 tháng: **~3.78 tỷ** → chi phí nhân sự tối thiểu
> - **Delta ~2.4 tỷ** = chi phí thuê thêm nhân sự khi module cần nhiều người (scale up/down)

### Mô hình nhân sự đề xuất

```
┌─────────────────────────────────────────────────────────────┐
│  MÔ HÌNH: CORE TEAM + FLEX RESOURCES                       │
│                                                              │
│  Core Team (full-time, 12 tháng):                           │
│  ├── 1 PM (lead toàn dự án)                                 │
│  ├── 2 BE Senior (xương sống backend)                       │
│  ├── 1 FE Senior (lead frontend)                            │
│  ├── 1 DevOps (infrastructure)                              │
│  └── 1 QC (quality xuyên suốt)                              │
│  → 6 người × 12 tháng = 2.820.000.000                      │
│                                                              │
│  Flex Resources (part-time, theo phase):                     │
│  ├── 1 BA (8-10 tháng, cao tải phase 1-2)                   │
│  ├── 1 Design (6-8 tháng, phase 1 + 4)                      │
│  ├── 1-2 FE Junior (theo nhu cầu)                           │
│  └── 1 BE Junior (phase cao tải)                             │
│  → ~960.000.000 - 1.400.000.000                              │
│                                                              │
│  TỔNG MÔ HÌNH: ~3.78 tỷ - 4.22 tỷ                          │
│  (Tiết kiệm 30-40% so với dự toán module-by-module)         │
└─────────────────────────────────────────────────────────────┘
```

---

## KEY INSIGHTS

### Insight 1: Phase 1 quyết định thành bại
**Mô tả:** Website + Thanh toán + Vận chuyển phải hoàn thành trước, vì đây là flow cơ bản nhất để bán hàng. Không có nền tảng này, các module sau vô nghĩa.
**Impact:** CRITICAL
**Why it matters:** Nếu Phase 1 trễ → toàn bộ roadmap bị đẩy lùi. Đây cũng là phase dễ demo cho sếp thấy kết quả sớm nhất.

### Insight 2: COD + E-Invoice — 2 yêu cầu "không thể bỏ qua" của thị trường VN
**Mô tả:** 67% giao dịch VN là COD, hóa đơn điện tử bắt buộc theo luật. Thiếu 2 thứ này = không thể vận hành thương mại điện tử ở VN.
**Impact:** CRITICAL
**Why it matters:** E-Invoice đang là option nhưng nên cân nhắc đưa vào core nếu doanh nghiệp xuất hóa đơn.

### Insight 3: Zalo ecosystem là "weapon" cho thị trường VN
**Mô tả:** Zalo Mini App + Zalo OA + ZaloPay = bộ 3 tiếp cận 70M+ users VN. Không competitor quốc tế nào có lợi thế này.
**Impact:** HIGH
**Why it matters:** Nếu budget cho phép, Zalo OA nên là option ưu tiên đầu tiên — chi phí thấp (195tr) nhưng impact rất cao cho chăm sóc khách hàng.

### Insight 4: Mô hình Core Team + Flex tiết kiệm 30-40%
**Mô tả:** Thay vì thuê đủ người cho mỗi module, dùng core team 6-7 người full-time + flex 2-3 người part-time sẽ tiết kiệm đáng kể.
**Impact:** HIGH
**Why it matters:** Trình sếp 2 phương án: (A) module-by-module ~6.2 tỷ, (B) core team ~3.8-4.2 tỷ. Sếp sẽ thấy rõ trade-off giữa tốc độ và chi phí.

### Insight 5: Omnichannel + Pancake là "quick win" cho doanh thu
**Mô tả:** Tích hợp Shopee/Lazada/Pancake giúp tận dụng traffic sẵn có trên sàn, không cần chờ build xong hết mới có doanh thu.
**Impact:** HIGH
**Why it matters:** Các sàn đã có sẵn khách hàng. Đồng bộ đa kênh giúp doanh nghiệp không bỏ lỡ doanh thu trong khi build platform riêng.

### Insight 6: Rủi ro lớn nhất — Scope creep
**Mô tả:** 10 module + 10 options = scope rất lớn. Nếu không kiểm soát, dự án có thể kéo dài 18-24 tháng thay vì 12 tháng.
**Impact:** HIGH
**Why it matters:** Cần discipline: mỗi phase phải lock scope, không thêm feature ngoài plan. Options chỉ bật khi phase core hoàn thành.

---

## REVERSE BRAINSTORMING — Cách để dự án THẤT BẠI

| # | Cách thất bại | Giải pháp ngược |
|---|---------------|-----------------|
| 1 | Build hết 10 module cùng lúc → overload team | Phase rõ ràng, 2-3 module/phase |
| 2 | Không có PM lead → không ai chịu trách nhiệm | PM full-time từ ngày 1 |
| 3 | Bỏ qua COD → 67% khách không mua được | COD là core bắt buộc Phase 1 |
| 4 | Frontend đẹp nhưng backend chưa sẵn → demo chạy, production chết | BE và FE song song, không chỉ làm UI |
| 5 | Không test trên sàn thật (Shopee, Lazada) → integration lỗi | Sandbox testing trước, pilot với 1 sàn |
| 6 | Scope creep — thêm feature mỗi sprint | Lock scope theo phase, change request qua PM |
| 7 | DevOps sau cùng → deploy nightmare | DevOps từ Phase 1, CI/CD ngay từ đầu |
| 8 | Không có QC → bug production | QC mỗi phase, UAT trước go-live |

---

## SO SÁNH VỚI CÁC PHƯƠNG ÁN KHÁC

| Tiêu chí | Tự Build (thuê team dev) | Dùng SaaS (Haravan/Sapo) | Diso Platform |
|----------|--------------------------|--------------------------|---------------|
| **Chi phí** | 6-10 tỷ (12-18 tháng) | 5-15 triệu/tháng | 6.2-7.5 tỷ (12 tháng) |
| **Thời gian** | 18-24 tháng | 1-2 tháng | 12 tháng (phase-by-phase) |
| **Ownership** | 100% sở hữu | Thuê, không sở hữu | 100% sở hữu |
| **Customization** | Vô hạn | Hạn chế | Cao (modular) |
| **Affiliate/Reseller** | Tự build (6-12 tháng thêm) | Không có | Có sẵn |
| **Ambassador** | Tự build (6-12 tháng thêm) | Không có | Có sẵn |
| **Đa kênh** | Tự tích hợp | Có sẵn (basic) | Có sẵn (advanced) |
| **Chống gian lận** | Tự build (rất khó) | Không có | Có sẵn |
| **Vendor lock-in** | Không | CÓ | Không |
| **Scale** | Tùy architecture | Giới hạn gói | Không giới hạn |

---

## KHUYẾN NGHỊ TRÌNH SẾP

### Slide 1: Tổng quan
> "Dự án e-commerce tổng thể 10 module, roadmap 12 tháng, 4 phase rõ ràng."

### Slide 2: Chi phí 3 kịch bản
> - Core Only: **6.2 tỷ** — đủ bán hàng, vận hành, marketing
> - Core + Options ưu tiên: **6.9 tỷ** — thêm Pancake, MISA, Zalo OA, E-Invoice, TikTok
> - Full: **7.5 tỷ** — tất cả, bao gồm Zalo Mini App, BNPL, thêm hãng VC

### Slide 3: ROI tiềm năng
> - Phase 1 (tháng 3): bắt đầu bán hàng online → có doanh thu
> - Phase 2 (tháng 6): đa kênh → tăng doanh thu từ sàn
> - Phase 3 (tháng 9): affiliate + reseller → doanh thu từ kênh phân phối
> - Phase 4 (tháng 12): full ecosystem → tối ưu retention, brand

### Slide 4: So sánh
> - Tự build from scratch: 8-15 tỷ, 18-24 tháng
> - Dùng SaaS (Haravan): rẻ nhưng không custom, không affiliate/reseller/ambassador
> - **Diso: 6.2-7.5 tỷ, 12 tháng, sở hữu 100%, full ecosystem**

---

## Thống kê

| Metric | Số liệu |
|--------|---------|
| **Tổng modules** | 10 |
| **Tổng chức năng core** | 116 chức năng |
| **Tổng chức năng option** | 48 chức năng |
| **Chi phí core** | ~6.200.000.000 VNĐ |
| **Chi phí options** | ~1.265.000.000 VNĐ |
| **Chi phí full** | ~7.465.000.000 VNĐ |
| **Timeline** | 12 tháng (core) + 6 tháng (mở rộng) |
| **Team tối thiểu** | 9 người |
| **Phases** | 4 phase chính + 1 phase mở rộng |
| **Kỹ thuật brainstorm** | Mind Mapping + SWOT + Reverse Brainstorming |

---

*Generated by BMAD Method v6 - Creative Intelligence*
*Techniques: Mind Mapping + SWOT Analysis + Reverse Brainstorming*
*Context: Diso Commerce Suite (5 pillars) + Medusa.js v2 brainstorm (21/03/2026) + Trường Nhân Pharma quotation*
