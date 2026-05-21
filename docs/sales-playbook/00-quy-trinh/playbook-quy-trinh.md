# DISO SALES PLAYBOOK — Quy trình tiếp cận khách hàng

> **Đây là file xương sống của playbook.** Mọi tài liệu khác trong `sales-playbook/` đều được dùng tại một bước cụ thể của quy trình mô tả ở đây.
> **Phiên bản:** v1.0 — 2026-05-18
> **Đối tượng:** CEO, Sales, Solution Architect
> **Nguồn gốc:** Quy trình này tổng quát hoá bộ khung đã dùng thành công cho dự án Creator Care OS (AccessTrade) thành một quy trình áp dụng được cho **mọi khách hàng mới**.

---

## 0. Triết lý — 4 nguyên tắc neo

Toàn bộ playbook đứng trên 4 nguyên tắc. Khi phân vân, quay về 4 nguyên tắc này.

1. **Công sức Diso bỏ ra phải tỉ lệ với mức cam kết của khách.** Khách lạnh chỉ nhận tài liệu làm sẵn. Tài liệu viết tay riêng cho khách (Solution Concept, Proposal) chỉ làm *sau khi* khách đã xác nhận họ có bài toán.

2. **Không estimate / không Solution Concept "trên cát".** Không bao giờ báo giá hay viết mô tả giải pháp chi tiết khi chưa chốt được phạm vi với khách. Phạm vi quyết định giá — không phải ngược lại.

3. **Một khách, một câu chuyện, một thời điểm.** Không bao giờ pitch 2 nhóm giải pháp song song. Khách chọn 1 bài toán để giải trước. Muốn bán thêm → bán ở vòng sau, không nhồi vào vòng đầu.

4. **Không phồng phạm vi cho khớp giá đích.** Cam kết đúng phần đã thống nhất. Muốn dự án lớn hơn → mở giai đoạn tiếp theo (thật), không thổi phồng giai đoạn hiện tại (giả).

---

## 1. Hai pha — Discovery và Solutioning

Quy trình có **2 pha**, mỗi pha có bản chất khác nhau và dùng bộ công cụ khác nhau.

```
┌─────────────────── PHA 1: DISCOVERY ───────────────────┐
│  Khách LẠNH — chưa biết Diso, chưa biết mình cần gì     │
│  Công cụ: tài liệu LÀM SẴN (reusable)                   │
│  Mục tiêu: biến "không biết cần gì" → "tôi có bài toán" │
│                                                          │
│   D0 ──────► D1 ──────► D2                              │
│  Sàng lọc   Khám phá   Giả thuyết giải pháp             │
└──────────────────────────┬──────────────────────────────┘
                           │
              ┌────────────▼────────────┐
              │   CỬA VÀO (Entry Gate)  │
              │  Chỉ qua nếu khách đã    │
              │  XÁC NHẬN problem        │
              │  statement. Nếu không →  │
              │  quay lại D1.            │
              └────────────┬─────────────┘
                           │
┌──────────────────────────▼──────────────────────────────┐
│              PHA 2: SOLUTIONING                          │
│  Khách đã CAM KẾT có bài toán — giờ chốt scope & giá     │
│  Công cụ: tài liệu VIẾT RIÊNG (custom)                   │
│  Mục tiêu: chốt phạm vi → báo giá → ký                   │
│                                                          │
│   B0 ──► B1 ──► B2 ──► B3 ──► B4 ──► B5                  │
│  Chốt   Solution Demo  ROI   Proposal Đàm   Ký           │
│  scope  Concept              + Pilot  phán               │
└──────────────────────────────────────────────────────────┘
```

**Điểm mấu chốt:** Khách đã "nóng" sẵn (đã trao đổi nhiều lần, tự biết bài toán — như AccessTrade) được phép **vào thẳng B0**, bỏ qua D0–D2. Playbook không bắt mọi khách đi hết. Nhưng *không khách nào được vào B0 khi chưa có problem statement xác nhận* — đó là Cửa Vào.

---

## 2. Mô hình 3 lớp tài liệu

Diso **không bao giờ gửi khách một tài liệu duy nhất chứa mọi thứ.** Tài liệu chia 3 lớp theo mức cam kết — gửi đúng lớp vào đúng thời điểm.

