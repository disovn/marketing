# TEMPLATE — Solution Concept (Lớp 1)

> **CÁCH DÙNG FILE NÀY — đọc trước khi viết:**
> - Đây là **khung mục lục + thư viện đoạn văn**, KHÔNG phải bản điền chỗ trống. Phần "vì sao giải pháp này hợp với CHÍNH khách này" luôn phải viết tay.
> - Dùng ở **bước B0** — sau khi khách đã qua Cửa Vào (xác nhận problem statement ở D2).
> - **TUYỆT ĐỐI KHÔNG có giá, không có giờ dev, không có estimate.** Đó là Lớp 2 / Lớp 3.
> - Mô tả phạm vi theo **KẾT QUẢ khách nhận được**, không theo danh sách tính năng kỹ thuật.
> - Lưu bản thật thành `02-solution-concept/<ten-khach>-solution-concept.md`. Export Google Docs để khách comment.
> - Chỗ `[...]` và đoạn _in nghiêng hướng dẫn_ phải được thay/xoá trước khi gửi.
> - Mọi placeholder `«...»` là phần BẮT BUỘC viết tay riêng cho khách.

---

# [Tên Giải pháp] — Bản Mô tả Giải pháp

**Gửi:** [Tên khách hàng] — [phòng ban / người nhận]
**Từ:** DISO
**Ngày:** [DD/MM/YYYY]

---

_Lời ngỏ — giọng thư, viết tay. Mục đích: cho khách thấy Diso hiểu họ, và đặt kỳ vọng đúng về tài liệu này. Mẫu dưới đây để tham khảo giọng văn, KHÔNG copy nguyên._

Kính gửi anh/chị,

Sau buổi trao đổi vừa qua, DISO xin gửi anh/chị bản mô tả chi tiết giải pháp **«tên giải pháp»** mà chúng tôi đề xuất cho [tên khách].

«1-2 câu thể hiện Diso hiểu bài toán của khách — viết từ problem statement đã chốt ở D1. Không nói về Diso, nói về khách.»

Tài liệu này mô tả đầy đủ những gì [tên khách] sẽ nhận được. **Đây chưa phải hợp đồng và chưa bàn đến chi phí** — chúng tôi mong anh/chị đọc, đối chiếu với nhu cầu thực tế, và cho biết phạm vi này đã đúng chưa. Phần cuối tài liệu có một bảng ngắn để anh/chị tiện phản hồi từng điểm.

Khi phạm vi được hai bên thống nhất, DISO sẽ chuẩn bị đề xuất triển khai chi tiết — lộ trình, mốc bàn giao và mô hình hợp tác.

Trân trọng,
**DISO**

---

## 1. Bài toán

_Viết lại problem statement đã chốt ở D1 — bằng ngôn ngữ của khách. Khách phải đọc và thấy "đúng, đây chính là vấn đề của tôi"._

«Mô tả bối cảnh kinh doanh hiện tại của khách.»

Những hệ quả thực tế khách đang gặp:

- **«Nỗi đau 1»** — «mô tả cụ thể, có con số nếu có».
- **«Nỗi đau 2»** — «...».
- **«Nỗi đau 3»** — «...».

«Tên giải pháp» giải quyết đúng những vấn đề này — bằng cách «một câu mô tả cách tiếp cận».

---

## 2. Giải pháp — tổng quan

«Tên giải pháp» là «một câu định nghĩa: nó là cái gì, cho ai».

Nguyên tắc thiết kế:

- **«Nguyên tắc 1»** — _ví dụ: không thay thế những gì khách đang dùng được, chỉ bổ sung._
- **«Nguyên tắc 2»** — _ví dụ: ánh xạ đúng quy trình hiện có của khách, không bắt học quy trình mới._
- **«Nguyên tắc 3»** — _ví dụ: một nguồn dữ liệu chung, không phân mảnh._

---

## 3. [Tên khách] nhận được gì

_Đây là phần chính. Mô tả theo KẾT QUẢ, không theo tính năng. Mỗi nhóm năng lực = một kết quả khách nhận được trong công việc/kinh doanh hằng ngày._

_Tổ chức theo nhóm năng lực. Với khách e-commerce, các nhóm thường ánh xạ tới các trụ trong `01-reusable/product-catalog.md` (Kênh bán / Đội ngũ bán / Nền tảng vận hành). Chỉ đưa nhóm NẰM TRONG phạm vi đã thống nhất._

### Nhóm nền tảng — [tên]

«Mô tả lớp lõi mà cả giải pháp dựa lên.»

- **«Năng lực A»** — «kết quả khách nhận được».
- **«Năng lực B»** — «...».

### Nhóm 1 — [tên]

- «...»

### Nhóm 2 — [tên]

- «...»

_(Lặp lại theo số nhóm năng lực trong phạm vi. Đừng liệt kê hết mọi thứ Diso có — chỉ phần khách cần.)_

