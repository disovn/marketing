# DISO SALES PLAYBOOK

> **Bộ tài liệu hoàn chỉnh để giới thiệu & bán sản phẩm Diso cho khách hàng mới.**
> Từ first-touch (khách lạnh) đến ký hợp đồng.
> **Phiên bản:** v1.0 — 2026-05-18
> **Đối tượng:** CEO, Sales, Solution Architect, Customer Success.
> **Thay thế:** thư mục `sales-kit/` cũ (đã gộp toàn bộ vào đây).

---

## Đọc gì trước

1. **Bắt buộc đọc đầu tiên:** [00-quy-trinh/playbook-quy-trinh.md](00-quy-trinh/playbook-quy-trinh.md) — quy trình xương sống. Mọi file khác chỉ là công cụ dùng tại một bước của quy trình này.
2. Sau đó quay lại README này để biết file nào dùng ở bước nào.

---

## Playbook này là gì

Diso định vị là **tổng thầu e-commerce** (mô hình 3C: Công nghệ + Cộng đồng + Chuyên gia). Playbook đóng gói toàn bộ cách tiếp cận một khách hàng thành **một quy trình 2 pha** — tổng quát hoá từ bộ khung đã dùng thành công cho dự án Creator Care OS (AccessTrade).

**Vấn đề playbook giải:** Diso có nhiều sản phẩm và năng lực. Rải hết ra trước mặt khách mới → khách rối, không mua. Playbook giảm sự phức tạp đó xuống còn một quy trình rõ ràng + cách đóng gói nhất quán.

---

## Sơ đồ quy trình

```
KHÁCH LẠNH                                  KHÁCH ĐÃ NÓNG
   │                                        (vào thẳng B0)
   ▼                                              │
┌─ PHA 1: DISCOVERY ──────────────────────┐        │
│  Công cụ: tài liệu LÀM SẴN (01-reusable)│        │
│                                          │        │
│  D0 Sàng lọc ──❌──► nuôi dưỡng          │        │
│   │ ✅                                   │        │
│  D1 Khám phá nỗi đau ──► problem stmt    │        │
│   │  (diagnostic-toolkit, tối đa 2 buổi) │        │
│  D2 Giả thuyết giải pháp                 │        │
└───┬──────────────────────────────────────┘        │
    │  ══ CỬA VÀO: có problem statement? ══          │
    │ ✅ ◄────────────────────────────────────────────┘
    ▼
┌─ PHA 2: SOLUTIONING ─────────────────────┐
│  Công cụ: tài liệu VIẾT RIÊNG (custom)   │
│                                           │
│  B0 Chốt scope  ──► Solution Concept (L1) │
│  B1 Demo                                  │
│  B2 ROI Workshop                          │
│  B3 Commercial Proposal (L2) + Pilot      │
│  B4 Đàm phán                              │
│  B5 Ký  ──► (song song) Estimate (L3)     │
└───────────────────────────────────────────┘
```

L1/L2/L3 = 3 lớp tài liệu. Xem chi tiết trong playbook-quy-trinh.md mục 2.

---

## Cấu trúc thư mục — file nào dùng ở bước nào

```
sales-playbook/
├── README.md                       ← Bạn đang ở đây
│
├── 00-quy-trinh/
│   └── playbook-quy-trinh.md        ← XƯƠNG SỐNG — đọc đầu tiên
│
├── 00-quy-trinh/
│   ├── playbook-quy-trinh.md        ← XƯƠNG SỐNG — đọc đầu tiên
│   └── action-plan-dong-goi.md      ← Action plan đóng gói Commerce Suite (theo họp 11/05 với Founder)
│
├── 01-reusable/   ← Làm SẴN 1 lần, dùng cho mọi khách (Pha 1: D0-D2)
│   ├── diagnostic-toolkit.md        ← D0+D1 — bộ câu hỏi sàng lọc & khám phá nỗi đau
│   ├── product-catalog.md           ← D2 — 7 module Diso Commerce Suite
│   ├── pitch-deck.md                ← D2/B1 — deck trình chiếu (v2.0, 7 module/3 nhóm)
│   └── one-pager.md                 ← D0/D1 — A4 gửi trước (v2.0, đồng bộ deck)
│
├── 02-solution-concept/   ← Lớp 1 — viết RIÊNG mỗi khách (Pha 2: B0)
│   ├── _template.md                 ← Khung Solution Concept rỗng (cho giải pháp bất kỳ)
│   ├── commerce-suite-solution-concept.md  ← Bản đóng gói SẴN cho Commerce Suite
│   └── <ten-khach>-solution-concept.md     ← file thật, cá nhân hoá từ bản trên
│
├── 03-commercial/   ← Lớp 2 + công cụ chốt deal (Pha 2: B1-B4)
│   ├── _proposal-template.md        ← B3 — khung Commercial Proposal (có giá, 2 dòng tiền)
│   ├── pricing-packages.md          ← B2-B3 — 4 gói Launch/Growth/Scale/Enterprise
│   ├── battle-cards.md              ← B1 — 1 trang/gói cho sales cầm đi pitch
│   ├── objection-handling.md        ← B1-B4 — 15 câu khách hỏi + cách trả lời
│   └── roi-calculator-generic.md    ← B2 — công cụ tính ROI trong workshop
│
└── 04-internal/   ← GIỮ NỘI BỘ — không gửi khách
    └── website-spec.md              ← Spec build portal salekit.diso.vn
```

