# Creator Care OS — Solution Concept v2

**Dự án:** Creator Care OS — DISO × AccessTrade
**Cập nhật:** 2026-05-27

> **Người dùng hệ thống:** nội bộ AccessTrade — **Quản lý vận hành**, **Creator Care**, và các vai phối hợp (**Ops / Finance / Data / Compliance**). *Brand KHÔNG phải người dùng — brand xem hiệu quả qua hệ khác (Ambassador/portal). Creator Care OS là hệ vận hành & chăm sóc creator nội bộ.*

---

## A. Đích đến — Creator Care OS làm được gì khi trưởng thành

Creator Care OS giúp AccessTrade **khai thác tối đa giá trị từ mỗi creator** — bắt đầu bằng việc không để ai bị rơi, tiến tới hiểu creator đủ sâu để chăm đúng & ghép đúng. Hành trình 4 nấc:

| Nấc | Tên | Bản chất |
|---|---|---|
| **T1** | Chống rơi | Nền móng — mọi creator giá trị đều trong tầm mắt, có người chăm |
| **T2** | Nâng hiệu quả | Chăm đúng — can thiệp đúng lúc, đúng cách |
| **T3** | Khai thác tối đa | Ghép đúng — đúng người, đúng việc, đúng thời điểm |
| **T4** | Trí tuệ creator | Dự đoán — gợi ý hành động sinh lời nhất |

Dưới đây là **danh mục chức năng đầy đủ** — mỗi chức năng ghi rõ *ai dùng / giải đau gì / làm gì / thuộc nấc*.

---

### NHÓM 1 — Hồ sơ & Pool (giữ creator, không rơi)

**1.1 Hồ sơ Creator 360**
- **Ai dùng:** Care, Quản lý vận hành
- **Giải đau:** phải mở 5 file/nhiều nơi mới hiểu một creator
- **Làm gì:** một creator = một trang duy nhất gom: định danh, các kênh social đã gia nhập, trạng thái vòng đời, hạng (tier), lịch sử campaign, hiệu suất, lịch sử tương tác
- **Nấc:** T1

**1.2 Pool 2 chiều (vòng đời × giá trị)**
- **Ai dùng:** Quản lý vận hành
- **Giải đau:** không biết creator nào đang ở đâu, đáng chăm cỡ nào; creator tiềm năng lọt khe
- **Làm gì:** mọi creator được định vị theo 2 trục — *vòng đời* (New→Contacted→Applied→Ready→Active→Nguội) và *giá trị* (Risk/Normal/Potential/VIP Candidate→Gold/VIP/Watchlist). Lọc/nhóm theo giao hai trục ("VIP nào đang kẹt ở Applied quá lâu")
- **Nấc:** T1

**1.3 Gán owner + quy tắc "không creator mồ côi"**
- **Ai dùng:** Quản lý vận hành
- **Giải đau:** creator giá trị không ai phụ trách, bị bỏ rơi
- **Làm gì:** mỗi creator tầng giá trị bắt buộc có một Care làm owner; hệ thống báo ngay khi có creator giá trị chưa có owner. Đo được "% creator giá trị có owner"
- **Nấc:** T1

**1.4 Tiếp nhận đa cửa (không sàng lọc ở cửa)**
- **Ai dùng:** Care, hệ thống
- **Giải đau:** lọc ở cửa làm mất creator tiềm năng (lọc mù)
- **Làm gì:** nhận creator vào pool qua 3 cửa — Care tự thêm / creator tự đăng ký / đồng bộ từ kênh (Ambassador...). Vào hết, sàng lọc bằng phân tầng bên trong
- **Nấc:** T1 (cửa đồng bộ kênh = phụ thuộc connector)

**1.5 Két Quan hệ (Interaction log)**
- **Ai dùng:** Care, Quản lý vận hành
- **Giải đau:** **AM nghỉ việc lấy luôn quan hệ creator** (nỗi đau số 1)
- **Làm gì:** mọi tương tác với creator (ghi chú, đã liên hệ gì qua kênh nào, kết quả) được lưu vào hồ sơ. Khi đổi owner, toàn bộ lịch sử đi theo creator — không theo người nghỉ
- **Nấc:** T1

---

### NHÓM 2 — Việc & Vận hành (đội chạy không loạn)

**2.1 Hàng đợi việc theo từng người (My Tasks / My Creators)**
- **Ai dùng:** Care
- **Giải đau:** Quản lý phải chia việc tay; Care không biết hôm nay làm gì trước
- **Làm gì:** mỗi Care mở lên thấy ngay danh sách creator + việc của riêng mình, sắp theo ưu tiên
- **Nấc:** T1

