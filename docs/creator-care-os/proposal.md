# Creator Care OS — Đề xuất triển khai Giai đoạn 1

**Từ:** DISO
**Gửi:** AccessTrade
**Cập nhật:** 2026-05-28

---

Kính gửi anh/chị,

Sau khi cùng trao đổi sâu về quy trình vận hành creator, DISO xin trình bày phương án **Creator Care OS** — hệ vận hành nội bộ giúp đội Care của AccessTrade **giữ và phát triển tập creator** một cách có hệ thống.

Tài liệu này gồm: *vấn đề thật DISO nhìn thấy*, *cách giải*, và *toàn bộ phạm vi Giai đoạn 1 đề xuất*. AccessTrade có thể chọn làm toàn bộ hoặc cắt theo cụm — DISO đã chia phạm vi thành các cụm tách bạch để dễ quyết. Phần ước lượng chi tiết được trình bày trong bảng riêng.

Trân trọng,
**DISO**

---

## 1. Vấn đề cốt lõi — creator giá trị đang "rơi"

Khi vận hành creator ở quy mô lớn, nỗi đau lớn nhất không phải "thiếu công cụ" — mà là **creator giá trị liên tục rơi khỏi tầm mắt**:

- **Quan hệ rơi theo người** — một AM nghỉ → lấy luôn quan hệ với creator. Người mới không biết gì.
- **Creator nguội không ai biết** — từng tốt, giờ ngừng hoạt động — không hệ thống nào báo.
- **Creator tiềm năng bị bỏ quên** — chạy tốt ở một campaign rồi… không ai đưa vào diện chăm dài hạn.
- **Không ai nhìn xuyên suốt** — mỗi campaign/kênh chỉ thấy phần mình, không ai hỏi "creator này TỔNG THỂ đang được đối xử thế nào".

---

## 2. Đích đến — hành trình 4 nấc

Creator Care OS giúp AccessTrade **khai thác tối đa giá trị từ mỗi creator** — bắt đầu bằng không để ai rơi, tiến tới hiểu creator đủ sâu để chăm đúng & ghép đúng. Hệ thống trưởng thành qua 4 nấc, mỗi nấc xếp chồng lên nấc trước:

| Nấc | Tên | Bản chất |
|---|---|---|
| **T1** | Chống rơi | Nền móng — mọi creator giá trị đều trong tầm mắt, có người chăm, được nhìn xuyên suốt |
| **T2** | Nâng hiệu quả | Chăm đúng — mỗi creator được can thiệp đúng lúc, đúng cách |
| **T3** | Khai thác tối đa | Ghép đúng — đúng người, đúng việc, đúng thời điểm |
| **T4** | Trí tuệ creator | Dự đoán — hệ thống tự gợi ý hành động sinh lời nhất |

**Giai đoạn 1 đề xuất = nấc T1 trọn vẹn** — nền móng xuyên suốt mọi bước. Sau Giai đoạn 1, AccessTrade có một hệ thống mà mọi creator giá trị **không bị rơi**, đội Care **làm việc gọn**, và là **bệ phóng** cho các nấc trên (T2-T4 ở các giai đoạn sau).

---

## 3. Định vị — đứng TRÊN các hệ campaign, không chồng lấn

AccessTrade đã có các hệ chạy campaign (Ambassador, MCN, TAP, Booking…). Creator Care OS **không thay thế, không chồng lấn**:

| Tầng | Vai trò | Câu hỏi trả lời |
|---|---|---|
| **Các hệ campaign** (Ambassador / MCN / TAP / Booking…) | Vận hành từng chiến dịch | "Campaign này đủ creator chạy chưa, đạt KPI chưa?" |
| **Creator Care OS** *(đề xuất)* | Vận hành đời sống creator xuyên suốt | "Creator này có được chăm, có việc đều, có lớn lên không?" |

Hai tầng kết nối qua **API** — mỗi hệ campaign là một **connector** cắm vào Creator Care OS. Creator Care OS là hệ **độc lập**: không gộp database, không phụ thuộc một hệ cụ thể, mở rộng dần bằng cách cắm thêm connector.

---

## 4. Toàn bộ phạm vi Giai đoạn 1

