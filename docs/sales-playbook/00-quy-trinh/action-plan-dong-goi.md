# ACTION PLAN — Đóng gói Commerce Suite cho ông Founder đi pitch

> **Bối cảnh:** Cuộc họp 2026-05-11 với anh Hưng (Founder/Chủ tịch — quan hệ rộng, là sale channel của Diso). Anh Hưng yêu cầu action ngay: *"đóng gói product — concept, giá cả, chi phí — để đi nói với khách"*. Anh nói thẳng: *"khách rất cần hệ thống TMĐT, nhưng mình có demo đâu, có đề xuất gì đâu."*
> **Mục tiêu file này:** Liệt kê đúng artifact cần ra, thứ tự, ai làm gì — để duyệt trước khi viết nội dung.
> **Phạm vi:** CHỈ Diso Commerce Suite. (Mua sắm hoàn tiền: chưa có định hướng — không nằm trong plan này. Ambassador: đã là 1 trụ trong Commerce Suite.)
> **Ngày:** 2026-05-18

---

## 1. Anh Hưng đòi gì — trích nguyên văn

| Trích | Hàm ý cho action |
|---|---|
| *"Phải có một cái list action ngay, action một là câu chuyện product — đóng gói thôi."* | Không sản xuất mới ồ ạt. Gom + đồng bộ thứ đã có. |
| *"Đóng gói để nói với người ta concept, tính toán giá cả, chi phí — người ta chốt mình phải chạy."* | Bộ artifact phải đủ để trả lời "giải pháp là gì" + "bao nhiêu tiền". |
| *"Mình có demo đâu, có đề xuất cái gì đâu."* | Cần thứ TRÌNH BÀY được + thứ ĐỀ XUẤT được (Solution Concept). |
| *"Vĩnh phải làm ngay version mới về product... tổng hợp, lượm lặt, đóng gói."* | Việc của Vĩnh: đóng gói, không phải build. |
| *"Khách hàng không phải ông AT — mà là khách của AT"* (Trafalgar, các bank). | Artifact phải pitch được cho khách cuối, qua AT giới thiệu. |

**Kết luận:** Anh Hưng cần một **bộ artifact ông cầm đi gặp khách** — không phải thêm tài liệu nội bộ. Playbook (đã xong) là *quy trình*; bộ này là *vũ khí* gắn vào quy trình đó.

---

## 2. Bốn artifact cần ra — và hiện trạng thật

Ông Founder đi pitch cần 4 lớp của **cùng một câu chuyện Commerce Suite**, dùng ở 4 thời điểm khác nhau trong quy trình playbook:

| # | Artifact | Dùng ở bước | File hiện có | Trạng thái thật |
|---|---|---|---|---|
| A | **Pitch deck** | D2 / B1 — ông trình chiếu | `marketing/docs/pitch-deck.md` | ⚠️ v1.0 (10/03) — **lỗi thời**: dùng "5 trụ cột", product-catalog mới dùng "7 module". Thiếu slide quy trình/lộ trình khớp playbook. |
| B | **One-pager** | D0 / D1 — gửi trước, để lại | `marketing/docs/one-pager.md` | ⚠️ v1.0 (10/03) — cùng lỗi "5 trụ cột". Cần đồng bộ. |
| C | **Solution Concept** | B0 — khách đọc + comment | Chỉ có `02-solution-concept/_template.md` (trống) | ❌ **Khoảng trống lớn nhất.** Chưa có bản đóng gói sẵn cho Commerce Suite. |
| D | **Bảng giá / ước tính** | B2 / B3 | `03-commercial/pricing-packages.md` | ✅ Khá đủ — 4 gói Launch/Growth/Scale/Enterprise. Chỉ cần rà + làm bản rút gọn cho khách. |

> **Nhận định:** 3/4 đã tồn tại. Việc thật KHÔNG phải viết từ đầu — mà là: lấp khoảng trống C, đồng bộ A+B+D về cùng một câu chuyện, đóng gói thành bộ gọn. Đúng tinh thần anh Hưng: *"đóng gói thôi, cần gì làm vội."*

---

## 3. Vấn đề phải xử lý trước: "5 trụ cột" vs "7 module"

Tài liệu Diso hiện **không nhất quán** — đây là rủi ro: ông Founder pitch deck nói 5, khách đọc catalog thấy 7, mất uy tín.

| Nguồn | Cách chia | Ngày |
|---|---|---|
| pitch-deck.md, one-pager.md | **5 trụ cột**: Website / Affiliate / Vận hành / Reseller / Đại sứ | 10/03 |
| product-catalog.md (đã vào playbook) | **7 module**: Storefront / ZaloApp / Affiliate / Reseller / Ambassador / Operations / CRM | 12/05 |
| product-architecture.md (nội bộ) | **7 module** nhóm 3 lớp (Kênh bán / Đội ngũ bán / Nền tảng) | 09/04 |

**Quyết định cần chốt (xem mục 6 — câu hỏi cho Vĩnh):** lấy chuẩn 7 module mới nhất, cập nhật pitch-deck + one-pager theo. Không để 2 cách chia song song.

---

## 4. Thứ tự action — 4 bước

