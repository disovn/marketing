# Diso Commerce Suite — Bản Mô tả Giải pháp

> **LOẠI TÀI LIỆU:** Bản đóng gói sẵn (generic) cho Diso Commerce Suite — Lớp 1 trong mô hình 3 lớp tài liệu của playbook.
> **CÁCH DÙNG:**
> - Đây là **bản mẫu**, không phải bản cho một khách cụ thể. Khi có khách thật, sao chép thành `<ten-khach>-solution-concept.md` và cá nhân hoá phần đánh dấu 🖊️.
> - Dùng ở **bước B0** — sau khi khách đã xác nhận có bài toán (qua Cửa Vào của playbook).
> - **KHÔNG có giá, không có giờ dev.** Giá nằm trong Commercial Proposal (Lớp 2).
> - 🖊️ = phần BẮT BUỘC viết tay riêng cho từng khách. Phần còn lại dùng chung được.
> - Trước khi gửi khách: xoá toàn bộ khối trích dẫn hướng dẫn này.
> **Phiên bản:** v1.0 — 2026-05-18

---

# Diso Commerce Suite — Bản Mô tả Giải pháp

**Gửi:** 🖊️ [Tên khách hàng] — [người nhận / phòng ban]
**Từ:** DISO
**Ngày:** 🖊️ [DD/MM/YYYY]

---

Kính gửi anh/chị,

Sau buổi trao đổi vừa qua, DISO xin gửi anh/chị bản mô tả chi tiết giải pháp **Diso Commerce Suite** — hệ thống kinh doanh thương mại điện tử mà chúng tôi đề xuất xây dựng cho 🖊️ [tên khách].

🖊️ _[1-2 câu thể hiện DISO hiểu bài toán của chính khách này — viết từ problem statement đã chốt ở bước Discovery. Nói về khách, không nói về DISO. Ví dụ: "Doanh nghiệp của anh/chị đang có doanh thu tốt trên sàn, nhưng phần lớn lợi nhuận bị phí sàn bào mòn, và toàn bộ dữ liệu khách hàng — tài sản quan trọng nhất — lại không nằm trong tay anh/chị."]_

Tài liệu này mô tả đầy đủ những gì 🖊️ [tên khách] sẽ nhận được. **Đây chưa phải hợp đồng và chưa bàn đến chi phí** — chúng tôi mong anh/chị đọc, đối chiếu với nhu cầu thực tế, và cho chúng tôi biết phạm vi này đã đúng chưa. Phần cuối tài liệu có một bảng ngắn để anh/chị tiện phản hồi từng điểm.

Khi phạm vi được hai bên thống nhất, DISO sẽ chuẩn bị đề xuất triển khai chi tiết — lộ trình, mốc bàn giao và mô hình hợp tác.

Trân trọng,
**DISO**

---

## 1. Bài toán

Phần lớn doanh nghiệp Việt Nam bán hàng online hiện nay đều đang đối mặt với cùng một nhóm vấn đề — bất kể ngành hàng:

- **Phụ thuộc sàn, lợi nhuận bị bào mòn.** Doanh thu tốt trên Shopee/TikTok Shop, nhưng phí sàn, phí quảng cáo và voucher đối ứng ăn vào một phần lớn lợi nhuận. Khi sàn đổi thuật toán hoặc tăng phí, doanh nghiệp không có cách nào kiểm soát.
- **Không sở hữu dữ liệu khách hàng.** Khách mua trên sàn là khách của sàn. Doanh nghiệp không lấy được thông tin để bán lại lần sau, không xây được quan hệ dài hạn.
- **Vận hành rối khi quy mô tăng.** Đơn hàng nhiều lên, đối soát thủ công sai sót, tính hoa hồng nhầm. Excel không chịu nổi khi vượt 100 đơn/ngày.
- **Khó mở rộng kênh bán.** Muốn xây đội cộng tác viên, đại lý, KOC — nhưng không có hệ thống để quản lý, đo lường và chi trả minh bạch.

