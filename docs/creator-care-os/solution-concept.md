# Creator Care OS — Bản Mô tả Giải pháp

**Gửi:** AccessTrade — đội ngũ Sản phẩm & Kỹ thuật  
**Từ:** DISO  
**Ngày:** 16/05/2026

---

Kính gửi anh/chị,

Sau buổi trao đổi vừa qua, DISO xin gửi anh/chị bản mô tả chi tiết giải pháp **Creator Care OS** — hệ thống vận hành đội ngũ Creator mà chúng tôi đề xuất xây dựng cho AccessTrade.

Đội ngũ Care của AccessTrade đang vận hành một quy trình chăm sóc creator rất bài bản. Điều chúng tôi mong muốn là giúp quy trình đó chạy nhẹ nhàng hơn, ít rơi rớt hơn, và không phụ thuộc vào trí nhớ của từng cá nhân — bằng một hệ thống được thiết kế đúng theo cách AccessTrade đang làm việc.

Tài liệu này mô tả đầy đủ những gì AccessTrade sẽ nhận được. Đây chưa phải hợp đồng và chưa bàn đến chi phí — chúng tôi mong anh/chị đọc, đối chiếu với nhu cầu thực tế của đội Care, và cho chúng tôi biết phạm vi này đã đúng chưa. Phần cuối tài liệu có một bảng ngắn để anh/chị tiện phản hồi từng điểm.

Khi phạm vi được hai bên thống nhất, DISO sẽ chuẩn bị đề xuất triển khai chi tiết — lộ trình, mốc bàn giao và mô hình hợp tác.

Trân trọng,  
**DISO**

---

## 1. Bài toán

AccessTrade vận hành chương trình Creator theo một quy trình 7 bước rõ ràng — từ tìm kiếm creator đến chăm sóc, phân hạng và giữ chân. Quy trình này bài bản, nhưng hiện được vận hành **thủ công trên file Excel**.

Hệ quả thực tế đội Care đang gặp:

- **Không có trí nhớ vận hành** — SLA của từng bước được ghi trong file, nhưng không có gì tự đếm giờ. Không ai biết creator nào đang trễ hạn, ai cần xử lý trước.
- **Quan hệ với creator nằm trong từng cá nhân** — lịch sử chăm sóc, liên hệ, deal nằm trong điện thoại và trí nhớ của từng AM. Khi một AM nghỉ việc, quan hệ với creator đi theo họ.
- **Không có góc nhìn theo từng người phụ trách** — mỗi Care phải tự cắt view riêng của mình từ file chung.

Creator Care OS giải quyết đúng ba vấn đề này — bằng cách biến quy trình 7 bước của AccessTrade thành một hệ thống vận hành.

---

## 2. Giải pháp — tổng quan

Creator Care OS là một **Operation Portal** dành cho đội ngũ vận hành creator của AccessTrade (Care, AM, BD, Compliance).

Nguyên tắc thiết kế:

- **Không thay thế gì creator đang dùng.** Cổng dành cho creator giữ nguyên. Hệ thống chỉ bổ sung một tầng vận hành cho đội ngũ phía sau.
- **Ánh xạ đúng quy trình của AccessTrade.** Mỗi nhóm chức năng tương ứng một bước trong quy trình 7-process hiện có — không có quy trình mới phải học lại.
- **Hai cổng, chung một nguồn dữ liệu** — creator, campaign, content được dùng chung, không phân mảnh.

---

## 3. AccessTrade nhận được gì — 8 nhóm năng lực

Creator Care OS gồm tám nhóm năng lực, mô tả dưới đây theo **kết quả** đội Care nhận được trong công việc hằng ngày.

### Nhóm nền tảng — Hồ sơ, Hàng đợi & SLA

Đây là lớp lõi mà cả hệ thống dựa trên.

- **Hồ sơ Creator 360** — mỗi creator có một hồ sơ duy nhất: trạng thái quan hệ, phân hạng, lịch sử campaign, dữ liệu hiệu suất, thông tin các kênh social. Care không phải mở nhiều nơi để hiểu một creator.
- **Hàng đợi theo từng Care** — mỗi nhân sự mở hệ thống lên là thấy ngay danh sách creator và công việc của riêng mình, không phải tự lọc.
- **Đồng hồ SLA** — hệ thống tự đếm ngược SLA của từng bước theo phân hạng creator (ví dụ 8h cho VIP, 24h cho thường). Việc sắp trễ hạn được báo đỏ và đẩy lên đầu hàng đợi.
- **Két Quan hệ (Relationship Vault)** — mọi tương tác với creator được ghi vào hệ thống. Khi nhân sự thay đổi, creator được bàn giao và toàn bộ lịch sử quan hệ đi theo creator, không đi theo người nghỉ.

