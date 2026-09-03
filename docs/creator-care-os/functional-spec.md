# Functional Spec — Creator Care OS (Giai đoạn 1)

**Dự án:** Creator Care OS — DISO × AccessTrade
**Loại tài liệu:** Functional Spec — bảng kê tính năng theo Vai × Module (để chốt scope & estimate)
**Cập nhật:** 2026-05-28
**Phạm vi:** **chỉ GĐ1** (= "lát cắt T1" — Chống rơi + Nền móng). T2-T4 không viết trong file này.
**Nền tảng:** `solution-concept-v2.md` + `overview-model.md`

> **Người dùng hệ thống:** nội bộ AccessTrade — `[Care]` Creator Care · `[Manager]` Quản lý vận hành · `[Admin]` Quản trị · `[Ops]` Platform/Payment Ops · `[Finance]` · `[System]` tự động. *(Brand KHÔNG phải người dùng — brand xem hiệu quả qua hệ khác.)*

---

## Cách đọc

- Mỗi module = một **chức năng trong Solution Concept v2 Phần B (GĐ1)** mở rộng thành tính năng cụ thể.
- Bảng: **Vai × Tính năng × Mô tả** (kiểu AT quen).
- **⚙️** = điểm chưa chốt — có phương án A/B/C, không bịa. AT chọn.
- **Data field** = field trên hồ sơ creator mà module này đẻ ra/duy trì (đối chiếu overview mục 10).
- **Ranh giới** = cái gì KHÔNG làm (đẩy sang GĐ2+).

> Bám lifecycle gốc AT: `New → Contacted → Applied → Ready → Active`. Hạng (tier) gốc AT: `Risk / Normal / Potential / VIP Candidate / Gold / VIP / Watchlist`.

---

## FR0 — Nền tảng xuyên suốt

| Vai | Tính năng | Mô tả |
|---|---|---|
| [Admin] | Quản lý người dùng | Tạo/khoá tài khoản; gán vai |
| [Admin] | Phân quyền theo vai (RBAC) | 6 vai: Care/Manager/Admin/Ops/Finance/System; mỗi vai chỉ thấy & làm phần được giao |
| [System] | Audit log | Ghi vết mọi thay đổi quan trọng (ai/khi nào/làm gì/giá trị cũ-mới) |
| [Admin] | Cấu hình SLA | Bảng cấu hình SLA: **mỗi (loại sự kiện × Tier) → một khoảng thời gian**. Loại sự kiện GĐ1: `Lead vừa nhập chờ tiếp cận`, `Đã Contacted chờ follow-up`, `Đã Applied chờ duyệt`, `Đã duyệt chờ onboard xong`, `CareTask chờ xử lý`. Ví dụ: *"Lead VIP Candidate chờ tiếp cận = 4h; Lead Normal = 24h"*. |
| [System] | Đồng hồ SLA chạy theo cấu hình | Mỗi creator/CareTask gắn 1 đồng hồ tương ứng (loại sự kiện × Tier); đếm ngược thời gian còn lại |
| [System] | Cảnh báo sắp/đã trễ SLA | Đến ngưỡng cảnh báo (vd còn 20% thời gian) → báo vàng; quá hạn → báo đỏ + đẩy lên đầu hàng đợi của owner |

**Data field:** `User`, `Role`, `SLA Config table` (event_type × tier → duration), `SLA Clock` trên từng creator/CareTask, `Audit log`
**⚙️ Cần AT chốt:** giá trị SLA cụ thể từng (event × tier) — *Q7* tổng hợp.
**Ranh giới:** ❌ SSO/đăng nhập liên kết hệ AT — *⚙️ Q6*.

> *Tương ứng concept v2: chức năng 2.3, 2.4.*

---

## FR1 — Hồ sơ Creator 360

> *Concept v2 §1.1 — Care/Manager dùng; giải đau "mở 5 file mới hiểu 1 creator".*