🖊️ _[Viết lại đoạn này theo problem statement cụ thể của khách — giữ những điểm đúng với khách, bỏ những điểm không liên quan, bổ sung con số thật của khách nếu đã có ở bước Discovery.]_

Diso Commerce Suite giải quyết đúng nhóm vấn đề này — bằng cách trao cho doanh nghiệp một hệ thống thương mại điện tử **của riêng mình**: kênh bán riêng, dữ liệu riêng, đội ngũ bán hàng riêng.

---

## 2. Giải pháp — tổng quan

Diso Commerce Suite là **một nền tảng kinh doanh thương mại điện tử trọn bộ** — gồm 7 module phối hợp với nhau, do DISO triển khai và đồng hành vận hành.

Nguyên tắc thiết kế:

- **Mua từng phần hoặc trọn bộ.** Doanh nghiệp bắt đầu từ phần cấp thiết nhất, mở rộng các module khác khi sẵn sàng — không phải đầu tư tất cả một lúc.
- **Một nguồn dữ liệu chung.** Đơn hàng, khách hàng, hiệu suất từ mọi kênh hội tụ về một nơi — không phân mảnh, không nhập liệu lại.
- **Thương hiệu của doanh nghiệp, không phải của DISO.** Website, ứng dụng, giao diện đều mang nhận diện riêng của khách (white-label).
- **Triển khai nhanh, đồng hành vận hành.** DISO xây dựng, vận hành cùng trong giai đoạn nghiệm thu, và bàn giao cho doanh nghiệp.

---

## 3. [Tên khách] nhận được gì — 7 module

7 module của Commerce Suite chia thành 3 nhóm, theo vai trò trong hoạt động kinh doanh. Dưới đây mô tả theo **kết quả doanh nghiệp nhận được**.

🖊️ _[Khi cá nhân hoá: chỉ giữ những module NẰM TRONG phạm vi đã thống nhất với khách. Bỏ phần module ngoài phạm vi — chúng sẽ xuất hiện ở mục 4 (lộ trình) như giai đoạn sau.]_

### Nhóm A — Kênh bán: "Có chỗ bán hàng"

**1. Diso Storefront — Website thương mại điện tử thương hiệu riêng**
Doanh nghiệp có một website bán hàng chuyên nghiệp, domain riêng, giao diện mang nhận diện thương hiệu của mình. Quản lý sản phẩm, giỏ hàng, thanh toán đa kênh (COD, VNPay, Momo, ZaloPay), mã giảm giá, flash sale — tất cả tự vận hành được, không cần biết code. Tối ưu cho điện thoại, chuẩn SEO để khách tìm thấy trên Google.

**2. Diso ZaloApp — Bán hàng ngay trong Zalo**
Một Mini App native trong Zalo — kênh nơi 75 triệu người Việt đang ở mỗi ngày. Khách mua hàng không cần tải app. Đồng bộ sản phẩm và đơn hàng với website theo thời gian thực. Gửi thông báo qua Zalo OA, tích thẻ thành viên, thanh toán ngay trong app.

### Nhóm B — Đội ngũ bán: "Có người bán hàng"

**3. Diso Affiliate — Mạng lưới cộng tác viên kéo khách**
Biến blogger, KOL, và bất kỳ ai có mạng xã hội thành kênh bán hàng — chỉ trả hoa hồng khi có đơn. Hệ thống theo dõi chính xác ai mang khách về, bao nhiêu click, bao nhiêu đơn. Cấu hình hoa hồng linh hoạt, có công cụ chống gian lận click/đơn ảo.

**4. Diso Reseller — Mạng lưới đại lý bán hàng**
Mỗi đại lý có một "gian hàng" riêng trên nền tảng. Doanh nghiệp quản lý tập trung, đại lý tự bán. Hệ thống phân hạng, hoa hồng đa cấp, bảng xếp hạng và nhiệm vụ — giúp đội ngũ tự phát triển mà doanh nghiệp không tốn lương cứng.

