# Creator Care OS — Mô hình tư duy (Overview)

**Loại tài liệu:** Nền tảng tư duy — cách DISO hiểu hệ thống. Proposal & Functional Spec đều dựa trên tài liệu này.
**Cập nhật:** 2026-05-27
**Nguồn:** đúc kết từ quy trình gốc AT (`resources/koc-management-process-v2.md`) + các buổi phân tích.

> Tài liệu này **không gửi AT trực tiếp** — nó là "bản đồ tư duy" nội bộ để mọi tài liệu khác nhất quán. Khi nào câu chuyện chốt, chắt lọc sang proposal.

---

## 1. Một câu định nghĩa

**Creator Care OS giúp AccessTrade khai thác tối đa giá trị từ mỗi creator — bắt đầu bằng việc không để creator nào bị rơi, và càng vận hành càng hiểu creator sâu hơn để CHĂM ĐÚNG và GHÉP ĐÚNG.**

Nó **không chạy campaign** (việc của Ambassador/MCN/TAP). Nó quản **đời sống của creator** — nhìn creator XUYÊN SUỐT mọi campaign/mọi kênh, theo hai trục: họ đang ở đâu trong hành trình (vòng đời) và đáng đầu tư bao nhiêu (giá trị).

> Hiệu quả đến từ **chăm đúng** (đúng người, đúng lúc, ghép đúng việc) — KHÔNG phải từ chạy campaign hay tối ưu quảng cáo. Đó là ranh giới giữ Creator Care OS đúng vai, không lấn sân Campaign Owner.

---

## 2. Đích đến — thang 4 nấc, "chống rơi" là nền móng

Đích đến cuối cùng của hệ thống **không phải** chỉ "chống rơi" — đó mới là nền móng. Hệ thống trưởng thành leo qua 4 nấc, **xếp chồng, là điều kiện của nhau**:

```
   T4  │ TRÍ TUỆ CREATOR — biết ghép ai–việc nào sinh lời nhất,    │ càng vận hành
       │ dự đoán creator sắp rời, gợi ý hành động                  │ càng thông minh → moat
   ────┼──────────────────────────────────────────────────────────┤
   T3  │ KHAI THÁC TỐI ĐA POOL — đúng người–đúng việc–đúng lúc,    │ mỗi creator dùng
       │ không ai bị vắt kiệt, không ai bị bỏ quên (qua CHĂM ĐÚNG) │ hết tiềm năng
   ────┼──────────────────────────────────────────────────────────┤
   T2  │ NÂNG HIỆU QUẢ TỪNG CREATOR — chăm đúng lúc, can thiệp     │ mỗi creator tạo ra
       │ đúng chỗ, kéo creator nguội trở lại, nâng hạng            │ nhiều giá trị hơn
   ────┼──────────────────────────────────────────────────────────┤
   T1  │ KHÔNG ĐỂ RƠI (nền móng) — mọi creator giá trị trong tầm   │ điều kiện cần —
       │ mắt, có người chăm, được nhìn xuyên suốt                  │ thiếu T1 thì T2-T4 vô nghĩa
       └──────────────────────────────────────────────────────────┘
```

### Quan hệ giữa các nấc (không phải lựa chọn — là điều kiện của nhau)
- **T1 là nền móng vật lý:** không thể nâng hiệu quả một creator đã để lạc mất, không thể khai thác một pool đang rò rỉ. T1 không "khiêm tốn" — nó là **điều kiện tồn tại** của mọi nấc trên.
- **T2→T3→T4 là "lãi kép của chăm đúng":** mỗi lần chăm đúng (T2) vừa nâng hiệu quả creator đó, vừa **tích lũy dữ liệu** "chăm thế nào thì hiệu quả" → đủ nhiều thì tối ưu cả pool (T3) → đủ lâu thì thành trí tuệ dự đoán (T4).

### Đích đến = trả lời được câu hỏi ngày càng khó
| Nấc | Câu hỏi hệ thống trả lời được |
|---|---|
| T1 | "Creator X giờ ai chăm? Có ai đang bị bỏ rơi không?" |
| T2 | "Creator X đang nguội — nên làm gì để kéo lại?" |
| T3 | "Có campaign Y — trong pool ai phù hợp & đang sẵn sàng nhất?" |
| T4 | "Creator nào sắp rời? Ghép ai với việc gì thì sinh lời cao nhất?" |

