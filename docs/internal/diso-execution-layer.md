# DISO – EXECUTION LAYER (Phiên bản thực chiến)

> **Tài liệu nội bộ** — Bổ sung cho [Internal Vision](./diso-internal-vision.md)
> Version: 1.1 | Ngày: 2026-03-31
> Mục đích: Biến vision thành hành động có thể kiếm tiền, test thị trường, và scale

Tập trung vào 3 mục tiêu:

1. **Có khách đầu tiên (deal thật)**
2. **Triển khai ra kết quả (doanh thu thật)**
3. **Lặp lại được (scale)**

---

# 0. 3 VIỆC LÀM NGAY — CHẠY SONG SONG

Execution layer mà không có "ngày mai làm gì" thì vẫn là plan.

3 việc dưới đây **chạy đồng thời**, không đợi nhau. Ai rảnh việc gì làm việc đó.

```
┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐
│  1. SALE KIT     │  │  2. TÌM KHÁCH    │  │  3. TÌM VENDOR   │
│  (Vĩnh + Hải)   │  │  (Hải)           │  │  (Vĩnh + Hải)   │
│                  │  │                  │  │                  │
│  Xây báo giá,   │  │  Lọc lead,       │  │  Platform,       │
│  Super Kit demo, │  │  gửi hook,       │  │  Content agency, │
│  pitch deck      │  │  discovery call  │  │  Ops, Logistics, │
│                  │  │                  │  │  Payment          │
└────────┬─────────┘  └────────┬─────────┘  └────────┬─────────┘
         │                     │                      │
         └─────────────────────┼──────────────────────┘
                               ▼
                    GATE CHECK: Đủ cả 3 → SIGN DEAL
```

> **Rule: Tìm khách và tìm vendor chạy song song. Nhưng SIGN DEAL chỉ khi đủ cả 3.**

---

### Track 1: Xây Sale Kit + Demo (Vĩnh lead, Hải support)

| # | Việc | Output |
|---|------|--------|
| 1 | Super Kit demo — clone Shopee UI cho 1 ngành hàng (health/FMCG) | Website demo chạy được |
| 2 | Bảng báo giá — 2-3 gói (starter / growth / full) | 1 trang pricing rõ ràng |
| 3 | Pitch deck — mô hình 3C, so sánh Misa, case Lock&Lock | Slide deck dùng cho discovery call |
| 4 | Deal economics template — tính nhanh "anh tiết kiệm được X" cho mỗi lead | Excel/sheet |

---

### Track 2: Tìm khách (Hải lead)

| # | Việc | Output |
|---|------|--------|
| 1 | Lọc 10 shop Shopee/TikTok ngành FMCG/health, doanh thu 5-15 tỷ/tháng | Danh sách 10 lead + contact info |
| 2 | Gửi "insight hook" cho 10 shop | Tin nhắn đã gửi |
| 3 | Book 2-3 discovery call | Lịch call |
| 4 | Khai thác network: agency ads, KOL, người quen ngành | Thêm lead vào pipeline |
| 5 | Song song: nói chuyện với Travaco / Trường Nhân / Trường Sinh (lead có sẵn) | Discovery call |

---

### Track 3: Tìm vendor (Vĩnh + Hải chia nhau)

| # | Hạng mục vendor | Vai trò | Tiêu chí chọn | Ai tìm |
|---|----------------|---------|---------------|--------|
| 1 | **E-commerce platform** | Nền tảng Web + Zalo Mini App | Có template sẵn, API mở, tích hợp payment/shipping | Vĩnh |
| 2 | **Content agency** | Sản xuất video batch (10-30/ngày) | Đã làm cho brand FMCG/health, biết giá batch rõ ràng | Hải |
| 3 | **Agency vận hành sàn** | Quản lý shop Shopee/TikTok | Đã vận hành shop doanh thu 5 tỷ+/tháng | Hải |
| 4 | **Logistics** | Tích hợp vận chuyển (GHN, GHTK, J&T...) | API sẵn, hỗ trợ COD | Vĩnh |
| 5 | **Payment gateway** | Thanh toán (VNPay, MoMo, ZaloPay...) | Tích hợp Zalo Mini App | Vĩnh |
| 6 | **Affiliate network ops** | Tuyển + quản lý KOC | Có network sẵn hoặc tuyển mass được | Hải |