Giai đoạn 1 gồm **23 module**, chia 3 cụm để AccessTrade dễ chọn cắt theo ngân sách. Mỗi chức năng ghi rõ *ai dùng / giải đau gì / làm gì*.

### 🔵 Cụm M0 — Nền tảng hạ tầng (6 module)
*Lõi của lõi — mọi chức năng nghiệp vụ đều cắm vào đây. Không cắt được.*

| # | Module | Ai dùng | Vai trò |
|---|---|---|---|
| M0.1 | **Authentication + Session** | Mọi user | Đăng nhập (email/pwd + SSO), session/token, đăng xuất, đổi/reset mật khẩu |
| M0.2 | **Phân quyền chi tiết (RBAC)** | Admin | Permission matrix 6 vai × resource × action; enforce backend mọi endpoint; UI quản lý user/role |
| M0.3 | **Audit log + monitoring** | Admin, System | Audit log toàn hệ + viewer + alert lỗi cơ bản |
| M0.4 | **Notification system** | System | Hệ chung in-app + email + Zalo OA hook — A7/B2/B5 dùng chung |
| M0.5 | **File/asset storage** | System | S3/MinIO + signed URL + size limit — A1/A5/B5 dùng |
| M0.6 | **Tích hợp dịch vụ hạ tầng** | System | Kết nối Email service + Backup + Error tracking — *hạ tầng do AccessTrade cung cấp* |

### 🟢 Cụm A — Lõi nghiệp vụ (10 chức năng)
*Không có thì không vận hành được công việc Care. Gồm connector Ambassador, Onboard hoàn tất và Export.*

| # | Chức năng | Ai dùng | Giải đau |
|---|---|---|---|
| A1 | **Hồ sơ Creator 360** | Care, Manager | Mở 5 file mới hiểu 1 creator |
| A2 | **Pool 2 chiều (vòng đời × giá trị)** | Manager | Không biết creator nào đang ở đâu, đáng chăm cỡ nào |
| A3 | **Gán owner + chống mồ côi** | Manager | Creator giá trị không ai phụ trách |
| A4 | **Tiếp nhận đa cửa + tag/hạng sơ bộ + migration data cũ** | Care | Lead rải rác; cần đẩy ~vài nghìn creator cũ vào pool |
| A5 | **Két Quan hệ (Interaction Log)** | Care, Manager | **AM nghỉ mất quan hệ** (đau số 1) |
| A6 | **Hàng đợi việc theo người + CareTask** | Care | Không biết hôm nay làm gì trước |
| A7 | **Đồng hồ SLA + UI cấu hình** | Manager, Care, Admin | Việc trễ hạn không ai biết; SLA cần thay đổi linh hoạt |
| A8 | **Connector Ambassador** | System | Pool có data thật từ ngày đầu, không phải nhập tay |
| A9 | **Onboard hoàn tất (chuyển `Ready`)** | Care | Creator duyệt xong không rõ đã sẵn sàng nhận việc |
| A10 | **Export dữ liệu (CSV)** | Manager, Admin | Cần dữ liệu ra file để xử lý ngoài |

### 🟡 Cụm B — Nên có (7 chức năng)
*Giải đau mạnh nhưng có thể hoãn vài tháng nếu cần. Gồm Zalo OA, email, và báo cáo sức khỏe pool.*

| # | Chức năng | Ai dùng | Giải đau |
|---|---|---|---|
| B1 | **Outreach Kit (mẫu thông điệp)** | Care | Soạn lại tin mỗi lần |
| B2 | **Theo dõi tiếp cận + nhắc follow-up** | Care | Liên hệ xong quên theo dõi |
| B3 | **Duyệt hồ sơ creator** | Care, Manager | Duyệt thủ công, không lịch sử |
| B4 | **Checklist thiết lập nền tảng** | Platform Ops | Onboard Shopee/TikTok/TAP rời rạc |
| B5 | **Tích hợp Zalo OA** *(gửi tin + theo dõi message trên hệ thống)* | Care | Thảo luận với creator nằm trên app rời, không bàn giao được |
| B6 | **Gửi email mẫu** (giới thiệu / làm nóng quan hệ) | Care | Cần kênh email để giới thiệu chương trình |
| B7 | **Báo cáo sức khỏe pool (cơ bản)** | Manager | Phải hỏi mới biết tình hình |