---

## 4. Lộ trình — giải pháp trong bức tranh dài hạn

_Phần này thể hiện tầm nhìn để dự án "xứng tầm" — nhưng chỉ CAM KẾT Giai đoạn 1. Các giai đoạn sau là tầm nhìn, bàn riêng sau._

«Tên giải pháp» không phải một dự án đơn lẻ. Đây là **giai đoạn đầu** của một lộ trình mà [tên khách] có thể mở rộng theo thời gian.

| Giai đoạn | Nội dung | Trạng thái |
|---|---|---|
| **Giai đoạn 1 — [tên]** | «Phạm vi đề xuất lần này» | **Phạm vi đề xuất lần này** |
| **Giai đoạn 2 — [tên]** | «...» | Đề xuất tiếp theo |
| **Giai đoạn 3 — [tên]** | «...» | Tầm nhìn |
| **Giai đoạn 4 — [tên]** | «...» | Tầm nhìn |

**Cách đọc bảng này:** Tài liệu hiện tại chỉ mô tả và đề xuất **Giai đoạn 1**. Các giai đoạn sau được nêu ra để [tên khách] thấy hướng phát triển — sẽ được bàn riêng khi Giai đoạn 1 vận hành ổn định. DISO thiết kế kiến trúc Giai đoạn 1 để các giai đoạn sau ghép vào thuận lợi.

---

## 5. Phạm vi — Trong và Ngoài

_Ranh giới rõ ràng bảo vệ cả hai bên. Đây là phần khách cần đọc kỹ nhất._

**Trong phạm vi Giai đoạn 1:**
- «Hạng mục 1»
- «Hạng mục 2»
- «...»

**Ngoài phạm vi Giai đoạn 1 (thuộc giai đoạn sau):**
- «Hạng mục A» — Giai đoạn 2.
- «Hạng mục B» — Giai đoạn 3.
- «...»

> Việc nêu rõ ranh giới này bảo vệ cả hai bên: [tên khách] biết chính xác sẽ nhận gì, DISO cam kết đúng phần đã thống nhất. Mọi thay đổi phạm vi sẽ được hai bên trao đổi và điều chỉnh đề xuất tương ứng.

---

## 6. Vì sao là DISO

_Dùng bằng chứng năng lực CÓ THẬT. Tham khảo `01-reusable/case-studies.md`. Chọn 2-3 bằng chứng liên quan nhất tới bài toán của khách này._

- **«Bằng chứng 1»** — _ví dụ: Diso đã làm cho khách tương tự / cùng ngành._
- **«Bằng chứng 2»** — _ví dụ: hạ tầng/nền tảng đã chạy production, có con số._
- **«Bằng chứng 3»** — _ví dụ: đã chứng minh năng lực biến vận hành thủ công thành hệ thống._

DISO xây dựng và vận hành hệ thống trong giai đoạn nghiệm thu, và bàn giao mã nguồn cho [tên khách] khi kết thúc dự án. _(Nếu áp dụng mô hình "Own the app, subscribe the brain" — xem mục 7 của playbook-quy-trinh.md — diễn đạt theo hướng đó.)_

---

## 7. Xác nhận phạm vi

_Bảng này là MỤC ĐÍCH của cả tài liệu — để khách "đóng cứng" scope. Phản hồi của khách là input bắt buộc cho Pha 2._

Đề nghị [tên khách] rà soát và phản hồi các điểm sau. Phản hồi của anh/chị là cơ sở để DISO hoàn thiện đề xuất triển khai.

| # | Nội dung cần xác nhận | Phản hồi của [tên khách] |
|---|---|---|
| 1 | Các nhóm năng lực ở mục 3 có phản ánh đúng nhu cầu không? Có nhóm nào thiếu / thừa? | |
| 2 | Phân chia Trong / Ngoài phạm vi Giai đoạn 1 (mục 5) có hợp lý không? | |
| 3 | «Câu hỏi xác nhận ưu tiên cao nhất — viết riêng theo problem statement» | |
| 4 | Lộ trình các giai đoạn (mục 4) có khớp với định hướng dài hạn không? | |
| 5 | Có ràng buộc nào (thời điểm go-live, tích hợp hệ thống sẵn có) cần đưa vào ngay từ đầu? | |

Khi phạm vi được hai bên thống nhất, DISO sẽ gửi **Đề xuất Triển khai (Commercial Proposal)** — gồm lộ trình theo mốc, mô hình hợp tác và phần thương mại.

---

## Tài liệu liên quan

- Bản trình bày giải pháp (pitch deck) — đã trình bày tại buổi làm việc
- «Tài liệu nguồn do khách cung cấp, nếu có»

---

_Diso Sales Playbook — Solution Concept Template v1.0 | 2026-05-18_
_Template nội bộ. Bản gửi khách phải xoá toàn bộ phần hướng dẫn in nghiêng và placeholder._