→ **T4 (Trí tuệ Creator) là đích đến** — khớp Giai đoạn 4 "Lớp Thông minh Creator" trong lộ trình. Nhưng T4 chỉ đến được bằng cách làm tốt T1→T3 đủ lâu.

### "Chống rơi" (T1) vẫn là CÁCH MỞ ĐẦU câu chuyện — dù không phải đích
- T1 chạm nỗi đau AT đã nói thẳng ("AM nghỉ mất quan hệ") → gật ngay.
- T4 nói trước → nghe viển vông ("AI dự đoán" dễ bị nghi).
- Kể từ T1 leo lên T4 → vừa đáng tin (bắt đầu từ đau thật), vừa có tầm (kết thúc ở moat).

### Nỗi đau T1 cụ thể (nền móng phải giải trước)
Mọi nỗi đau "rơi" quy về: **creator giá trị biến mất khỏi tầm quản lý**:
- AM nghỉ → quan hệ rơi theo người.
- Creator nguội → không ai biết.
- Creator tiềm năng (chạy tốt ở 1 campaign) → không ai đưa vào diện chăm dài hạn.
- Mỗi campaign/kênh chỉ thấy phần mình → không ai nhìn creator tổng thể.

---

## 3. Định vị: đứng TRÊN các hệ campaign, không chồng lấn

```
  Ambassador      MCN       TAP     Booking     ← hệ CHẠY campaign (nhìn theo campaign)
      └────────────┴────┬────┴─────────┘
                        │ liên kết qua API (mỗi hệ = một connector)
              ┌─────────▼──────────┐
              │  CREATOR CARE OS   │  ← nhìn theo CREATOR, xuyên suốt
              └────────────────────┘
```

- **Hệ campaign nhìn theo trục campaign:** "campaign này đủ creator chạy chưa, đạt KPI chưa".
- **Creator Care OS nhìn theo trục creator:** "creator này có được chăm, có việc đều, có lớn lên không".
- Hai trục bổ sung nhau, không thay thế.

---

## 4. ⭐ Pool 2 chiều — trái tim hệ thống

Đây là phát hiện cốt lõi: creator trong pool được định vị theo **HAI trục độc lập** (đọc ra trực tiếp từ quy trình AT — mỗi bước đẻ ra status thuộc 1 trong 2 trục):

### Trục dọc — VÒNG ĐỜI (Lifecycle): creator đang ở đâu trong hành trình
```
New → Contacted → Applied → Ready → Active → (Nguội/Reactivate) → ...
```
Trả lời: *"creator này đi tới đoạn nào rồi?"*

### Trục ngang — GIÁ TRỊ (Tier): creator đáng đầu tư bao nhiêu
```
Risk / Normal / Potential / VIP Candidate  →  (sau khi có kết quả)  →  Normal / Gold / VIP / Watchlist
```
Trả lời: *"creator này đáng chăm cỡ nào?"*

### Một creator có CẢ HAI cùng lúc
Ví dụ: creator X = `Applied` (vòng đời) + `VIP Candidate` (giá trị) → đang chờ duyệt, nhưng là diện ưu tiên cao.

> **Vì sao 2 chiều quan trọng:** nó cho phép Care hỏi những câu mà 1 trục không trả lời được — "creator VIP nào đang kẹt ở bước Applied quá lâu?" (giao điểm 2 trục). Đây chính là cách phát hiện creator giá trị sắp rơi.

---

## 5. Tiếp nhận hết — sàng lọc BÊN TRONG, không ở cửa

- **Tiếp nhận mọi creator vào pool** (3 cửa: Care tuyển / creator tự đến / đồng bộ từ campaign). Không lọc ở cửa — vì lọc ở cửa là **lọc mù** (chưa có dữ liệu).
- **Sàng lọc = phân tier bên trong pool**, liên tục, theo dữ liệu + kết quả. Đây chính là bước **gắn tag/tier** vốn có trong quy trình AT (tier sơ bộ ở Process 1.2, tier chính thức ở Process 7.2).
- **Owner bắt buộc cho tier giá trị**; tier thấp được hệ thống theo dõi, **tự nâng khi có tín hiệu tốt**. → không ai *biến mất*, không tốn người chăm creator chưa đáng.

