# Pitch Deck — Creator Operation Portal

> **Đối tượng:** Tech leadership AccessTrade
> **Mục tiêu:** Được duyệt để DISO build hệ thống vận hành creator
> **Phạm vi:** Dự án A — Creator Operation Portal (CRM vận hành cho team Care)
> **Ngày soạn:** 2026-05-16
> **Nguồn nội dung:** `context/slide-2.md`, `resources/koc-management-process-v2.md`, `resources/vip-criteria.md`, `resources/pipeline-tracking/`, OpsHub PDR, data-commitment

---

## Cách dùng tài liệu này

Mỗi slide gồm 2 phần:
- **[NỘI DUNG SLIDE]** — text/bảng/sơ đồ đưa lên slide
- **[NÓI]** — speaker note, lời dẫn khi trình bày

12 slide, chia 3 phần: Vấn đề (1-3) → Giải pháp (4-9) → Năng lực & Ask (10-12).

---

# PHẦN 1 — VẤN ĐỀ

---

## Slide 1 — COS có một tầng đang chạy bằng Excel

**[NỘI DUNG SLIDE]**

Tiêu đề: **AccessTrade đang bán một "hệ điều hành" — phần điều hành creator vẫn chạy bằng Excel**

Sơ đồ tam giác COS (lấy từ slide-2 của AT):

```
              COMMERCE OPERATING SYSTEM
        ┌─────────────────────────────────┐
        │   TRAFFIC → CONVERT → RETENTION  │
        │      ▲                           │
        │      │  Creator vào hệ thống     │
        │      │  qua casting / Ambassador │
        │      │  / MCN                    │
        └──────┼──────────────────────────┘
               │
        ╔══════╧══════════════════════════╗
        ║  TẦNG VẬN HÀNH CREATOR           ║
        ║  → hôm nay = file .xlsm          ║
        ╚═════════════════════════════════╝
```

**[NÓI]**

"AccessTrade cam kết với brand một Commerce Operating System — x3 doanh thu, cam kết ROAS. Đó là lời hứa lớn, và nó dựa trên một nguồn lực cốt lõi: đội ngũ creator.

Nhưng có một sự thật: cái phần *vận hành* creator — nguồn Traffic của tam giác này — hôm nay đang được điều hành bằng file Excel. Hệ điều hành ở phía brand đã có. Hệ điều hành ở phía creator thì chưa.

Hôm nay chúng tôi đề xuất xây đúng tầng đó."

---

## Slide 2 — Đội Care đang gánh một quy trình 7 bước bằng tay

**[NỘI DUNG SLIDE]**

Tiêu đề: **Quy trình KOC Management — 7 process, 28 bước — đang sống trong một file Excel**

Sơ đồ ngang 7 process:

```
1.SOURCE  →  2.OUTREACH  →  3.REVIEW &  →  4.ONBOARDING  →  5.COMMERCE   →  6.PERFORMANCE  →  7.PAYOUT &
& QUALIFY    & APPLY        SETUP          & STRATEGY        ACTIVATION      CARE              LOYALTY
```

Ghi chú dưới sơ đồ:
- Mỗi process có PIC riêng (Care / Recruitment / Ops / Compliance / BD)
- Mỗi bước có SLA cam kết (4h / 8h / 24h / 48h / 72h)
- Mỗi bước có CRM Status output (Lifecycle / Tier / Application status)
- **Tất cả đang được quản lý trong `KOC Management Winning Process - V2.xlsm`**

**[NÓI]**

"Đây không phải quy trình chúng tôi nghĩ ra. Đây là quy trình của chính AccessTrade — chúng tôi chỉ vẽ lại cho rõ.

Đội Care đang vận hành 7 process, 28 bước. Mỗi bước có người phụ trách, có SLA, có trạng thái cần cập nhật. Đó là một quy trình rất bài bản — vấn đề duy nhất là nó đang nằm trong một file Excel.

Excel làm được việc lưu trữ. Nó không làm được việc *điều hành*."

---

## Slide 3 — 3 điểm vỡ của mô hình Excel

