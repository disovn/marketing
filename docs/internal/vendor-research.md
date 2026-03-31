# DISO — VENDOR RESEARCH

> **Tài liệu nội bộ** — Phục vụ Track 3 trong [Execution Layer](./diso-execution-layer.md)
> Version: 1.0 | Ngày: 2026-03-31
> Mục đích: Đánh giá và chọn vendor cho 6 hạng mục cần thiết để triển khai mô hình Diso Commerce

---

## Tổng quan

Diso theo mô hình Apple — không tự build mọi thứ, mà tích hợp vendor tốt nhất cho mỗi hạng mục. Cần tìm vendor cho 6 mảng:

| # | Hạng mục | Mức độ | Vai trò |
|---|---------|--------|---------|
| 1 | E-commerce Platform | **CRITICAL** | "Phần cứng" — nền tảng Web + Zalo Mini App |
| 2 | Content Production | **CRITICAL** | "Nguyên liệu" — video, ảnh, copy cho traffic |
| 3 | Vận hành sàn TMĐT | Quan trọng | Quản lý shop Shopee/TikTok cho khách |
| 4 | Logistics | Quan trọng | Vận chuyển + COD |
| 5 | Payment Gateway | Quan trọng | Thanh toán online |
| 6 | Affiliate/KOL | Hỗ trợ | Tuyển + quản lý đội bán hàng |

---

## 1. E-commerce Platform

### Yêu cầu của Diso
- Template website chuẩn Shopee-style, deploy nhanh
- Hỗ trợ hoặc có thể mở rộng sang Zalo Mini App
- API mở để tích hợp module Diso (Ambassador, Affiliate, CRM)
- Đã tích hợp sẵn thanh toán + vận chuyển Việt Nam
- Giá hợp lý cho SME (< 5 triệu/tháng)

### So sánh vendor

| Tiêu chí | Haravan | Sapo | Pancake | Nhanh.vn | Medusa.js |
|----------|---------|------|---------|----------|-----------|
| **Loại** | SaaS | SaaS | SaaS (social commerce) | SaaS | Open-source (self-hosted) |
| **Giá** | ~5,900đ/ngày (~180K/tháng) | ~5,900đ/ngày (~180K/tháng) | TBD | 300K+/tháng | Free (hosting tính riêng) |
| **Template website** | Đẹp, nhiều lựa chọn | Vừa phải | Không focus website | Yếu, UI cũ | Không có sẵn (headless) |
| **Zalo Mini App** | Có qua Zalo Shop integration | Có Sapo Go (builder sẵn) | **Native Zalo Mini App** | Không | Không (phải tự build) |
| **API** | REST API, tốt | Có, giới hạn hơn Haravan | Có | Có, giới hạn | Hoàn toàn mở, headless |
| **Tích hợp sàn** | Shopee, Lazada, TikTok sync | Shopee, Lazada, TikTok sync | Facebook, Zalo, Instagram | Shopee, Lazada, Tiki | Không có sẵn |
| **Payment/Logistics VN** | Tích hợp sẵn (VNPay, GHN, GHTK...) | Tích hợp sẵn | Tích hợp cơ bản | Tích hợp sẵn | Phải tự tích hợp |
| **Custom khả năng** | Giới hạn trong template | Giới hạn | Giới hạn | Giới hạn | Không giới hạn |
| **Thời gian setup** | 1-3 ngày | 1-3 ngày | 1-3 ngày | 3-5 ngày | 2-4 tuần |
| **Merchant base** | 60K+ merchants | 230K+ users | Phổ biến social commerce | Trung bình | Global, ít ở VN |
| **Phù hợp Diso** | **Cao (MVP)** | **Cao (MVP + Zalo)** | **Cao (Zalo native)** | Trung bình | **Cao (giai đoạn sau)** |

### Đánh giá chi tiết

**Haravan** — Ứng viên #1 cho MVP
- Nền tảng e-commerce SaaS lớn nhất Việt Nam
- Template đẹp, có sẵn omnichannel (sync Shopee/Lazada/TikTok)
- Tích hợp sẵn GHN, GHTK, VNPay, MoMo — không cần code thêm
- API REST cho phép tích hợp module Diso
- Hạn chế: closed-source, custom bị giới hạn bởi nền tảng

**Sapo** — Ứng viên #1 nếu cần Zalo Mini App
- Có **Sapo Go** — builder Zalo Mini App có sẵn, đây là điểm khác biệt lớn
- Giá rẻ hơn Haravan, mạnh cả POS (nếu khách có offline)
- Template website kém đẹp hơn Haravan
- Phù hợp nếu strategy "Zalo Mini App first"

