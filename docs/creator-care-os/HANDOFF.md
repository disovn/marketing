# HANDOFF — Creator Care OS (Diso × AccessTrade)

> **Mục đích file này:** Bàn giao context cho một session Claude Code mới. Đọc file này + thư mục `creator-care-os/` là đủ nắm trạng thái dự án, không cần lịch sử chat cũ.
> **Cập nhật:** 2026-05-18

---

## 1. Dự án là gì

Diso pitch cho AccessTrade (AT) một hệ thống vận hành creator tên **Creator Care OS** — biến quy trình chăm sóc KOC 7-process của AT từ file Excel thành một Operation Portal cho team Care.

**Đây là "Dự án A"** trong cách phân tách của session:
- **Dự án A** (đang làm) — Creator Operation Portal, scope rõ, AT đã muốn (đã trao đổi 9 lần, chốt revenue share, kiến trúc 2-portal).
- **Dự án B** (tương lai, KHÔNG pitch lần này) — mở rộng cross-product sang MCN Shopee / TAP / Booking, Creator Intelligence Layer. Chỉ gài 1 slide gợi mở.

**Audience pitch:** tech leadership AT. Đây là lần đầu AT nghe nghiêm túc về CRM operations (dù đã trao đổi sơ bộ trước).

**Mô hình hợp tác:** Diso xây + vận hành trong giai đoạn nghiệm thu, bàn giao source code cuối dự án. Diso giữ intelligence layer (KHÔNG nói "white-label" với AT). Phần tiền do bộ phận tài chính lo — không đưa con số vào tài liệu/deck.

---

## 2. Các quyết định đã chốt (đừng tranh luận lại trừ khi user yêu cầu)

1. **Mô hình 3 lớp tài liệu** — không gửi AT một tài liệu duy nhất:
   - Lớp 1 (gửi NGAY): Solution Concept — mô tả scope, không tiền, không giờ.
   - Lớp 2 (gửi SAU khi AT gật scope): Commercial Proposal — chưa làm.
   - Lớp 3 (GIỮ nội bộ): Estimate chi tiết, giờ dev, buffer, rate.
2. **Pitch deck ≠ Solution Concept ≠ Estimate** — 3 công cụ, 3 định dạng, 3 thời điểm. Deck để trình chiếu (web), Solution Concept để AT đọc + comment (markdown/PDF), Estimate để Diso tính (Excel).
3. **Lộ trình 4 giai đoạn** — Giai đoạn 1 (Operation Portal, scope lần này) → GĐ2 Sourcing & Hiệu suất → GĐ3 Mở rộng đa mảng → GĐ4 Creator Intelligence. Chỉ cam kết GĐ1; GĐ2-4 là tầm nhìn để dự án "xứng tầm".
4. **Tư duy "4 bước" của user (chia module → chức năng → estimate → báo giá) bị brainstorm phản biện** — thiếu B0 (chốt scope với AT) và B5 (đàm phán); là vòng lặp, không phải đường thẳng. Hiện dự án đang ở **B0/B1** — chưa có xác nhận scope của AT, nên mọi estimate là "estimate trên cát". Việc cần làm là gửi Solution Concept để AT đóng cứng scope.
5. **Không độn scope cho khớp giá đích.** Scope + giá trị quyết định giá, không phải ngược lại. "2 sprint" không nhỏ — đừng phồng. Muốn dự án to hơn → mở Dự án B (thật), không phồng Dự án A (giả).
6. **8 module:** M0 Core/Nền tảng (tách riêng) + 7 module ánh xạ 7-process KOC.

---

## 3. Các file đã tạo — vị trí & mục đích

> **LƯU Ý:** thư mục đã đổi tên `creator-vn/` → `creator-care-os/`. Mọi đường dẫn dưới đây là hiện hành.