| Vai | Tính năng | Mô tả |
|---|---|---|
| [Care/Manager] | Xem hồ sơ 360 | Trang hợp nhất 6 khối: **Định danh · Kênh social đã gia nhập · Trạng thái (lifecycle + tier + owner) · Lịch sử campaign · Hiệu suất · Lịch sử tương tác** |
| [Care] | Chỉnh sửa field do Care quản | Liên hệ, ghi chú, gợi ý ngành hàng/sản phẩm |
| [Care] | Đổi trạng thái vòng đời | Cập nhật `Lifecycle` theo bước thực tế (`New→Contacted→Applied→Ready→Active`) |
| [Care/Manager] | Đổi hạng (tier) thủ công | Cập nhật `Tier` khi cần (vd nâng từ Potential → VIP Candidate) |
| [System] | Lưu & xử lý avatar/ảnh | Upload, resize, lưu |
| [System] | Audit thay đổi hồ sơ | Mọi sửa quan trọng được ghi vết |

**Data field:** `Lifecycle`, `Tier`, `Owner`, `Platform Tag`, định danh cơ bản, ghi chú
**Ranh giới:** ❌ Không xây hệ quản lý social profile riêng — dữ liệu kênh đến từ nguồn nạp (FR3). ❌ Chấm điểm tự động → GĐ2.

---

## FR2 — Pool 2 chiều + Chống mồ côi

> *Concept v2 §1.2, §1.3 — Manager dùng; giải đau "creator tiềm năng lọt khe, không ai chăm".*

| Vai | Tính năng | Mô tả |
|---|---|---|
| [Manager] | Xem pool theo 2 trục | Bảng/lưới creator lọc theo `Lifecycle` (vòng đời) × `Tier` (giá trị). Ví dụ: "VIP Candidate đang ở Applied" |
| [Manager] | Lọc giao điểm 2 trục | Lọc đa điều kiện (Tier + Lifecycle + Owner + Platform...) — để phát hiện creator sắp rơi |
| [Manager] | Gán owner cho creator | Chọn Care làm owner; một creator một owner |
| [Manager] | Bàn giao owner | Đổi owner — lịch sử tương tác (FR5) đi theo creator |
| [System] | Báo creator "mồ côi" | Tự phát hiện creator có `Tier` ∈ {Potential, VIP Candidate, Gold, VIP} mà chưa có Owner → đẩy lên Manager |
| [Manager] | Đo "% creator giá trị có owner" | Chỉ số sức khỏe pool — mục tiêu 100% |

**Data field:** `Lifecycle`, `Tier`, `Owner`
**Ranh giới:** ❌ Tự phân tier theo AI/score → GĐ2 (T2). ❌ Tự gán owner theo tải → GĐ2.

---

## FR3 — Tiếp nhận Creator vào Pool

> *Concept v2 §1.4 (đa cửa) + §3.1 (đa nguồn lead) + §3.2 (tag+hạng sơ bộ) — Care dùng; "vào hết, không lọc cửa".*
>
> Module này gom **toàn bộ việc đưa một creator vào hệ thống**: bằng cách nào (cửa) × từ đâu (nguồn) × ghi nhận sơ bộ gì (tag/hạng).

### 3.A — Cửa vào (cách creator được tạo trong hệ thống)

| Vai | Tính năng | Mô tả |
|---|---|---|
| [Care] | ⚙️ Tạo creator thủ công | Form tạo 1 creator (PA-A) |
| [Care] | ⚙️ Import hàng loạt | Upload Excel/CSV → tạo hàng loạt (PA-B) |
| [Care] | ⚙️ Creator tự đăng ký | Cổng đăng ký công khai + Care duyệt vào pool (PA-D) |
| [System] | Chống trùng creator | Dedup theo định danh / handle social / số điện thoại khi tạo |

### 3.B — Ghi nhận lúc tiếp nhận

| Vai | Tính năng | Mô tả |
|---|---|---|
| [Care] | Khai báo nguồn lead | Chọn nguồn khi tạo: TikTok / Shopee / Meta / Fanpage / Agency / Form / Referral |
| [Care] | Đánh dấu Priority Lead | Cờ ưu tiên ngay khi nhập (fanpage lớn / KOL / brand đề cử) → SLA Priority |
| [Care/System] | Gắn tag nền tảng | Shopee / TikTok / TAP / Facebook / Livestream / Multi-platform |
| [Care] | Gắn hạng sơ bộ thủ công | `Tier` ∈ {Normal, Potential, VIP Candidate, Risk} dựa quan sát/quy tắc |

**⚙️ Cần AT chốt:** GĐ1 dùng phương án cửa vào nào? (A/B/D — có thể nhiều) → **Q1** ở tổng hợp.