**2.2 Việc chăm sóc (CareTask)**
- **Ai dùng:** Care
- **Giải đau:** việc cần làm với creator (gọi, nhắc nộp hồ sơ, follow-up) nằm trong đầu/trên giấy, dễ quên
- **Làm gì:** tạo & theo dõi việc chăm sóc gắn với creator (loại việc, hạn, trạng thái) — *không phải việc gắn campaign*
- **Nấc:** T1

**2.3 Đồng hồ SLA theo hạng**
- **Ai dùng:** Quản lý vận hành, Care
- **Giải đau:** việc trễ hạn không ai biết; creator VIP bị chăm chậm như thường
- **Làm gì:** hệ thống đếm ngược SLA từng bước theo tier (VIP ngắn hơn); việc sắp trễ → báo đỏ, đẩy lên đầu hàng đợi
- **Nấc:** T1

**2.4 Phân quyền theo vai (RBAC)**
- **Ai dùng:** Admin
- **Giải đau:** ai cũng thấy mọi thứ, không kiểm soát; nhiều vai (Care/Ops/Finance) lẫn lộn
- **Làm gì:** phân quyền theo vai; mỗi vai thấy & làm đúng phần của mình
- **Nấc:** T1

**2.5 Giao việc tự động theo tải**
- **Ai dùng:** Quản lý vận hành
- **Giải đau:** chia việc tay, người ôm nhiều người rảnh
- **Làm gì:** hệ thống tự phân creator/việc cho Care ít tải nhất trong đúng nhóm
- **Nấc:** T2

---

### NHÓM 3 — Tuyển & Sàng lọc (chọn đúng creator)

**3.1 Thu nhận lead đa nguồn**
- **Ai dùng:** Care
- **Giải đau:** lead rải rác nhiều nơi, trùng lặp
- **Làm gì:** nhận creator lead từ nhiều nguồn (social/form/referral/agency), chống trùng
- **Nấc:** T1

**3.2 Gắn tag nền tảng + hạng sơ bộ**
- **Ai dùng:** Care
- **Giải đau:** không phân biệt được creator ngay từ đầu
- **Làm gì:** gắn nền tảng (Shopee/TikTok/TAP/Meta) + hạng sơ bộ (Normal/Potential/VIP Candidate/Risk)
- **Nấc:** T1

**3.3 Chấm điểm creator (tự động)**
- **Ai dùng:** Data, Care
- **Giải đau:** chấm điểm thủ công, cảm tính, bỏ sót ứng viên VIP
- **Làm gì:** hệ thống chấm điểm theo fit ngành, chất lượng nội dung, khán giả, brand safety + nêu lý do; tự gắn cờ "VIP Candidate"
- **Nấc:** T2

---

### NHÓM 4 — Tiếp cận & Onboard (đưa creator vào guồng)

**4.1 Bộ thông điệp tiếp cận (Outreach Kit)**
- **Ai dùng:** Care
- **Giải đau:** soạn lại tin nhắn mỗi lần
- **Làm gì:** soạn & lưu mẫu thông điệp (quyền lợi, hoa hồng, lời mời); cá nhân hoá cho VIP
- **Nấc:** T1

**4.2 Theo dõi tiếp cận & nhắc follow-up**
- **Ai dùng:** Care
- **Giải đau:** liên hệ xong quên theo dõi, để creator nguội từ đầu
- **Làm gì:** ghi nhận đã liên hệ qua kênh nào, trạng thái phản hồi; hệ thống nhắc follow-up theo SLA
- **Nấc:** T1

**4.3 Duyệt hồ sơ & checklist thiết lập nền tảng**
- **Ai dùng:** Care, Platform Ops
- **Giải đau:** theo dõi onboarding (Shopee/TikTok/TAP) rời rạc, dễ kẹt
- **Làm gì:** duyệt hồ sơ creator; checklist thiết lập tài khoản từng nền tảng; trạng thái Done/Pending
- **Nấc:** T1

**4.4 Quản lý thanh toán & thuế + join MCN/TAP**
- **Ai dùng:** Finance/Ops
- **Giải đau:** thông tin thanh toán/mapping ID rải rác, sai sót
- **Làm gì:** quản lý CCCD/ngân hàng/thuế; theo dõi join MCN/TAP, lưu mapping Publisher ID; trạng thái Verified/Yes
- **Nấc:** T1

