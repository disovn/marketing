# SALEKIT.DISO.VN — Website Specification

> ⚠️ **TÀI LIỆU NÀY ĐÃ BỊ THAY THẾ (2026-05-18).**
> Spec kiến trúc hiện hành: **[salekit-web-plan.md](salekit-web-plan.md)**.
> File này giữ lại để tham khảo chi tiết UI (component, màu sắc, layout gợi ý) — KHÔNG dùng làm spec kiến trúc. Phần "copy demo-commerce làm starter" đã lỗi thời: quyết định mới là app riêng, không copy demo.

## Portal đọc Sales Kit + embed demo cho team sales & khách hàng

**Phiên bản**: v1.0 — 2026-05-12 (superseded)
**Domain**: `salekit.diso.vn`
**Đối tượng đọc spec**: Dev team build website
**Build time dự kiến**: 2-3 tuần (1 senior FE)

---

## 🎯 MỤC ĐÍCH (CRYSTAL CLEAR)

Đây **KHÔNG PHẢI** website marketing public theo kiểu `diso.vn` (root).

Đây **LÀ**:
- 📚 Portal đọc Sales Kit (`docs/sales-kit/*.md`) ở dạng web đẹp thay vì markdown
- 🖥️ Trung tâm tổng hợp demos để sales/khách click xem trực tiếp
- 🧮 Interactive ROI calculator (cái duy nhất cần build tính năng, không phải render markdown)
- 🔗 Link có thể share cho khách (vs gửi 5 file PDF qua Zalo)

**Triết lý:**
> *"Mọi page render từ .md có sẵn — update content = sửa .md = commit. Không cần CMS, không cần admin UI."*

---

## 🏗️ TECH STACK

| Layer | Tech | Lý do |
|---|---|---|
| **Framework** | **Next.js 16 (App Router) + React 19** | Cùng stack với `demo-commerce/` — team đã quen |
| **Styling** | **Tailwind CSS v4 + shadcn/ui** | Reuse component library từ `demo-commerce/` |
| **Markdown render** | **next-mdx-remote** + remark/rehype plugins | Hot reload .md khi dev, SSG khi build |
| **Code highlight** | **shiki** | Render code block đẹp (markdown có nhiều bảng/code) |
| **Charts** | **Recharts** | Cho /roi interactive (đã có trong demo-commerce) |
| **Icons** | **Lucide React** | Đã có trong demo-commerce |
| **Search** | **FlexSearch** hoặc **Fuse.js** (client-side) | Search trong /objections, /products |
| **Auth (private routes)** | **Better Auth** + JWT cookie | Cho sales team login (split public/private) |
| **PDF export** | **react-to-print** | /battle-cards có "Print to PDF" button |
| **Analytics** | **Plausible** (privacy-friendly) | Track funnel, không cookie banner phiền |
| **Hosting** | **Vercel** (frontend) + **Cloudflare** (custom domain) | Edge deploy, deploy <30s |

### Lý do reuse stack `demo-commerce/`

```json
// Đã có trong demo-commerce/package.json:
"next": "16.1.6",
"react": "19.2.3",
"@base-ui/react": "^1.2.0",
"recharts": "^3.8.0",
"shadcn": "^4.0.5",
"lucide-react": "^0.577.0",
"tailwind-merge": "^3.5.0",
"sonner": "^2.0.7",
"qrcode.react": "^4.2.0"
```

→ Copy `demo-commerce/` làm starter, không cần setup từ đầu.

---

## 📐 SITEMAP CHI TIẾT

### Tier 1 — PUBLIC (ai cũng vào được)