### Trong `accesstrade-projects/docs/creator-care-os/`
| File | Mục đích | Trạng thái |
|---|---|---|
| `pitch-deck.md` | Pitch deck bản markdown (12 slide, nội dung + speaker note) | Xong |
| `solution-concept.md` | Lớp 1 — scope gửi AT. Import Google Docs cho AT comment. Mở đầu là "Lời ngỏ" giọng thư | Xong |
| `solution-concept.html` | Bản in PDF của solution-concept (trang bìa + style A4). Mở browser → Ctrl+P → Save PDF | Xong |
| `estimate.csv` | Bảng estimate 35 chức năng con — GIỮ NỘI BỘ Diso | Có (user đã chỉnh) |
| `concept-and-estimate.md` | Tài liệu nội bộ: module + estimate + khung báo giá 3 dòng tiền | **ĐÃ MẤT** — không còn trong thư mục (2026-05-18). Cần hỏi user: xoá hay đổi tên? |

### Pitch deck web app — repo `accesstrade-projects/demo-commerce-pitch/`
- Route: `/creator-ops/pitch` (index) + `/creator-ops/pitch/slide-N`
- Files: `src/lib/creator-ops-deck.ts` (data 13 slide), `src/components/creator-ops/slide-view.tsx` (renderer + 2 SVG: tam giác COS, 2-portal), `src/components/creator-ops/deck-engine.tsx`
- Tone: teal/emerald. Đã build sạch, đã commit (`5617cc1`) và push branch `release`.
- Pitch Hub (`src/app/page.tsx`) có card "Creator Care OS".

---

## 4. Tài liệu nguồn (AT cung cấp / Diso brainstorm)

- `context/slide-2.md` — slide AT bán COS cho brand (tam giác Traffic-Convert-Retention). AT CUNG CẤP.
- `context/data-commitment.md` — cam kết dữ liệu influence-meter. Diso viết. **Lưu ý: ghi sai "5.000 creator/tuần" — số đúng là 2.000 creator/tháng.**
- `resources/koc-management-process-v2.md` — quy trình 7-process KOC. Nền tảng của toàn bộ scope.
- `resources/vip-criteria.md` — tiêu chí 5 tier.
- `resources/pipeline-tracking/` — data thật 10 creator + mô hình 3 lớp (Lifecycle/Campaign/Tier).
- `.bmad/brainstorming/at-context-and-business-model-2026-05-04.md` — 9 lần chat với AT, business model, revenue share.
- `roadmap/` — roadmap Diso tự vẽ, **Phase 1 đã bỏ** — không dùng.

---

## 5. Bằng chứng năng lực dùng trong pitch (số chính xác)

- **OpsHub** (`influencer-platform/opshub/`) — platform review tập trung Diso build & vận hành cho 3 dự án. Số: nhân sự manual **10 → 3 người**, throughput **10K → 50K video** không thêm người. 3-tier pipeline Auto → AI (Gemini) → Human.
- **influence-meter** — hạ tầng dữ liệu creator, chạy production cho dashboard Techcombank, Metric POC **2.000 creator/tháng**.
- Diso **KHÔNG sở hữu** Ambassador codebase — chỉ vận hành công nghệ cho nó nên am hiểu. Đừng claim ownership.

---

## 6. Việc còn lại / chưa làm

| Việc | Ghi chú |
|---|---|
| Slide "Lộ trình 4 giai đoạn" trong deck web | Deck hiện dừng ở 2 sprint — chưa khớp mục 4 của solution-concept. Nên thêm để deck + tài liệu kể cùng câu chuyện. |
| Commercial Proposal (Lớp 2) | Chờ AT gật scope mới làm. |
| Nâng độ chính xác Sprint 2 estimate | Hiện ±40% rough. Cần buổi scoping riêng. |
| Làm rõ lệch lịch Sprint 1 với AT | AT từng nói "1 tháng", estimate ra ~2 tháng. Phải align trước khi ký. |
| `concept-and-estimate.md` mất tích | Xác nhận với user: xoá có chủ đích hay cần khôi phục. |

---

## 7. Cách session mới bắt đầu

Mở session Claude Code mới trong thư mục `diso`, câu đầu:

```
Đọc accesstrade-projects/docs/creator-care-os/HANDOFF.md để nắm context
dự án Creator Care OS. Tôi muốn tiếp tục: [việc cụ thể].
```

Memory tự động load (MEMORY.md + project_ambassador_workflow, project_opshub_platform...) — không cần nhắc lại.