| Lớp | Tên | Gửi khi nào | Có giá/giờ không? | Định dạng |
|---|---|---|---|---|
| **Lớp 1** | **Solution Concept** | Sau khi khách qua D2 (xác nhận có bài toán) | ❌ KHÔNG — chỉ mô tả phạm vi & giá trị | Markdown → Google Docs cho khách comment, hoặc PDF |
| **Lớp 2** | **Commercial Proposal** | Sau khi khách gật phạm vi ở Lớp 1 | ✅ Có — giá, gói, lộ trình, mô hình hợp tác | PDF / slide |
| **Lớp 3** | **Estimate chi tiết** | **KHÔNG BAO GIỜ gửi khách** | ✅ Có — giờ dev, buffer, cost-driver, margin | Excel — nội bộ Diso |

**Vì sao tách:**
- Lớp 1 cho khách "đóng cứng" phạm vi mà không bị con số làm nhiễu cuộc thảo luận. Khách comment vào scope, không mặc cả giá.
- Lớp 2 chỉ xuất hiện khi scope đã chốt — nên giá luôn dựa trên scope thật.
- Lớp 3 là nơi Diso tính toán thật (cost-driver → activity → nhân sự → cost → markup). Lộ ra ngoài là mất thế đàm phán.

---

## 3. Ba bộ công cụ — đừng trộn lẫn

Playbook tách 3 công cụ riêng. Mỗi cái một mục đích, một định dạng, một thời điểm.

| Công cụ | Mục đích | Khách làm gì với nó | Vị trí trong playbook |
|---|---|---|---|
| **Pitch deck / Company deck** | Trình chiếu trong buổi gặp | Nghe, xem | `01-reusable/company-deck.md` |
| **Solution Concept** | Khách đọc kỹ + comment | Đọc, phản hồi từng điểm | `02-solution-concept/_template.md` |
| **Estimate** | Diso tự tính giá | Không thấy | `04-internal/estimate-guide.md` |

> Lỗi thường gặp: nhồi cả 3 vào 1 file. Deck mà có bảng estimate → khách mặc cả ngay khi chưa hiểu giá trị. Solution Concept mà có slide animation → khách không comment được. Giữ riêng.

---

## 4. PHA 1 — DISCOVERY (khách lạnh)

### D0 — Qualification (Sàng lọc)

**Mục tiêu:** Quyết định khách này có **đáng để Diso đầu tư công sức custom** không. Đây là cái van chống đốt thời gian.

**Câu hỏi cốt lõi:** Không phải "khách có cần gì không" (ai cũng cần gì đó) mà *"khách này có nghiêm túc và đủ tầm không"*.

**Tiêu chí cứng — trượt 1 tiêu chí thì chưa qua D0:**
- [ ] Có ngân sách thực cho dự án (không phải "đang tìm hiểu cho biết").
- [ ] Nhận diện được người ra quyết định (tên cụ thể, không phải "để em hỏi sếp").
- [ ] Có một nỗi đau định lượng được (mất tiền/thời gian/cơ hội ở đâu, bao nhiêu).
- [ ] Thuộc thị trường mục tiêu Diso (xem `01-reusable/company-deck.md` — dược/FMCG/health & beauty đang bán sàn TMĐT, doanh thu 1-50 tỷ/tháng).

**Công cụ:** Không cần tài liệu — đây là một cuộc gọi 15-20 phút.

**Output:**
- ✅ Qua D0 → đi tiếp D1.
- ❌ Trượt D0 → chỉ gửi `capability-one-pager.md`, đưa vào danh sách nuôi dưỡng, **không làm gì custom.**

---

### D1 — Discovery (Khám phá nỗi đau)

**Mục tiêu:** Chuyển khách từ "không rõ mình cần gì" sang **"tôi có bài toán X"**. Đây là bước khác biệt nhất so với pitch cho khách nóng.

**Công cụ:** `01-reusable/diagnostic-toolkit.md` — bộ câu hỏi chẩn đoán. **KHÔNG dùng Solution Concept ở đây** (chưa tới lúc).

**Nguyên tắc D1:**
- Lắng nghe 70%, nói 30%. Khách muốn được hiểu, không muốn bị bán.
- Đào nỗi đau theo con số: "phí sàn ăn bao nhiêu %", "mỗi tháng mất bao nhiêu đơn vì hết hàng" — số liệu, không tính từ.
- **Giới hạn cứng: tối đa 2 buổi discovery.** Quá 2 buổi mà khách chưa cam kết bước tiếp → hoặc khách commit D2, hoặc Diso lịch sự rút. D1 không phải tư vấn miễn phí vô hạn.