**4.5 Onboard vào hệ thống**
- **Ai dùng:** Care/Ops
- **Giải đau:** creator được duyệt rồi nhưng chưa sẵn sàng nhận việc, không rõ trạng thái
- **Làm gì:** cấp Publisher ID, gán owner, gửi policy/guideline; chuyển lifecycle sang `Ready`
- **Nấc:** T1

---

### NHÓM 5 — Ghép việc & Theo dõi hiệu quả (creator có việc, ra số)

**5.1 Đồng bộ campaign từ các kênh**
- **Ai dùng:** hệ thống, Care
- **Giải đau:** không biết kênh nào đang có campaign gì để ghép creator
- **Làm gì:** kéo danh sách campaign từ Ambassador/MCN/TAP về (qua connector) làm "cơ hội" — *không tạo/quản lý campaign*
- **Nấc:** T3 (phụ thuộc connector)

**5.2 Ghép creator ↔ campaign**
- **Ai dùng:** Care, Quản lý vận hành
- **Giải đau:** không biết creator nào hợp campaign nào, ai đang rảnh
- **Làm gì:** lọc/gợi ý creator phù hợp cho một campaign (theo nền tảng, ngành, hạng, tải); lên danh sách mời
- **Nấc:** T3

**5.3 Invite & theo dõi tham gia**
- **Ai dùng:** Care
- **Giải đau:** mời creator vào campaign thủ công, không theo dõi được ai đã vào
- **Làm gì:** đưa creator vào campaign (nhiều cách: đẩy API / creator tự join / Care làm tay) và theo dõi trạng thái tham gia
- **Nấc:** T3

**5.4 Giao deal/guideline + theo dõi sample**
- **Ai dùng:** Care
- **Giải đau:** giao việc bán hàng cho creator thủ công, rời rạc
- **Làm gì:** gửi sản phẩm nên bán/voucher/guideline; theo dõi trạng thái gửi sample
- **Nấc:** T2 (điểm chạm campaign — Care làm)

**5.5 Đồng bộ hiệu suất đa nguồn**
- **Ai dùng:** Data, Quản lý vận hành
- **Giải đau:** gom số liệu (view/đơn/GMV/hoa hồng) từ nhiều nền tảng bằng tay
- **Làm gì:** kéo hiệu suất creator từ Shopee/TikTok/TAP/Meta/AT về một chỗ
- **Nấc:** T3 (tích hợp nền tảng — phần nặng nhất)

---

### NHÓM 6 — Chăm sóc thông minh & Nâng hạng (giữ và phát triển)

**6.1 Cảnh báo sớm (creator nguội / trễ / sai)**
- **Ai dùng:** Care, Quản lý vận hành
- **Giải đau:** biết creator nguội/rời khi đã quá muộn
- **Làm gì:** hệ thống tự phát hiện creator ngừng hoạt động, trễ cam kết, sai policy → cảnh báo
- **Nấc:** T2

**6.2 Gợi ý hành động chăm sóc (Care Action)**
- **Ai dùng:** Care
- **Giải đau:** biết creator có vấn đề nhưng không biết nên làm gì
- **Làm gì:** hệ thống **gợi ý** hành động (Scale/Support/Optimize/Reactivate/Pause) dựa trên tình trạng + hiệu suất
- **Nấc:** T2

**6.3 Đối soát hoa hồng & xác nhận hạng VIP chính thức**
- **Ai dùng:** Finance, Quản lý vận hành
- **Giải đau:** đối soát thủ công; xác nhận VIP theo cảm tính
- **Làm gì:** đối soát hoa hồng/thưởng theo đơn hợp lệ; cập nhật tier chính thức theo hiệu suất thực
- **Nấc:** T2 (đối soát) / T3 (cần data đa nguồn)

**6.4 Bảng KPI sức khỏe pool + theo từng Care**
- **Ai dùng:** Quản lý vận hành
- **Giải đau:** không đo được đội Care làm tốt tới đâu; phải họp để biết tình hình
- **Làm gì:** dashboard sức khỏe pool (% có owner, retention, active rate, độ phủ chăm sóc) + năng suất từng Care
- **Nấc:** T2

**6.5 Kế hoạch giữ chân & rà soát hạng định kỳ**
- **Ai dùng:** Quản lý vận hành
- **Giải đau:** creator giá trị bị đối thủ kéo; hạng không cập nhật
- **Làm gì:** lập kế hoạch giữ chân creator giá trị; rà soát lên/xuống hạng định kỳ
- **Nấc:** T2

---

### NHÓM 7 — Trí tuệ Creator (dài hạn)