> **Không có trong GĐ1** (theo AccessTrade đã chốt): module thanh toán/thuế (dùng module có sẵn core AT) · EKYC + ký hợp đồng điện tử · gắn hạng creator tự động (Care gắn tay, công thức để sau).

---

## 5. KPI đo được nhờ hệ thống

Đây là phần thuyết phục lãnh đạo: với Excel, KPI Care gần như không đo nổi. Với Creator Care OS GĐ1:

| Nhóm | Đo được |
|---|---|
| **Chống rơi** | % creator giá trị có owner *(mục tiêu 100%)*; số creator "mồ côi" được phát hiện |
| **Kích hoạt** | Tỷ lệ creator mới đi đến `Ready`; thời gian Lead → Ready |
| **Vận hành** | Đúng SLA chăm sóc; độ phủ chăm sóc; năng suất từng Care |
| **Quan hệ** | Số tương tác/creator; tỷ lệ bàn giao không mất quan hệ |

---

## 6. Vì sao chọn DISO

1. **Tay nghề đã chứng minh ở production** — OpsHub đang vận hành thật loại bài toán "đội nhỏ, khối lượng lớn": 10→3 nhân sự, 10K→50K video/tháng.
2. **Hiểu domain creator** — đã và đang vận hành hệ thống creator thật, không phải gia công chung chung.
3. **Rủi ro thấp** — DISO xây *và* vận hành trong giai đoạn nghiệm thu, bàn giao source code cuối dự án; kiến trúc độc lập nên AT không bị khóa.

---

## 7. Giả định DISO đang dựa trên — cần AccessTrade xác nhận

Phạm vi & ước lượng được dựng theo các giả định sau. Khi trao đổi, nếu giả định nào khác so với thực tế, DISO sẽ rà soát lại phạm vi tương ứng.

| # | Vấn đề | DISO đang giả định | Liên quan module |
|---|---|---|---|
| 1 | Phương án nạp creator | Hệ thống hỗ trợ **cả 3 phương án**: nhập tay, import file, creator tự đăng ký — kèm connector Ambassador đồng bộ về | A4 + A8 |
| 2 | Quy mô data cũ cần migration | < 10.000 creator | A4 |
| 3 | Kênh tiếp cận creator | **Zalo OA chính thức** (gửi tin + theo dõi message trên hệ thống) + Email mẫu phục vụ giới thiệu/làm nóng | B5 + B6 |
| 4 | EKYC + ký hợp đồng điện tử | **Không thuộc Giai đoạn 1** — sử dụng module có sẵn của AccessTrade | — |
| 5 | Thanh toán & thuế | **Không build trong Giai đoạn 1** — module campaign có sẵn đã xử lý | — |
| 6 | Đăng nhập (SSO) | Liên kết SSO với hệ AccessTrade có sẵn theo chuẩn OAuth2/SAML | M0.1 |
| 7 | SLA | Cần UI cấu hình để Admin thay đổi linh hoạt giá trị SLA theo từng (sự kiện × hạng creator) | A7 |
| 8 | Gắn hạng creator | Giai đoạn 1: Care gắn hạng thủ công; công thức tự động đề xuất cho giai đoạn sau | A4 |

---

## 8. Mô hình vận hành & bàn giao

- **DISO xây + vận hành** trong giai đoạn nghiệm thu.
- **Bàn giao source code** cuối dự án.
- **Chi phí monthly** + **chia sẻ doanh thu** (nếu áp dụng) — *theo thỏa thuận, tài chính DISO trình bày riêng.*

---

## 9. Bước tiếp theo

1. AccessTrade đọc đề xuất → chọn phương án phạm vi (M0+A tối thiểu / M0+A+B đầy đủ).
2. Cùng DISO rà soát các giả định ở mục 7.
3. DISO chỉnh phạm vi theo lựa chọn của AccessTrade → bộ phận tài chính DISO trình bày chi phí kèm mô hình monthly + revenue share.
4. Ký kết và khởi động.