```
salekit.diso.vn/
│
├── /                                 [Landing page]
│   ├── Hero: "Diso Commerce Suite — Sales Kit"
│   ├── 7 sản phẩm overview cards
│   ├── 4 gói pricing teaser
│   ├── Links to: /products, /pricing, /roi, /demos
│   └── Auth: NONE
│
├── /products                         [Index 7 sản phẩm]
│   ├── Grid 7 cards: Storefront, ZaloApp, Affiliate, Reseller, Ambassador, Operations, CRM
│   └── Auth: NONE
│
├── /products/[slug]                  [Detail page per product]
│   ├── slugs: storefront, zaloapp, affiliate, reseller, ambassador, operations, crm
│   ├── Content render từ docs/sales-kit/product-catalog.md (section tương ứng)
│   ├── Embed demo iframe (nếu có demo cho sản phẩm đó)
│   ├── CTA: "Xem pricing" → /pricing | "Book demo" → externalCalendly
│   └── Auth: NONE
│
├── /pricing                          [4 gói side-by-side]
│   ├── Content render từ docs/sales-kit/pricing-packages.md
│   ├── Bảng so sánh feature matrix interactive
│   ├── Quiz "Gói nào phù hợp với bạn?" (3 câu)
│   └── Auth: NONE
│
├── /roi                              [Interactive ROI Calculator] ⭐ KEY ASSET
│   ├── 6 inputs: revenue, fee%, margin, SKU, DB, target%
│   ├── 3 scenarios tabs (Conservative/Realistic/Optimistic)
│   ├── 3 charts (Recharts): Cost bar, Cumulative line, Revenue donut
│   ├── "Gửi báo cáo qua email" → lead capture form
│   ├── Share URL với params (state in URL)
│   └── Auth: NONE
│
├── /case-studies                     [List page]
│   ├── Filter: ngành, doanh thu, gói Diso
│   ├── Card preview: logo + metric + 2 dòng
│   └── Auth: NONE
│
├── /case-studies/[slug]              [Detail per case]
│   ├── slugs: tpbank, yody, anker, flamingo, traphaco-pilot...
│   ├── Content render từ docs/case-studies.md (per case)
│   └── Auth: NONE
│
├── /demos                            [Demo gallery]
│   ├── Grid cards: tất cả demos available
│   └── Auth: NONE (xem grid)
│
├── /demos/[slug]                     [Embed demo page]
│   ├── slugs: storefront, admin, affiliate, ambassador, reseller, csplatform...
│   ├── Iframe fullscreen với demo
│   ├── Topbar nhỏ: tên demo + "Đóng" + "Mở tab mới"
│   └── Auth: NONE (vài demo cần password — xem mapping bên dưới)
│
└── /contact                          [Demo booking]
    ├── Calendly embed
    ├── Form fallback
    └── Auth: NONE
```

### Tier 2 — SALES INTERNAL (login required)

```
salekit.diso.vn/sales/
│
├── /sales                            [Dashboard sales team]
│   ├── Quick links to: battle-cards, objections, scripts
│   ├── Search bar (search across all sales docs)
│   ├── Recent customers viewed (per sales rep)
│   └── Auth: REQUIRED (sales role)
│
├── /sales/battle-cards               [In ra giấy mang đi]
│   ├── 5 battle cards format A4 print-friendly
│   ├── "Print this page" button → PDF
│   ├── Per-card view: /sales/battle-cards/launch, /growth, /scale, /enterprise
│   └── Auth: REQUIRED
│
├── /sales/objections                 [Q&A search]
│   ├── 15 câu Q&A từ objection-handling.md
│   ├── Search box (FlexSearch client-side)
│   ├── Filter: nhóm 1/2/3 (giá/kỹ thuật/rủi ro)
│   └── Auth: REQUIRED
│
├── /sales/scripts                    [Sales scripts]
│   ├── 60-second opening script
│   ├── Demo flow templates
│   ├── ROI workshop script
│   └── Auth: REQUIRED
│
├── /sales/discount                   [Discount approval policy]
│   ├── Nội bộ — pricing tier internal
│   ├── Form request discount approval
│   └── Auth: REQUIRED
│
└── /sales/customers                  [Per-deal workspace]
    ├── /sales/customers/[id]/notes
    ├── /sales/customers/[id]/proposal
    └── Auth: REQUIRED + ownership check
```

---

## 📊 CONTENT MAPPING — Markdown → Web