---

## 6. VIP = fast lane xuyên suốt, không phải một loại creator

Theo "Nguyên tắc tổng" của AT: VIP đi **cùng quy trình** như Normal, nhưng **rẽ nhánh sớm** — SLA ngắn hơn, owner senior, ưu tiên nguồn lực ở **mọi bước**.

→ Hệ quả thiết kế: **SLA và routing phụ thuộc tier ở TẤT CẢ các bước**, không phải một bước riêng. "Đồng hồ SLA theo tier" thấm vào toàn hệ thống.

---

## 7. Bốn việc hệ thống làm (sau khi creator trong pool)

| Vai | Việc | Bám process AT |
|---|---|---|
| **Pool 2 chiều + chăm sóc nền** | Giữ creator, phân vòng đời × tier, gán owner, chống rơi; **ghi việc chăm sóc (`CareTask`) + ghi nội dung tương tác (Két Quan hệ)** | P1, P2-P3 (việc/tương tác), xuyên suốt |
| **Chăm sóc thông minh & nâng hạng** | Hệ thống **gợi ý** hành động (Scale/Optimize/Reactivate), nâng tier theo kết quả | P6, P7 |
| **Matching & điều phối** | Kéo campaign về, ghép creator↔cơ hội, invite (nhiều cách), tránh overload/bỏ quên | P5 (điểm chạm creator) |
| **Nhìn xuyên suốt** | Gom kết quả creator từ mọi kênh → ai khỏe/nguội/tiềm năng → feed ngược phân tier | P6 |

---

## 8. Ranh giới với campaign (tinh chỉnh — không trắng đen)

Care **không sở hữu** campaign, nhưng **tham gia luồng campaign ở điểm chạm với creator**:

| Việc | Ai (theo PIC của AT) |
|---|---|
| Tạo campaign, duyệt content, đo kết quả campaign | Campaign Owner / Brand — **KHÔNG phải Care** |
| **Giao deal/guideline cho creator** (P5.2) | **Care** — điểm chạm |
| **Chăm creator theo kết quả** (P6.2) | **Care + Campaign Owner** — đồng sở hữu |
| Tài khoản MCN/TAP/Ambassador | "kênh đã gia nhập" = **thuộc tính trên hồ sơ**, không phải campaign |

→ Campaign **đi ngang qua** Care để Care làm matching + chăm sóc, không phải module Care quản lý.

---

## 9. Hệ thống phục vụ NHIỀU VAI, không chỉ Care

Đọc cột PIC của quy trình AT: cùng một creator được nhiều vai phối hợp:

| Vai | Làm gì (theo process AT) |
|---|---|
| **Creator Care** | Chăm sóc, tiếp cận, giao deal, giữ chân |
| **Data/AI** | Chấm điểm creator (P1.3) |
| **Platform Ops** | Setup tài khoản nền tảng, mapping ID (P3.3, P3.5) |
| **Finance/Payout Ops** | Thanh toán, thuế, đối soát hoa hồng (P3.4, P7.1) |
| **Campaign Owner / BD** | Campaign, deal, offer (P5.1) |
| **Compliance** | Xử lý vi phạm, warning (P6.4) |

→ Hệ thống là **không gian làm việc đa vai trên cùng creator** — cần phân quyền theo vai + hàng đợi theo vai. (Phạm vi vai nào vào Giai đoạn 1 sẽ chốt với AT.)

---

## 10. Data model gần như lộ sẵn từ quy trình

Mỗi sub-process của AT kết thúc bằng một **status field**. Gom lại = schema Creator 360 (không phải đoán):