**Pancake** — Ứng viên Zalo Mini App native
- Nền tảng social commerce VN, focus Facebook + Zalo + Instagram
- **Native Zalo Mini App** — đây là điểm khác biệt lớn nhất
- Auto-sync inventory, native ZaloPay payment, Zalo OA messaging
- Không phải full e-commerce platform — bổ sung cho Haravan/Sapo, không thay thế
- Có thể dùng kiến trúc: **Haravan (website) + Pancake (Zalo Mini App sync)**

**Nhanh.vn** — Backup cho quản lý đơn hàng
- Mạnh về quản lý đơn hàng đa kênh (OMS)
- Website builder yếu — không dùng làm frontend
- Có thể dùng kết hợp: Haravan (frontend) + Nhanh.vn (OMS) nếu cần

### Recommendation

| Giai đoạn | Platform | Lý do |
|-----------|----------|-------|
| **MVP (Q2 2026)** | **Haravan** (web) + **Pancake** (Zalo) | Haravan cho website Shopee-style, Pancake cho Zalo Mini App native |
| **MVP alternative** | **Sapo** (web + Zalo via Sapo Go) | Nếu muốn 1 platform duy nhất thay vì 2 |
| **Own platform (Q3-Q4 2026)** | **Medusa.js** | Community lớn nhất (31K stars), plugin ecosystem, production-ready. Xem chi tiết ở [Section 1B](#1b-open-source--self-build--phương-án-tự-chủ-platform) |
| **Backup** | **Vendure** (NestJS) | Nếu cần multi-tenant native (Channels) hoặc ưu tiên NestJS stack |

### Kiến trúc tích hợp — 2 giai đoạn

**Giai đoạn 1 (MVP): SaaS stack**
```
┌─────────────────────────────────────────────────┐
│            DISO COMMERCE STACK — MVP              │
│                                                  │
│  Haravan/Sapo ──────────── Pancake               │
│  (Website e-commerce)      (Zalo Mini App)       │
│       │                         │                │
│       ├── GHN/GHTK (tích hợp sẵn) ── ZaloPay   │
│       ├── VNPay (tích hợp sẵn)    ── Zalo OA   │
│       └── Shopee/TikTok sync                     │
│                    │                             │
│            ┌───────┴───────┐                     │
│            │  DISO MODULES │  (tích hợp qua API) │
│            │  Ambassador   │                     │
│            │  Affiliate    │                     │
│            │  CRM          │                     │
│            └───────────────┘                     │
└─────────────────────────────────────────────────┘
```

**Giai đoạn 2 (Own platform): Medusa.js stack**
```
┌─────────────────────────────────────────────────┐
│          DISO COMMERCE STACK — OWN PLATFORM      │
│                                                  │
│  Medusa.js (Node.js/TypeScript)                  │
│  REST API + Plugin System                        │
│       │                    │                     │
│       │              ┌─────┴──────┐              │
│       │              │            │              │
│  ┌────┴────┐    Next.js      Zalo Mini App       │
│  │ Plugins │    Storefront   (React-based)       │
│  │ VNPay   │    (Shopee UI)                      │
│  │ ZaloPay │         │                           │
│  │ GHN     │    Clone cho mỗi KH                │
│  │ GHTK    │    (đổi theme/config)              │
│  └─────────┘                                     │
│       │                                          │
│  ┌────┴────────────┐                             │
│  │ DISO MODULES    │  (Medusa plugins)           │
│  │ Ambassador      │                             │
│  │ Affiliate       │                             │
│  │ CRM             │                             │
│  │ Anti-fraud      │                             │
│  └─────────────────┘                             │
│                                                  │
│  Multi-tenant: Schema isolation / RLS            │
│  1 instance → 10-50 KH                          │
└─────────────────────────────────────────────────┘
```

### Action items
- [ ] Đăng ký trial Haravan + Sapo — test API, template, xem clone Shopee UI được không
- [ ] Liên hệ Pancake — hỏi Zalo Mini App capability, API, pricing, integration options
- [ ] Hỏi Haravan: bảng giá partner/agency (white-label hoặc volume discount)
- [ ] Hỏi Sapo: khả năng Sapo Go cho Zalo Mini App (template, limitation)
- [ ] Đánh giá: API Haravan/Sapo có đủ để tích hợp module Ambassador, Affiliate không?
- [ ] So sánh 2 kiến trúc: (Haravan + Pancake) vs (Sapo all-in-one) → chọn 1

---

## 1B. Open-source & Self-build — Phương án tự chủ platform

### Tại sao cần xem xét?

SaaS (Haravan/Sapo) nhanh nhưng:
- **Vendor lock-in** — phụ thuộc platform, họ tăng giá hoặc đổi API thì mình chịu
- **Custom giới hạn** — không thể tích hợp sâu module Diso (Ambassador, Affiliate, CRM)
- **Multi-tenant không có** — mỗi KH = 1 account riêng, quản lý phức tạp khi scale 10+ KH
- **Margin bị ăn** — mỗi KH phải trả phí SaaS, dù nhỏ nhưng cộng dồn

Open-source cho phép Diso **own platform**, phục vụ nhiều KH từ 1 codebase, tích hợp module riêng native.

### So sánh open-source platforms

| Tiêu chí | Vendure | Medusa.js | Saleor | WooCommerce | Bagisto |
|----------|---------|-----------|--------|-------------|---------|
| **Tech stack** | **NestJS**, TypeScript, PostgreSQL | Node.js, TypeScript, PostgreSQL | Python, Django, GraphQL | PHP, WordPress | Laravel (PHP), Vue.js |
| **API** | **GraphQL** | REST (+ GraphQL tương lai) | GraphQL | REST | REST |
| **GitHub stars** | ~6K | ~28K | ~21K | ~9K (core) | ~16K |
| **Multi-tenant** | **Channels (native)** | Không native (cần custom) | Có (Saleor Cloud) | WordPress Multisite (phức tạp) | Có |
| **Plugin system** | **NestJS modules** (team Diso đã quen) | Plugin system tốt | Apps/webhooks | 60K+ plugins | Extensions |
| **VN payment/logistics** | Phải build plugin | Phải build plugin | Phải build | **Có sẵn** (VNPay, GHN) | Ít |
| **Zalo Mini App** | Headless → build frontend riêng | Headless → build frontend riêng | Headless → build frontend riêng | Khó | Khó |
| **Time to MVP** | 8-12 tuần | 4-8 tuần | 6-10 tuần | 1-2 tuần | 4-8 tuần |
| **Match stack Diso** | **Hoàn hảo** (NestJS) | Tốt (TypeScript) | Không (Python) | Không (PHP) | Không (PHP) |
| **Phù hợp Diso** | **Cao nhất** | Cao | Thấp | Thấp | Thấp |

### Deep dive: Medusa.js — Lựa chọn cho own platform

**Tại sao Medusa.js?**

1. **Community lớn nhất** — 31K GitHub stars, growing 33%/tháng. Gặp vấn đề → dễ tìm giải pháp, có người đã làm trước
2. **Plugin ecosystem phong phú** — nhiều plugins sẵn (Stripe, PayPal, S3, SendGrid...), pattern rõ ràng để build VN plugins
3. **Node.js/TypeScript thuần** — learning curve thấp, dễ onboard dev mới
4. **Production-ready** — nhiều case study thực tế, Medusa v2 (2024-2025) cải tiến lớn về architecture
5. **REST API mạnh** — đơn giản, dễ tích hợp với mọi frontend (Next.js, Zalo Mini App, mobile)
6. **Admin dashboard built-in** — React-based, extensible

**Effort estimate (Medusa.js):**

| Việc | Effort | Ghi chú |
|------|--------|---------|
| Setup Medusa + PostgreSQL + Redis | 2-3 ngày | Docker compose |
| Build VNPay payment plugin | 1 tuần | Reuse cho tất cả clients |
| Build GHN shipping plugin | 1 tuần | Reuse |
| Build ZaloPay plugin | 3-5 ngày | Reuse |
| Build GHTK shipping plugin | 3-5 ngày | Reuse |
| Next.js storefront template (Shopee-style) | 2-3 tuần | Medusa có Next.js starter |
| Zalo Mini App frontend (React-based) | 2-3 tuần | Gọi Medusa REST API |
| Tích hợp Diso Ambassador module | 1-2 tuần | Medusa plugin |
| Tích hợp Diso Affiliate module | 1-2 tuần | Medusa plugin |
| Multi-tenant setup (schema isolation) | 1-2 tuần | Custom, phức tạp hơn Vendure Channels |
| **Total** | **10-14 tuần** | **2-3 devs** |

**Hosting estimate:**

| Component | Service | Cost/tháng |
|-----------|---------|-----------|
| Medusa API | VPS 4GB RAM hoặc Railway | 500K-1.5tr |
| PostgreSQL | Managed DB hoặc self-hosted | 300K-1tr |
| Redis | Managed hoặc self-hosted | 200K-500K |
| Next.js frontends (10 clients) | Vercel free tier hoặc VPS | 0-500K |
| **Total** | | **1-3.5tr/tháng** |

1 Medusa instance có thể serve **10-50 clients** qua schema isolation. Cost per client giảm mạnh khi scale.

### Deep dive: Medusa.js — Alternative mạnh (có thể ngang Vendure)

| Tiêu chí | Medusa.js | Vendure |
|----------|-----------|---------|
| **GitHub stars** | ~28-31K (rất active) | ~6K |
| **Community** | Lớn, growing 33%/tháng | Nhỏ hơn nhiều |
| **Plugin ecosystem** | Phong phú hơn | Ít hơn |
| **Stack** | Node.js/TypeScript | NestJS/TypeScript |
| **Multi-tenant** | Custom (schema isolation hoặc RLS) | **Channels (native)** |
| **Learning curve** | Thấp (Node.js thuần) | Cao hơn (NestJS patterns strict) |
| **Production ready** | Cao (nhiều case study) | Trung bình (ít case ở VN/SEA) |
| **API** | REST + GraphQL (coming) | GraphQL native |

**Khi nào chọn Medusa:**
- Ưu tiên community support lớn + nhiều plugins sẵn
- Team prefer Node.js thuần hơn NestJS strict patterns
- Chấp nhận custom multi-tenant (phức tạp hơn nhưng flexible hơn)

**Khi nào chọn Vendure:**
- Ưu tiên cùng stack NestJS với influence-meter (reuse code/patterns)
- Cần multi-tenant native (Channels) — ít effort hơn
- Team đã quen NestJS modules

> **Quyết định: Medusa.js.** Community lớn (31K stars), plugin ecosystem phong phú, Node.js thuần dễ onboard, production-ready. Multi-tenant custom bằng schema isolation — phức tạp hơn Vendure Channels nhưng flexible hơn về lâu dài.

### Phương án self-build (Next.js + NestJS + PostgreSQL)

| Tiêu chí | Chi tiết |
|----------|---------|
| **Time to MVP** | 12-16 tuần (3-4 tháng) |
| **Cost** | 3-5 devs × 3-4 tháng = **300-600 triệu** |
| **Pros** | Full control, exact stack, multi-tenant từ đầu |
| **Cons** | Phải solve cart, checkout, inventory, order management — những thứ open-source đã làm |

**Không recommend** — tốn quá nhiều thời gian reinvent cái đã có. Vendure đã solve 80% bài toán e-commerce, Diso chỉ cần build 20% phần riêng (VN integrations + modules).

### Zalo Mini App SDK

| Tiêu chí | Chi tiết |
|----------|---------|
| **Framework** | React-based (Zalo Mini App Framework) |
| **Payment** | ZaloPay native, VNPay qua webview |
| **Capabilities** | Product catalog, cart, checkout, push notification, Zalo OA |
| **Docs** | developers.zalo.me — tiếng Việt |
| **Kết hợp Vendure** | Zalo Mini App frontend gọi Vendure GraphQL API → full e-commerce trên Zalo |

### So sánh tổng: SaaS vs Open-source vs Self-build

| Tiêu chí | SaaS (Haravan/Sapo) | Open-source (Vendure) | Self-build |
|----------|--------------------|-----------------------|-----------|
| **Time to MVP** | 1-3 ngày | 8-12 tuần | 12-16 tuần |
| **Chi phí Year 1** | 2-5tr (per shop) | 100-200tr (dev + hosting) | 300-600tr |
| **Chi phí Year 3 (10 KH)** | 60-150tr tổng | 160-320tr tổng | 480-860tr tổng |
| **VN integrations** | Có sẵn | Build 1 lần, reuse | Build 1 lần |
| **Multi-tenant** | Không (mỗi KH = 1 account) | **Channels (native)** | Tự thiết kế |
| **Zalo Mini App** | Qua Sapo Go/Pancake (giới hạn) | **Build frontend riêng (full control)** | Build riêng |
| **Vendor lock-in** | **Cao** | Thấp (own code) | Không |
| **Customization** | Giới hạn template | Không giới hạn | Không giới hạn |
| **Module Diso tích hợp** | Qua API (giới hạn) | **Native plugin (NestJS)** | Native |
| **Scale 10→50 KH** | Quản lý 50 accounts riêng | **1 instance, 50 Channels** | Tùy thiết kế |
| **Maintenance** | Vendor lo | Team Diso lo | Team Diso lo |
| **Phù hợp giai đoạn** | **MVP (bây giờ)** | **Scale (Q3 2026+)** | **Không recommend** |

### Cost over 3 years — 10 clients

| | SaaS | Vendure | Self-build |
|---|---|---|---|
| Year 1 | 20-50tr | 100-200tr | 400-700tr |
| Year 2 | 20-50tr | 30-60tr | 40-80tr |
| Year 3 | 20-50tr | 30-60tr | 40-80tr |
| **Total** | **60-150tr** | **160-320tr** | **480-860tr** |
| Cost per client/tháng | 500K-1.25tr | **133K-267K** (giảm theo scale) | 400K-717K |

> **Điểm giao cắt**: Từ KH thứ 5-7, Vendure rẻ hơn SaaS per client. Và quan trọng hơn: **full control, không vendor lock-in, tích hợp module native**.

### Recommendation: Chiến lược 2 giai đoạn

| Giai đoạn | Platform | Lý do |
|-----------|----------|-------|
| **MVP (Q2 2026)** | **Haravan/Sapo** + **Pancake** | Validate business model trước. Đừng build tech khi chưa có KH |
| **Own platform (Q3-Q4 2026)** | **Medusa.js** | Community lớn nhất (31K stars), plugin ecosystem, production-ready. Multi-tenant qua schema isolation |
| **Backup** | **Vendure** (NestJS) | Nếu cần multi-tenant native (Channels) hoặc muốn reuse NestJS patterns |
| **Không làm** | Self-build from scratch | Tốn 3-4 tháng reinvent cái đã có |

### Action items (cho giai đoạn 2 — chuẩn bị từ bây giờ)
- [ ] Team tech hands-on **Medusa.js**: clone repo, chạy demo, tạo product + order
- [ ] Prototype: build 1 VNPay payment plugin cho Medusa (đánh giá plugin system)
- [ ] Test multi-tenant: thử schema isolation trên Medusa (1 instance, 2 shops)
- [ ] Explore Zalo Mini App SDK: tạo mini app skeleton gọi Medusa REST API
- [ ] Đánh giá Medusa Next.js starter: có thể clone thành Shopee-style template không?

### Tài liệu research chi tiết

Researcher đã tạo bộ tài liệu đầy đủ tại `plans/reports/`:

| File | Nội dung | Đọc trong |
|------|---------|-----------|
| `executive-summary-ecommerce-decision.md` | Tóm tắt quyết định cho leadership | 10 phút |
| `ecommerce-platform-comparison-matrix.md` | Bảng so sánh kỹ thuật chi tiết (scorecard, features, cost) | 15 phút |
| `researcher-260331-ecommerce-platform-analysis.md` | Báo cáo phân tích đầy đủ | 30 phút |
| `zalo-vnpayment-integration-guide.md` | Hướng dẫn tích hợp VNPay/ZaloPay/GHN + code examples | Dev reference |
| `developer-quickstart-reference.md` | Quick start + NestJS code examples | Dev reference |

---

## 2. Content Production Agency

### Yêu cầu của Diso
- Batch production video: 10-30 video/ngày (UGC-style, product review, TikTok format)
- Giá batch: < 1 triệu/video
- Hiểu e-commerce (không phải brand video cao cấp)
- Có studio hoặc quy trình production rõ ràng
- Diso chỉ brief + QC, agency sản xuất

### Options

| Vendor | Mô tả | Giá ước tính | Pros | Cons |
|--------|-------|-------------|------|------|
| **DC Media** | TikTok MCN + UGC production, batch video chuyên e-commerce | 500K–1.5tr/video (batch) | Batch production 10-30 video/ngày, hiểu e-com, có network creator | Cần confirm pricing cho volume |
| **Admatrix** | Official TikTok partner, tuyển producer 24/7 | Theo project | Chính thức từ TikTok, quality đảm bảo | Giá có thể cao |
| **Agency nhỏ chuyên TikTok Shop** (nhiều ở TP.HCM) | Studio nhỏ, 5-10 người, chuyên quay video e-commerce | 500K–1.5tr/video (batch) | Giá rẻ, flexible | Chất lượng không đều, cần QC kỹ |
| **JETSTUDIO** | Agency lớn, sản xuất content TikTok/Reels quy mô | 1–3tr/video | Quy trình chuyên nghiệp, có studio | Giá cao cho SME |
| **METUB Network** | MCN lớn, có content production + KOL network | Theo project | Vừa sản xuất vừa phân phối | Focus entertainment > e-commerce |
| **Freelancer / KOC tự quay** | Thuê KOC nhỏ tự quay video review | 200K–500K/video | Rẻ nhất, authentic UGC | Không kiểm soát được chất lượng |

### Reality check

- 10-20 video/ngày × 30 ngày = 300-600 video/tháng
- Giá batch 500K/video × 300 = **150 triệu/tháng** — đây là chi phí lớn nhất
- Nếu 1tr/video × 300 = **300 triệu/tháng** — không khả thi cho SME
- **Phải** tìm agency có giá batch dưới 500K/video HOẶC giảm số lượng video xuống

### Recommendation

| Giai đoạn | Approach | Chi phí ước tính |
|-----------|----------|-----------------|
| **KH đầu tiên** | **DC Media** hoặc 1 agency nhỏ TikTok Shop + freelancer KOC bổ sung | 30-50tr/tháng (50-100 video) |
| **KH thứ 3-5** | 2-3 agency, mỗi agency 1-2 ngành hàng | 50-100tr/tháng tổng |
| **Scale** | Xây content factory (in-house lead + network agency) | Tối ưu xuống 300K/video |

### Action items
- [ ] Liên hệ **DC Media** — hỏi tiered pricing cho 10/20/30 video/tháng, giá batch
- [ ] Liên hệ **Admatrix** — hỏi gói sản xuất UGC cho brand SME
- [ ] Tìm thêm 1-2 agency nhỏ chuyên TikTok Shop tại TP.HCM
- [ ] Hỏi giá cụ thể cho: video UGC 15-30s, ảnh sản phẩm, copy quảng cáo
- [ ] Test thử: đặt 10 video mẫu từ 2 agency khác nhau, so sánh chất lượng + giá

---

## 3. Agency Vận hành sàn TMĐT

### Yêu cầu của Diso
- Quản lý shop Shopee/TikTok Shop cho khách hàng Diso
- Có kinh nghiệm vận hành shop doanh thu 5+ tỷ/tháng
- Dịch vụ: quản lý listing, chạy campaign, tối ưu SEO sàn, xử lý đánh giá
- Giá hợp lý cho SME (không phải enterprise agency)

### Options

| Vendor | Mô tả | Giá | Phù hợp |
|--------|-------|-----|---------|
| **Dream Agency** | Full-service TikTok Shop + Shopee: setup, optimization, marketing, content | 10-30tr/tháng (ước tính) | **Có** — full ops, phù hợp SME |
| **BC Agency** | Official TikTok partner, technical strong, chuyên TikTok Shop | Theo project/tháng | **Có** — nếu focus TikTok |
| **UpBase** | Data-driven, kết hợp software + services cho TikTok Shop | 10-30tr/tháng | **Có** — nếu cần data-driven approach |
| **OnPoint** | Agency vận hành sàn lớn nhất VN (partner Shopee, Lazada). KH: P&G, Unilever, Samsung | % doanh thu (15-25%) hoặc phí cố định cao | **Không** — quá enterprise, giá cao |
| **PMAX** | Performance marketing + e-commerce ops | Enterprise pricing | **Không** — tương tự OnPoint |
| **Freelancer / người có kinh nghiệm** | 1 người đã vận hành shop 5 tỷ+/tháng | 15-25tr/tháng (lương) | **Có** — rẻ nhất, nhưng rủi ro phụ thuộc 1 người |

### Reality check

> "Rất nhiều người từ Shopee ra làm brand fail ngay" — kinh nghiệm sàn ≠ kinh nghiệm tổng thể. Phải kiểm chứng kỹ.

- Agency enterprise (OnPoint, PMAX): giá 15-25% doanh thu = không khác phí sàn. Vô lý cho model Diso
- Agency vừa: 10-30tr/tháng = nằm trong monthly fee Diso thu từ KH. Khả thi
- In-house 1 người: rẻ nhất, nhưng capacity giới hạn (1 người = 2-3 shop max)

### Recommendation

| Giai đoạn | Approach | Lý do |
|-----------|----------|-------|
| **KH đầu tiên** | **Dream Agency** hoặc tuyển 1 freelancer | Dream nếu cần full-service, freelancer nếu tiết kiệm |
| **KH thứ 3-5** | Partner với 1-2 agency vừa | Scale được, không phụ thuộc 1 người |
| **Scale** | Mix: 1 ops lead in-house + agency cho execution | In-house giữ chiến lược, agency làm daily ops |

> Tip từ research: Frame proposal với agency là **"partnership for managed SME shops 5B+/month"** — agency thích volume contracts, có thể negotiate giá tốt hơn.

### Action items
- [ ] Liên hệ **Dream Agency** — hỏi gói vận hành TikTok Shop + Shopee cho SME
- [ ] Liên hệ **BC Agency** hoặc **UpBase** — hỏi gói TikTok Shop
- [ ] Song song: đăng tuyển 1 freelancer đã vận hành shop Shopee doanh thu 3-5 tỷ/tháng
- [ ] Hỏi rõ: agency vận hành bao gồm những gì? Content có nằm trong không? Báo cáo thế nào?

---

## 4. Logistics

### Yêu cầu của Diso
- API tốt, tích hợp nhanh
- Hỗ trợ COD (quan trọng cho VN)
- Coverage rộng (nội thành + ngoại thành)
- Nếu dùng Haravan/Sapo: đã tích hợp sẵn → không cần code thêm

### So sánh

| Tiêu chí | GHN | GHTK | J&T Express | Viettel Post |
|----------|-----|------|-------------|-------------|
| **API** | Tốt nhất, docs đầy đủ | Vừa phải | Có | Cũ, khó tích hợp |
| **Giá nội thành** | Từ 16,500đ/đơn | Từ 15,000đ/đơn | Cạnh tranh | Rẻ nhất |
| **COD** | Có, phí 1-1.6% | Có, phí 0.8-1.1% | Có | Có |
| **Tốc độ** | Nhanh | Nhanh | Nhanh | Trung bình |
| **Coverage nông thôn** | Tốt | Tốt | Trung bình | Tốt nhất |
| **Tích hợp Haravan/Sapo** | Có sẵn | Có sẵn | Có sẵn | Có sẵn |

### Recommendation

**Không cần tìm vendor riêng nếu dùng Haravan/Sapo** — đã tích hợp sẵn GHN, GHTK, J&T, Viettel Post. Khách hàng chọn hãng vận chuyển khi checkout.

Nếu cần tích hợp riêng (Medusa.js hoặc custom):
- **GHN** — API tốt nhất, ưu tiên số 1
- **GHTK** — backup, giá rẻ hơn

### Action items
- [ ] Confirm: Haravan/Sapo đã tích hợp logistics đủ chưa? Cần thêm gì không?
- [ ] Nếu dùng Medusa.js sau này: bookmark GHN API docs để tích hợp

---

## 5. Payment Gateway

### Yêu cầu của Diso
- Hỗ trợ Zalo Mini App (quan trọng cho strategy)
- Đa phương thức: QR, thẻ, ví điện tử, chuyển khoản
- Phí hợp lý (< 2% per transaction)
- Tích hợp nhanh, API hiện đại

### So sánh

| Tiêu chí | VNPay | ZaloPay | MoMo | PayOS | SePay |
|----------|-------|---------|------|-------|-------|
| **Phí** | 1.1-1.8% | ~1% | 1-1.5% | Từ 0.5% | Rẻ (bank transfer) |
| **Zalo Mini App** | Có | **Native (tốt nhất)** | Qua API | Có | Không rõ |
| **Phương thức** | QR, thẻ, ví, bank | QR, ví ZaloPay | Ví MoMo | QR, bank transfer | Bank transfer tracking |
| **API** | Tốt, docs đầy đủ | Tốt | Tốt | Hiện đại nhất, developer-friendly | Đơn giản |
| **User base** | Rộng nhất (qua ngân hàng) | 20M+ | 40M+ | Mới, nhỏ | Niche |
| **Onboarding** | Chậm (1-2 tuần) | Trung bình | Trung bình | Nhanh (1-3 ngày) | Nhanh |
| **Tích hợp Haravan/Sapo** | Có sẵn | Có sẵn | Có sẵn | Không sẵn | Không sẵn |

### Recommendation

| Vai trò | Vendor | Lý do |
|---------|--------|-------|
| **Gateway chính** | **VNPay** | Phổ biến nhất, đa phương thức, tích hợp sẵn Haravan/Sapo |
| **Zalo Mini App** | **ZaloPay** | Native integration với Zalo — trải nghiệm tốt nhất |
| **Backup / alternative** | **PayOS** | API hiện đại, phí thấp, onboarding nhanh — dùng nếu VNPay quá chậm |
| **COD tracking** | **SePay** | Tự động đối soát chuyển khoản ngân hàng — bổ sung cho flow COD |

**Nếu dùng Haravan/Sapo**: VNPay + ZaloPay + MoMo đã tích hợp sẵn. Không cần code thêm.

### Action items
- [ ] Confirm: Haravan/Sapo đã tích hợp payment đủ chưa?
- [ ] Nếu cần Zalo Mini App riêng: đăng ký ZaloPay merchant account
- [ ] Bookmark PayOS làm alternative nếu cần tích hợp custom

---

## 6. Affiliate / KOL Platform

### Yêu cầu của Diso
- Tuyển mass KOC nhỏ (100-10K followers)
- Commission tracking tự động
- Hỗ trợ link affiliate cho TikTok, Shopee, website riêng

### Options

| Vendor | Mô tả | Network | Phù hợp |
|--------|-------|---------|---------|
| **AccessTrade** | Đã là partner Diso, nền tảng affiliate lớn nhất VN | 500K+ publishers | **Có** — đã có quan hệ, dùng cho campaign lớn |
| **Ecomobi** | Social commerce + affiliate, mạnh TikTok/Facebook | 50K+ KOL/KOC | **Có** — bổ sung cho TikTok KOC recruitment |
| **GoAff** (by Golive) | Affiliate marketing cho Shopee/TikTok | Nhỏ hơn | Trung bình — niche |
| **Passio** (by Novaon) | Platform cho creator kiếm tiền qua affiliate link | 100K+ creators | Trung bình — creator-first, dễ onboard KOC |
| **Module Diso tự build** | Dùng module Affiliate có sẵn của Diso | Tự tuyển | **Có** — cho kênh riêng (web/Zalo), không phụ thuộc platform |

### Recommendation

| Vai trò | Vendor | Lý do |
|---------|--------|-------|
| **Campaign trên sàn** | **AccessTrade** | Đã có, network lớn, proven |
| **Tuyển KOC TikTok** | **Ecomobi** | Mạnh TikTok affiliate, có network KOC sẵn |
| **Affiliate kênh riêng** | **Module Diso** | Dùng module Ambassador/Affiliate có sẵn cho web/Zalo |

### Action items
- [ ] Confirm với AccessTrade: có gói nào cho SME client của Diso không? Phí platform?
- [ ] Liên hệ Ecomobi: hỏi gói tuyển KOC cho brand SME (50-100 KOC)
- [ ] Đánh giá: module Affiliate hiện tại của Diso có đủ feature cho kênh riêng không?

---

## Vendor Matrix — Tổng hợp Recommendation

| # | Hạng mục | Recommend #1 | Recommend #2 | Giai đoạn dùng |
|---|---------|-------------|-------------|---------------|
| 1 | **Platform (Web)** | Haravan | Sapo | MVP → Scale |
| 2 | **Platform (Zalo)** | Pancake (native Zalo) | Sapo Go | MVP → Scale |
| 3 | **Content** | DC Media | Agency nhỏ TikTok Shop | MVP |
| 4 | **Ops sàn** | Dream Agency | BC Agency / UpBase | MVP → Scale |
| 5 | **Logistics** | GHN (qua Haravan/Sapo) | GHTK backup | Tích hợp sẵn |
| 6 | **Payment** | VNPay (qua Haravan/Sapo) | ZaloPay (Zalo native) | Tích hợp sẵn |
| 7 | **Affiliate** | AccessTrade (có sẵn) | Ecomobi (TikTok KOC) | MVP |

### Chi phí ước tính per client/tháng

| Hạng mục | Chi phí | Ghi chú |
|---------|---------|---------|
| Platform (Haravan) | ~180K | SaaS fee |
| Logistics (GHN, 100 đơn/tháng) | ~1.5tr | Tính vào giá ship, KH chịu |
| Payment | 0.5-2% per transaction | KH chịu |
| Content (50-100 video) | 30-50tr | **Chi phí lớn nhất** |
| Ops agency | 10-30tr | Hoặc freelancer 15-25tr |
| **Tổng ops cost Diso** | **~40-80tr/tháng** | Chưa tính lương team Diso |

---

## Action Plan — Tuần 1-2

### Vĩnh (Tech vendors)

| # | Việc | Deadline |
|---|------|----------|
| 1 | Đăng ký trial **Haravan** — test API, template, clone Shopee UI | Tuần 1 |
| 2 | Đăng ký trial **Sapo** — test Sapo Go (Zalo Mini App) | Tuần 1 |
| 3 | Liên hệ **Pancake** — hỏi Zalo Mini App capability, API, pricing | Tuần 1 |
| 4 | So sánh: (Haravan + Pancake) vs (Sapo all-in-one) → viết 1 trang đánh giá | Tuần 2 |
| 5 | Confirm logistics + payment đã tích hợp sẵn | Tuần 1 |
| 6 | Đánh giá: API đủ để gắn module Ambassador, Affiliate không? | Tuần 2 |

### Hải (Business vendors)

| # | Việc | Deadline |
|---|------|----------|
| 1 | Liên hệ **DC Media** — hỏi giá batch video UGC (10/20/30 video/tháng) | Tuần 1 |
| 2 | Liên hệ **Admatrix** hoặc 1 agency TikTok Shop khác — so sánh giá | Tuần 1 |
| 3 | Liên hệ **Dream Agency** — hỏi gói vận hành TikTok Shop + Shopee | Tuần 1 |
| 4 | Liên hệ **BC Agency** hoặc **UpBase** — hỏi gói alternative | Tuần 2 |
| 5 | Hỏi **AccessTrade**: có gói SME cho client Diso không? | Tuần 1 |
| 6 | Liên hệ **Ecomobi**: gói tuyển KOC cho brand SME | Tuần 2 |

### Output tuần 2
- [ ] Vendor matrix hoàn chỉnh — mỗi hạng mục có vendor đã nói chuyện, biết giá
- [ ] Quyết định platform: (Haravan + Pancake) hay (Sapo all-in-one)?
- [ ] Có ít nhất 1 content agency sẵn sàng test (đặt 10 video mẫu)
- [ ] Có ít nhất 1 ops agency/freelancer sẵn sàng cho KH đầu tiên

---

*Diso Vendor Research v1.3 — Open-source deep dive (Vendure vs Medusa) + detailed reports*
*Phục vụ: [Execution Layer](./diso-execution-layer.md) Track 3*