Đây là chìa khóa: **mỗi page render từ 1 file .md có sẵn**.

| Route | Source file | Render strategy |
|---|---|---|
| `/` | `docs/sales-kit/README.md` (rút gọn) | SSG, custom layout với hero + cards |
| `/products` | `docs/sales-kit/product-catalog.md` (overview) | SSG, grid cards |
| `/products/storefront` | `docs/sales-kit/product-catalog.md` (section 1️⃣) | SSG, per-section parse |
| `/products/zaloapp` | `docs/sales-kit/product-catalog.md` (section 2️⃣) | SSG, per-section parse |
| `/products/affiliate` | `docs/sales-kit/product-catalog.md` (section 3️⃣) | SSG |
| `/products/reseller` | `docs/sales-kit/product-catalog.md` (section 4️⃣) | SSG |
| `/products/ambassador` | `docs/sales-kit/product-catalog.md` (section 5️⃣) | SSG |
| `/products/operations` | `docs/sales-kit/product-catalog.md` (section 6️⃣) | SSG |
| `/products/crm` | `docs/sales-kit/product-catalog.md` (section 7️⃣) | SSG |
| `/pricing` | `docs/sales-kit/pricing-packages.md` | SSG, custom 4-column layout |
| `/roi` | `docs/sales-kit/roi-calculator-generic.md` | SSG content + React component interactive |
| `/case-studies` | `docs/case-studies.md` (list) | SSG |
| `/case-studies/[slug]` | `docs/case-studies.md` (per case) | SSG, MDX |
| `/sales/battle-cards` | `docs/sales-kit/battle-cards.md` | SSG, print-friendly CSS |
| `/sales/objections` | `docs/sales-kit/objection-handling.md` | SSG + client search |
| `/sales/scripts` | `docs/sales-kit/README.md` (script section) | SSG |

### Build-time content extraction

```typescript
// lib/content.ts
import fs from 'fs'
import matter from 'gray-matter'
import { remark } from 'remark'

export function getProduct(slug: string) {
  const file = fs.readFileSync('../docs/sales-kit/product-catalog.md', 'utf-8')
  const sections = splitByHeading(file, '##')
  return sections.find(s => slugify(s.title) === slug)
}
```

→ Build script đọc `.md` lúc `next build` → static HTML output. Hot reload trong dev.

---

## 🖥️ DEMOS MAPPING — `/demos/[slug]`

Anh đã có **rất nhiều demos** trong workspace. Mapping ưu tiên:

### Tier A — Demos cốt lõi (must-have launch day)

| Slug | Source | URL/path | Note |
|---|---|---|---|
| `/demos/storefront` | `demo-commerce/src/app/[client]/storefront` | iframe → `demo-commerce.diso.vn/diso/storefront` | Đã build |
| `/demos/admin` | `demo-commerce/src/app/[client]/admin` | iframe → `demo-commerce.diso.vn/diso/admin` | Đã build |
| `/demos/affiliate` | `demo-commerce/src/app/[client]/affiliate` | iframe → `demo-commerce.diso.vn/diso/affiliate` | Đã build |
| `/demos/ambassador` | `demo-commerce/src/app/[client]/ambassador` | iframe → `demo-commerce.diso.vn/diso/ambassador` | Đã build |
| `/demos/reseller` | `demo-commerce/src/app/[client]/reseller` | iframe → `demo-commerce.diso.vn/diso/reseller` | Đã build |
| `/demos/cart-checkout` | `demo-commerce/src/app/[client]/{cart,checkout}` | iframe → demo flow | Đã build |
| `/demos/verify-qr` | `demo-commerce/src/app/[client]/verify` | iframe → QR Authentic demo | Đã build (Enterprise) |
| `/demos/csplatform` | `statistic/csplatform/` | iframe → `statistic.diso.vn/csplatform` | Đã build (Dora) |

### Tier B — Demos vertical (industry-specific, ưu tiên cho enterprise pitch)