| Field | Từ bước | Trục |
|---|---|---|
| `Lifecycle` (New/Contacted/Applied/Ready/Active...) | 1.1, 2.2, 3.1, 4.1 | Vòng đời |
| `Tier` (Normal/Potential/VIP Candidate/Gold/VIP/Risk/Watchlist) | 1.2, 7.2 | Giá trị |
| `Creator Score + Risk Level` | 1.3 | Giá trị |
| `Platform Tag` (Shopee/TikTok/TAP/Meta...) | 1.2 | Thuộc tính |
| `Application` (Pending/Approved/Rejected) | 2.3, 3.2 | Vòng đời |
| `Platform Setup` (Done/Pending) | 3.3 | Onboard |
| `Payout Profile` (Verified/Pending) | 3.4 | Onboard |
| `Under AT` (Yes) + mapping ID | 3.5 | Kênh đã gia nhập |
| **`CareTask`** (gọi/nhắc/follow-up + hạn + trạng thái) — *việc chăm sóc, KHÔNG gắn campaign* | xuyên suốt (2.2, 3.1, 6.x) | **Việc chăm sóc (T1)** |
| **`Interaction log`** (ghi chú, đã liên hệ gì, kết quả) — *đây CHÍNH LÀ Két Quan hệ* | xuyên suốt | **Nội dung tương tác (T1)** |
| `Task` (Assigned...) — *việc gắn campaign* | 5.2 | Điểm chạm campaign |
| `Sample` (Requested/Shipped/Received) | 5.3 | Điểm chạm campaign |
| `Performance` (view/order/GMV/CR/commission) | 6.1 | Xuyên suốt |
| `Care Action` (Scale/Support/Optimize/Reactivate/Pause) | 6.2 | Chăm sóc |
| `Risk Status` (Reactivate/Watchlist/Pause/Blacklist) | 6.4 | Chăm sóc |
| `Payout Status` (Pending/Approved/Paid/Failed) | 7.1 | Đối soát |
| `Loyalty Plan` | 7.3 | Giữ chân |

→ **Đây là vàng để estimate:** phần lớn field — quy trình AT đã định sẵn.

> **⚠️ Hai field quy trình AT KHÔNG ghi rõ nhưng T1 BẮT BUỘC phải có** (vì quy trình chỉ liệt kê "trạng thái/output", không liệt kê "việc" và "nội dung tương tác"):
> - **`CareTask`** — việc chăm sóc (gọi/nhắc/follow-up). Không có thì **hàng đợi rỗng**, "mở lên thấy việc từng đứa" là giả.
> - **`Interaction log`** — nội dung tương tác. Đây **chính là Két Quan hệ** — không có thì không giải được nỗi đau số 1 ("AM nghỉ mất quan hệ").
>
> **Phân biệt hai loại "task":** `CareTask` (việc chăm sóc, lifecycle, **T1**) ≠ `Task` (việc gắn campaign, P5.2, điểm chạm campaign). Ranh giới T1/T2 về hành động: **ghi việc & ghi tương tác = T1 (người tự làm); hệ thống TỰ gợi ý hành động (`Care Action`) = T2 (máy gợi ý).**

---

## 10.5 ⭐ Chiếu toàn hệ thống qua thang T1→T4 — mỗi nấc "to" cỡ nào

Đây là khung quan trọng nhất để quyết phạm vi: lấy **mọi khía cạnh** (mục 3-10) chiếu qua 4 nấc, xem mỗi nấc gồm những gì. Nấc dưới làm thứ **tồn tại & được giữ**; nấc trên làm thứ đó **thông minh hơn**.

### Ma trận: khía cạnh × nấc