**Output:** Mỗi hạng mục có ít nhất **2 vendor đã nói chuyện** — biết giá, timeline, capability. Tổng hợp thành vendor matrix.

---

### Gate check: TRƯỚC KHI SIGN DEAL

3 track chạy song song, nhưng **sign deal** chỉ khi pass gate check:

- [ ] **Sale Kit**: Có demo + báo giá + pitch deck
- [ ] **Khách**: Có ít nhất 1 lead đã qua discovery call, sẵn sàng sign
- [ ] **Vendor**: Có platform + content partner + ops partner (biết giá, sẵn sàng)
- [ ] **Finance**: Hải đã tính cash runway 6 tháng

> **Thiếu 1 trong 4 → chưa sign. Pitch thì cứ pitch, nhưng ký thì phải đủ.**

---

# 1. ICP & Cách chọn khách hàng đầu tiên

## ICP chuẩn (phải đủ 5 điều kiện)

| # | Tiêu chí | Ngưỡng | Tại sao |
|---|----------|--------|---------|
| 1 | **Doanh thu** | 3–20 tỷ/tháng | Đủ lớn để revenue share có ý nghĩa, chưa quá lớn để đòi hỏi enterprise |
| 2 | **Đang bán trên sàn** | Shopee / TikTok Shop có đơn đều | Đã tin vào online, không cần thuyết phục từ đầu |
| 3 | **Có team** | ≥ 2–5 người vận hành | Có người execute, không phải Diso làm 100% |
| 4 | **Chủ DN** | Sẵn sàng thử cái mới (không quá corporate) | Quyết định nhanh, không chết trong meeting |
| 5 | **Motivation** | Chủ DN đang **chủ động** muốn giảm phí sàn / tăng margin | Không phải mình đi thuyết phục "phí sàn là vấn đề" — ông ấy phải đã biết đau |

**Nếu thiếu 1 trong 5 → bỏ.** Tránh burn time vào lead không đủ tiêu chuẩn.

Đặc biệt tiêu chí #5: nếu phải giải thích cho khách "tại sao phí sàn 20% là vấn đề" thì ông đó chưa sẵn sàng. Chỉ nhận khách đang **tự đi tìm giải pháp**.

---

## Cách tìm lead nhanh (không marketing phức tạp)

### Kênh 1: Direct outreach

* Lọc shop: TikTok Shop seller, Shopee top ngành
* Nhắn trực tiếp: Facebook / Zalo / TikTok

### Kênh 2: Network

* Agency ads, KOL / affiliate, người quen ngành

### Kênh 3: "Insight hook"

Gửi 1 câu duy nhất:

> "Hiện tại bạn đang mất khoảng 20–40% doanh thu cho sàn, bên mình có cách kéo xuống còn 5–10%, bạn có muốn xem thử không?"

→ Không pitch product. Chỉ bán **pain + curiosity**.

---

# 2. Sales Playbook (Chốt deal)

## Bước 1: Discovery (30–45 phút)

Mục tiêu: hiểu economics khách hàng — tính được **con số tiết kiệm cụ thể**.

Hỏi bắt buộc:

| Câu hỏi | Tại sao cần |
|---------|-------------|
| Doanh thu/tháng? | Tính base cho revenue share |
| % phí sàn + ads + affiliate? | Tính tổng chi phí đang mất |
| AOV (giá trị đơn trung bình)? | Tính số đơn cần chuyển sang kênh riêng |
| Tỉ lệ khách quay lại? | Nếu cao → retention play rất mạnh |
| Có data khách không? | Nếu không → đây chính là pain lớn nhất |
| Đang trả cho ai? (Misa, agency, team in-house?) | Biết đối thủ + tính giá so sánh |

Output bắt buộc sau discovery:

> "Anh đang mất **X triệu/tháng** cho platform + phí sàn. Nếu chuyển **Y%** doanh thu sang kênh riêng, anh tiết kiệm **Z triệu/tháng**."

---

## Bước 2: Pitch (không demo tech)

### (1) Đập pain

> "Hiện tại anh đang trả ~30% cho sàn → mỗi tháng mất ~X triệu. Trong 1 năm = X × 12 = mất Y tỷ."

### (2) Đưa mô hình mới

> "Bên mình không làm website. Mình build kênh bán riêng giúp anh giữ lại margin — giống cách Lock&Lock bán tháng trăm tỷ trên kênh riêng."