| Slug | Source | Audience |
|---|---|---|
| `/demos/traphaco-storefront` | `demo-commerce/src/app/[client=traphaco]/storefront` | Pitch Traphaco |
| `/demos/traphaco-proposal` | `demo-commerce/src/app/[client]/traphaco-proposal` | Đã có content |
| `/demos/traphaco-roi` | `demo-commerce/src/app/[client]/traphaco-roi` | Đã có ROI cụ thể |
| `/demos/truongsinh` | từ `plans/20260312-1600-truongsinh-pitch-demo/` | Pitch Trường Sinh |
| `/demos/tcb-ambassador` | Ambassador production (TPBank-style) | Banking vertical |

### Tier C — Demos hỗ trợ sales (existing pages tốt giữ lại)

| Slug | Source | Mục đích |
|---|---|---|
| `/demos/pitch-deck` | `demo-commerce/src/app/[client]/pitch-deck` | Slide deck interactive |
| `/demos/one-pager` | `demo-commerce/src/app/[client]/one-pager` | A4 export |
| `/demos/case-studies` | `demo-commerce/src/app/[client]/case-studies` | Case browser |
| `/demos/comparison` | `demo-commerce/src/app/[client]/comparison` | vs đối thủ |
| `/demos/quotation` | `demo-commerce/src/app/[client]/quotation` | Báo giá template |

### Demo embed UX

```tsx
// app/demos/[slug]/page.tsx
export default function DemoPage({ params }) {
  const demo = getDemoConfig(params.slug)
  return (
    <div className="h-screen flex flex-col">
      {/* Topbar */}
      <div className="h-12 border-b flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link href="/demos">← Tất cả demos</Link>
          <Separator orientation="vertical" />
          <span className="font-medium">{demo.title}</span>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={openInNewTab}>
            <ExternalLink /> Mở tab mới
          </Button>
          <Button size="sm" asChild>
            <Link href="/contact">Book demo với consultant</Link>
          </Button>
        </div>
      </div>
      {/* Iframe demo */}
      <iframe
        src={demo.url}
        className="flex-1 w-full"
        sandbox="allow-scripts allow-same-origin allow-forms"
      />
    </div>
  )
}
```

---

## 🔐 ACCESS CONTROL — Split Public / Private

### Architecture

```
[Public routes]                    [Private routes]
   /                                  /sales/*
   /products/*                        ↑
   /pricing                       require auth
   /roi                          (middleware check)
   /case-studies/*
   /demos/*
   /contact
```

### Implementation với Next.js middleware

```typescript
// middleware.ts
import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const isPrivate = request.nextUrl.pathname.startsWith('/sales')

  if (isPrivate) {
    const token = request.cookies.get('salekit-auth')?.value
    if (!token || !verifyToken(token)) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/sales/:path*']
}
```

### Auth options

**Option A: Better Auth + Email magic link (Recommended)**
- Sales team login bằng email `@diso.vn`
- Magic link gửi email, không password
- Session cookie 30 ngày
- Có Role-Based Access Control nếu cần (sales / sales-manager / cfo)

**Option B: Shared password (đơn giản)**
- 1 password chung cho cả sales team
- Set qua env var `SALES_KIT_PASSWORD`
- Đổi password khi member nghỉ
- Phù hợp giai đoạn đầu (team <10 người)

### Khuyến nghị

→ **Bắt đầu với Option B** (shared password). Khi team >10 sales hoặc cần audit trail thì migrate sang Option A.

---

## 🧮 INTERACTIVE ROI CALCULATOR — Spec chi tiết

### UX Flow