**[NỘI DUNG SLIDE]**

Tiêu đề: **Khi quy trình vận hành nằm trong Excel — 3 thứ bị mất**

| # | Điểm vỡ | Hệ quả thực tế |
|---|---|---|
| 1 | **Mất trí nhớ vận hành** | SLA 4h/24h/48h chỉ là chữ trong ô Excel. Không ai biết creator nào đang trễ hạn, ai cần xử lý trước. |
| 2 | **Quan hệ KOC nằm trong đầu AM** | Lịch sử chăm sóc, liên hệ, deal — nằm trong điện thoại và trí nhớ của từng AM. AM nghỉ việc = mất creator. |
| 3 | **Không có góc nhìn theo từng Care** | Mỗi Care phải tự cắt view riêng (đã thấy trong file — sheet "Creator Nhung"). Không có "hàng đợi của tôi" tự động. |

**[NÓI]**

"Khi quy trình sống trong Excel, ba thứ bị mất.

Thứ nhất — trí nhớ vận hành. SLA được ghi trong file, nhưng file không tự đếm giờ. Không ai biết hôm nay creator nào sắp trễ hạn.

Thứ hai — và đây là điều chính AccessTrade đã nêu với chúng tôi — quan hệ với KOC đang nằm trong đầu của AM. Khi một AM nghỉ việc, họ mang theo cả quan hệ đó. Đây là rủi ro vận hành, không phải rủi ro công nghệ.

Thứ ba — mỗi Care đang tự xoay xở view riêng của mình. Chúng tôi thấy điều đó ngay trong file dữ liệu các anh chia sẻ.

Ba điểm vỡ này không sửa được bằng cách làm Excel tốt hơn. Nó cần một hệ thống."

---

# PHẦN 2 — GIẢI PHÁP

---

## Slide 4 — Creator Operation Portal: thêm tầng vận hành, không thay thế gì

**[NỘI DUNG SLIDE]**

Tiêu đề: **Đề xuất: Creator Operation Portal**

Sơ đồ 2 portal:

```
┌────────────────────────────┐     ┌────────────────────────────┐
│  CREATOR PORTAL             │     │  OPERATION PORTAL  [MỚI]    │
│  ambassador.koc.com.vn      │     │  crm.koc.com.vn             │
│  (giữ nguyên — đã có)       │     │                             │
│                             │     │  Cho team: Care / AM /      │
│  Creator: đăng ký, xem       │     │  BD / Compliance            │
│  campaign, nộp content       │     │                             │
└────────────┬───────────────┘     └────────────┬───────────────┘
             │                                   │
             └──────────── cùng dữ liệu ─────────┘
                       (creator, campaign, content)
```

Định vị: **Không build platform mới. Không động vào creator. Thêm một tầng vận hành cho đội ngũ phía sau.**

**[NÓI]**

"Đề xuất của chúng tôi không phải xây lại từ đầu. Creator vẫn dùng đúng cổng họ đang dùng. Campaign, content — giữ nguyên.

Chúng tôi thêm một thứ: Operation Portal — không gian làm việc cho team Care, AM, BD, Compliance. Đây là nơi 7 process kia chuyển từ Excel thành hệ thống.

Hai portal, chung một nguồn dữ liệu. Rủi ro tích hợp thấp nhất có thể."

---

## Slide 5 — 7 nhóm chức năng chính

**[NỘI DUNG SLIDE]**

Tiêu đề: **Operation Portal — 7 nhóm chức năng, ánh xạ 1:1 với quy trình KOC của AT**

| # | Nhóm chức năng chính | Ánh xạ Process | Phục vụ |
|---|---|---|---|
| 1 | **Creator Sourcing & Qualify** | Process 1 | Care / Recruitment |
| 2 | **Outreach Console** | Process 2 | Care |
| 3 | **Onboarding & Platform Setup** | Process 3 | Care / Ops |
| 4 | **Channel Strategy Workspace** | Process 4 | Care / Senior Care |
| 5 | **Campaign & Content Activation** | Process 5 | Campaign Owner |
| 6 | **Performance Care Dashboard** | Process 6 | Care / Data |
| 7 | **Tiering & Loyalty Engine** | Process 7 | Care Lead / BD |

