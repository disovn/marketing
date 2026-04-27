# DISO — KẾ HOẠCH PHÁT TRIỂN CÔNG TY

> **Tài liệu nội bộ** — Homework từ cuộc họp kế hoạch tài chính 2026-04-04
> Version: 2.0 | Ngày: 2026-04-09
> Người soạn: Vĩnh (Tech & Product)
> Gửi: CFO, Hiếu (Finance), Anh Hưng (CEO AT / Sale channel)

---

## MỤC LỤC

1. [Tầm nhìn & Định vị công ty](#1-tầm-nhìn--định-vị-công-ty)
2. [Solution Architecture](#2-solution-architecture)
3. [Module Classification — Build / Purchase / Outsource](#3-module-classification--build--purchase--outsource)
4. [Product Roadmap](#4-product-roadmap)
5. [Cost Driver & Parameters](#5-cost-driver--parameters)
6. [Mô hình doanh thu & Pricing Strategy](#6-mô-hình-doanh-thu--pricing-strategy)
7. [Kế hoạch tài chính — PNL & Đầu tư](#7-kế-hoạch-tài-chính--pnl--đầu-tư)
8. [Outsource & Purchase Scope](#8-outsource--purchase-scope)
9. [Core Team & Tổ chức nhân sự](#9-core-team--tổ-chức-nhân-sự)
10. [Kế hoạch kinh doanh — Sale & Deal Pipeline](#10-kế-hoạch-kinh-doanh--sale--deal-pipeline)
11. [Quản trị rủi ro](#11-quản-trị-rủi-ro)
12. [Vendor Management Framework](#12-vendor-management-framework)
13. [KPI & Milestone đo lường](#13-kpi--milestone-đo-lường)
14. [Action Items tổng hợp](#14-action-items-tổng-hợp)

---

## MỤC ĐÍCH

Kế hoạch phát triển công ty Diso — đủ để trình các sếp ra quyết định đầu tư.

**Sản phẩm & Kiến trúc**
- Solution Architecture — module sản phẩm và cách liên kết
- Module Classification — Build / Purchase / Outsource
- Product Roadmap — thứ tự ưu tiên phát triển

**Tài chính & Vận hành**
- Cost Driver & Parameters — unit tính giá vận hành (thay "bốc thuốc")
- Mô hình doanh thu & Pricing — cách kiếm tiền, unit economics
- Kế hoạch tài chính — PNL dự kiến, nhu cầu đầu tư, cash runway

**Tổ chức & Nhân sự**
- Core Team — nhân sự tối thiểu, sơ đồ tổ chức, kế hoạch tuyển
- Outsource & Purchase Scope — phạm vi thuê phát triển / vận hành / mua ngoài
- Vendor Management — cơ chế làm việc với vendor

**Kinh doanh & Đo lường**
- Kế hoạch kinh doanh — sale pipeline, target deal
- Quản trị rủi ro — những gì có thể giết Diso và cách phòng
- KPI & Milestone — đo lường tiến độ, gate check

---

## 1. TẦM NHÌN & ĐỊNH VỊ CÔNG TY

### 1.1 Diso là ai

> **Diso là công ty phát triển kinh doanh chuyên về thương mại điện tử, sử dụng công nghệ làm thế mạnh cạnh tranh.**

| | Diso LÀ | Diso KHÔNG phải |
|---|---------|----------------|
| Mô hình | "Tổng thầu e-commerce" — thiết kế kiến trúc, tích hợp vendor, đóng gói giải pháp | Outsource / gia công phần mềm |
| Bán gì | Công thức thành công e-commerce (3C: Công nghệ + Cộng đồng + Chuyên gia) | Bán website, bán license |
| Ví dụ | Giống Apple: không sản xuất chip nhưng thiết kế iPhone | Giống Foxconn: sản xuất theo đơn |

### 1.2 Thị trường mục tiêu

| Tiêu chí | Mô tả |
|----------|-------|
| **Ai** | Doanh nghiệp dược phẩm, FMCG, health & beauty — đang bán trên sàn TMĐT |
| **Nỗi đau** | Phí sàn 20%+ ăn mòn lợi nhuận, không sở hữu data khách, phụ thuộc thuật toán sàn |
| **Size** | Doanh thu sàn 1-50 tỷ/tháng |
| **KHÔNG target** | Doanh nghiệp chưa bán online (chưa có tư duy e-com, sẽ fail) |
| **Ngành ưu tiên** | Dược phẩm (Traphaco, Trường Sinh), FMCG có chuỗi đại lý |

### 1.3 Lợi thế cạnh tranh

| So với | Diso thắng vì |
|--------|--------------|
| **Misa / vendor website** | Misa bán 1C (công nghệ). Diso bán 3C. Misa không vận hành, không build traffic |
| **Agency marketing** | Agency chạy ads nhưng không hiểu hệ thống tổng thể, không có platform |
| **Tự build** | Doanh nghiệp tự build tốn 3-5 tỷ + 1 năm. Diso deploy 4-8 tuần, rẻ hơn 5x |
| **Shopee/TikTok** | Sàn giữ data, phí cao. Diso giúp chuyển traffic sang kênh riêng |

---

## 2. SOLUTION ARCHITECTURE

### 2.1 Tổng quan hệ sinh thái

Diso Commerce bán **trọn bộ vận hành thương mại điện tử** cho doanh nghiệp (mô hình 3C: Công nghệ + Cộng đồng + Chuyên gia). Hệ sinh thái gồm 7 module:

```
┌─────────────────────────────────────────────────────────────────┐
│                    DISO COMMERCE ECOSYSTEM                       │
│                                                                  │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐             │
│  │ A. Vận hành │  │ B. Website  │  │ C. Zalo     │             │
│  │    sàn TMĐT │  │ kênh riêng  │  │ Mini App    │             │
│  │  (Shopee,   │  │ (Shopee-    │  │ (social     │             │
│  │   TikTok)   │  │  style UI)  │  │  commerce)  │             │
│  └──────┬──────┘  └──────┬──────┘  └──────┬──────┘             │
│         │                │                │                     │
│         └────────────────┼────────────────┘                     │
│                          │                                      │
│                ┌─────────▼─────────┐                            │
│                │   ORDER / DATA    │ ← Dữ liệu đơn hàng,      │
│                │   CONSOLIDATION   │   khách hàng hội tụ        │
│                └─────────┬─────────┘                            │
│                          │                                      │
│     ┌────────────────────┼────────────────────┐                 │
│     │                    │                    │                 │
│  ┌──▼──────────┐  ┌──────▼──────┐  ┌─────────▼───┐            │
│  │ D. Affiliate│  │ E. Ambassa- │  │ F. CRM +    │            │
│  │ + Đại lý NT │  │ dor / KOL   │  │ Loyalty     │            │
│  │ (traffic    │  │ (brand      │  │ (retention  │            │
│  │  engine)    │  │  engine)    │  │  engine)    │            │
│  └─────────────┘  └─────────────┘  └─────────────┘            │
│                                                                  │
│                    ┌─────────────┐                               │
│                    │ G. QR Xác   │ ← Bảo vệ hàng thật,        │
│                    │    thực     │   chống hàng giả             │
│                    └─────────────┘                               │
└─────────────────────────────────────────────────────────────────┘
```

### 2.2 Quan hệ giữa các module

| Quan hệ | Mô tả |
|----------|-------|
| **A ↔ B ↔ C** | 3 kênh bán (sàn, web, Zalo) — data đơn hàng & khách hàng sync về 1 nơi |
| **D → A, B, C** | Affiliate đẩy traffic vào cả 3 kênh |
| **E → A, B, C** | Ambassador/KOL tạo content + referral cho cả 3 kênh |
| **F ← A, B, C** | CRM thu nhận data khách từ cả 3 kênh → remarketing, loyalty |
| **G → B, C** | QR xác thực gắn vào sản phẩm bán trên kênh riêng |
| **D ↔ E** | Affiliate & Ambassador bổ trợ nhau — KOL vừa là ambassador vừa là affiliate |

### 2.3 Module nào là core, module nào là add-on?

| Layer | Module | Vai trò | Diso sở hữu? |
|-------|--------|---------|:------------:|
| **Core — IP đã có** | E. Ambassador/KOL | IP duy nhất, đã production 17+ brands | **Có** |
| **Core — entry point** | A. Vận hành sàn | KH nào cũng đang bán sàn, điểm bắt đầu | Không (platform sàn = bên thứ 3) |
| **Core — traffic** | D. Affiliate + Đại lý NT | Traffic engine, leverage AT network | **Có** (engine) |
| **Core — chiến lược** | B. Website kênh riêng | Giảm phụ thuộc sàn — **Diso sẽ tự build platform** | **Sẽ có** (tháng 6-12) |
| **Core — chiến lược** | C. Zalo Mini App | Social commerce, retention — **Diso sẽ tự build** | **Sẽ có** (tháng 6-12) |
| **Core — retention** | F. CRM + Loyalty | Retention & remarketing, data là IP | **Có** |
| **Add-on** | G. QR Xác thực | Phù hợp ngành dược, FMCG | **Có** |

> **Thay đổi so với v1:** Module B và C nâng từ "Expansion" lên **"Core — chiến lược"** vì Diso có năng lực tự build và sẽ own platform. Đây là hướng đi tất yếu — SaaS chỉ là bước đệm.

---

## 3. MODULE CLASSIFICATION — BUILD / PURCHASE / OUTSOURCE

Theo yêu cầu từ meeting: tách rõ 3 loại cho mỗi module.

### 3.1 Năng lực product của Diso — Context quan trọng

> **Diso mạnh ở product.** Đây là thế mạnh thật, không phải wishful thinking.

| Bằng chứng | Chi tiết |
|------------|---------|
| Ambassador platform | Đã production 17+ brands (TPBank, HDBank, VPBank, Yody...) — Go + React + Firebase |
| 8 module UI demo | Storefront, Admin, Affiliate, Reseller, CRM, QR, Loyalty, Ambassador — UI đẹp, chạy được |
| Tech stack phù hợp | Team quen Go, React, NestJS — đúng stack để build e-commerce |
| AI-assisted development | Diso dùng AI coding tools hiệu quả, tăng tốc phát triển 3-5x so với traditional dev |

**Hệ quả chiến lược:** Website kênh riêng (B) và Zalo Mini App (C) không nhất thiết phải mua ngoài mãi. Diso hoàn toàn có thể tự build trong năm đầu tiên nếu đầu tư đúng đắn — và khi tự build thì:
- **Margin cao hơn** (không trả SaaS fee/license cho vendor)
- **Không phụ thuộc vendor** (vendor tăng giá, đổi API, ngừng hỗ trợ = không ảnh hưởng)
- **Custom không giới hạn** (tích hợp sâu với Ambassador, Affiliate, CRM)
- **Multi-tenant** (1 codebase phục vụ nhiều KH → scale cực nhanh)

### 3.2 Chiến lược 2 giai đoạn: Purchase First → Build to Own

Thay vì "mua rồi dùng mãi" hoặc "build ngay từ đầu", Diso chạy **hybrid**:

```
Giai đoạn 1 (Tháng 1-6): PURCHASE FIRST
  Mục tiêu: Có sản phẩm chạy ngay, ký deal, tạo doanh thu
  Website → Haravan/Sapo SaaS
  Zalo    → Pancake/Sapo Go
  ↓
  Song song: Bắt đầu build platform riêng (nền tảng)

Giai đoạn 2 (Tháng 6-12): BUILD TO OWN
  Mục tiêu: Chuyển KH hiện tại sang platform tự build, loại bỏ SaaS dependency
  Website → Diso Commerce Platform (Medusa.js / custom)
  Zalo    → Diso Zalo Mini App (Zalo Mini App SDK)
  ↓
  KH mới từ đây: deploy thẳng trên platform Diso
```

**Tại sao không build ngay từ đầu?**
- Chưa có deal = chưa có tiền nuôi dev
- Build mất 2-3 tháng, KH không chờ được
- SaaS cho phép "có hàng" trong 1-2 tuần

**Tại sao không mua mãi?**
- Vendor lock-in: Haravan đổi API / tăng giá → mình chịu
- Custom giới hạn: không tích hợp sâu module Diso
- Margin bị ăn: mỗi KH trả SaaS fee
- Không multi-tenant: mỗi KH 1 account, quản lý phức tạp khi 10+ KH

### 3.3 Phân loại chi tiết

| Module | Giai đoạn 1 (tháng 1-6) | Giai đoạn 2 (tháng 6-12) | Lý do chuyển đổi |
|--------|-------------------------|--------------------------|-------------------|
| **A. Vận hành sàn** | PURCHASE + OUTSOURCE ops | Giữ nguyên — không cần build | Platform sàn (Shopee/TikTok) là của bên thứ 3. Chỉ cần ops |
| **B. Website kênh riêng** | PURCHASE (Haravan/Sapo) | **BUILD → Diso Commerce Platform** | Loại bỏ SaaS dependency, custom không giới hạn, multi-tenant |
| **C. Zalo Mini App** | PURCHASE (Pancake/Sapo Go) | **BUILD → Diso Zalo Mini App** | Zalo cung cấp SDK mở, Diso build native app tích hợp sâu với platform |
| **D. Affiliate + Đại lý NT** | BUILD (core) + PURCHASE (AT) | Giữ nguyên — đang build | Affiliate engine là core IP |
| **E. Ambassador / KOL** | **BUILD — ĐÃ PRODUCTION** | Giữ nguyên — đang chạy | Vũ khí số 1. KHÔNG outsource |
| **F. CRM + Loyalty** | BUILD (core) + PURCHASE (Zalo OA) | Giữ nguyên — đang build | CRM data là core IP |
| **G. QR Xác thực** | BUILD | Giữ nguyên — đã có UI | Module nhỏ |

### 3.4 Tóm tắt: IP Roadmap

| Thời điểm | Diso sở hữu (BUILD) | Diso mua ngoài (PURCHASE) | Diso thuê vận hành |
|-----------|---------------------|--------------------------|-------------------|
| **Tháng 1** | E (Ambassador) | A (sàn), B (web SaaS), C (Zalo SaaS) | A (ops sàn) |
| **Tháng 6** | E, D, F, G + **B (platform riêng bắt đầu)** | A (sàn), C (Zalo — đang chuyển) | A (ops sàn) |
| **Tháng 12** | **E, D, F, G, B, C — toàn bộ stack** | A (sàn — chỉ còn mua duy nhất cái này) | A (ops sàn) |

> **Mục tiêu cuối năm 1:** Diso sở hữu 6/7 module. Chỉ còn mua platform sàn (Shopee/TikTok — bản chất là marketplace, không ai tự build).
> **Ý nghĩa:** Margin tối đa, không phụ thuộc vendor, scale bằng 1 codebase.

---

## 4. PRODUCT ROADMAP

### Nguyên tắc ưu tiên (theo meeting 04/04)

1. **Mình quyết định thứ tự**, không chạy theo khách hàng
2. Ưu tiên cái **đã có / gần xong** trước
3. Ưu tiên cái **mang về doanh thu nhanh** trước
4. Ưu tiên cái **là core IP** trước cái purchasing

### Roadmap

| Phase | Timeline | Module | Mục tiêu | Trạng thái |
|-------|----------|--------|-----------|------------|
| **Phase 0** | Đang có | **E. Ambassador/KOL** | Đã production. Deploy cho KH mới = 1 tuần | **DONE** |
| **Phase 1** | Tháng 1–2 | **A. Vận hành sàn** (SaaS) + **D. Affiliate** + **E. Ambassador** | KH có doanh số ngay trên sàn. Traffic qua AT affiliate + KOL | Cần contact vendor ops sàn |
| **Phase 2** | Tháng 3–4 | **B. Website kênh riêng** (SaaS MVP) + **F. CRM** | Mở kênh riêng, chuyển khách từ sàn sang. CRM bắt đầu thu data | Cần trial Haravan/Sapo |
| **Phase 3** | Tháng 4–6 | **C. Zalo Mini App** (SaaS) + **G. QR Xác thực** | Social commerce + xác thực hàng thật | Cần contact Pancake |
| **Phase 4** | Tháng 6–12 | **B+C: Diso Commerce Platform** (tự build) | Chuyển B, C sang platform Diso sở hữu. Multi-tenant, tích hợp sâu | Bắt đầu dev song song từ tháng 4-5 |

### Roadmap song song: Delivery vs Platform

```
Tháng:  1     2     3     4     5     6     7     8     9    10    11    12
        │     │     │     │     │     │     │     │     │     │     │     │
DELIVERY (dùng SaaS, phục vụ KH ngay):
  Ph1 ──┤─────┤
  Ph2         ├─────┤─────┤
  Ph3                     ├─────┤─────┤
                                              KH mới deploy trên Diso platform ──►
PLATFORM (build song song, dev team):
                    ├─────────────────┤─────┤
                    Core engine        Beta   Migrate KH cũ
                    (Medusa.js base,          sang platform
                     Zalo SDK,                Diso
                     tích hợp D,E,F,G)
```

**Điểm mấu chốt:** Platform dev bắt đầu từ **tháng 4** (khi đã có deal + doanh thu từ SaaS), không chờ đến tháng 6+. Diso mạnh product — 3 tháng build đủ core engine nếu có 1-2 dev tập trung.

### Quan trọng: Cái gì KHÔNG làm

- Không tự build platform **trước** khi có deal đầu tiên (dùng SaaS deliver trước)
- Không tự xây đội vận hành sàn (outsource — đây không phải core)
- Không nhảy sang ngành mới nếu chưa close được deal dược/FMCG
- Không mua SaaS mãi mãi — **mọi SaaS đều là tạm thời, mục tiêu là own toàn bộ stack**

---

## 5. COST DRIVER & PARAMETERS

> Yêu cầu từ meeting: Mỗi module phải có **unit đo** (parameter) để tính chi phí vận hành thay vì "bốc thuốc". Doanh nghiệp lớn hay nhỏ → parameter thay đổi → chi phí thay đổi → giá thay đổi.

### 5.1 Bảng Cost Driver theo module

| Module | Activity chính | Cost Driver (parameter) | Unit ảnh hưởng chi phí | Cách tính |
|--------|---------------|------------------------|----------------------|-----------|
| **A. Vận hành sàn** | Listing sản phẩm, chạy campaign, A/B test, report | **Số SKU** + **Số đơn/tháng** | 1 ops quản lý ~200 SKU hoặc ~1,000 đơn/tháng | Số ops cần = MAX(SKU/200, đơn/1000) |
| | Chăm sóc khách hàng trên sàn | **Số tin nhắn/ngày** | 1 CS rep xử lý ~50 chat/ngày | Số CS = tin nhắn ngày / 50 |
| | Chạy ads sàn | **Budget ads/tháng** | 1 ads specialist quản lý tối đa 50tr budget/tháng | Số ads = budget / 50tr |
| **B. Website kênh riêng** | Setup & maintain website | **Số sản phẩm** | SaaS fee cố định/tháng. Customize tính theo giờ dev | SaaS fee + dev hours × rate |
| | Vận hành kênh riêng | **Số đơn/tháng kênh riêng** + **Số khách unique** | 1 ops quản lý ~500 đơn/tháng kênh riêng | Số ops = đơn / 500 |
| **C. Zalo Mini App** | Setup & maintain Zalo app | **Số follower Zalo OA** | SaaS fee + Zalo OA fee (theo tier follower) | Fee cố định theo tier |
| | Push notification / remarketing | **Số message/tháng** | Zalo tính phí ~200đ/message sau free tier | Số message × 200đ |
| **D. Affiliate + Đại lý NT** | Quản lý affiliate network | **Số affiliate active** | 1 AM quản lý ~100 affiliate | Số AM = affiliate / 100 |
| | Commission payout | **Doanh thu qua affiliate** | Commission = % DT (KH trả trực tiếp, không qua Diso) | Pass-through |
| **E. Ambassador / KOL** | Quản lý KOL campaign | **Số KOL active** + **Số campaign/tháng** | 1 PM quản lý ~20 KOL hoặc ~5 campaign/tháng | Diso platform tự động hóa phần lớn |
| | Content approval | **Số content/tháng** | Diso platform có workflow tự động | Minimal manual |
| **F. CRM + Loyalty** | Quản lý data khách hàng | **Số khách trong CRM** | Hosting & infra scale theo data volume | Infra cost = f(data size) |
| | Chạy campaign remarketing | **Số campaign/tháng** | 1 marketer chạy ~10 campaign/tháng | Số marketer = campaign / 10 |
| **G. QR Xác thực** | In + quản lý mã QR | **Số sản phẩm gắn QR/tháng** | Chi phí in QR ~50đ/mã + hosting | Số QR × 50đ + hosting |

### 5.2 Ví dụ áp dụng: Sizing cho 3 loại khách hàng

| Parameter | KH nhỏ (An Khang) | KH vừa (Traphaco) | KH lớn (Long Châu) |
|-----------|-------------------|-------------------|---------------------|
| Số SKU | ~200 | ~500 | ~2,000 |
| Đơn sàn/tháng | ~2,000 | ~5,000 | ~30,000 |
| Đơn kênh riêng/tháng | ~500 | ~2,000 | ~10,000 |
| Số KOL active | ~5 | ~15 | ~50 |
| Follower Zalo OA | ~5K | ~50K | ~500K |
| Doanh thu/tháng | ~1 tỷ | ~5 tỷ | ~50 tỷ |
| **→ Ops sàn cần** | 1-2 người | 3-5 người | 15-30 người |
| **→ CS cần** | 1 người | 2-3 người | 10+ người |
| **→ Chi phí vận hành ước tính** | ~15-20 tr/th | ~40-60 tr/th | ~200-400 tr/th |
| **→ Giá bán phù hợp** | ~25-30 tr/th | ~60-80 tr/th | ~300-500 tr/th |

> **Đây là cách đúng**: từ parameter → tính ra activity → tính ra nhân sự → tính ra cost → mark up ra giá. Không bốc thuốc.

### 5.3 Template bảng tính (cần Finance team design form)

Finance team sẽ gửi form sizing (tương tự size zing của Sharp). Input đầu vào:

| Input KH cần điền | Dùng để tính |
|-------------------|-------------|
| Số SKU hiện tại | Module A, B |
| Doanh thu sàn/tháng | Module A, rev share |
| Số đơn/tháng | Module A, B ops sizing |
| Số khách hàng unique/tháng | Module F, B |
| Số nhân viên bán hàng/đại lý | Module D |
| Budget marketing/tháng | Module A ads |
| Số KOL muốn dùng | Module E |
| Follower Zalo OA | Module C |

→ Vĩnh sẽ điền data thực tế từ Traphaco vào form này khi Finance team hoàn thành template.

---

## 6. MÔ HÌNH DOANH THU & PRICING STRATEGY

### 6.1 Nguồn doanh thu

| Nguồn | Mô tả | Timing | Margin |
|-------|-------|--------|--------|
| **Setup fee** | Phí thiết lập ban đầu — thấp nhất thị trường | One-time, khi ký deal | 80%+ (chủ yếu nhân công Diso) |
| **Monthly fee** | Phí vận hành hàng tháng (SaaS + ops) | Recurring từ tháng 1 | 50-55% (phải trả vendor ops) |
| **Revenue share** | % doanh thu e-commerce của khách | Recurring từ tháng 2-3 | 70-100% (phần sàn spread 2%, phần kênh riêng 100%) |

### 6.2 Triết lý định giá

> **"Rẻ đầu vào — Ăn phần sau"**

- Setup fee thấp (50-160 tr vs Misa 1 tỷ) → KH dễ quyết định
- Revenue share gắn lợi ích: KH có doanh thu thì Diso mới có tiền → alignment of interest
- Monthly fee cover chi phí vận hành thật → không lỗ từ ngày 1

### 6.3 Unit Economics — 1 khách hàng

**Ví dụ: Traphaco (KH vừa, KB2 — Sàn trước)**

| Hạng mục | Tháng 1 | Tháng 2 | Tháng 3 | Tháng 6 | Tháng 12 |
|----------|---------|---------|---------|---------|----------|
| Thu setup | 80 tr | — | — | — | — |
| Thu monthly | 35 tr | 35 tr | 35 tr | 62 tr* | 62 tr |
| Thu rev share (5% DT sàn) | — | ~25 tr** | ~25 tr | ~25 tr | ~25 tr |
| **Tổng thu** | **115 tr** | **60 tr** | **60 tr** | **87 tr** | **87 tr** |
| Chi vendor + ops | 16 tr | 16 tr | 16 tr | 29 tr* | 29 tr |
| Chi core team (phân bổ 1 KH) | ~30 tr | ~30 tr | ~30 tr | ~20 tr*** | ~15 tr |
| **Tổng chi** | **46 tr** | **46 tr** | **46 tr** | **49 tr** | **44 tr** |
| **Lãi/lỗ** | **+69 tr** | **+14 tr** | **+14 tr** | **+38 tr** | **+43 tr** |

*Phase 2 bật thêm module → monthly tăng, vendor cost tăng theo*
**Giả định DT sàn Traphaco ~500 tr/tháng, 5% = 25 tr*
***Core team chia đều cho nhiều KH hơn*

> **Breakeven: Tháng 1** (nhờ setup fee). Nhưng nếu không có setup fee → breakeven tháng 4-5.

### 6.4 Pricing theo size khách hàng (dựa trên cost driver)

| | KH nhỏ | KH vừa | KH lớn |
|---|--------|--------|--------|
| **Ví dụ** | An Khang | Traphaco | Long Châu |
| **DT sàn/tháng** | ~1 tỷ | ~5 tỷ | ~50 tỷ |
| **Setup fee** | 40-80 tr | 80-160 tr | 300-500 tr |
| **Monthly fee** | 25-30 tr | 35-62 tr | 200-400 tr |
| **Rev share** | 5% DT sàn + KR | 5% DT sàn + KR | 3-5% (negotiate) |
| **Margin monthly** | 48-56% | 53-55% | 55-60% |

> ⚠️ **Quan trọng** (từ meeting): Giá phải đi từ cost driver (parameter) → activity → cost → mark up. KHÔNG phải 1 giá cho mọi size.

---

## 7. KẾ HOẠCH TÀI CHÍNH — PNL & ĐẦU TƯ

> ⏳ Section này sẽ được điền chi tiết sau khi chốt core team + form sizing + phương án giá.

### 7.1 Chi phí cố định hàng tháng (core team + overhead)
*Chờ chốt section 9*

### 7.2 PNL dự kiến — Kịch bản 12 tháng
*Chờ 7.1 + pricing*

### 7.3 Nhu cầu đầu tư & Cash runway
*Chờ 7.2*

### 7.4 Phương án huy động vốn
*Chờ 7.3*

---

## 8. OUTSOURCE & PURCHASE SCOPE

### 8.1 Purchasing — Mua sản phẩm có sẵn (Diso không sở hữu)

| Sản phẩm mua | Vendor | Chi phí ước tính | Rủi ro vendor | Giảm thiểu |
|-------------|--------|-----------------|--------------|------------|
| Website SaaS (MVP) | Haravan hoặc Sapo | Setup ~6tr + ~180K/th | Vendor tăng giá, giới hạn API | Chuyển sang self-build (Phase 4) |
| Zalo Mini App | Pancake hoặc Sapo Go | Setup ~1tr + ~500K/th | Vendor ngừng hỗ trợ | Backup: Sapo Go nếu Pancake fail |
| Zalo OA messaging | Zalo | ~200đ/message | Zalo tăng giá | Tính vào pricing cho KH |
| AccessTrade network | AccessTrade | Commission-based | Phụ thuộc anh Hưng | Strategic partner, rủi ro thấp |

**Nguyên tắc purchasing (theo meeting):**
- Đánh giá sản phẩm có tối ưu không? Giá có tối ưu không?
- Vendor có nguy cơ cướp khách không?
- Mình có exit strategy không nếu vendor thay đổi?

### 8.2 Outsource phát triển — Thuê làm, sản phẩm về Diso

| Phạm vi | Deliverable | Timeline ước tính | Khi nào cần |
|---------|-------------|-------------------|-------------|
| Build platform riêng (Medusa.js) | Source code e-commerce platform multi-tenant | 8-12 tuần | Phase 4 — khi có 3+ KH |
| Wiring Diso modules ↔ SaaS platform | API integration Ambassador/Affiliate/CRM ↔ Haravan | 2-3 tuần | Phase 1-2 |
| Custom UI storefront (nếu Haravan template không đủ) | Frontend code | 2-4 tuần | Phase 2 nếu cần |

**Nguyên tắc outsource phát triển (theo meeting):**
- Phạm vi công việc rõ ràng: feature nào, deliverable gì
- Timeline & nghiệm thu rõ ràng
- **Code/sản phẩm cuối cùng = của Diso**. Hợp đồng phải ghi rõ ownership
- Ký hợp đồng khung + email xác nhận phạm vi từng giai đoạn (không HĐLĐ)

### 8.3 Outsource vận hành — Thuê người chạy daily ops

| Phạm vi | Scope cụ thể | Khối lượng ước tính (Traphaco) | Cách thuê |
|---------|-------------|-------------------------------|-----------|
| Ops sàn TMĐT | Listing, campaign, A/B test, ads sàn, report weekly | ~500 SKU, ~5K đơn/tháng → 3-5 người | Agency (Dream) hoặc freelancer team |
| Chăm sóc khách hàng | Reply chat sàn + kênh riêng + Zalo | ~100-200 chat/ngày → 2-3 CS | Freelancer hoặc KH co-own |
| Content production | Video UGC batch 50-100/tháng | 50-100 video/tháng | Agency (DC Media) hoặc freelancer |

**Nguyên tắc outsource vận hành (theo meeting):**
- Scope tính theo **khối lượng công việc** (parameter), không theo số người
- Hợp đồng khung + nghiệm thu hàng tháng
- Nếu thuê > 2 tháng: ký hợp đồng thuê khoán, **KHÔNG** ký HĐLĐ
- Diso phải nắm quy trình (know-how), vendor chỉ cung cấp nhân lực

---

## 9. CORE TEAM & TỔ CHỨC NHÂN SỰ

### 9.1 Nguyên tắc (theo meeting 04/04)

- **Core team = những vị trí mà bỏ ra thì công ty không chạy được**
- Core team phải ký HĐLĐ full-time, ưu tiên 100% cho Diso
- Ai part-time / có job chính khác → vai trò advisor, không phải core
- Giai đoạn này: lean tối đa, chỉ giữ người thật sự cần

### 9.2 Đề xuất cấu trúc — 7 vị trí core

| # | Vị trí | Vai trò cụ thể | Mức lương dự kiến | Ghi chú |
|---|--------|----------------|-------------------|---------|
| 1 | **CEO** | Điều hành tổng thể, quyết định product & chiến lược, đại diện pháp lý | * | Vĩnh — đang full-time |
| 2 | **Tài chính** | Quản lý dòng tiền, PNL, đối soát, báo cáo sếp, kế hoạch đầu tư | Part-time / advisory | Hiếu hoặc tuyển |
| 3 | **Sale** | Tìm KH, pitching, follow deal, quản lý pipeline | 15-25 tr/th | Cần tuyển — hoặc sếp Hưng đóng vai trò này giai đoạn đầu |
| 4 | **PM** | Quản lý triển khai KH, giám sát vendor ops, timeline, report | 15-25 tr/th | Cần tuyển |
| 5 | **Fullstack Developer** | Build & maintain Diso modules (platform, Affiliate, CRM, QR, wiring) | 15-25 tr/th | Cần tuyển |
| 6 | **QA / BA / Đào tạo** | Test sản phẩm, phân tích yêu cầu KH, đào tạo sử dụng cho KH & vendor ops | 10-18 tr/th | Cần tuyển — vị trí đa năng giai đoạn đầu |
| 7 | **Kế toán** | Kế toán Diso, đối soát ecosystem, thuế, hóa đơn | 8-12 tr/th | Đang tuyển mới |

**Tại sao 7 vị trí này?**

| Vị trí | Bỏ ra thì sao? |
|--------|----------------|
| CEO | Không ai ra quyết định, không ai lead product |
| Tài chính | Không biết mình lời lỗ bao nhiêu, sếp không có số để quyết định |
| Sale | Không có deal mới = không có doanh thu = chết |
| PM | Ký deal xong không ai triển khai, KH chờ mòn mỏi |
| Fullstack Dev | Không ai build product — Diso thành bán nước bọt |
| QA/BA/Đào tạo | Sản phẩm lỗi, KH không biết dùng, vendor ops không hiểu quy trình |
| Kế toán | Không xuất hóa đơn, không đối soát, không báo cáo thuế |

### 9.3 Sơ đồ tổ chức

```
┌─────────────────────────────────────────────────┐
│              CÁC SẾP (Quyết định đầu tư)         │
└──────────────────────┬──────────────────────────┘
                       │
         ┌─────────────▼─────────────┐
         │        CEO (Vĩnh)         │
         │  Product & điều hành      │
         └──┬──────────┬──────────┬──┘
            │          │          │
   ┌────────▼───┐ ┌────▼─────┐ ┌─▼──────────┐
   │ PRODUCT    │ │ DELIVERY │ │ BUSINESS   │
   │            │ │          │ │            │
   │ 1 Dev     │ │ 1 PM     │ │ 1 Sale     │
   │ 1 QA/BA/  │ │          │ │ 1 Tài chính│
   │   Đào tạo │ │          │ │ 1 Kế toán  │
   └─────┬──────┘ └────┬─────┘ └────────────┘
         │              │
   ┌─────▼──────┐ ┌─────▼──────────┐
   │ VENDOR DEV │ │ VENDOR OPS     │
   │ (outsource │ │ (agency sàn,   │
   │  phát triển│ │  CS, content)  │
   │  nếu cần) │ │                │
   └────────────┘ └────────────────┘
```

### 9.4 Tổng chi phí core team ước tính

| # | Vị trí | Min/tháng | Max/tháng |
|---|--------|----------|----------|
| 1 | CEO (Vĩnh) | * | * |
| 2 | Tài chính | Part-time | 15 tr |
| 3 | Sale | 15 tr | 25 tr |
| 4 | PM | 15 tr | 25 tr |
| 5 | Fullstack Dev | 15 tr | 25 tr |
| 6 | QA/BA/Đào tạo | 10 tr | 18 tr |
| 7 | Kế toán | 8 tr | 12 tr |
| | **Tổng core team** | **~63 tr** | **~120 tr** |

> Chi phí cố định hàng tháng mà các sếp cần đầu tư (chưa tính lương CEO). Từ con số này + product roadmap + kế hoạch bán → Finance team sẽ tính PNL tổng thể.

### 9.5 Kế hoạch tuyển dụng theo phase

Không tuyển hết 1 lúc. Tuyển theo trigger:

| Phase | Khi nào | Tuyển ai | Trigger |
|-------|---------|---------|---------|
| **Now** | Ngay | Kế toán | Đang thiếu |
| **Pre-deal** | Trước khi ký deal | Sale (hoặc confirm sếp Hưng giai đoạn đầu) | Cần người tìm KH |
| **Phase 1** | Khi ký deal đầu tiên | PM + Fullstack Dev | Có deal = có tiền setup, cần người triển khai & build |
| **Phase 2** | Khi có 2 KH | QA/BA/Đào tạo + Tài chính | Scale cần QA, KH cần đào tạo, tài chính phức tạp hơn |
| **Phase 3** | Khi có 3+ KH | +1 Dev (hoặc outsource) | Codebase lớn, cần thêm người build platform |

### 9.6 Nhân sự hiện tại — Đề xuất giữ / không giữ

> ⚠️ **Cần Vĩnh bổ sung**: Gửi cho CFO danh sách cụ thể nhân sự hiện tại, bao gồm:
> - Tên, vị trí, chế độ hiện tại (HĐLĐ hay freelance)
> - Đề xuất: giữ vào core team / chuyển sang freelance / cắt
> - Lý do

---

## 10. KẾ HOẠCH KINH DOANH — SALE & DEAL PIPELINE

### 10.1 Cơ chế sale (theo meeting 04/04)

- **Sếp Hưng = sale channel** của Diso (chưa thuê sale riêng)
- Diso phải **chủ động follow** sếp Hưng, đặt target cụ thể
- Không ngồi chờ sếp nhớ đến mình

### 10.2 Sale target

| KPI | Target | Ai chịu trách nhiệm |
|-----|--------|---------------------|
| Buổi pitching mới | 1 buổi / 2 tuần | Sếp Hưng book, Vĩnh pitch |
| Discovery call | 2 call / tháng | Sếp Hưng giới thiệu |
| Deal ký mới | 1 deal / 2 tháng | Cả team |
| KH active cuối năm 2026 | 3-5 KH | Target tổng |

### 10.3 Deal pipeline hiện tại

| Khách hàng | Ngành | Size | Status | Confidence | Next step |
|-----------|-------|------|--------|:----------:|-----------|
| **Traphaco** | Dược phẩm | DT sàn ~5 tỷ/th | Đã pitch, chờ phản hồi | **70%** | Gửi proposal chính thức + demo |
| **Trường Sinh** | Sâm, dược | TBD | Lead có sẵn (network sếp) | 40% | Discovery call |
| **Trường Nhân** | Dược / sàn TMĐT | TBD | Đã tiếp xúc | 30% | Tìm hiểu scope |
| *(Lead mới 1)* | FMCG / Health | TBD | Chưa có | 0% | Sếp Hưng giới thiệu |
| *(Lead mới 2)* | FMCG / Health | TBD | Chưa có | 0% | Sếp Hưng giới thiệu |

### 10.4 Quy trình từ lead → deal

```
Lead (sếp Hưng giới thiệu)
  → Discovery call (Vĩnh + sếp Hưng)
    → Demo sản phẩm (Vĩnh)
      → Khảo sát KH (sizing bằng form từ Finance)
        → Proposal + Giá (tính từ cost driver)
          → Negotiate
            → SIGN DEAL
              → Triển khai (Phase 1-3)
```

### 10.5 Sale kit cần có

| Tài liệu | Status | Owner |
|-----------|:------:|-------|
| Pitch deck (mô hình 3C, so sánh Misa) | ✅ Có | Vĩnh |
| Demo sản phẩm (8 module UI) | ✅ Có | Vĩnh |
| Bảng giá (pricing sheet) | ✅ Có | Vĩnh |
| Case study (Ambassador cho 17+ brands) | ✅ Có | Vĩnh |
| Form khảo sát KH (sizing) | ⬜ Chờ Finance | Finance team |
| Deal economics calculator | ⬜ Chưa | Hiếu |
| Proposal template | ⬜ Chưa | Vĩnh |

---

## 11. QUẢN TRỊ RỦI RO

### 11.1 Rủi ro & Giảm thiểu

| # | Rủi ro | Mức độ | Xác suất | Hệ quả | Giảm thiểu |
|---|--------|:------:|:--------:|--------|------------|
| 1 | **Không close được deal đầu tiên** | 🔴 Critical | Trung bình | Không có doanh thu, không test được mô hình | Follow sát sếp Hưng, đa dạng pipeline (3+ lead), sẵn sàng giảm giá mạnh cho deal đầu |
| 2 | **Vendor ops sàn không đáng tin** | 🔴 Critical | Cao | Ký deal xong không deliver, mất uy tín | Contact 2-3 vendor song song, test nhỏ trước khi ký deal lớn |
| 3 | **Haravan/Sapo API giới hạn** | 🟡 High | Trung bình | Không tích hợp được module Diso, phải workaround | Trial test ngay tuần này, backup plan Sapo/Medusa |
| 4 | **Cash runway hết trước khi có deal** | 🔴 Critical | Trung bình | Công ty ngừng hoạt động | Lean team, đề xuất sếp đầu tư sớm, tính lãi vay vào PNL |
| 5 | **Phụ thuộc 1 người (Vĩnh = bottleneck)** | 🟡 High | Cao | Vĩnh bệnh/nghỉ = mọi thứ dừng | Tuyển dev sớm, document mọi thứ, tự động hóa ops |
| 6 | **KH đòi nhiều customization** | 🟡 High | Cao | Ops cost vượt estimate, margin âm | Scope rõ ràng trong hợp đồng, fee custom riêng |
| 7 | **Vendor cướp khách** | 🟠 Medium | Thấp | Mất KH, mất doanh thu | Hợp đồng non-compete, giữ relationship layer |
| 8 | **Sàn TMĐT thay đổi policy** | 🟠 Medium | Trung bình | Ảnh hưởng module A, KH hoang mang | Đa kênh (sàn + kênh riêng + Zalo), không phụ thuộc 1 sàn |

### 11.2 Worst case scenario & Contingency

| Kịch bản | Trigger | Hành động |
|----------|---------|-----------|
| **6 tháng không có deal** | Pipeline trống | Pivot: bán Ambassador standalone (đã production). Giảm team về 1 người (Vĩnh). Tập trung 100% sale |
| **Deal ký xong nhưng KH churn sau 3 tháng** | KH không thấy kết quả | Grace period rev share. Cam kết KPI rõ ràng. Exit clause 2 bên |
| **Vendor chính ngừng hợp tác** | Pancake/Haravan/Dream Agency | Đã có backup vendor cho mỗi hạng mục (xem section 8.1). Chuyển đổi trong 2-4 tuần |

---

## 12. VENDOR MANAGEMENT FRAMEWORK

> Yêu cầu từ meeting 04/04: Không làm việc với vendor theo bản năng nữa. Phải có cơ chế rõ ràng.

### 12.1 Nguyên tắc

1. **Rạch ròi**: Thuê người ta làm cái gì, chi phí ra sao, sản phẩm cuối cùng ai nhận
2. **Không phụ thuộc 1 vendor**: Mỗi hạng mục phải có ít nhất 1 backup
3. **Vendor không được tiếp xúc trực tiếp với KH** (trừ khi Diso cho phép)
4. **Exit strategy**: Mọi vendor phải có plan B nếu quan hệ kết thúc

### 12.2 Quy trình làm việc với vendor mới

```
1. Xác định phạm vi cần thuê (từ product roadmap)
   ↓
2. Khảo giá 2-3 vendor (so sánh giá, capability, timeline)
   ↓
3. Chọn vendor → Ký hợp đồng khung (đơn giá + điều khoản)
   ↓
4. Mỗi tháng/giai đoạn: Email xác nhận phạm vi công việc cụ thể
   ↓
5. Nghiệm thu cuối tháng → Thanh toán
   ↓
6. Đánh giá vendor hàng quý → Tiếp tục / Thay thế
```

### 12.3 Vendor matrix hiện tại

| Hạng mục | Vendor chính | Backup | Status contact | Đánh giá |
|----------|-------------|--------|:--------------:|----------|
| E-commerce SaaS | Haravan | Sapo | ⬜ Chưa trial | Cần test tuần này |
| Zalo Mini App | Pancake | Sapo Go | ⬜ Chưa contact | Cần contact tuần này |
| Ops sàn TMĐT | Dream Agency | Freelancer team | ⬜ Chưa contact | Cần contact |
| Content production | DC Media | Freelancer | ⬜ Chưa contact | Cần contact |
| Affiliate network | AccessTrade | — | ✅ Confirmed | Strategic partner |

### 12.4 Template hợp đồng vendor

| Loại | Hợp đồng | Nội dung chính |
|------|----------|---------------|
| **Purchasing** | Hợp đồng mua dịch vụ / license | Scope sử dụng, giá, SLA, điều khoản tăng giá, exit |
| **Outsource phát triển** | Hợp đồng khung + PO từng giai đoạn | Deliverable, timeline, **IP ownership = Diso**, bảo mật |
| **Outsource vận hành** | Hợp đồng thuê khoán (KHÔNG HĐLĐ) | Scope khối lượng, KPI, nghiệm thu hàng tháng, non-compete |

---

## 13. KPI & MILESTONE ĐO LƯỜNG

### 13.1 KPI theo quý

| KPI | Q1 Target | Q2 Target | Q3 Target | Q4 Target |
|-----|-----------|-----------|-----------|-----------|
| **Deal ký mới** | 1 (Traphaco) | +1 | +1 | +1-2 |
| **KH active** | 1 | 2 | 3 | 3-5 |
| **Monthly recurring revenue** | 35 tr | 97 tr | 159 tr | 159-221 tr |
| **Gross margin** | >50% | >50% | >55% | >55% |
| **Vendor contacted** | 5 (tất cả hạng mục) | — | — | — |
| **Core team hired** | Kế toán | +1 Dev, +1 PM | — | +1 nếu cần |
| **Platform tự build** | — | — | Bắt đầu nếu đủ KH | MVP |

### 13.2 Gate check — Điều kiện chuyển phase

| Gate | Điều kiện | Ai quyết định |
|------|----------|---------------|
| **Gate 0 → Phase 1** | (1) Sếp duyệt đầu tư, (2) Core team đủ, (3) Ít nhất 1 deal ký | Sếp + CFO |
| **Phase 1 → Phase 2** | (1) KH đầu có doanh số sàn, (2) Vendor ops sàn ổn định, (3) Haravan/Sapo API tested | Vĩnh |
| **Phase 2 → Phase 3** | (1) Kênh riêng có traffic, (2) CRM thu được data, (3) KH hài lòng | Vĩnh + KH |
| **Phase 3 → Phase 4** | (1) ≥3 KH active, (2) Monthly revenue ≥150 tr, (3) SaaS limitation rõ ràng | Toàn team |

### 13.3 Review cadence

| Loại | Tần suất | Ai tham gia | Nội dung |
|------|---------|-------------|---------|
| **Daily standup** | Hàng ngày | Core team | Blocker, progress |
| **Weekly review** | Thứ 6 hàng tuần | Vĩnh + team | Pipeline, vendor, KH |
| **Monthly report** | Cuối tháng | Vĩnh + Finance team | PNL, KPI, chi phí vs kế hoạch |
| **Quarterly strategy** | Cuối quý | Toàn bộ (kể cả sếp Hưng) | Đánh giá chiến lược, điều chỉnh roadmap |

---

## 14. ACTION ITEMS TỔNG HỢP

### Vĩnh (Tech & Product)

| # | Việc | Deadline | Status |
|---|------|----------|--------|
| 1 | Gửi danh sách nhân sự hiện tại + đề xuất core team cho CFO | Tuần này | ⬜ |
| 2 | Điền data thực tế Traphaco vào bảng cost driver (section 5) khi có form từ Finance | Chờ form | ⬜ |
| 3 | Contact Pancake — Zalo Mini App capability, pricing | Tuần này | ⬜ |
| 4 | Trial Haravan + Sapo — test API integration | Tuần này | ⬜ |
| 5 | Contact Dream Agency — ops sàn package | Tuần này | ⬜ |
| 6 | Contact DC Media — batch content pricing | Tuần này | ⬜ |
| 7 | Follow sếp Hưng — đặt target deal cụ thể (2 tuần / 1 buổi pitch) | Liên tục | ⬜ |
| 8 | Tạo proposal template cho Traphaco | Tuần sau | ⬜ |
| 9 | Review & gửi tài liệu này cho Finance team | Ngay | ⬜ |

### Finance team (CFO + Hiếu)

| # | Việc | Deadline |
|---|------|----------|
| 1 | Design form sizing (bảng tính chi phí activity-based) — dựa trên section 5 | Sớm nhất |
| 2 | Gửi báo cáo tài chính 2025 (gộp + tách riêng ambassador) cho các sếp | Tuần này |
| 3 | Xây template bán product: bảng giá + bảng cost liên kết | Sau form sizing |
| 4 | Tính PNL tổng thể: chi phí core team + roadmap → sếp cần đầu tư bao nhiêu, bao lâu | Sau bước 1-3 |
| 5 | Xây deal economics calculator (KH điền số → ra giá tự động) | Sau bước 3 |

### Sếp Hưng (Sale channel)

| # | Việc | Deadline |
|---|------|----------|
| 1 | Follow deal Traphaco — push ra quyết định | Tuần này |
| 2 | Giới thiệu 1-2 lead mới (dược phẩm / FMCG) | Trong tháng 4 |
| 3 | Confirm: AT có co-invest / hỗ trợ ops 2 tháng đầu không? | Tuần này |

---

## PHỤ LỤC

### Tài liệu liên quan

| Tài liệu | Nội dung | Đường dẫn |
|-----------|---------|-----------|
| Cost vs Price (Traphaco) | Bảng giá bán cho KH theo 4 kịch bản | `internal/traphaco-cost-vs-price.md` |
| Delivery Assessment (Traphaco) | Đánh giá khả thi deal Traphaco | `internal/traphaco-delivery-assessment.md` |
| Vendor Research | So sánh vendor chi tiết | `internal/vendor-research.md` |
| Internal Vision | Tầm nhìn Diso, mô hình 3C | `internal/diso-internal-vision.md` |
| Execution Layer | 3 track triển khai thực chiến | `internal/diso-execution-layer.md` |
| Meeting Note 04/04 | Transcript cuộc họp kế hoạch tài chính | `meeting/0404-kehoachtaichinh.md` |

---

*Diso Internal — Kế hoạch Phát triển Công ty v2.0 — 2026-04-09*