```
┌────────────────────────────────────────────────────────────┐
│  /roi — ROI Calculator                                      │
├────────────────────────────────────────────────────────────┤
│                                                              │
│  INPUTS (left column, 6 sliders/dropdowns)                  │
│  ┌──────────────────────────────────┐                       │
│  │ Doanh thu sàn (tỷ/m):  [====10] │                       │
│  │ Phí sàn (%):           [===22%] │                       │
│  │ Margin gộp (%):        [===55%] │                       │
│  │ Số SKU:                [▼ 2000] │                       │
│  │ DB Zalo OA:            [▼ 80K]  │                       │
│  │ Target % kênh riêng:   [===30%] │                       │
│  │                                  │                       │
│  │ Gói đề xuất: [Launch][Growth ⭐][Scale][Enterprise]    │
│  │                                  │                       │
│  └──────────────────────────────────┘                       │
│                                                              │
│  OUTPUTS (right column, 3 tabs scenarios)                   │
│  ┌──────────────────────────────────┐                       │
│  │ [Conservative][Realistic ⭐][Optimistic]                  │
│  │                                  │                       │
│  │ ╔══════════════════════════════╗ │                       │
│  │ ║ Tiết kiệm năm 1:   7.05 tỷ  ║ │                       │
│  │ ║ ROI:               810%      ║ │                       │
│  │ ║ Break-even:        7 ngày    ║ │                       │
│  │ ║ LTV 3 năm:         102 tỷ    ║ │                       │
│  │ ╚══════════════════════════════╝ │                       │
│  │                                  │                       │
│  │ [Bar chart: Cost sàn vs Diso]   │                       │
│  │ [Line chart: Cumulative saving] │                       │
│  │ [Donut: Revenue mix năm 3]      │                       │
│  └──────────────────────────────────┘                       │
│                                                              │
│  CTA:  [📥 Gửi báo cáo PDF qua email]                       │
│        [📞 Book demo với consultant]                        │
│                                                              │
│  Share URL: salekit.diso.vn/roi?r=10&f=22&t=30&pkg=growth  │
└────────────────────────────────────────────────────────────┘
```

### Tech detail

```typescript
// app/roi/page.tsx
'use client'
import { useState, useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { BarChart, LineChart, DonutChart } from '@/components/charts'
import { calculateROI } from '@/lib/roi-formula'

export default function ROICalculator() {
  const params = useSearchParams()
  const router = useRouter()

  const [inputs, setInputs] = useState({
    revenue: Number(params.get('r')) || 10,
    feeRate: Number(params.get('f')) || 22,
    margin: 55,
    sku: 2000,
    db: 80000,
    targetPct: Number(params.get('t')) || 30,
    pkg: params.get('pkg') || 'growth',
  })

  // Update URL when inputs change (shareable link)
  useEffect(() => {
    const qs = new URLSearchParams({
      r: String(inputs.revenue),
      f: String(inputs.feeRate),
      t: String(inputs.targetPct),
      pkg: inputs.pkg,
    })
    router.replace(`/roi?${qs}`, { scroll: false })
  }, [inputs])

  const results = {
    conservative: calculateROI(inputs, 'conservative'),
    realistic: calculateROI(inputs, 'realistic'),
    optimistic: calculateROI(inputs, 'optimistic'),
  }

  return <ROILayout inputs={inputs} setInputs={setInputs} results={results} />
}
```

### Formula source

→ Đã viết chi tiết trong [roi-calculator-generic.md](roi-calculator-generic.md). Implement đúng công thức A→F.

### Lead capture trigger

Khi user click "Gửi báo cáo PDF":
1. Show modal form: Name, Email, Phone, Company, Role
2. Submit → POST `/api/lead` với inputs + results + lead info
3. Backend: lưu DB + gửi email (Resend) PDF report + Slack notification `#sales-leads`
4. Show success toast: "Báo cáo đã gửi vào email anh/chị. Sales sẽ liên hệ trong 24h."

---

## 🎨 DESIGN SYSTEM

### Reuse từ `demo-commerce/`

```bash
cp -r demo-commerce/src/components/ui salekit/src/components/ui
# shadcn/ui components: button, card, dialog, sheet, table, tabs, accordion...
```

### Color palette (kế thừa statistic/index.html)