| Khía cạnh | **T1 — Chống rơi** (nền móng) | **T2 — Nâng hiệu quả** | **T3 — Khai thác tối đa** | **T4 — Trí tuệ** |
|---|---|---|---|---|
| **Pool 2 chiều** (mục 4) | Mọi creator có `Lifecycle` + `Tier` + `Owner`; phân tier thủ công/quy tắc đơn giản | Tier tự cập nhật theo `Creator Score` + kết quả | Tier dùng để ưu tiên ghép việc | Tier dự đoán (sắp lên/xuống hạng) |
| **Tiếp nhận & sàng lọc** (mục 5) | Nhận hết vào pool, không rơi; gắn tier sơ bộ | Tự nâng tier khi có tín hiệu | Phân tier tinh theo hiệu suất đa nguồn | Auto phát hiện tiềm năng ẩn |
| **VIP fast-lane** (mục 6) | SLA theo tier ở mọi bước (đồng hồ + báo đỏ) | Routing ưu tiên VIP tự động | Phân bổ nguồn lực tối ưu theo tier | Gợi ý ai nên lên VIP trước |
| **4 việc hệ thống** (mục 7) | "Pool 2 chiều" + chăm sóc **thủ công** (ghi việc + ghi tương tác) | Chăm sóc **thông minh** (hệ gợi ý hành động) + nâng hạng | Thêm "Matching & điều phối" | Thêm "Nhìn xuyên suốt" thành dự đoán |
| **Ranh giới campaign** (mục 8) | Ghi nhận "kênh đã gia nhập" (thuộc tính) | Ghi `Task`/`Care Action` thủ công | Kéo campaign về + ghép creator↔camp | Gợi ý match score ai–camp |
| **Đa vai** (mục 9) | Care + Admin (RBAC cơ bản) | + Data (chấm điểm) | + Ops/Finance/Campaign Owner | + Compliance + tự động hoá liên vai |
| **Data model** (mục 10) | `Lifecycle`,`Tier`,`Owner`,`Platform Tag`,`Under AT`,`Application`,`Platform Setup`,`Payout Profile`, **`CareTask`** (việc chăm sóc), **`Interaction log`** (Két Quan hệ) | `Creator Score`,`Care Action`(máy gợi ý),`Risk Status`,`Performance`(cơ bản) | `Task`(campaign),`Sample`,`Performance`(đa nguồn đầy đủ) | `Predicted Churn`,`Match Score`,`Next Best Action` *(field mới — chưa có trong quy trình AT)* |

### Đọc ma trận này — "độ to" mỗi nấc

- **T1 (Chống rơi) = NẶNG nhất về nền tảng, NHẸ nhất về thông minh.** Nó phải build *toàn bộ khung* (pool, owner, hồ sơ, SLA, đa số status field, RBAC) — nhưng mỗi thứ chỉ ở mức "tồn tại & giữ đúng". **Đây là phần lớn công sức GD1**: dựng xương sống. Không có trí tuệ, nhưng creator đi được hết hành trình & không rơi.
- **T2 = thêm HÀNH ĐỘNG lên field đã có.** Không build field mới nhiều — chủ yếu thêm logic (chấm điểm, ra care action, tự nâng tier). Nhẹ hơn T1 về hạ tầng.
- **T3 = thêm chiều MATCHING + tích hợp đa nguồn.** Đây là chỗ tích hợp nền tảng nặng (Performance đa nguồn) + logic ghép. Ẩn số tích hợp lớn nhất nằm ở đây.
- **T4 = field & logic HOÀN TOÀN MỚI** (dự đoán). Không có trong quy trình AT — là lớp DISO thêm về sau. Tách bạch, không lẫn vào GD1-2.

### Hệ quả thẳng cho phạm vi

```
GD1  = T1 trọn vẹn (xương sống chống rơi, xuyên 7 process)
GD1.5 = connector Ambassador (nạp data thật vào pool T1)
GD2  = T2 + một phần T3 (hành động + matching cơ bản)
GD3+ = T3 đầy đủ (đa nguồn) → T4 (trí tuệ)
```

→ **GD1 chính là "làm xong cột T1" của ma trận trên** — rõ ràng, đo được, không lẫn sang T2-T4.

---

## 11. Những điều này thay đổi gì trong proposal/spec

0. **Đích đến = thang 4 nấc** (chống rơi → nâng hiệu quả → khai thác tối đa → trí tuệ creator). Proposal mở bằng T1 (chống rơi, chạm đau) nhưng cho thấy đường leo lên T4 (tầm nhìn). Hiệu quả luôn đến từ **chăm đúng**, không từ campaign.
1. Pool mô tả theo **2 chiều** (vòng đời × giá trị), không 1 trục.
2. **VIP = fast lane xuyên suốt** → SLA theo tier ở mọi bước.
3. **Đa vai** (Care/Ops/Finance/Compliance/Data) → phân quyền + hàng đợi theo vai.
4. **Campaign đan xen ở điểm chạm creator** (giao deal/chăm) — không sở hữu nhưng có giao diện.
5. **Data model lấy thẳng từ status field** của quy trình → estimate chính xác.
6. Connector kênh = Đợt 1.5 (data Ambassador có, API khó).

---

## Tài liệu liên quan
- `resources/koc-management-process-v2.md` — quy trình gốc AT (nguồn)
- `proposal.md` — bản gửi AT (chắt lọc từ tài liệu này)
- `functional-spec.md` — đặc tả chi tiết (dựa trên data model mục 10)