> **Còn thiếu (sẽ bổ sung):** `01-reusable/company-deck.md`, `01-reusable/capability-one-pager.md`, `04-internal/estimate-guide.md`. Hiện tạm dùng các file ở mục "Tài liệu liên quan" bên dưới.

---

## Bảng tra nhanh — đang ở bước nào, dùng file nào

| Bước | Tên | File cần | Lớp tài liệu |
|---|---|---|---|
| D0 | Sàng lọc khách | `01-reusable/diagnostic-toolkit.md` (Phần A) | — |
| D1 | Khám phá nỗi đau | `01-reusable/diagnostic-toolkit.md` (Phần B-D) | — |
| D2 | Giả thuyết giải pháp | `product-catalog.md`, `pricing-packages.md` (sơ bộ), case studies | — |
| **CỬA VÀO** | Khách xác nhận problem statement? | — | — |
| B0 | Chốt phạm vi | `02-solution-concept/_template.md` → file riêng khách | **Lớp 1** |
| B1 | Demo | `battle-cards.md`, `objection-handling.md`, demo site | — |
| B2 | ROI Workshop | `roi-calculator-generic.md`, `pricing-packages.md` | — |
| B3 | Đề xuất thương mại + Pilot | `03-commercial/_proposal-template.md` → file riêng khách | **Lớp 2** |
| B4 | Đàm phán | `objection-handling.md`, discount policy trong `pricing-packages.md` | — |
| B5 | Ký + Estimate nội bộ | (estimate-guide.md — sẽ bổ sung) | **Lớp 3** |

---

## 4 nguyên tắc neo — in lên tường

1. **Công sức Diso tỉ lệ với cam kết của khách.** Tài liệu viết tay (Lớp 1, 2) chỉ làm sau Cửa Vào.
2. **Không estimate / Solution Concept "trên cát".** Chốt scope trước, báo giá sau.
3. **Một khách, một câu chuyện, một thời điểm.** Không pitch 2 nhóm giải pháp song song.
4. **Không phồng scope cho khớp giá.** Muốn dự án to hơn → mở giai đoạn sau (thật).

---

## Tài liệu liên quan ngoài playbook

| Tài liệu | Vị trí | Dùng khi |
|---|---|---|
| One-Pager A4 | [../one-pager.md](../one-pager.md) | D0/D1 — gửi Zalo/email trước gặp |
| Company Vision | [../vision.md](../vision.md) | D2 — pitch tầm nhìn cho C-level |
| Comparison Sheet | [../comparison-sheet.md](../comparison-sheet.md) | B1/B4 — khách so sánh đối thủ |
| Case Studies | [../case-studies.md](../case-studies.md) | D2/B1 — bằng chứng năng lực |
| Pitch Deck Commerce | [../pitch-deck.md](../pitch-deck.md) | D2/B1 — trình chiếu |
| Vertical: Traphaco (dược) | [../traphaco/](../traphaco/) | Khách ngành dược — ví dụ một deal đã chạy hết quy trình |
| Vertical: Trường Sinh | [../truongsinh/](../truongsinh/) | Khách ngành dược/health |
| **Mẫu Solution Concept thật** | [../creator-care-os/solution-concept.md](../creator-care-os/solution-concept.md) | Tham khảo — bản Lớp 1 đã viết cho AccessTrade |
| Chiến lược sản phẩm Diso | [../internal/product-architecture.md](../internal/product-architecture.md) | **Nội bộ** — cost-driver, roadmap, mô hình 3C |
| Demo site | https://statistic.diso.vn | B1 — show live |

> **Lưu ý về link:** các file trong `03-commercial/` (battle-cards, objection-handling, pricing-packages, roi-calculator) liên kết chéo nhau bằng tên file — vẫn đúng vì cùng thư mục. Link tới `product-catalog.md` trong các file này nay lệch một cấp (file đã chuyển sang `01-reusable/`); sửa khi cập nhật từng file.

---

## Bằng chứng năng lực — dùng trong Discovery & Demo

Diso bán e-commerce, nhưng năng lực **build platform thật** là điểm tin cậy mạnh nhất. Các sản phẩm influencer-platform KHÔNG bán riêng — chúng là bằng chứng "Diso làm được", và là module nâng cao trong gói Scale/Enterprise:

- **Diso Ambassador** — đã production cho 17+ brand (TPBank, HDBank, VPBank, Yody, Anker...).
- **OpsHub** — platform vận hành Diso tự build & vận hành; giảm nhân sự thủ công, tăng nhiều lần sản lượng không thêm người.
- **influence-meter** — hạ tầng dữ liệu creator, chạy production cho dashboard Techcombank.

> Số liệu chính xác: kiểm tra [../case-studies.md](../case-studies.md) trước khi đưa vào tài liệu khách.

---

## Changelog

| Version | Date | Changes |
|---|---|---|
| v1.0 | 2026-05-18 | Khởi tạo. Gộp sales-kit cũ. Thêm quy trình 2 pha (D0-D2 + B0-B5), 3 lớp tài liệu, diagnostic-toolkit, Solution Concept + Commercial Proposal template. |

---

*Diso Sales Playbook — README v1.0 | 2026-05-18 | Internal use only. Confidential.*
