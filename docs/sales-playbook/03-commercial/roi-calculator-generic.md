# DISO COMMERCE SUITE — ROI Calculator (Generic)
## Công cụ tính nhanh ROI cho mọi brand — dùng ngay trong meeting

**Phiên bản**: v1.0 — 2026-05-12
**Đối tượng**: Sales team — show khách "bỏ X tiền thu lại Y" trong 10 phút
**Cách dùng**: Hỏi khách 6 input → tính 3 output → show 1 chart

---

## 🎯 6 INPUT CẦN HỎI KHÁCH

> *"Anh/chị cho em hỏi nhanh 6 con số — em compute ROI live cho anh/chị ngay tại đây:"*

| # | Câu hỏi | Ký hiệu | Đơn vị | Default nếu khách không biết |
|---|---|---|---|---|
| 1 | **Doanh thu sàn hiện tại** (Shopee + TikTok + Lazada)? | `R_sàn` | tỷ VND/tháng | Hỏi: "1-5, 5-10, 10-20, 20-50?" |
| 2 | **Phí sàn tổng** (commission + ads + voucher)? | `F_sàn` | % | **22%** (trung bình ngành VN 2025) |
| 3 | **Margin gộp hiện tại** (sau giá vốn, trước phí sàn)? | `M_gross` | % | **40%** (FMCG), **55%** (thời trang), **35%** (điện tử) |
| 4 | **Số SKU đang bán**? | `SKU` | sản phẩm | 100-500 (SME), 500-5K (mid), 5K+ (large) |
| 5 | **Database Zalo OA / email**? | `DB` | followers | 10K-50K (SME), 50K-200K (mid), 200K+ (large) |
| 6 | **Cảm nhận chủ quan: % doanh thu lạc quan có thể chuyển sang kênh riêng trong 12 tháng**? | `T%` | % | 30% (conservative), 50% (aggressive) |

---

## 📐 CÔNG THỨC TÍNH

### A. Chi phí hiện tại trên sàn (12 tháng tới)

```
COST_sàn = R_sàn × 12 × F_sàn
```

### B. Chi phí Diso (12 tháng tới)

```
COST_diso = Setup + (Monthly × 12) + (R_sàn × 12 × T% × Diso_GMV%)
```

Trong đó:
- **Setup, Monthly, Diso_GMV%** lấy từ gói đề xuất (Launch/Growth/Scale/Enterprise)
- `R_sàn × 12 × T%` = doanh thu dự kiến chuyển sang Diso

### C. Tiết kiệm năm 1 (Direct Saving)

```
SAVING_year1 = COST_sàn × T% - COST_diso
            = (R_sàn × 12 × T%) × (F_sàn - Diso_GMV%) - Setup - (Monthly × 12)
```

> Logic: doanh thu chuyển sang Diso không còn chịu phí sàn — chỉ chịu phí Diso (thấp hơn 15-20x).

### D. ROI (%)

```
ROI = SAVING_year1 / COST_diso × 100%
```

### E. Break-even (tháng)

```
Break_even = (Setup) / (Saving hàng tháng - Monthly)
           = Setup / [(R_sàn × T% × (F_sàn - Diso_GMV%)) - Monthly]
```

### F. Long-term value (3 năm)

```
LTV_3year = SAVING_year1 × 3 + DATA_ASSET_VALUE
```

`DATA_ASSET_VALUE`: ước tính giá trị database khách hàng sở hữu sau 3 năm. Công thức:

```
DATA_ASSET = (Customer_count_3y) × (LTV_per_customer)
           = (R_sàn × 12 × 3 × T% / AOV) × (AOV × Repeat_rate × 3)
```

Với:
- `AOV` (Average Order Value) = doanh thu / số đơn (giả định 300K-500K VND)
- `Repeat_rate` Diso = **25-30%** (vs sàn chỉ 5% vì không remarket được)

---

## 📊 CASE STUDY MẪU — DÙNG TRONG MEETING

### Brand A — Thời trang nam, đang bán sàn

**Input khách trả lời:**
- R_sàn = **10 tỷ/tháng**
- F_sàn = **22%** (phí Shopee + ads + voucher)
- M_gross = **55%**
- SKU = 2.000
- DB = 80.000 Zalo OA
- T% = **30%** (conservative target)

**Sales đề xuất:** Gói **Diso Growth** (Setup 150tr, Monthly 30tr, GMV 1%).

### Tính toán