### (3) So sánh chi phí trực tiếp

> "Anh thuê Misa làm website: 1 tỷ — chỉ có website, không bán được hàng.
> Thuê agency vận hành: 2 tỷ/năm.
> Tuyển team e-com in-house: 2 tỷ/năm.
> **Tổng: 5 tỷ. Mà chưa chắc bán được.**
>
> Với bên mình: **2 tỷ trọn gói** — website + sàn + vận hành + affiliate + CRM.
> Hoặc: **nửa giá Misa** mà anh được tất cả phần còn lại. Anh chọn đi."

### (4) Cam kết kết quả

> "Trong 90 ngày:
> - Có kênh riêng chạy được
> - Có doanh thu thật
> - Bắt đầu giảm phụ thuộc sàn"

### (5) Deal structure

| Thành phần | Mức | Ghi chú |
|-----------|-----|---------|
| Setup | Thấp (50tr) hoặc **free** | Key: rào cản thấp nhất để bắt đầu |
| Monthly | 10–20tr | Operation + tech support |
| Rev share | 5–15% | Chỉ trên kênh riêng (không tính sàn) |

**Key: không bán phần mềm → bán outcome.**

---

## Bước 3: Close

### Xử lý objection

| Objection | Response |
|-----------|----------|
| "Đắt" | "Anh đang mất X mỗi tháng cho sàn. Bên mình chỉ lấy Y — và chỉ lấy khi có kết quả" |
| "Chưa tin" | Offer: Pilot 30 ngày, giảm/miễn setup fee. "Nếu 30 ngày không có đơn, anh không mất gì" |
| "Để suy nghĩ" | "Mỗi tháng anh chậm = mất thêm X triệu phí sàn. Tháng này anh quyết, tháng sau anh đã tiết kiệm" |
| "Tôi tự làm được" | "Anh tự tuyển team e-com + agency + tech = 5 tỷ + 6 tháng. Bên mình 90 ngày, nửa giá" |

### Rule discount

* **KHÔNG** discount monthly — đây là ops cost thật
* **CHỈ** discount setup — để hạ rào cản
* Khách đầu tiên: có thể **miễn phí setup + giảm monthly** — vì đây là mua case study, không phải bán hàng

---

# 3. Delivery Model (Triển khai thật)

## Phase 1 (0–30 ngày): Launch — "Có số ngay"

### Làm ngay:

* Clone UX Shopee-style → Website + Zalo Mini App
* Setup: payment, shipping, CRM cơ bản
* Import: sản phẩm, nội dung, reviews từ sàn (social proof)
* Setup Shopee/TikTok nếu chưa có

### KPI:

* Website/Zalo live + có traffic
* Có đơn hàng đầu tiên trên kênh mới

---

## Phase 2 (30–60 ngày): Traction — "Content is fuel"

### Focus: Content + Affiliate = nguồn nguyên liệu

### Làm:

* **10–20 video/ngày** = batch production bởi **content partner** (KHÔNG phải Diso tự làm)
  * Diso vai trò: brief, QC, đo kết quả
  * Content partner vai trò: sản xuất, cast, edit
  * Budget content: nằm trong phí monthly hoặc KH chi riêng (cần làm rõ trong deal)
* Onboard 20–50 affiliate (KOC nhỏ, micro-influencer)
* Ads nhẹ trên Meta/TikTok — boost content tốt nhất

### KPI:

* Có đơn đều trên kênh riêng
* CAC đo được
* Affiliate bắt đầu có conversion

---

## Phase 3 (60–90 ngày): Optimize — "Retention = profit"

### Focus: CRM + Retention + Upsell

### Làm:

* Remarketing qua Zalo notification + Email
* Loyalty program (tích xu, voucher khách cũ)
* Funnel repeat: bundle, subscription, combo
* Data insight → tối ưu conversion rate

### KPI:

* Repeat rate > 20%
* Kênh riêng có profit (sau khi trừ ops cost)
* Giảm được X% phụ thuộc vào sàn

---

# 4. Operation Engine (QUAN TRỌNG NHẤT — đây là bottleneck, không phải tech)

## Sự thật: Tech build trong 2 tuần. Ops quyết định thắng thua trong 90 ngày.

## Core team cho mỗi client