**7.1 Dự đoán creator sắp rời (churn)**
- **Ai dùng:** Quản lý vận hành, Care
- **Giải đau:** chỉ biết creator rời khi đã rời
- **Làm gì:** mô hình dự đoán creator có nguy cơ rời → cảnh báo *trước* để cứu
- **Nấc:** T4

**7.2 Điểm ghép thông minh (Match Score)**
- **Ai dùng:** Care, Quản lý vận hành
- **Giải đau:** ghép creator↔campaign vẫn dựa kinh nghiệm
- **Làm gì:** chấm điểm độ phù hợp creator–campaign dựa lịch sử kết quả → gợi ý ghép sinh lời nhất
- **Nấc:** T4

**7.3 Gợi ý hành động kế tiếp (Next Best Action)**
- **Ai dùng:** Care
- **Làm gì:** với mỗi creator, hệ thống gợi ý việc nên làm tiếp theo để tối đa giá trị
- **Nấc:** T4

---

## B. Lát cắt GĐ1 — "đủ móng + giải được đau"

> Tiêu chí cắt (đã bỏ ràng buộc thời gian — để team estimate riêng): **(1) Đủ móng** — có thứ này thì creator đi hết hành trình, không rơi, không thiếu mảnh bắt buộc. **(2) Giải đau** — chạm nỗi đau thật của Quản lý vận hành & Care (hai vai ưu tiên). **(3) AT đã chốt phạm vi** — gồm connector Ambassador + tích hợp Zalo OA, không gồm thanh toán/EKYC.

### GĐ1 GỒM — 23 module chia 3 cụm

**🔵 Cụm M0 — Nền tảng hạ tầng (6 module)** *— lõi của lõi, không cắt được*

| Module | Vì sao bắt buộc |
|---|---|
| M0.1 Authentication + Session | Móng — không đăng nhập thì không dùng được |
| M0.2 Phân quyền chi tiết (RBAC) | Móng — 6 vai dùng chung hệ thống |
| M0.3 Audit log + monitoring | Móng — kiểm soát thay đổi, phát hiện sự cố |
| M0.4 Notification system | Móng — A7 SLA, B2 follow-up, B5 Zalo dùng chung |
| M0.5 File/asset storage | Móng — A1 avatar, A5 đính kèm, B5 ảnh chat |
| M0.6 Tích hợp dịch vụ hạ tầng | Móng — Email/Backup/Error tracking |

**🟢 Cụm A — Lõi nghiệp vụ (10 chức năng)** *— bắt buộc, là phần thật sự "chống rơi"*

| Chức năng | Vì sao vào GĐ1 |
|---|---|
| A1 Hồ sơ Creator 360 | Móng — không có thì không có gì để chăm |
| A2 Pool 2 chiều | Móng — định vị creator, gốc của chống rơi |
| A3 Gán owner + chống mồ côi | **Giải đau:** creator không bị bỏ rơi |
| A4 Tiếp nhận đa cửa + tag/hạng sơ bộ + migration | Móng — đưa creator vào pool, có data thật |
| A5 Két Quan hệ (Interaction Log) | **Giải đau số 1:** AM nghỉ không mất quan hệ |
| A6 Hàng đợi việc + CareTask | **Giải đau:** Care thấy việc của mình, hết chia tay |
| A7 Đồng hồ SLA + UI cấu hình | **Giải đau:** việc trễ được báo, VIP ưu tiên |
| A8 Connector Ambassador | Móng — pool có data thật ngay, không nhập tay |
| A9 Onboard hoàn tất (chuyển Ready) | Móng — creator sẵn sàng nhận việc |
| A10 Export dữ liệu (CSV) | Móng — Manager/Admin lấy dữ liệu xử lý ngoài |

**🟡 Cụm B — Nên có (7 chức năng)** *— giải đau mạnh, có thể hoãn nếu cần*

| Chức năng | Vì sao trong GĐ1 |
|---|---|
| B1 Outreach Kit | **Giải đau:** hết soạn lại tin |
| B2 Theo dõi tiếp cận + nhắc follow-up | **Giải đau:** không để creator nguội từ đầu |
| B3 Duyệt hồ sơ creator | Móng — luồng creator tự đăng ký cần duyệt |
| B4 Checklist thiết lập nền tảng | Móng — onboard Shopee/TikTok/TAP có trật tự |
| B5 Tích hợp Zalo OA | **Giải đau:** thảo luận creator trên Zalo bàn giao được |
| B6 Gửi email mẫu | Kênh phụ — giới thiệu/làm nóng |
| B7 Báo cáo sức khỏe pool | **Giải đau:** Manager hết phải họp để biết tình hình |

### GĐ1 KHÔNG GỒM (và vì sao để sau)