```css
:root {
  /* Primary */
  --primary: #1B365D;           /* Deep navy */
  --primary-light: #243f6b;
  --secondary: #368CBF;          /* Tech blue */

  /* Accent */
  --accent: #FF6F61;             /* Coral */
  --accent-hover: #ff5a4a;

  /* Pricing tier colors (battle cards) */
  --launch: #3B82F6;             /* 🟦 Blue */
  --growth: #10B981;             /* 🟩 Emerald */
  --scale: #8B5CF6;              /* 🟪 Violet */
  --enterprise: #EF4444;         /* 🟥 Red */

  /* Neutrals */
  --bg-white: #FFFFFF;
  --bg-light: #F4F6F8;
  --bg-dark: #0F1F33;
  --text-dark: #263238;
  --text-muted: #5A6B7B;
}
```

### Typography

```css
--font-heading: 'Be Vietnam Pro', sans-serif;   /* Vietnamese-optimized */
--font-body: 'Inter', sans-serif;
--font-mono: 'JetBrains Mono', monospace;       /* For pricing numbers, code */
```

### Component library (shadcn/ui base)

| Component | Use case |
|---|---|
| `Card` | Product cards, pricing cards |
| `Tabs` | ROI scenarios, comparison views |
| `Accordion` | FAQ, objection sections |
| `Sheet` | Mobile menu, demo info panel |
| `Dialog` | Lead capture modal, demo booking |
| `Table` | Comparison sheet, feature matrix |
| `Badge` | Tier labels (Launch/Growth/Scale/Enterprise) |
| `Button` | CTAs (primary/secondary/ghost) |
| `Slider` | ROI inputs |
| `Select` | Filter dropdowns |
| `Command` | Search palette (Cmd+K) |

### Layout primitives

```tsx
// components/layout/PageContainer.tsx
export function PageContainer({ children }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {children}
    </div>
  )
}

// components/layout/PageHeader.tsx
export function PageHeader({ title, description, breadcrumbs }) { ... }
```

---

## 📁 PROJECT STRUCTURE

```
salekit/
├── src/
│   ├── app/
│   │   ├── layout.tsx                  # Root layout với nav
│   │   ├── page.tsx                    # Landing
│   │   ├── login/page.tsx              # Auth gate cho /sales
│   │   ├── api/
│   │   │   ├── lead/route.ts           # POST lead capture
│   │   │   └── auth/route.ts           # Auth endpoints
│   │   │
│   │   ├── products/
│   │   │   ├── page.tsx                # Index 7 products
│   │   │   └── [slug]/page.tsx         # Per-product detail
│   │   │
│   │   ├── pricing/page.tsx
│   │   ├── roi/page.tsx                # Interactive calculator
│   │   ├── case-studies/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── demos/
│   │   │   ├── page.tsx                # Demo gallery
│   │   │   └── [slug]/page.tsx         # Iframe wrapper
│   │   ├── contact/page.tsx
│   │   │
│   │   └── sales/                      # Private routes
│   │       ├── layout.tsx              # Auth check
│   │       ├── page.tsx                # Dashboard
│   │       ├── battle-cards/
│   │       │   ├── page.tsx
│   │       │   └── [tier]/page.tsx
│   │       ├── objections/page.tsx
│   │       ├── scripts/page.tsx
│   │       └── discount/page.tsx
│   │
│   ├── components/
│   │   ├── ui/                         # shadcn/ui (copy từ demo-commerce)
│   │   ├── layout/
│   │   │   ├── Nav.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── PageContainer.tsx
│   │   ├── product/
│   │   │   ├── ProductCard.tsx
│   │   │   └── ProductDetail.tsx
│   │   ├── pricing/
│   │   │   ├── PricingCard.tsx
│   │   │   ├── FeatureMatrix.tsx
│   │   │   └── PackageQuiz.tsx
│   │   ├── roi/
│   │   │   ├── ROICalculator.tsx       # Main interactive component
│   │   │   ├── InputPanel.tsx
│   │   │   ├── ResultsPanel.tsx
│   │   │   ├── CostChart.tsx
│   │   │   ├── SavingChart.tsx
│   │   │   └── LeadCaptureForm.tsx
│   │   ├── demo/
│   │   │   ├── DemoCard.tsx
│   │   │   └── DemoFrame.tsx
│   │   └── markdown/
│   │       └── MdxComponents.tsx       # Custom renderers
│   │
│   ├── lib/
│   │   ├── content.ts                  # Read .md files
│   │   ├── roi-formula.ts              # Calculate ROI
│   │   ├── auth.ts                     # Better Auth setup
│   │   ├── analytics.ts                # Plausible tracking
│   │   └── demos.ts                    # Demo registry
│   │
│   ├── content/                        # Symlink → ../../docs/sales-kit/
│   │   └── ...                         # Or just import directly
│   │
│   └── styles/globals.css
│
├── public/
│   ├── og-image.png
│   ├── favicon.svg
│   └── logos/
│
├── middleware.ts                       # Auth middleware
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 🚀 DEPLOYMENT PLAN

### Hosting

**Option 1: Vercel (Recommended)**
- Vercel free tier đủ cho traffic <100K req/tháng
- Auto-deploy on git push
- Preview deployments per PR
- Custom domain `salekit.diso.vn` via Cloudflare

**Option 2: Cloudflare Pages**
- Free unlimited bandwidth
- Edge functions cho /api routes
- Cùng provider với domain → setup nhanh

### DNS setup

```
salekit.diso.vn  CNAME  cname.vercel-dns.com.
                 (hoặc) salekit.pages.dev.