**Output:** Một **"problem statement"** — 2-3 câu mô tả bài toán, được khách xác nhận *"đúng, đây là vấn đề của tôi"*. Ví dụ: *"Traphaco mất ~20% doanh thu cho phí sàn, không sở hữu data 200K khách, và phụ thuộc hoàn toàn thuật toán Shopee."*

---

### D2 — Solution Hypothesis (Giả thuyết giải pháp)

**Mục tiêu:** Diso ánh xạ problem statement sang **1 câu chuyện giải pháp** + một gói đề xuất sơ bộ. Đây là cầu nối sang Pha 2.

**Công cụ:**
- `01-reusable/company-deck.md` — trình bày Diso giải bài toán này thế nào.
- `01-reusable/case-studies.md` — bằng chứng đã làm cho khách tương tự.
- `01-reusable/product-catalog.md` + `03-commercial/pricing-packages.md` — gợi ý gói (Launch/Growth/Scale/Enterprise) ở mức sơ bộ.

**Quy tắc đóng gói (nguyên tắc neo #3):** Chọn **đúng 1 gói** ánh xạ với problem statement. Không bày cả 4 gói ra để khách tự chọn.

**Output & CỬA VÀO:**
- ✅ Khách gật *"đúng, đây là hướng tôi muốn đi"* → **qua Cửa Vào, sang B0.**
- ❌ Khách lưỡng lự, bài toán còn mơ hồ → **quay lại D1.** Không được nhảy sang B0.

---

## 5. PHA 2 — SOLUTIONING (khách đã cam kết)

> Từ đây, Diso được phép tạo tài liệu **viết riêng cho khách**. Đây là vòng lặp — không phải đường thẳng. Phát hiện scope sai ở B2/B3 thì quay lại B0, đừng đi tiếp.

### B0 — Chốt phạm vi

**Mục tiêu:** Đóng cứng phạm vi cùng khách *trước khi* nói tới một con số nào.

**Công cụ:** `02-solution-concept/_template.md` → tạo Solution Concept (Lớp 1) riêng cho khách.

**Việc làm:**
1. Cụ thể hoá template thành Solution Concept cho khách — mô tả phạm vi theo **kết quả khách nhận được**, không theo danh sách tính năng.
2. Gửi khách (Google Docs để khách comment, hoặc PDF).
3. Khách rà soát bảng "Xác nhận phạm vi" ở cuối tài liệu — đánh dấu Trong/Ngoài phạm vi.

**Output:** Phạm vi được hai bên xác nhận bằng văn bản. Đây là input bắt buộc của B5 (estimate). *Không có cái này thì không estimate.*

---

### B1 — Demo

**Mục tiêu:** Cho khách thấy giá trị trực quan, đúng phần trong phạm vi đã chốt.

**Công cụ:** Demo site (https://statistic.diso.vn), battle card của gói đề xuất.

**Cấu trúc demo 60 phút:** 5' nhắc lại bài toán → 30' show 3-4 module quan trọng nhất (KHÔNG show hết — quá tải) → 15' case study cùng ngành → 10' Q&A. Pre-load 5 câu objection thường gặp từ `03-commercial/objection-handling.md`.

---

### B2 — ROI Workshop

**Mục tiêu:** Biến giải pháp thành con số kinh doanh cụ thể cho chính khách.

**Công cụ:** `03-commercial/roi-calculator.md` + số liệu thật của khách (doanh thu, margin, AOV).

**Output:** 1 trang ROI — tiết kiệm năm 1, break-even, 3 kịch bản (thận trọng/thực tế/lạc quan). Luôn để kịch bản thận trọng trước để tăng độ tin.

---

### B3 — Commercial Proposal + Pilot

**Mục tiêu:** Đưa đề xuất thương mại (Lớp 2) và một pilot để giảm rủi ro cho khách.

**Công cụ:** `03-commercial/_proposal-template.md` → tạo Commercial Proposal riêng cho khách.

**Lưu ý mô hình 2 dòng tiền:** Proposal phải tách rõ **phí dự án (one-time)** và **phí vận hành (recurring)** — nếu gộp, khách cộng lại thấy đắt. Xem mục 7.

**Pilot:** Free pilot 30 ngày (khách ký LOI, deposit 30% setup) hoặc paid pilot (hoàn 100% nếu fail KPI).

---

### B4 — Đàm phán

**Mục tiêu:** Xử lý phản đối, thương lượng điều khoản, tiến tới ký.

**Công cụ:** `03-commercial/objection-handling.md`, discount policy trong `pricing-packages.md`.

**Nguyên tắc:** Đồng cảm trước, redirect bằng data sau. Không cãi objection. Không bao giờ giảm % GMV fee (đó là alignment lợi ích) hay hạ SLA để hạ giá.

---

### B5 — Ký & Estimate nội bộ

**Mục tiêu:** Chốt deal. Song song, Diso hoàn thiện Estimate (Lớp 3) làm cơ sở vận hành.

**Công cụ:** `04-internal/estimate-guide.md` — estimate đi từ cost-driver (parameter khách) → activity → nhân sự → cost → markup. **Đây là tài liệu nội bộ, không gửi khách.**

**Output:** Hợp đồng ký. Onboarding khởi động.

---

## 6. Ranh giới Reusable vs Custom

Ranh giới nằm **đúng tại Cửa Vào (giữa D2 và B0)**.

| | Reusable — làm SẴN 1 lần | Custom — làm RIÊNG mỗi khách |
|---|---|---|
| **Dùng ở** | D0, D1, D2 (trước cam kết) | B0 trở đi (sau cam kết) |
| **Gồm** | company-deck, capability-one-pager, product-catalog, case-studies, comparison-sheet, diagnostic-toolkit, pricing-packages, battle-cards, objection-handling, roi-calculator | Solution Concept (Lớp 1), Commercial Proposal (Lớp 2), Estimate (Lớp 3) |
| **Ai sửa** | Marketing cập nhật định kỳ | Sales/Solution Architect viết cho từng deal |

> **Cảnh báo về template:** `_template.md` chỉ là **khung mục lục + thư viện đoạn văn** — không phải bản điền sẵn. Phần "vì sao giải pháp này hợp với CHÍNH khách này" luôn phải viết tay. Khách cảm nhận được đồ đúc khuôn.

---

## 7. Mô hình hợp tác — "Sở hữu ứng dụng, thuê bao trí tuệ"

Diso bàn giao source code ứng dụng cho khách, nhưng vận hành tiếp phần "lõi trí tuệ" (data pipeline, scoring, crawler). **Cách diễn đạt quyết định việc khách có thấy bị giữ con tin hay không.**

**Đóng gói:** *"Own the app, subscribe the brain"* — khách **sở hữu hoàn toàn** ứng dụng + source code chạy business; phần lõi trí tuệ là một **dịch vụ Diso vận hành liên tục** mà khách **thuê bao** (vì nó cần bảo trì/cập nhật liên tục — là gánh nặng Diso gánh hộ, không phải tài sản Diso giữ).

**Bắt buộc trong Commercial Proposal — trả lời sẵn 3 câu hỏi khó trước khi khách kịp hỏi:**
1. Ngừng hợp tác thì app còn chạy không? → **Còn. App là của khách**, chỉ mất phần cập nhật lõi trí tuệ.
2. Có mua đứt được lõi trí tuệ không? → **Có một mức giá buyout.** (Nêu rằng có, kể cả khi chưa nêu con số.)
3. Dữ liệu của ai? → **Của khách. Luôn luôn.**

> Né 3 câu này = mất deal ở phút chót. Trả lời trước = biến điểm yếu thành điểm tin cậy.

---

## 8. Tóm tắt — bản đồ 1 trang

```
KHÁCH LẠNH                                    KHÁCH ĐÃ NÓNG (vào thẳng B0)
   │                                                      │
   ▼                                                      │
[D0] Sàng lọc ──❌──► gửi one-pager, nuôi dưỡng            │
   │ ✅                                                    │
   ▼                                                      │
[D1] Khám phá (diagnostic-toolkit) ──► problem statement   │
   │  (tối đa 2 buổi)                                      │
   ▼                                                      │
[D2] Giả thuyết giải pháp (company-deck, case-study)       │
   │                                                      │
   ▼  ══ CỬA VÀO: có problem statement xác nhận? ══        │
   │ ✅ ◄──────────────────────────────────────────────────┘
   ▼
[B0] Chốt scope ──► Solution Concept (Lớp 1)
   ▼
[B1] Demo
   ▼
[B2] ROI Workshop
   ▼
[B3] Commercial Proposal (Lớp 2) + Pilot
   ▼
[B4] Đàm phán
   ▼
[B5] Ký ──► (song song) Estimate nội bộ (Lớp 3)
```

---

*Diso Sales Playbook — Quy trình v1.0 | 2026-05-18 | Internal use only.*