Sắp theo nguyên tắc: lấp khoảng trống lớn nhất trước, đồng bộ sau, đóng gói cuối.

### Bước 1 — Chốt chuẩn sản phẩm (nửa ngày)
- Chốt: 7 module là chuẩn duy nhất. Khoá lại tên gọi từng module.
- Output: 1 quyết định ngắn, ghi vào product-catalog.md là "bản chuẩn".

### Bước 2 — Viết Solution Concept cho Commerce Suite (khoảng trống lớn nhất)
- Từ `02-solution-concept/_template.md`, tạo **bản đóng gói sẵn** cho Commerce Suite: `02-solution-concept/commerce-suite-solution-concept.md`.
- Đây KHÔNG phải bản cho 1 khách cụ thể — là bản "mẫu đóng gói" để khi có khách thật (Trafalgar...) chỉ cần cá nhân hoá phần problem statement + phạm vi.
- Không có giá. Mô tả theo kết quả. Có bảng "Xác nhận phạm vi".

### Bước 3 — Đồng bộ pitch deck + one-pager
- Cập nhật `pitch-deck.md`: 5→7 module, thêm slide lộ trình giai đoạn khớp playbook, rà số liệu (11+ → 17+ brand theo case-studies).
- Cập nhật `one-pager.md`: đồng bộ theo deck.
- Cân nhắc: chuyển bản chuẩn vào `01-reusable/` để gom về playbook (hiện đang ở `marketing/docs/`).

### Bước 4 — Hướng dẫn xử lý câu hỏi giá (KHÔNG làm pricing 1-pager đưa khách)
- **Quyết định (2026-05-18):** Theo nguyên tắc neo #2 của playbook — không đưa giá ở giai đoạn concept. Giá cụ thể nằm trong **Commercial Proposal riêng từng khách** (Lớp 2), làm ở bước B3 sau khi chốt scope.
- `pricing-packages.md` giữ nguyên là tài liệu **nội bộ** — Sales/Founder dùng để định khung gói, KHÔNG đưa khách.
- Việc cần làm: viết 1 đoạn ngắn trong tài liệu bàn giao, hướng dẫn ông Founder trả lời khi khách hỏi giá sớm — đại ý *"để báo giá đúng, Diso cần chốt phạm vi trước; sau buổi này Diso gửi mô tả giải pháp, anh/chị rà phạm vi, rồi Diso báo giá chính xác."* Đây chính là cách "không estimate trên cát".

---

## 5. Bộ artifact bàn giao cho ông Founder — hình dung cuối

Sau các bước trên, ông Founder có một **"sales folder"** cầm đi gặp khách Commerce Suite — **3 artifact** (giá KHÔNG nằm trong bộ này):

| Thứ tự dùng | Artifact | Mục đích trong buổi gặp |
|---|---|---|
| 1. Gửi trước | One-pager (PDF) | Khách scan 17 giây, quyết định có gặp không |
| 2. Trình bày | Pitch deck | Ông Founder kể câu chuyện trong buổi gặp |
| 3. Để lại / gửi sau | Solution Concept (generic Commerce Suite) | Khách đọc kỹ, comment phạm vi |
| (khi khách hỏi giá) | — không có tài liệu — | Dùng câu trả lời chuẩn ở Bước 4: hoãn giá tới sau khi chốt scope |

> Ông Founder không cần học quy trình playbook. Ông chỉ cần 3 file này + 1 câu trả lời chuẩn khi bị hỏi giá. Giá chính thức là việc của bước B3 (Commercial Proposal), làm riêng từng khách.

---

## 6. Câu hỏi cần Vĩnh chốt trước khi viết nội dung

1. ~~**Chuẩn sản phẩm:** Khoá 7 module?~~ → **ĐÃ CHỐT (2026-05-18): 7 module là chuẩn duy nhất.**
2. ~~**Demo:**~~ → **ĐÃ CHỐT (2026-05-18): demo ở repo `demo-commerce/`** (không phải statistic.diso.vn). Vĩnh sẽ review & hiệu chỉnh lại demo. Solution Concept cứ tham chiếu demo, không chờ.
3. ~~**Solution Concept generic hay Traphaco?**~~ → **ĐÃ CHỐT (2026-05-18): bản generic trước.** Làm bản đóng gói sẵn cho Commerce Suite, sau đó cá nhân hoá cho từng khách.
4. ~~**Pricing công khai?**~~ → **ĐÃ CHỐT (2026-05-18): không đưa giá ở concept.** Theo nguyên tắc neo #2 — giá nằm trong Commercial Proposal riêng từng khách (B3). Không làm pricing 1-pager đưa khách.

---

## 7. Cái KHÔNG làm trong plan này

- Không đụng tới Mua sắm hoàn tiền (chưa có định hướng — chờ Vĩnh).
- Không build sản phẩm mới — chỉ đóng gói. (Anh Hưng: *"cần gì đã làm vội đâu"*.)
- Không tạo artifact riêng cho Ambassador — nó là 1 trụ trong Commerce Suite.
- Không phồng scope cho "xứng tầm" — nguyên tắc neo #4 của playbook.

---

*Diso Sales Playbook — Action Plan Đóng gói v1.0 | 2026-05-18 | Internal.*