```

### Environment variables

```bash
# .env.production
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=salekit.diso.vn
SALES_KIT_PASSWORD=<secret>           # Option B auth
BETTER_AUTH_SECRET=<secret>            # Option A auth
RESEND_API_KEY=<secret>                # Email lead capture
SLACK_WEBHOOK_URL=<secret>             # #sales-leads notification
DATABASE_URL=<postgres-url>            # Lead storage (Supabase free tier)

# Demo URLs (configurable)
DEMO_COMMERCE_URL=https://demo-commerce.diso.vn
DEMO_CSPLATFORM_URL=https://statistic.diso.vn/csplatform
DEMO_AMBASSADOR_URL=https://ambassador.diso.vn
```

### CI/CD

```yaml
# .github/workflows/deploy.yml
name: Deploy salekit
on:
  push:
    branches: [main]
    paths:
      - 'marketing/**'                  # Trigger khi .md thay đổi
      - 'salekit/**'

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: cd salekit && npm install && npm run build
      - run: npx vercel deploy --prod
```

→ **Update content workflow**: Sửa `.md` trong `docs/sales-kit/` → commit → push → auto-deploy. Mất ~2 phút.

---

## ⏱️ ROADMAP TRIỂN KHAI

### Week 1 — Foundation
- [ ] Tạo repo `salekit/` (copy structure từ `demo-commerce/`)
- [ ] Setup Next.js 16 + Tailwind v4 + shadcn/ui
- [ ] Copy `components/ui` từ demo-commerce
- [ ] Setup Plausible analytics
- [ ] Deploy skeleton lên Vercel + connect domain `salekit.diso.vn`
- [ ] Setup auth middleware (shared password)

### Week 2 — Public pages
- [ ] `/` Landing page
- [ ] `/products` + 7 `/products/[slug]` pages (render từ product-catalog.md)
- [ ] `/pricing` (render từ pricing-packages.md, custom layout 4-col)
- [ ] `/case-studies` + detail pages
- [ ] `/contact` (Calendly embed)
- [ ] Navigation + Footer

### Week 3 — Interactive + private
- [ ] `/roi` interactive calculator (Recharts)
- [ ] Lead capture form + Resend integration
- [ ] `/demos` gallery + iframe wrappers cho 8 demos Tier A
- [ ] `/sales/*` private routes (auth gate)
- [ ] `/sales/battle-cards` print-friendly + PDF export
- [ ] `/sales/objections` search box
- [ ] Polish design, mobile responsive
- [ ] Soft launch nội bộ Diso

### Week 4 (optional) — Polish
- [ ] Vertical landing pages (`/products/storefront?industry=duoc-pham`)
- [ ] Demo Tier B (Traphaco, Trường Sinh specific)
- [ ] Search command palette (Cmd+K)
- [ ] OG images per page
- [ ] SEO optimization (sitemap, schema.org)
- [ ] **Public launch** salekit.diso.vn

---

## 💰 CHI PHÍ DỰ KIẾN

### Build cost

| Hạng mục | Cost | Note |
|---|---|---|
| **Senior FE dev** | 0 (nội bộ) hoặc 80-120tr (outsource) | 2-3 tuần × 40tr/tháng |
| **Designer** | 0-30tr | Reuse design system từ `demo-commerce` + `statistic/index.html` |
| **Content** | 0 | Đã có sẵn trong `docs/sales-kit/*.md` |
| **Total** | **0-150tr** | Nếu nội bộ build |

### Monthly running cost

| Service | Cost/tháng |
|---|---|
| Vercel | $0 (free tier) hoặc $20 (Pro) |
| Cloudflare DNS | $0 |
| Plausible Analytics | $9 (10K pageviews) |
| Resend (email) | $0-20 (free 3K emails) |
| Supabase (DB cho leads) | $0 (free tier) |
| **Total** | **~$10-50/tháng (~250K-1.2tr VND)** |

→ Cực kỳ rẻ. Build 0-150tr, run ~500K VND/tháng.

---

## 📊 SUCCESS METRICS

### Sau 1 tháng launch

| Metric | Target | Đo bằng |
|---|---|---|
| Page views | 1.000+/tháng | Plausible |
| Avg time on /roi | 3+ phút | Plausible |
| Lead form submits | 10+/tháng | Database |
| Demos viewed | 200+/tháng | Plausible |
| Sales sử dụng /sales/battle-cards | 5+ lần/tuần/sales | Auth log |

### Sau 3 tháng

| Metric | Target |
|---|---|
| Inbound leads | 30+/tháng |
| Lead → demo booked | 30% conversion |
| Demo → deal | 15% conversion |
| **Total inbound deals/quý** | **3-5 deals** |
| **Revenue contribution** | **2-5 tỷ VND/quý** |

→ Break-even chi phí build sau **1-2 deal** từ inbound.

---

## 🎯 NGUYÊN TẮC THIẾT KẾ (cho dev follow)

1. **Speed > Beauty**: Page load <1s. Lazy load demos.
2. **Content is king**: Mọi component phải highlight content, không "thiết kế đẹp che content".
3. **Mobile-first**: 60% traffic sẽ là mobile (sales mở Zalo show khách trên điện thoại).
4. **Print-friendly**: `/sales/battle-cards` phải in A4 đẹp.
5. **Shareable URLs**: Mọi state nên đưa vào URL params (ROI inputs, filters).
6. **Hot reload .md**: Dev edit `.md` → page tự reload, không phải restart server.
7. **No dark patterns**: Lead capture chỉ ở /roi sau khi user xem kết quả, KHÔNG popup chặn từ đầu.
8. **Accessibility**: Keyboard navigation, screen reader friendly. WCAG AA.

---

## ❓ OPEN QUESTIONS — Cần anh quyết

1. **Subdomain**: `salekit.diso.vn` hay `kit.diso.vn` hay path `/kit` trên `diso.vn`?
2. **Demos hosting**: Deploy `demo-commerce/` lên subdomain riêng (`demo.diso.vn` / `dc.diso.vn`)?
3. **Lead notification channel**: Slack `#sales-leads`? Email? Telegram?
4. **Sales account provision**: Auto-create cho mọi `@diso.vn` email hay manual invite?
5. **Translation**: VN only hay multi-lang (cho khách cross-border)?
6. **Migration**: `statistic.diso.vn/index.html` hiện tại có giữ hay redirect sang `salekit.diso.vn`?

---

*Salekit Website Spec v1.0 | 2026-05-12*
*Anh Vĩnh (Product) viết — Dev team build*