### Nhóm 1 — Tìm kiếm & Sàng lọc Creator

- Thu nhận creator lead từ nhiều nguồn, tự kiểm tra hồ sơ tối thiểu.
- Gắn nền tảng và phân hạng sơ bộ (Thường / Tiềm năng / Ứng viên VIP / Rủi ro).
- Chấm điểm creator theo độ phù hợp ngành, chất lượng nội dung, tệp khán giả, an toàn thương hiệu.
- Tự động gắn cờ "Ứng viên VIP" theo tiêu chí AccessTrade đã định.

### Nhóm 2 — Tiếp cận & Mời tham gia

- Soạn và lưu bộ thông điệp tiếp cận (quyền lợi, hoa hồng, lời mời).
- Liên hệ creator qua nhiều kênh, ghi nhận đã liên hệ qua kênh nào.
- Theo dõi trạng thái phản hồi của creator.
- Tự nhắc lịch follow-up theo SLA.

### Nhóm 3 — Duyệt & Thiết lập nền tảng

- Duyệt hồ sơ creator đăng ký.
- Danh sách kiểm tra thiết lập tài khoản nền tảng (Shopee Affiliate / TikTok / TAP / Meta).
- Quản lý thông tin thanh toán và thuế của creator.
- Theo dõi việc creator gia nhập MCN/TAP, lưu thông tin định danh.

### Nhóm 4 — Chiến lược Kênh

- Ghi nhận và đánh giá kênh của creator.
- Đặt mục tiêu theo từng nền tảng.
- Gợi ý ngành hàng, sản phẩm, hướng nội dung phù hợp.

### Nhóm 5 — Kích hoạt Campaign & Nội dung

- Thiết lập campaign / offer với hoa hồng, KPI, thời hạn.
- Giao sản phẩm, deal, guideline cho creator.
- Theo dõi việc gửi sản phẩm mẫu.
- Theo dõi trạng thái nội dung creator đã đăng.

### Nhóm 6 — Theo dõi Hiệu suất & Chăm sóc

- Tổng hợp dữ liệu hiệu suất từ các nền tảng (lượt xem, đơn hàng, doanh số, hoa hồng).
- Phân loại hành động chăm sóc theo tình trạng creator.
- Cảnh báo sớm khi creator không hoạt động, trễ hạn hoặc sai chính sách.
- Bảng theo dõi KPI cho từng AM.

### Nhóm 7 — Phân hạng & Giữ chân

- Đối soát hoa hồng và thưởng.
- Xác nhận phân hạng VIP chính thức theo dữ liệu hiệu suất.
- Lập kế hoạch giữ chân creator giá trị.
- Rà soát phân hạng định kỳ.

---

## 4. Lộ trình — Creator Care OS trong bức tranh dài hạn

Creator Care OS không phải một dự án đơn lẻ. Đây là **giai đoạn đầu của một nền tảng vận hành Creator** mà AccessTrade có thể mở rộng theo thời gian.

| Giai đoạn | Nội dung | Trạng thái |
|---|---|---|
| **Giai đoạn 1 — Operation Portal** | Hệ thống vận hành cho creator đăng ký: hồ sơ, hàng đợi, SLA, Két Quan hệ, quản lý campaign | **Phạm vi đề xuất lần này** |
| **Giai đoạn 2 — Sourcing & Hiệu suất** | Tự động tìm kiếm creator từ social; bảng theo dõi hiệu suất & KPI nâng cao | Đề xuất tiếp theo |
| **Giai đoạn 3 — Mở rộng đa mảng** | Đưa cùng một nền tảng vận hành sang MCN Shopee, TAP, Booking | Tầm nhìn |
| **Giai đoạn 4 — Lớp Thông minh Creator** | Một creator nhìn xuyên suốt mọi mảng; tín hiệu vận hành & gợi ý tập trung | Tầm nhìn |