Ghi chú: *Mỗi nhóm chức năng = một process AT đã định nghĩa. Không có chức năng nào "phát minh thêm".*

**[NÓI]**

"7 nhóm chức năng. Mỗi nhóm tương ứng đúng một process trong quy trình KOC của các anh — không hơn không kém.

Đây là điểm chúng tôi muốn nhấn: chúng tôi không mang đến một quy trình mới để các anh phải học. Chúng tôi lấy đúng quy trình các anh đã xây, và biến nó thành phần mềm.

Ba slide tiếp theo đi vào chi tiết từng nhóm."

---

## Slide 6 — Chi tiết: Sourcing, Outreach, Onboarding (Process 1-3)

**[NỘI DUNG SLIDE]**

**Nhóm 1 — Creator Sourcing & Qualify**
- *Lead Inbox* — thu lead từ TikTok / Shopee / Meta / Form / Referral; tự kiểm hồ sơ tối thiểu
- *Platform Tagging* — gắn nền tảng + tier sơ bộ (Normal / Potential / VIP Candidate / Risk)
- *Creator Scoring* — chấm điểm fit ngành, content quality, audience, brand-safety
- *VIP Auto-flag* — tự rẽ nhánh "VIP Candidate" theo tiêu chí traffic / GMV / brand-fit

**Nhóm 2 — Outreach Console**
- *Outreach Kit* — chuẩn bị offer / USP / CTA trước khi liên hệ; bản cá nhân hoá cho VIP
- *Multi-channel Contact* — DM / Zalo / email theo template, ghi nhận đã liên hệ qua kênh nào
- *Response Tracking* — trạng thái Interested / No Response / Not Interested / Need Info
- *Follow-up Reminder* — tự nhắc follow-up theo SLA (thường 48h / VIP 24h)

**Nhóm 3 — Onboarding & Platform Setup**
- *Application Review* — duyệt hồ sơ → Approved / Need More Info / Rejected
- *Platform Setup Checklist* — theo dõi setup Shopee Affiliate / TikTok / TAP / Meta
- *Payout & Tax Profile* — kiểm tra CCCD, tài khoản ngân hàng, thông tin thuế
- *MCN/TAP Join Tracking* — theo dõi join MCN, lưu mapping Publisher ID

**[NÓI]**

"Process 1 đến 3 — đưa creator từ một cái tên lạ thành một creator sẵn sàng nhận campaign.

Điểm tôi muốn các anh chú ý: ô 'VIP Auto-flag'. Quy trình của các anh có hai điểm rẽ nhánh VIP. Hiện cả hai làm thủ công. Hệ thống sẽ tự gắn cờ VIP Candidate dựa trên đúng tiêu chí trong file VIP Criteria của các anh — Care không phải nhớ, không bị sót.

Và 'Follow-up Reminder' — SLA 24h cho VIP, 48h cho thường, lấy thẳng từ file. Hệ thống đếm giúp."

---

## Slide 7 — Chi tiết: Strategy, Activation, Performance Care (Process 4-6)

**[NỘI DUNG SLIDE]**

**Nhóm 4 — Channel Strategy Workspace**
- *Channel Audit* — ghi nhận nội dung, traffic, format, tần suất của kênh creator
- *Goal Setting* — mục tiêu ngắn hạn theo nền tảng; VIP có channel strategy + kế hoạch 30 ngày
- *Product / Deal List* — gợi ý ngành hàng, sản phẩm hoa hồng cao, content angle

**Nhóm 5 — Campaign & Content Activation**
- *Offer Setup* — tạo campaign / TAP offer với commission, KPI, timeline, điều kiện
- *Task Assignment* — giao sản phẩm / deal / guideline cho creator
- *Sample Tracking* — trạng thái Not needed / Requested / Shipped / Received
- *Content Tracking* — theo dõi content publish theo nền tảng (kết nối luồng review hiện có)