**Data field:** `Lifecycle = New`, `Lead Source`, `Priority Lead flag`, `Platform Tag`, `Tier` sơ bộ
**Ranh giới:** ❌ PA-C (đồng bộ từ Ambassador qua API) → **GĐ1.5** (tách riêng vì phụ thuộc API Ambassador). ❌ Sourcing tự động từ social → GĐ2. ❌ Chấm điểm AI → GĐ2.

---

## FR4 — Tiếp cận & Trạng thái Phản hồi

> *Concept v2 §4.1, §4.2 — Care dùng; giải đau "soạn lại tin mỗi lần", "quên follow-up".*
>
> **Ranh giới với FR5:** FR4 quản **trạng thái tiếp cận** (đã liên hệ chưa, qua kênh gì, phản hồi ra sao). FR5 quản **nội dung tương tác** (nói gì với creator). Một lần liên hệ creator có thể sinh đồng thời: 1 update FR4 (đổi trạng thái) + 1 bản ghi FR5 (nội dung) — hệ thống tự liên kết qua creator_id, **Care chỉ nhập một lần** (xem cơ chế ở row "Một thao tác" dưới).

| Vai | Tính năng | Mô tả |
|---|---|---|
| [Care/Manager] | Soạn & lưu Outreach Kit | Mẫu thông điệp (quyền lợi/hoa hồng/sample/CTA); có mẫu chung + mẫu cá nhân hoá cho VIP |
| [Care] | **Một thao tác "Ghi liên hệ"** | Form duy nhất gồm: kênh + thời điểm + nội dung tóm tắt + trạng thái phản hồi → hệ thống **tự cập nhật FR4** (kênh, lifecycle=`Contacted`, response status) **và tạo bản ghi FR5** (nội dung tương tác). Không nhập 2 lần. |
| [Care] | Cập nhật trạng thái phản hồi (nhanh) | Đổi nhanh `Response Status` (`Interested / No Response / Not Interested / Need More Info`) mà không cần ghi nội dung mới |
| [System] | Nhắc follow-up theo SLA | Tự tạo CareTask (FR6) cho Care theo SLA của tier (xem FR0) |

**Data field:** `Lifecycle = Contacted`, `Response Status`, `Last Contacted At`, `Last Contacted Channel`
**Liên kết:** mỗi action "Ghi liên hệ" tạo thêm 1 bản ghi `Interaction log` (FR5) — *không lưu nội dung ở FR4*.
**Ranh giới:** ❌ Gửi tin trực tiếp từ hệ thống (tích hợp Zalo/email API) → **⚙️ Q3** (có thể giữ ngoài GĐ1).

---

## FR5 — Két Quan hệ (Interaction Log)

> *Concept v2 §1.5 — Care/Manager dùng; **giải đau số 1** "AM nghỉ mất quan hệ".*

| Vai | Tính năng | Mô tả |
|---|---|---|
| [Care] | Ghi tương tác | Thêm bản ghi: thời điểm, kênh, nội dung tóm tắt, kết quả |
| [Care] | Đính kèm | Đính ảnh/file/link vào bản ghi tương tác |
| [Care/Manager] | Xem timeline | Toàn bộ tương tác với creator theo thời gian (mới → cũ) |
| [Manager] | Tìm trong timeline | Tìm theo keyword/kênh/khoảng thời gian |
| [System] | Bàn giao theo creator | Đổi Owner → lịch sử tương tác **đi theo creator**, không theo người |
| [System] | Audit | Bản ghi tương tác không xoá được; chỉnh sửa có vết |

**Data field:** `Interaction log` (creator_id, owner_at_time, kênh, nội dung, đính kèm, thời điểm)
**Ranh giới:** ❌ Đồng bộ tự động hội thoại từ Zalo/email vào → **⚙️ Q3**. ❌ NLP/tóm tắt tự động → GĐ4.

---

## FR6 — Hàng đợi & Việc chăm sóc (CareTask)

> *Concept v2 §2.1, §2.2 — Care dùng; giải đau "không biết hôm nay làm gì trước", "việc nằm trong đầu".*

