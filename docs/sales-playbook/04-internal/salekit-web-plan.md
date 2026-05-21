# PLAN TRIỂN KHAI — App "salekit" (web hoá Sales Playbook)

> **Tài liệu nội bộ.** Plan kỹ thuật để dựng web cho bộ Sales Playbook.
> **Phiên bản:** v1.0 — 2026-05-18
> **Thay thế:** `website-spec.md` v1.0 (lỗi thời — trỏ `salekit.diso.vn` copy demo-commerce; plan này điều chỉnh).

---

## 1. Quyết định kiến trúc (đã chốt 2026-05-18)

- **App `salekit` MỚI, repo riêng.** Không nhét vào `demo-commerce`, không monorepo.
- **`demo-commerce` để yên** — tiếp tục là demo sản phẩm. salekit nhúng demo qua iframe/link khi cần.
- **Đánh đổi đã chấp nhận:** 2 repo rời → component không share với demo. Chấp nhận được vì salekit chủ yếu render markdown + vài component đặc thù (deck, print layout), khác hẳn demo.

**Vì sao không refactor demo-commerce tại chỗ:** repo đó đang phình loạn — 9 route `traphaco-*` hard-code tên khách, `sync-content.mjs` trỏ nguồn đã xóa, `one-pager/page.tsx` hard-code JSX. Refactor tại chỗ = vừa gỡ mìn vừa giữ app chạy. Làm mới sạch hơn.

---

## 2. Nguyên tắc nền tảng

1. **`sales-playbook/` (markdown) là nguồn DUY NHẤT.** salekit đọc thẳng, render ra web. KHÔNG copy file, KHÔNG commit bản generate. Sửa `.md` → commit → web tự đổi.
2. **3 lớp tài liệu playbook = 3 mức truy cập web** (xem mục 5).
3. **Khách mới = thêm 1 file markdown + 1 entry registry.** KHÔNG copy route. Đây là khác biệt sống còn với demo-commerce hiện tại.
4. **1 nguồn HTML cho cả xem-web lẫn PDF.** Route `(print)` vừa để khách xem online, vừa để puppeteer render PDF.

---

## 3. Tài sản tái dùng từ demo-commerce

Không viết lại từ đầu — `demo-commerce` đã có sẵn (copy sang, dọn lại):

| Tài sản | Đường dẫn trong demo-commerce | Dùng cho |
|---|---|---|
| Deck engine | `src/components/pitch-deck/` (deck-engine, slide-shell, nav-controls, presenter-view, keyboard-hints, progress-bar) | Route `(deck)` |
| PDF generator | `src/lib/pitch-deck/pdf-generator.ts` + `src/app/api/pitch/export/route.ts` | Export PDF (puppeteer-core + @sparticuz/chromium) |
| Slide loader | `src/lib/pitch-deck/load-slides.ts` + pattern `content/pitch-deck/master/slide-*.mdx` | Render deck từ MDX |
| Markdown loader | `src/lib/sales-kit/content.ts` (gray-matter) | Render tài liệu — sửa lại để đọc từ `sales-playbook/` |
| ROI calculator | `src/components/roi/`, `src/lib/roi/` | Route `/roi` |
| Auth | `src/lib/auth/` (jose + bcrypt) | Tầng internal + signed token |

> **KHÔNG tái dùng:** route `[client]/*` (trộn demo + sales), 9 route `traphaco-*`, `sync-content.mjs`, `one-pager/page.tsx` hard-code.

---

## 4. Cấu trúc app salekit

Next.js, dùng **Route Groups** để cô lập 3 loại layout:

```
salekit/
├── app/
│   ├── (portal)/                  → layout có header/nav — đọc thường trên web
│   │   ├── page.tsx               landing (Diso là ai, 3 nhóm sản phẩm)
│   │   ├── products/              7 module Commerce Suite
│   │   ├── pricing/               bản pricing generic (public-safe)
│   │   ├── playbook/[...slug]/    playbook-quy-trinh render dạng docs (internal)
│   │   └── roi/                   ROI calculator (component thật)
│   │
│   ├── (print)/                   → layout TRỐNG, chỉ print CSS A4, không nav
│   │   ├── one-pager/[client]/    render one-pager.md
│   │   └── solution-concept/[client]/  render commerce-suite-solution-concept.md
│   │
│   ├── (deck)/                    → layout fullscreen, phím ←/→, không scroll
│   │   └── pitch-deck/[client]/   render pitch-deck từ MDX slide
│   │
│   ├── internal/                  → sau auth login (sales)
│   │   ├── battle-cards/
│   │   ├── objections/
│   │   └── playbook/
│   │
│   └── api/
│       ├── pdf/                   puppeteer render route (print) → PDF
│       └── auth/                  login
│
├── lib/
│   ├── content.ts                 markdown loader — đọc từ sales-playbook/
│   ├── registry.ts                danh sách khách + config (màu, scope token)
│   └── token.ts                   tạo/verify signed token (jose)
└── content/  (KHÔNG có — đọc thẳng sales-playbook/)
```

**3 route group, vì sao tách:**
- `(print)`: layout chỉ nạp print stylesheet, `@page { size: A4 }`, không header/footer. PDF = puppeteer mở chính route này.
- `(deck)`: layout fullscreen, slide engine, bắt phím. Tái dùng deck engine từ demo-commerce.
- `(portal)`: layout chuẩn có nav.