**5. Diso Ambassador — Chương trình đại sứ thương hiệu**
Quản lý content marketing trên 7 nền tảng (TikTok, YouTube, Facebook, Instagram, Threads, Shopee, Google). Đại sứ đăng nội dung, hệ thống tự thu thập lượt xem, tương tác, đo hiệu quả từng người. Chống gian lận fake views/followers. Thưởng theo hiệu quả thực tế — content marketing đo lường được từng đồng.

### Nhóm C — Nền tảng vận hành: "Chạy trơn tru"

**6. Diso Operations — Trung tâm vận hành & đối soát**
Quản lý đơn hàng tập trung từ mọi kênh (sàn, web, Zalo). Tích hợp sẵn các đơn vị vận chuyển — tạo vận đơn một lần bấm. Quản lý tồn kho theo thời gian thực. **Đối soát tự động 4 dòng tiền**: đơn hàng, hoa hồng affiliate, hoa hồng reseller, thưởng đại sứ — và chi trả tự động qua ngân hàng.

**7. Diso CRM — Quản trị khách hàng & giữ chân**
Mỗi khách hàng có một hồ sơ 360°: lịch sử mua, hành vi, kênh tiếp cận. Phân khúc khách, tự động hoá chăm sóc (email/SMS/Zalo), chương trình loyalty. Biến khách cũ — tài sản quý nhất — thành nguồn doanh thu lặp lại, thay vì để rơi vào tay sàn.

---

## 4. Lộ trình — Commerce Suite trong bức tranh dài hạn

Diso Commerce Suite không phải một dự án triển khai một lần. Đây là **lộ trình từng giai đoạn** — doanh nghiệp bắt đầu từ phần cấp thiết, mở rộng khi sẵn sàng.

| Giai đoạn | Nội dung | Trạng thái |
|---|---|---|
| **Giai đoạn 1 — Nền móng** | Website thương hiệu riêng + vận hành & đối soát + CRM cơ bản. Có kênh bán riêng và đơn hàng đầu tiên không qua sàn. | 🖊️ Phạm vi đề xuất lần này _(điều chỉnh theo deal)_ |
| **Giai đoạn 2 — Kênh & đội ngũ bán** | Bổ sung ZaloApp + Affiliate. Mở rộng traffic ngoài sàn, xây đội cộng tác viên. | Giai đoạn sau |
| **Giai đoạn 3 — Mở rộng quy mô** | Bổ sung Reseller + Ambassador. Đội ngũ bán hàng và content marketing quy mô lớn. | Giai đoạn sau |
| **Giai đoạn 4 — Nền tảng vững chắc** | Đầy đủ 7 module, CRM nâng cao, kênh riêng chiếm phần lớn doanh thu — doanh nghiệp sở hữu một nền tảng thương mại, không còn là "gian hàng trên sàn". | Tầm nhìn |

**Cách đọc bảng này:** Tài liệu hiện tại mô tả và đề xuất 🖊️ **[Giai đoạn 1]**. Các giai đoạn sau được nêu để 🖊️ [tên khách] thấy hướng phát triển — sẽ bàn riêng khi giai đoạn hiện tại vận hành ổn định. DISO thiết kế kiến trúc ngay từ giai đoạn đầu để các module sau ghép vào thuận lợi.

---

## 5. Phạm vi — Trong và Ngoài

🖊️ _[Phần này PHẢI cá nhân hoá theo deal. Mẫu dưới đây giả định Giai đoạn 1 = Nền móng. Điều chỉnh theo phạm vi thực tế đã thống nhất với khách.]_

**Trong phạm vi 🖊️ [Giai đoạn 1]:**
- 🖊️ Diso Storefront — website thương mại điện tử thương hiệu riêng.
- 🖊️ Diso Operations — vận hành đơn hàng và đối soát.
- 🖊️ Diso CRM (bản cơ bản) — hồ sơ khách hàng 360° và phân khúc.
- 🖊️ Tích hợp các đơn vị vận chuyển và cổng thanh toán.