**Nhóm 6 — Performance Care Dashboard**
- *Multi-source Sync* — gom view / click / order / GMV / CR / commission từ Shopee / TikTok / TAP / Meta
- *Care Action* — phân loại hành động: Scale / Support / Optimize / Reactivate / Pause
- *Early Warning* — cảnh báo creator inactive, chậm deadline, sai link, sai policy
- *Scale Decision* — đề xuất Ads / GMV Max khi content có tín hiệu tốt

**[NÓI]**

"Process 4 đến 6 — vận hành creator khi đã active.

Nhóm 6 là phần 'sống' nhất. Hôm nay đội Care đọc số performance thủ công rồi quyết định chăm ai. Hệ thống sẽ đẩy việc đó lên: creator nào tụt view, ai sắp trễ, ai đáng scale — hiện ra như một danh sách hành động, không phải một bảng số phải tự đọc.

Đây cũng là chỗ kết nối với luồng review video — phần này chúng tôi sẽ nói ở slide năng lực."

---

## Slide 8 — Chi tiết: Tiering & Loyalty (Process 7) + nền tảng hệ thống

**[NỘI DUNG SLIDE]**

**Nhóm 7 — Tiering & Loyalty Engine**
- *Commission Confirm* — đối soát hoa hồng / bonus; trạng thái Pending / Approved / Paid / Failed
- *VIP Scoring* — xác nhận tier chính thức theo GMV / CR / compliance / retention
- *Loyalty Plan* — kế hoạch giữ chân: campaign mới, training, bonus theo mốc
- *Tier Review* — review định kỳ giữ / lên / xuống tier, có lý do rõ ràng

**Nền tảng xuyên suốt cả 7 nhóm (3 chức năng lõi):**
- *Creator 360 Profile* — một creator = một hồ sơ: lifecycle, tier, lịch sử campaign, performance
- *Per-Care Queue* — mỗi Care có "hàng đợi của tôi" tự động, lọc sẵn theo owner
- *SLA Timer* — đếm ngược SLA mọi bước; đỏ lên khi sắp trễ; đẩy việc trễ lên đầu

**[NÓI]**

"Process 7 — payout và phân hạng.

Nhưng quan trọng hơn là phần dưới: ba chức năng nền tảng xuyên suốt cả 7 nhóm.

Creator 360 — mọi thông tin về một creator nằm chung một chỗ. Per-Care Queue — mỗi người mở máy lên là thấy ngay việc của mình. Và SLA Timer — cái biến 7 process từ quy trình giấy thành quy trình *sống*: hệ thống tự đếm giờ, tự báo đỏ, tự sắp thứ tự ưu tiên.

Đây là thứ Excel không bao giờ làm được."

---

## Slide 9 — Spotlight: Relationship Vault — chống mất quan hệ KOC

**[NỘI DUNG SLIDE]**

Tiêu đề: **Relationship Vault — quan hệ KOC thuộc về AccessTrade, không thuộc về cá nhân AM**

Vấn đề (đóng khung lại từ chính lời AT):
> *"Ngăn chặn AM nghỉ việc lấy luôn quan hệ với KOC."*

3 cơ chế:

| Cơ chế | Mô tả |
|---|---|
| **Mọi tương tác được ghi lại** | Liên hệ qua Zalo / DM / call / note — ghi vào hệ thống, không nằm trong điện thoại cá nhân |
| **Bàn giao không mất mát** | AM nghỉ → creator được chuyển owner; toàn bộ lịch sử quan hệ đi theo, người mới tiếp nối ngay |
| **Audit trail đầy đủ** | Ai chăm creator nào, làm gì, khi nào — truy vết được, minh bạch với quản lý |

Thông điệp: **Quan hệ với creator là tài sản của AccessTrade. Hệ thống đảm bảo nó ở lại.**

**[NÓI]**

"Slide này tách riêng, vì đây là điều chính các anh đã nói với chúng tôi đầu tiên.

Khi một AM nghỉ việc, hôm nay họ mang theo cả quan hệ với KOC — vì quan hệ đó nằm trong điện thoại và trí nhớ của họ. Đó là một rủi ro thật.