```
A. COST_sàn 12 tháng         = 10 × 12 × 22% = 26.4 tỷ
B. COST_diso 12 tháng        = 150tr + (30tr × 12) + (10 × 12 × 30% × 1%)
                             = 150tr + 360tr + 360tr
                             = 870tr = 0.87 tỷ
C. SAVING năm 1              = (10 × 12 × 30%) × (22% - 1%) - 150tr - 360tr
                             = 36 × 21% - 510tr
                             = 7.56 tỷ - 0.51 tỷ
                             = 7.05 tỷ
D. ROI năm 1                 = 7.05 / 0.87 = 810% (8.1x)
E. Break-even                = 150tr / [(10 × 30% × 21%) - 30tr]
                             = 150tr / (630tr - 30tr)
                             = 150tr / 600tr/tháng
                             = 0.25 tháng (~ 7-8 ngày)
F. LTV 3 năm (data asset)
   - Customer count 3 năm   = (10 × 12 × 3 × 30%) / 0.4tr (AOV)
                            = 108 tỷ / 400K = 270.000 khách
   - LTV per customer       = 400K × 25% × 3 = 300K VND
   - DATA_ASSET            = 270.000 × 300K = 81 tỷ
   - SAVING 3 năm           = 7.05 × 3 = 21.15 tỷ
   - LTV 3 năm tổng        = 21.15 + 81 = 102 tỷ
```

### Output show khách

> 💎 **Brand A — Nếu chọn Diso Growth hôm nay:**
>
> | Chỉ số | Năm 1 | 3 năm |
> |---|---|---|
> | **Tiết kiệm phí sàn** | **7.05 tỷ** | **21.15 tỷ** |
> | **Đầu tư Diso** | 870 triệu | ~2.5 tỷ |
> | **ROI** | **810%** (8.1x) | **840%** |
> | **Break-even** | **~7 ngày** | — |
> | **Tài sản data khách** | 90.000 contacts | **270.000 contacts** |
> | **Giá trị data asset** | ~27 tỷ | **~81 tỷ** |

> *"Anh/chị thấy chứ: bỏ ra **870 triệu** năm đầu, **tiết kiệm 7 tỷ** + sở hữu **90.000 contacts** trị giá ~27 tỷ. Tổng lợi ích năm 1: ~34 tỷ. ROI 39x.*
> *Năm 3: 270K contacts — đó là database email marketing không bao giờ mất, không bao giờ phụ thuộc bất kỳ ai."*

---

## 🎯 3 LOẠI BRAND × ROI MẪU

### Brand B — Dược phẩm 5 tỷ/tháng → Gói Launch

```
Input:  R=5, F=18%, T=20% (dược chuyển chậm hơn vì compliance)
COST_sàn 12m   = 5 × 12 × 18%      = 10.8 tỷ
COST_diso 12m  = 65tr + 12tr×12+0  = 209tr
SAVING năm 1   = (5×12×20%) × 18%  - 209tr = 2.16 - 0.21 = 1.95 tỷ
ROI            = 1.95 / 0.21       = 933%
Break-even     = ~2 tháng
```

### Brand C — FMCG 30 tỷ/tháng → Gói Scale

```
Input:  R=30, F=20%, T=40%
COST_sàn 12m   = 30 × 12 × 20%     = 72 tỷ
COST_diso 12m  = 325tr + 65tr×12 + (30×12×40%×0.8%) = 2.25 tỷ
SAVING năm 1   = (30×12×40%) × (20%-0.8%) - 1.1 tỷ = 27.6 - 1.1 = 26.5 tỷ
ROI            = 26.5 / 2.25       = 1177%
Break-even     = ~1.5 tháng
```

### Brand D — Dược niêm yết 60 tỷ/tháng → Gói Enterprise (Traphaco-like)

```
Input:  R=60, F=22%, T=30% (ngành dược conservative)
COST_sàn 12m   = 60 × 12 × 22%     = 158.4 tỷ
COST_diso 12m  = 1.5tỷ + 200tr×12 + (60×12×30%×0.5%) = 5.0 tỷ
SAVING năm 1   = (60×12×30%) × (22%-0.5%) - 3.9 tỷ = 46.44 - 3.9 = 42.5 tỷ
ROI            = 42.5 / 5.0        = 850%
Break-even     = ~2 tháng
Bonus          = QR Authentic chống hàng giả: tiết kiệm thiệt hại ~5-10 tỷ/năm
                 (Traphaco ước tính fake products gây tổn thất 8% doanh thu)
```

---

## 🚨 RỦI RO & CONSERVATIVE ADJUSTMENT

### Sales phải nói thật — đừng over-promise

ROI tính ở trên là **best case scenario**. Conservative adjustment:

| Yếu tố | Adjustment | Lý do |
|---|---|---|
| **T% (target chuyển kênh)** | Tính 2 scenario: 30% (realistic) & 50% (optimistic) | Khách thường mất 6-12 tháng để chuyển traffic thực sự |
| **AOV giảm 10-20% khi mới launch** | Giảm SAVING năm 1 đi 15% | Khách kênh riêng giá rẻ hơn lúc đầu để promote |
| **Onboarding cost ẩn** | Cộng thêm 20-50tr (team training, content creation, ads launch) | Diso không cover hết |
| **First 2 tháng go-live chậm** | Loss 2 tháng × T% × F_sàn | Migration period, traffic chưa stabilize |

### Công thức conservative ROI

```
SAVING_conservative = SAVING_optimistic × 0.65 - 50tr (hidden cost) - 2_months_loss
```

> *"Em sẽ show cả 2 scenario — optimistic & conservative. Em không bán giấc mơ, em bán reality."*

---

## 📋 TEMPLATE GOOGLE SHEET (cần build)

**Build Google Sheet riêng với template sau:**

| Cell | Loại | Giá trị |
|---|---|---|
| B2 | Input | Doanh thu sàn (tỷ/m) |
| B3 | Input | Phí sàn tổng (%) |
| B4 | Input | Margin gộp (%) |
| B5 | Input | Database followers |
| B6 | Input | T% target (%) |
| B7 | Dropdown | Gói (Launch/Growth/Scale/Enterprise) |
| B8 | Auto | Setup fee (từ pricing table) |
| B9 | Auto | Monthly (từ pricing table) |
| B10 | Auto | Diso GMV% (từ pricing table) |
| C12 | Calc | COST sàn 12m |
| C13 | Calc | COST Diso 12m |
| C14 | Calc | SAVING năm 1 |
| C15 | Calc | ROI % |
| C16 | Calc | Break-even (tháng) |
| C17 | Calc | LTV 3 năm |

**Output chart**:
- Bar chart: COST sàn vs COST Diso (12 tháng)
- Line chart: Cumulative saving theo tháng (0-36 tháng)
- Donut: Phân bổ doanh thu (sàn vs kênh riêng) năm 1 vs năm 3

**Action item cho team**: Build Google Sheet này và share link `diso.vn/roi-calculator` cho khách tự dùng.

---

## 🎬 SCRIPT 10 PHÚT TRONG MEETING

**0:00-1:00** — Mở:
> *"Anh/chị cho em 10 phút — em show ROI cho case anh/chị live. Em hỏi 6 con số nhanh."*

**1:00-3:00** — Hỏi 6 input, ghi vào sheet (hoặc note tay).

**3:00-6:00** — Compute live trên Google Sheet (hoặc tính tay nhanh):
> *"Doanh thu 10 tỷ × 22% phí sàn × 12 tháng = 26 tỷ/năm anh/chị đang trả cho sàn..."*
> *"Nếu chỉ chuyển 30% sang Diso, tiết kiệm là... 7 tỷ. Diso chi phí 0.87 tỷ."*
> *"ROI 8.1x. Break-even sau 7 ngày."*

**6:00-8:00** — Show 3 scenario (optimistic/realistic/conservative):
> *"Em không bán giấc mơ. Conservative scenario: chuyển chỉ 20%, có 2 tháng go-live chậm — vẫn tiết kiệm 4 tỷ, ROI 4.5x."*

**8:00-9:00** — Show LTV 3 năm:
> *"Số quan trọng nhất không phải tiết kiệm — mà là 270K contacts anh/chị sở hữu sau 3 năm. Đây là tài sản, không phải chi phí."*

**9:00-10:00** — Chốt:
> *"Em đề xuất Gói Growth. Free pilot 30 ngày. Anh/chị OK schedule team workshop tuần tới em show implementation roadmap?"*

---

## 🎯 NGUYÊN TẮC SỬ DỤNG

1. **Luôn dùng số khách cung cấp, không bịa.** Nếu khách không biết → dùng default + flag "ước tính sơ bộ".
2. **Show conservative scenario trước, optimistic sau.** Tăng độ tin cậy.
3. **Đừng giả vờ không có downside.** Conservative scenario chứng tỏ honesty.
4. **Tính LTV 3 năm — không chỉ năm 1.** Phí sàn ăn mòn margin liên tục, Diso đầu tư 1 lần.
5. **Đổi đơn vị cho khách dễ hiểu.** "26 tỷ phí sàn năm" = "2.2 tỷ/tháng" = "73 triệu/ngày" — chọn đơn vị shock nhất.

---

*Diso Commerce Suite — ROI Calculator Generic v1.0 | 2026-05-12*
*Để build Google Sheet interactive: contact team@diso.vn*