**Ngoài phạm vi 🖊️ [Giai đoạn 1] (thuộc giai đoạn sau):**
- 🖊️ Diso ZaloApp, Diso Affiliate — Giai đoạn 2.
- 🖊️ Diso Reseller, Diso Ambassador — Giai đoạn 3.
- 🖊️ CRM nâng cao (tự động hoá, dự đoán rời bỏ) — Giai đoạn sau.

> Việc nêu rõ ranh giới này bảo vệ cả hai bên: 🖊️ [tên khách] biết chính xác sẽ nhận gì, DISO cam kết đúng phần đã thống nhất. Mọi thay đổi phạm vi sẽ được hai bên trao đổi và điều chỉnh đề xuất tương ứng.

---

## 6. Vì sao là DISO

- **DISO đã triển khai hệ thống thương mại điện tử và đại sứ thương hiệu cho 17+ thương hiệu hàng đầu** — gồm các ngân hàng, tập đoàn công nghệ và brand bán lẻ lớn. Mô hình đã chạy thực tế, không phải concept.
- **DISO là công ty product, không phải gia công.** DISO sở hữu nền tảng, hiểu sâu từng module, và liên tục nâng cấp — doanh nghiệp không phụ thuộc vào một đội dev rời rạc.
- **DISO đồng hành vận hành.** DISO không chỉ bàn giao phần mềm rồi rút — DISO vận hành cùng trong giai đoạn nghiệm thu để đảm bảo hệ thống tạo ra kết quả kinh doanh thật.

DISO xây dựng hệ thống mang nhận diện thương hiệu của 🖊️ [tên khách], vận hành cùng trong giai đoạn nghiệm thu, và bàn giao khi kết thúc dự án.

🖊️ _[Tuỳ deal: nếu có module dữ liệu/intelligence cần DISO vận hành tiếp, diễn đạt theo mô hình "Own the app, subscribe the brain" — xem mục 7 của playbook-quy-trinh.md. Nếu không, bỏ phần này.]_

---

## 7. Xác nhận phạm vi

Đề nghị 🖊️ [tên khách] rà soát và phản hồi các điểm sau. Phản hồi của anh/chị là cơ sở để DISO hoàn thiện đề xuất triển khai.

| # | Nội dung cần xác nhận | Phản hồi của [tên khách] |
|---|---|---|
| 1 | Các module trong phạm vi (mục 5) có đúng nhu cầu của doanh nghiệp không? Có module nào thiếu / thừa? | |
| 2 | Phân chia Trong / Ngoài phạm vi Giai đoạn 1 có hợp lý không? | |
| 3 | 🖊️ _[Câu hỏi xác nhận ưu tiên cao nhất — viết riêng theo problem statement của khách. Ví dụ: "Việc sở hữu website riêng và dữ liệu khách hàng có đúng là ưu tiên số một không?"]_ | |
| 4 | Lộ trình các giai đoạn (mục 4) có khớp với định hướng dài hạn của doanh nghiệp không? | |
| 5 | Có ràng buộc nào (thời điểm cần go-live, tích hợp hệ thống sẵn có như ERP/kế toán) cần đưa vào ngay từ đầu không? | |

Khi phạm vi được hai bên thống nhất, DISO sẽ gửi **Đề xuất Triển khai (Commercial Proposal)** — gồm lộ trình theo mốc, mô hình hợp tác và phần thương mại.

---

## Tài liệu liên quan

- Bản trình bày giải pháp (pitch deck Commerce Suite) — đã trình bày tại buổi làm việc.
- Demo nền tảng — DISO trình diễn trực tiếp các module trong buổi gặp.

---

_Diso Sales Playbook — Commerce Suite Solution Concept (generic) v1.0 | 2026-05-18_
_Bản mẫu nội bộ. Bản gửi khách phải xoá khối hướng dẫn đầu file, cá nhân hoá mọi mục 🖊️, và xoá các đoạn hướng dẫn in nghiêng._