Relationship Vault giải nó bằng một nguyên tắc: mọi tương tác với creator được ghi vào hệ thống. Khi AM nghỉ, creator được bàn giao — và lịch sử quan hệ đi theo creator, không đi theo người nghỉ. Người mới tiếp nối được ngay từ điểm dừng.

Quan hệ với creator trở thành tài sản của AccessTrade — không phải tài sản cá nhân ai mang đi được."

---

# PHẦN 3 — NĂNG LỰC & ĐỀ XUẤT

---

## Slide 10 — Bằng chứng: DISO đã giải đúng bài toán này

**[NỘI DUNG SLIDE]**

Tiêu đề: **Hai mảnh khó nhất — DISO đã build và đang vận hành production**

**Bằng chứng 1 — OpsHub: biến vận hành thủ công thành hệ thống tự động**
- Platform review nội dung tập trung, DISO xây và vận hành
- Pipeline 3 tầng: Auto (rule) → AI (Gemini Vision) → Human
- Kết quả thực tế:
  - Nhân sự review thủ công: **10 người → 3 người**
  - Sản lượng: **10.000 → 50.000 video** — không cần thêm người
- → Chứng minh: DISO biến quy trình thủ công thành hệ thống tự động mà vẫn giữ chất lượng

**Bằng chứng 2 — influence-meter: hạ tầng dữ liệu creator**
- Creator đăng ký → tự động có hồ sơ TikTok / YouTube / Facebook / Instagram (follower, engagement, recent content)
- Đang chạy production: dashboard Techcombank · Metric POC ổn định **2.000 creator / tháng**
- → Chứng minh: phần thu thập dữ liệu creator đã sẵn sàng, không phải làm lại

**Lưu ý quan hệ với Ambassador:** DISO đang *vận hành công nghệ* cho hệ thống Ambassador hiện tại của AT — nên am hiểu sâu luồng creator / campaign / content. Operation Portal được xây trên nền hiểu biết đó.

**[NÓI]**

"Câu hỏi các anh sẽ đặt ra: làm sao biến một quy trình thủ công thành hệ thống tự động mà không hỏng chất lượng?

Chúng tôi không trả lời bằng lời hứa. Chúng tôi đã làm rồi.

OpsHub — một hệ thống DISO xây và đang vận hành. Nó nhận video, chạy qua ba tầng kiểm duyệt: rule tự động, AI, rồi mới đến người. Kết quả: đội review từ 10 người xuống còn 3. Sản lượng từ 10 nghìn video lên 50 nghìn — cùng số người. Đây là con số production, không phải slide đẹp.

influence-meter — phần thu thập dữ liệu creator. Đang chạy cho dashboard Techcombank. Khi creator đăng ký, hệ thống tự kéo về hồ sơ bốn nền tảng.

Hai mảnh khó nhất của dự án này — tự động hoá vận hành và hạ tầng dữ liệu — DISO đã có sẵn, đang chạy. Và vì DISO đang vận hành công nghệ cho chính hệ thống Ambassador của các anh, chúng tôi hiểu luồng nghiệp vụ này từ bên trong."

---

## Slide 11 — Kiến trúc & lộ trình 2 Sprint

**[NỘI DUNG SLIDE]**

Tiêu đề: **Kiến trúc 2 portal · Mô hình dữ liệu 3 lớp · Lộ trình 2 Sprint**

Mô hình dữ liệu (lấy từ file pipeline-tracking của AT):

```
A. Creator Lifecycle    New → Contacted → Applied → Approved → Ready → Active → Inactive
B. Campaign Status      Shortlisted → Invited → Accepted → In Progress → Activated → Completed
C. Tier (policy/SLA)    VIP / Gold / Normal / New / Watchlist
```

Lộ trình:

| Sprint | Trọng tâm | Nội dung chính |
|---|---|---|
| **Sprint 1** | Quản lý creator inbound | Creator 360, Per-Care Queue, SLA Timer, quản trị campaign, Relationship Vault |
| **Sprint 2** | Sourcing & tối ưu | Sourcing automation (outbound), Performance Dashboard, campaign list trên creator portal |