Mỗi group có `layout.tsx` riêng — CSS không rò sang nhau.

---

## 5. Phân quyền — 3 tầng truy cập

Ánh xạ thẳng 3 lớp tài liệu playbook:

| Tầng | Nội dung | Lớp playbook | Cơ chế | URL |
|---|---|---|---|---|
| **Public** | Landing, products, pricing generic, ROI generic, case studies, pitch deck generic, one-pager generic | `01-reusable/` | Không auth | `salekit.diso.vn/products` |
| **Per-client** | One-pager riêng, Solution Concept, Proposal, ROI đã điền số khách | `02-solution-concept/`, `03-commercial/` per-client | **Signed token trong URL** (jose, có hạn) | `salekit.diso.vn/c/<token>` |
| **Internal** | Battle-cards, objection-handling, playbook quy trình, pricing-packages, plan này | `03-commercial/` (sales-only), `04-internal/` | **Auth login** (bcrypt + jose) | `salekit.diso.vn/internal/*` |

**"Dễ share" giải quyết bằng signed token — KHÔNG bắt khách đăng nhập:**
- Sales tạo link `/c/<token>` (token nhúng `client + scope + exp`), gửi Zalo.
- Khách click xem ngay. Không có token → 404. Lộ link → token hết hạn.
- Đây là mô hình magic-link: vừa dễ share vừa an toàn.

> **Quan trọng:** battle-cards và objection-handling KHÔNG bao giờ ở route khách truy cập được. Hiện demo-commerce để `/sales/battle-cards` là route thường — ai đoán URL cũng xem. Phải vào `internal/`.

---

## 6. Ba định dạng — kỹ thuật từng cái

### One-pager + Solution Concept → PDF (route `(print)`)
- Render markdown từ `sales-playbook/` qua `next-mdx-remote`.
- Layout `(print)/layout.tsx`: print CSS A4, `@page`, không nav.
- PDF: `api/pdf` dùng puppeteer-core + @sparticuz/chromium mở route `(print)` → xuất PDF. 1 nguồn HTML cho cả web lẫn PDF.
- Per-client: đọc `02-solution-concept/<client>-solution-concept.md`; nếu chưa có → fallback bản generic `commerce-suite-solution-concept.md`.

### Pitch deck → web trình chiếu (route `(deck)`)
- Tái dùng deck engine từ demo-commerce.
- Nguồn slide: chuyển `01-reusable/pitch-deck.md` (12 slide markdown) sang dạng MDX slide như `content/pitch-deck/master/slide-*.mdx`.
- Layout fullscreen, phím ←/→, presenter view, export PDF deck.

### Playbook quy trình → docs (route `(portal)/playbook`, internal)
- Render `00-quy-trinh/playbook-quy-trinh.md` + các file dạng docs có sidebar/nav.
- Chỉ trong `internal/` — không cho khách xem quy trình bán hàng.

---

## 7. Lộ trình triển khai — 5 giai đoạn

| GĐ | Nội dung | Output |
|---|---|---|
| **GĐ1 — Khởi tạo** | Tạo repo salekit (Next.js). Dựng 3 route group rỗng + layout. Markdown loader đọc `sales-playbook/`. | App chạy, render được 1 file .md test |
| **GĐ2 — Print (ưu tiên cao nhất)** | Route `(print)/one-pager` + `(print)/solution-concept`. Print CSS A4. `api/pdf` puppeteer. | One-pager + Solution Concept xem web + export PDF |
| **GĐ3 — Deck** | Copy deck engine từ demo-commerce. Chuyển pitch-deck.md → MDX slide. Route `(deck)`. | Pitch deck trình chiếu được + export PDF |
| **GĐ4 — Phân quyền** | `lib/token.ts` signed token. Route `/c/<token>` per-client. `internal/` + auth. | Link share an toàn, tầng internal có auth |
| **GĐ5 — Portal** | Landing, products, pricing generic, ROI calculator. | Portal đầy đủ |

> **Ưu tiên:** GĐ2 trước — đúng yêu cầu gốc (one-pager + solution concept ra PDF). GĐ5 (portal) làm cuối, không chặn việc đi pitch.

---

## 8. Quyết định cần chốt trước GĐ1

1. **Tên repo + domain:** `salekit` / `salekit.diso.vn`? Hay tên khác?
2. **`sales-playbook/` và salekit cùng repo hay khác repo?** Nếu khác: salekit đọc markdown thế nào — git submodule, hay build step kéo nội dung (kéo vào `.gitignore`, không commit)?
3. **Deploy:** Vercel (như demo-commerce) hay nơi khác? Puppeteer cần @sparticuz/chromium nếu serverless.
4. **Bản pricing generic:** mục 5 ghi pricing generic là public — nhưng `pricing-packages.md` hiện có commission/discount (nội bộ). Cần bản pricing rút gọn public-safe, hay để pricing hoàn toàn trong internal?

---

## 9. Cái KHÔNG làm

- Không refactor / viết lại `demo-commerce` — để yên.
- Không monorepo — 2 repo rời, đã chấp nhận đánh đổi.
- Không CMS — nội dung là markdown, sửa = commit.
- Không build per-client bằng cách copy route — chỉ thêm file markdown + registry entry.
- Không expose battle-cards/objection/pricing nội bộ ra route khách.

---

*Diso Sales Playbook — Salekit Web Plan v1.0 | 2026-05-18 | Internal.*