**Cách đọc bảng này:** Tài liệu hiện tại chỉ mô tả và đề xuất **Giai đoạn 1**. Các giai đoạn sau được nêu ra để AccessTrade thấy hướng phát triển — chúng sẽ được bàn riêng khi Giai đoạn 1 vận hành ổn định. DISO thiết kế kiến trúc Giai đoạn 1 theo nguyên tắc "một creator — nhiều mảng" để các giai đoạn sau ghép vào thuận lợi.

---

## 5. Phạm vi — Trong và Ngoài

Để hai bên hiểu nhất quán, dưới đây là ranh giới rõ ràng của **Giai đoạn 1**.

**Trong phạm vi Giai đoạn 1:**
- Operation Portal đầy đủ cho đội Care: nhóm nền tảng + 7 nhóm năng lực ở mục 3, ở mức vận hành cho creator đăng ký vào hệ thống.
- Tích hợp dữ liệu hồ sơ creator từ hệ thống influence-meter (TikTok / YouTube / Facebook / Instagram).
- Quản trị campaign để hiển thị nội dung creator.

**Ngoài phạm vi Giai đoạn 1 (thuộc giai đoạn sau):**
- Tự động tìm kiếm creator từ social (sourcing automation) — Giai đoạn 2.
- Bảng theo dõi hiệu suất & KPI nâng cao — Giai đoạn 2.
- Mở rộng sang MCN Shopee / TAP / Booking — Giai đoạn 3.
- Xây dựng lại luồng duyệt video — hệ thống sử dụng luồng duyệt hiện có, không xây mới.

> Việc nêu rõ ranh giới này bảo vệ cả hai bên: AccessTrade biết chính xác sẽ nhận gì, DISO cam kết đúng phần đã thống nhất. Mọi thay đổi phạm vi sẽ được hai bên trao đổi và điều chỉnh đề xuất tương ứng.

---

## 6. Vì sao là DISO

- **DISO đang vận hành công nghệ cho hệ thống creator hiện tại của AccessTrade** — hiểu sâu luồng creator, campaign, nội dung từ bên trong.
- **Hạ tầng dữ liệu creator đã sẵn sàng** — hệ thống influence-meter đang chạy production (dashboard Techcombank, thu thập dữ liệu creator ổn định hàng tháng). Creator đăng ký là tự có hồ sơ đầy đủ.
- **DISO đã chứng minh năng lực biến vận hành thủ công thành hệ thống tự động** — qua hệ thống review nội dung OpsHub: giảm nhân sự thủ công và tăng nhiều lần sản lượng xử lý mà không cần thêm người.

DISO xây dựng và vận hành hệ thống trong giai đoạn nghiệm thu, và bàn giao mã nguồn cho AccessTrade khi kết thúc dự án.

---

## 7. Xác nhận phạm vi

Đề nghị AccessTrade rà soát và phản hồi các điểm sau. Phản hồi của AccessTrade là cơ sở để DISO hoàn thiện đề xuất triển khai.

| # | Nội dung cần xác nhận | Phản hồi của AccessTrade |
|---|---|---|
| 1 | 8 nhóm năng lực ở mục 3 có phản ánh đúng nhu cầu vận hành của đội Care không? Có nhóm nào thiếu / thừa? | |
| 2 | Phân chia Trong / Ngoài phạm vi Giai đoạn 1 (mục 5) có hợp lý không? | |
| 3 | "Két Quan hệ" — cơ chế chống mất quan hệ creator khi nhân sự thay đổi — có đúng là ưu tiên cao không? | |
| 4 | Lộ trình 4 giai đoạn (mục 4) có khớp với định hướng dài hạn của AccessTrade không? | |
| 5 | Có ràng buộc nào (thời điểm cần go-live, tích hợp hệ thống sẵn có) cần đưa vào ngay từ đầu? | |

Khi phạm vi được hai bên thống nhất, DISO sẽ gửi **Đề xuất Triển khai** — gồm lộ trình theo mốc, mô hình hợp tác và phần thương mại.

---

## Tài liệu liên quan

- Bản trình bày giải pháp (pitch deck) — đã trình bày tại buổi làm việc
- Quy trình KOC Management 7-process — tài liệu nguồn do AccessTrade cung cấp