| Vai | Tính năng | Mô tả |
|---|---|---|
| [Care] | My Tasks | Hàng đợi việc của riêng mình, sắp xếp theo ưu tiên (SLA + tier creator) |
| [Care] | My Creators | Danh sách creator mình làm owner |
| [Care] | Tạo CareTask | Loại: gọi/nhắn/follow-up/nhắc nộp hồ sơ/khác; gắn creator; có hạn |
| [Care] | Cập nhật trạng thái CareTask | `Open / In Progress / Done / Cancelled` |
| [System] | Tự tạo CareTask theo SLA | Từ FR4 (nhắc follow-up), FR8 (creator chưa onboard xong), ... |
| [Manager] | Xem hàng đợi đội | Toàn bộ task của đội theo Care/tình trạng/quá hạn |

**Data field:** `CareTask` (creator_id, assignee, loại, hạn, trạng thái, nguồn tạo)
**Ranh giới:** ❌ Việc gắn campaign (`Task = Assigned` P5.2) → GĐ2 (điểm chạm campaign). ❌ Tự giao việc theo tải → GĐ2.

> *Phân biệt rõ:* `CareTask` (việc chăm sóc, GĐ1) ≠ `Task` (việc gắn campaign, GĐ2).

---

## FR7 — Duyệt Hồ sơ & Thiết lập Nền tảng

> *Concept v2 §4.3, §4.4, §4.5 — Care/Ops/Finance dùng; giải đau "onboard rời rạc, dễ kẹt".*
>
> **Phân biệt 2 ID khác nhau** *(quan trọng — đừng nhầm)*:
> - **`Internal Creator ID`** — mã định danh creator trong Creator Care OS, sinh khi tạo creator (FR3). Là mã chính của hồ sơ.
> - **`Platform Publisher ID`** — mã do **kênh ngoài** (Shopee MCN / TAP / Ambassador...) cấp khi creator gia nhập kênh đó. Một creator có nhiều `Platform Publisher ID` (mỗi kênh một). Lưu dạng mapping `{platform → publisher_id}`.

| Vai | Tính năng | Mô tả |
|---|---|---|
| [Care/Manager] | Duyệt hồ sơ creator | Xét fit/brand safety/lịch sử; `Application = Approved/Need More Info/Rejected`; lifecycle → `Applied → Approved` |
| [Ops] | Checklist thiết lập nền tảng | Danh sách kiểm Shopee Affiliate/TikTok/TAP/Meta; mỗi item `Done/Pending`; `Platform Setup = Done/Pending` |
| [Finance] | Quản lý thanh toán & thuế | CCCD, tài khoản ngân hàng, thông tin thuế; `Payout Profile = Verified/Pending` |
| [Ops] | Lưu mapping Publisher ID từ kênh | Sau khi creator join MCN/TAP/Ambassador, nhập **`Platform Publisher ID`** mà kênh đó cấp; `Under AT = Yes` |
| [Care] | Onboard hoàn tất | Kiểm tra đủ 4 điều kiện trên; gửi policy/guideline; gán owner (nếu chưa); lifecycle → `Ready`. *Không cấp ID mới — Internal ID đã có từ FR3.* |

**Data field:** `Application`, `Platform Setup`, `Payout Profile`, `Under AT`, `Platform Publisher ID` (mapping nhiều kênh), `Lifecycle = Ready`
**⚙️ Cần AT chốt:** EKYC + ký hợp đồng điện tử có thuộc GĐ1? → **Q4**. Thanh toán bắt buộc qua ngân hàng nào? → **Q5**.
**Ranh giới:** ❌ Tự động xác minh CCCD qua eKYC nếu không yêu cầu → GĐ2. ❌ Gọi API kênh ngoài để tự lấy Publisher ID → GĐ1.5 (cần connector).

---

## ⚙️ Tổng hợp "Cần AT chốt" (cho GĐ1)