| Role | Trách nhiệm | In-house hay Partner? |
|------|-------------|----------------------|
| 1 Growth lead | Chiến lược, KPI, tối ưu | Diso in-house |
| 1 Content lead | Brief, QC, planning content calendar | Diso in-house (hoặc partner senior) |
| 1 Tech support | Sửa bug, update feature, tích hợp | Diso in-house |
| Content production | Sản xuất video, ảnh, copy | **Partner bắt buộc** |
| Sàn operation | Quản lý shop Shopee/TikTok, chạy campaign | **Partner hoặc KH tự làm** |

> **Rule: Không sign deal nếu chưa có content partner sẵn sàng.** Sign mà không deliver = mất uy tín = chết hẳn.

---

## Content Engine (bắt buộc scale được)

| Thành phần | Số lượng | Ai làm |
|-----------|---------|--------|
| Script factory | 50–100 script/tuần | Diso Content Lead + AI assist |
| Video factory | 10–30 video/ngày | **Content partner** (batch production) |
| Ảnh sản phẩm | Theo catalog | KH cung cấp hoặc partner chụp |
| Copy quảng cáo | 5-10 variations/tuần | Diso Content Lead |

**Reality check:**
- 10-20 video/ngày × 30 ngày = 300-600 video/tháng. Chi phí production thật: 30-50tr/tháng minimum
- Nếu nằm trong gói monthly 10-20tr → **lỗ**. Cần tính riêng hoặc KH chi thêm
- Nếu không scale được content → **fail cả model**

---

## Affiliate Engine

* Tuyển mass: KOC nhỏ, micro-influencer (100-10K followers)
* Offer: % commission rõ ràng — **cao hơn sàn 3-5%** để hút người
* Tool: dùng module Affiliate có sẵn của Diso
* Target: 20-50 affiliate active trong Phase 2

---

# 5. Unit Economics (thực tế — 3 kịch bản)

## KH đầu tiên (Sponsor — mua case study)

| Hạng mục | Số tiền |
|---------|---------|
| Setup | Free hoặc sponsor trả (tối đa 100-200tr) |
| Monthly từ KH | 0 - 10tr (giảm hoặc miễn) |
| Rev share | 0-5% (có thể waive) |
| **Ops cost Diso** | **15-25tr/tháng** (nhân sự + content partner) |
| **Margin** | **Lỗ hoặc hòa vốn** |

> Đây là chi phí mua case study. Không phải bán hàng.

## KH thứ 2-3 (Early adopter)

| Hạng mục | Số tiền |
|---------|---------|
| Setup | 50tr |
| Monthly | 15-20tr |
| Rev share | 5-10% |
| Ops cost Diso | 12-18tr (reuse playbook, nhưng vẫn cần customize) |
| **Margin** | **Hòa / lời nhẹ (3-5tr/tháng)** |

> Mỗi KH vẫn khác ngành hàng, khác quy trình. Đừng kỳ vọng copy-paste.

## KH thứ 5+ (Playbook mature)

| Hạng mục | Số tiền |
|---------|---------|
| Setup | 50-100tr |
| Monthly | 15-25tr |
| Rev share | 5-15% |
| Ops cost Diso | 8-12tr (template + playbook reuse thật sự) |
| **Margin** | **Lời thật: 10-15tr/tháng + rev share upside** |

> Rev share là game dài: KH doanh thu 10 tỷ/tháng × 5% = 500tr/tháng. Nhưng cần 6+ tháng mới đến level này.

### Tổng hợp

| | KH #1 | KH #2-3 | KH #5+ |
|---|---|---|---|
| Setup | Free | 50tr | 50-100tr |
| Monthly | 0-10tr | 15-20tr | 15-25tr |
| Rev share | 0-5% | 5-10% | 5-15% |
| Margin | **Lỗ** | **Hòa/lời nhẹ** | **Lời thật** |
| Timeline to profit | Không tính | 3-4 tháng | 1-2 tháng |

> **Cash runway: Cần ít nhất 6 tháng runway trước khi có lời thật. Hải phải tính con số chính xác.**

---

# 6. Constraints (Guardrails)

## Tuyệt đối KHÔNG:

| # | Hành vi cấm | Hậu quả nếu vi phạm |
|---|-------------|---------------------|
| 1 | Không làm outsource thuần | Quay về gia công = chết positioning |
| 2 | Không build theo yêu cầu riêng từ đầu | Over-custom = lỗ, không template-ize được |
| 3 | Không nhận khách chưa có doanh thu online | Họ không có tư duy e-com = burn time |
| 4 | Không over-custom (>20% khác template) | Tăng giá hoặc từ chối — custom > 20% = project riêng, tính giá khác |
| 5 | Không sign deal khi chưa có ops partner sẵn sàng | Sign mà không deliver = mất uy tín = game over |
| 6 | Không discount monthly | Đây là ops cost thật, discount = lỗ guaranteed |

## Bắt buộc:

* Dùng template (chuẩn hóa 80%, custom 20%)
* Dùng playbook (90 ngày, 3 phases)
* Có content partner TRƯỚC khi sign deal
* Mọi deal phải có discovery call — không skip

---

# 7. Failure Cases (thực tế sẽ gặp)

| # | Case | Dấu hiệu | Hành động | Timing |
|---|------|----------|-----------|--------|
| 1 | **Khách không chịu làm content** | Không cung cấp sản phẩm mẫu, không approve script | Cảnh báo tuần 2, drop tuần 3 nếu không cải thiện | Tuần 2-3 |
| 2 | **Không có margin (ngành hàng margin thấp)** | AOV < 100K, margin < 15% sau COGS | Reject từ discovery call — KHÔNG nhận | Trước khi sign |
| 3 | **Chủ DN không quyết** | 3 meeting mà chưa sign, "để suy nghĩ" liên tục | Không follow tiếp. Move on | Sau meeting 3 |
| 4 | **Diso không đủ ops capacity** | Đã sign nhưng không có người/partner triển khai | **KHÔNG ĐƯỢC XẢY RA** — rule: không sign khi chưa có ops | Trước khi sign |
| 5 | **Khách muốn custom quá nhiều** | Đòi tính năng riêng, UI riêng, flow riêng > 20% | Tăng giá (tính thêm project fee) hoặc từ chối | Discovery/Proposal |
| 6 | **90 ngày không ra số** | Kênh riêng < 5% doanh thu tổng | Honest review: vấn đề ở đâu? Content? Traffic? Product-market fit? Adjust hoặc exit | Ngày 90 |

> **Rule quan trọng nhất: Biết từ chối sớm > cố cứu deal xấu.** Mỗi deal xấu = burn 3 tháng + tiền + uy tín.

---

# 8. Loop để scale

```
1. Close 1 client (sponsor deal)
       ↓
2. Triển khai 90 ngày → ra doanh thu thật
       ↓
3. Đóng gói thành case study (số liệu + testimonial)
       ↓
4. Dùng case study → pitch client tiếp theo
       ↓
5. Chuẩn hóa playbook (gì reuse được? gì phải custom?)
       ↓
6. Lặp lại — mỗi vòng nhanh hơn, margin cao hơn
```

**Metrics theo từng vòng:**

| Vòng | KH | Timeline triển khai | Margin |
|------|-----|-------------------|--------|
| 1 | Sponsor (1 KH) | 90 ngày | Lỗ/hòa |
| 2 | 2-3 KH | 60-75 ngày | Hòa/lời nhẹ |
| 3 | 5+ KH | 45-60 ngày | Lời thật |

---

# 9. Kết luận

Execution layer này biến vision thành:

* Có thể **kiếm tiền ngay** (deal structure rõ)
* Có thể **test thị trường nhanh** (insight hook + discovery call)
* Có thể **scale có kiểm soát** (playbook + template + guardrails)

### Điểm sống còn:

> **Không phải tech, mà là content + ops + deal execution.**
>
> Tech build trong 2 tuần. Content engine + ops capability quyết định thắng thua.
>
> Sign mà không deliver = chết.
> Deliver mà không có content = không có traffic = không có số.
> Có số mà không có playbook = không scale được.

### Gate check trước khi SIGN DEAL (= Section 0):

- [ ] **Sale Kit**: Có demo + báo giá + pitch deck
- [ ] **Khách**: Có ít nhất 1 lead đã qua discovery call
- [ ] **Vendor**: Có platform + content partner + ops partner (biết giá, sẵn sàng)
- [ ] **Finance**: Hải đã tính cash runway 6 tháng

> Pitch thì cứ pitch. Ký thì phải đủ.

---

*Diso Execution Layer v1.1*
*Bổ sung cho: [Internal Vision](./diso-internal-vision.md)*
*Brainstorming source: `.bmad/brainstorming-diso-internal-vision-2026-03-31.md`*