Một dòng cuối: *Kiến trúc thiết kế theo nguyên tắc "một creator — nhiều job". Sẵn sàng mở rộng sang MCN Shopee / TAP / Booking khi AccessTrade cần.*

**[NÓI]**

"Mô hình dữ liệu không phải chúng tôi tự nghĩ — nó lấy thẳng từ file pipeline tracking của các anh: lifecycle, campaign status, và tier tách riêng. Chúng tôi chỉ chuẩn hoá lại.

Lộ trình hai sprint. Sprint 1 lo phần creator đăng ký vào — quản lý, chăm sóc, chống mất quan hệ. Sprint 2 lo phần chủ động đi tìm creator.

Và một điểm về kiến trúc — chúng tôi thiết kế theo nguyên tắc một creator dùng chung cho nhiều job. Hôm nay là Creator VN. Khi các anh muốn mở sang MCN Shopee, TAP, Booking — kiến trúc đã sẵn sàng. Đó là việc của tương lai, nhưng chúng tôi xây nền cho nó ngay từ đầu."

---

## Slide 12 — Mô hình hợp tác & Đề xuất bước tiếp theo

**[NỘI DUNG SLIDE]**

Tiêu đề: **Cách DISO đồng hành — và bước tiếp theo**

Mô hình hợp tác:
- DISO **xây dựng và vận hành** hệ thống trong suốt giai đoạn nghiệm thu
- **Bàn giao source code** cho AccessTrade khi kết thúc dự án
- DISO là **delivery partner dài hạn** — không phải vendor giao hàng rồi rời đi

Đề xuất bước tiếp theo (technical):
1. **Joint architecture review** — DISO + tech team AT rà soát kiến trúc, chốt điểm tích hợp
2. **Access influence-meter** — cho DISO prototype phần dữ liệu creator để demo sớm
3. **Chốt scope Sprint 1** — xác định deliverable cụ thể, ưu tiên Relationship Vault

**[NÓI]**

"Về cách hợp tác: DISO không chỉ build rồi giao. Chúng tôi xây dựng và vận hành hệ thống suốt giai đoạn nghiệm thu — đảm bảo nó chạy thật, ổn định. Khi kết thúc dự án, source code bàn giao cho AccessTrade. Các anh sở hữu hệ thống của mình.

Bước tiếp theo chúng tôi đề xuất không phải ký hợp đồng ngay. Là ba việc kỹ thuật: một buổi rà soát kiến trúc chung giữa hai team, cho DISO access influence-meter để dựng demo sớm, và cùng chốt scope Sprint 1.

Phần thương mại — chi phí, mô hình thanh toán — sẽ do bộ phận tài chính hai bên làm việc riêng.

Hôm nay chúng tôi chỉ muốn các anh thấy một điều: bài toán này rõ ràng, có lời giải, và DISO đã chứng minh năng lực giải nó."

---

## Phụ lục — Nguồn truy vết (không lên slide, để trả lời câu hỏi)

| Nội dung trong deck | Nguồn |
|---|---|
| Tam giác COS, x3 doanh thu | `context/slide-2.md` mục 3-4 |
| 7 process, 28 bước, SLA | `resources/koc-management-process-v2.md` |
| Tiêu chí VIP, 5 tier | `resources/vip-criteria.md` |
| Mô hình dữ liệu 3 lớp (A/B/C), SLA hours | `resources/pipeline-tracking/README.md` |
| Concern "AM nghỉ lấy quan hệ KOC" | `.bmad/brainstorming/at-context-and-business-model-2026-05-04.md` lần 1 |
| 2 portal, domain crm.koc.com.vn, 2 sprint | `.bmad/brainstorming/at-context-and-business-model-2026-05-04.md` |
| OpsHub 3-tier, 10→3 người, 10K→50K video | OpsHub PDR + xác nhận trực tiếp |
| influence-meter, Metric POC 2.000/tháng | `context/data-commitment.md` + xác nhận trực tiếp |