| # | Câu hỏi | Module | Ảnh hưởng |
|---|---|---|---|
| **Q1** | Nạp creator GĐ1 dùng phương án nào? A (Care nhập tay) / B (Import file) / D (Creator tự đăng ký + duyệt) — có thể nhiều | FR3 | 🔴 Lớn (D nặng nhất, gấp 3-4× A) |
| **Q2** | Có dữ liệu creator cũ cần nhập vào pool không? Bao nhiêu? | FR3 | 🟡 TB |
| **Q3** | Tiếp cận/tương tác GĐ1: chỉ ghi nhận thủ công, hay gửi tin trực tiếp từ hệ thống (tích hợp Zalo/email)? | FR4, FR5 | 🟡 TB |
| **Q4** | EKYC + ký hợp đồng điện tử có thuộc GĐ1? | FR7 | 🔴 Lớn |
| **Q5** | Thanh toán bắt buộc qua ngân hàng nào (định danh tài khoản)? | FR7 | 🟡 TB |
| **Q6** | SSO/đăng nhập có liên kết hệ AT có sẵn không? | FR0 | 🟡 TB |
| **Q7** | SLA cụ thể từng tier (vd VIP 8h, Normal 24h) — AT có sẵn quy chuẩn? | FR0 | 🟢 Nhỏ |
| **Q8** | Quy tắc gắn `Tier sơ bộ` (Normal/Potential/VIP Candidate/Risk) — AT có rubric không? | FR3 | 🟢 Nhỏ |

> *Q1, Q4 là 2 câu lớn nhất quyết định khối lượng. Khuyến nghị trao đổi 30-45 phút với AT thay vì trả lời văn bản.*

---

## Cái KHÔNG có trong GĐ1 (để team estimate biết ranh)

Để khỏi nhầm — đây là **GĐ2+**, **không** ước lượng trong file này:

- Chấm điểm creator tự động (Creator Score AI) — *T2*
- Cảnh báo creator nguội / gợi ý hành động (Care Action) — *T2*
- Giao việc tự động theo tải — *T2*
- Bảng KPI sức khỏe pool / năng suất Care — *T2*
- Đối soát hoa hồng + xác nhận VIP chính thức theo data — *T2*
- Ghép creator ↔ campaign + invite — *T3*
- Đồng bộ hiệu suất đa nguồn (Shopee/TikTok/TAP/Meta) — *T3*
- Connector Ambassador (đồng bộ creator + kết quả) — **GĐ1.5** (tách riêng)
- Dự đoán churn / Match Score / Next Best Action — *T4*
- Việc gắn campaign (`Task=Assigned`) — *T2 / điểm chạm campaign*

---

## Kiểm tra "đủ móng" (creator đi trọn ở GĐ1)

```
[FR3 tiếp nhận: cửa vào + nguồn lead + tag + tier sơ bộ] → [FR2 gán owner, không mồ côi]
   → [FR4 tiếp cận, lifecycle=Contacted] → [FR7 duyệt + setup nền tảng + thanh toán + MCN/TAP]
   → [FR7 onboard, lifecycle=Ready]
   → Care chăm: [FR6 hàng đợi + CareTask] + [FR5 ghi tương tác] + [FR0 SLA tự nhắc]
```
✅ Creator đi trọn từ Lead → Ready và được chăm sóc cơ bản. Không rơi.
✅ AM nghỉ → owner đổi, quan hệ (FR5) đi theo creator.
❌ Chưa có: cảnh báo nguội, ghép campaign, hiệu suất đa nguồn → **GĐ2+**.

---

## Yêu cầu phi chức năng (NFR) — chỉ điểm bắt buộc GĐ1

| # | Yêu cầu |
|---|---|
| NFR1 | **Phân quyền & cô lập theo vai** — Care chỉ thấy creator được giao; backend enforce |
| NFR2 | **Hiệu suất** — thao tác thường < 1s; danh sách/lọc < 500ms |
| NFR3 | **Tiếng Việt** mặc định, không hardcode (chuẩn bị i18n cho sau) |
| NFR4 | **Bảo mật dữ liệu cá nhân** — CCCD/thanh toán/định danh creator: mã hoá, kiểm soát truy cập |
| NFR5 | **Kiến trúc connector** — chuẩn hoá API ra (cho GĐ1.5 cắm Ambassador, GĐ2+ cắm thêm) |
| NFR6 | **Bàn giao** — source code bàn giao cuối dự án, tài liệu kèm |

---

## Tài liệu liên quan
- `solution-concept-v2.md` — nguồn (30 chức năng đích đến + lát cắt GĐ1)
- `overview-model.md` — mô hình tư duy (4 nấc, pool 2 chiều, data model gốc)
- `resources/koc-management-process-v2.md` — quy trình gốc AT (chuẩn lifecycle/tier/SLA)
- `proposal.md` — bản gửi AT