| Chức năng | Để giai đoạn | Lý do hoãn |
|---|---|---|
| 3.3 Chấm điểm tự động (Creator Score AI) | GĐ2 (T2) | Hạng sơ bộ thủ công đã đủ chống rơi; AI scoring là tối ưu |
| 2.5 Giao việc tự động theo tải | GĐ2 (T2) | Gán owner tay đã đủ; tự động là tối ưu |
| 6.1 Cảnh báo creator nguội + 6.2 Gợi ý Care Action | GĐ2 (T2) | Là "thông minh" — cần data tích lũy; T1 ghi việc/tương tác trước |
| 5.2 Ghép creator ↔ campaign | GĐ2-3 (T3) | Cần đa nguồn data + lịch sử kết quả |
| 5.5 Đồng bộ hiệu suất đa nguồn | GĐ3 (T3) | Phụ thuộc API các nền tảng Shopee/TikTok/TAP/Meta — ẩn số lớn |
| 6.3 Đối soát hoa hồng + xác nhận VIP chính thức | GĐ2 | Cần hiệu suất đa nguồn (T3) làm đầu vào |
| Thanh toán/thuế + EKYC + ký HĐ điện tử | Ngoài GĐ1 | AT đã chốt: dùng module có sẵn của core AT |
| 7.x Trí tuệ creator (churn/match/NBA) | GĐ4 (T4) | Lớp dự đoán — cần dữ liệu dài hạn |

### Kiểm tra "đủ móng" — creator đi hết hành trình ở GĐ1 không?

Lead vào (A4) → tag + hạng sơ bộ (A4) → vào pool có owner (A2, A3) → Connector Ambassador kéo data thật về (A8) → Care tiếp cận qua Outreach Kit (B1, B2) và **Zalo OA bàn giao được** (B5) → duyệt hồ sơ + thiết lập kênh (B3, B4) → onboard hoàn tất, chuyển Ready (A9) → Care chăm sóc qua hàng đợi (A6) + việc CareTask (A6) + ghi tương tác Két Quan hệ (A5), tất cả có SLA (A7) → Manager nhìn sức khỏe pool qua dashboard (B7) và export khi cần (A10).

→ ✅ Creator đi trọn từ lead đến Ready và được chăm sóc đầy đủ. **Không rơi, không thiếu mảnh bắt buộc.** Cái chưa có (ghép campaign, hiệu suất đa nguồn, gợi ý thông minh, dự đoán churn) là *tối ưu*, không phải *móng*.

---

## C. GĐ1 giải đau cho ai — bảng nghiệm trước/sau

### Vai 1 — Quản lý vận hành creator

| Trước GĐ1 (Excel) | Sau GĐ1 |
|---|---|
| Chia việc tay cho từng Care | Care tự thấy hàng đợi của mình (A6) |
| AM nghỉ → mất quan hệ creator | Quan hệ đi theo creator, bàn giao được (A5) |
| Không biết creator nào bị bỏ rơi | Báo ngay creator giá trị chưa có owner (A3) |
| Việc trễ hạn biết khi đã muộn | SLA tự báo đỏ, đẩy lên đầu (A7) |
| Phải mở nhiều file hiểu 1 creator | Một hồ sơ 360 (A1) |
| Phải họp để biết tình hình pool | Dashboard sức khỏe pool (B7) |

### Vai 2 — Creator Care (người dùng hằng ngày)

| Trước GĐ1 | Sau GĐ1 |
|---|---|
| Sáng mở lên không biết làm gì trước | Hàng đợi việc theo ưu tiên (A6) |
| Soạn lại tin tiếp cận mỗi lần | Outreach Kit lưu sẵn (B1) |
| Liên hệ xong quên follow-up | Hệ thống nhắc theo SLA (B2) |
| Onboard creator rối, kẹt ở nền tảng | Checklist thiết lập rõ ràng (B3, B4) |
| Ghi chú creator rải rác, mất khi đổi người | Két Quan hệ lưu tất cả (A5) |
| Thảo luận Zalo riêng, mất khi đổi người | Zalo OA log vào hệ thống (B5) |

> **Còn thiếu cho ai (thành thật):** GĐ1 **chưa** cho Quản lý câu trả lời về *kết quả kinh doanh* (doanh số creator) — cái đó cần hiệu suất đa nguồn (T3) + cảnh báo/gợi ý (T2). GĐ1 giải đau **vận hành**, chưa giải đau **kết quả**. Đây là lý do GĐ2 (cảnh báo nguội + KPI nâng cao) nên nối tiếp sớm.
