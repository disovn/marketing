# Creator Care OS — Câu hỏi cần AccessTrade làm rõ trước khi chốt phạm vi & báo giá

**Từ:** DISO
**Gửi:** AccessTrade
**Cập nhật:** 2026-05-27
**Mục đích:** Để DISO báo giá *chính xác* (không phải khoảng rộng), cần chốt một số điểm về phạm vi và dữ liệu. Phần lớn câu hỏi dưới đây phụ thuộc phía AccessTrade — đó là lý do DISO chưa thể ra con số cuối.

---

## Vì sao cần bước này

Báo giá phần mềm có hai loại độ chính xác:
- **Khoảng rộng (±40%)** — đoán từ mô tả giá trị. Dễ hớ.
- **Sát (±15%)** — đếm từ phạm vi đã chốt.

Khoảng cách giữa hai loại nằm ở các câu hỏi dưới đây. Trả lời xong, DISO khóa được phạm vi và ra giá sát.

> Có thể trao đổi trực tiếp 30–45 phút thay vì trả lời từng câu bằng văn bản — tùy anh/chị tiện.

---

## A. Ẩn số lớn nhất — Tích hợp dữ liệu *(ảnh hưởng giá nhiều nhất)*

Creator Care OS cần kéo dữ liệu hiệu suất creator (lượt xem, đơn, doanh số, hoa hồng) từ các nền tảng. **Cách AccessTrade cho phép truy cập quyết định phần này tốn 10 giờ hay 200 giờ.**

1. **Mỗi nền tảng (Shopee Affiliate / TikTok / TAP / Meta) — AccessTrade lấy dữ liệu hiệu suất hiện bằng cách nào?**
   - Có API chính thức AccessTrade được cấp quyền? (cho xin tài liệu API)
   - Hay export file thủ công định kỳ?
   - Hay nhập tay vào Excel?
2. **Giai đoạn 1 cần tích hợp bao nhiêu nền tảng?** Có thể bắt đầu với 1 nền tảng (vd Shopee) rồi mở rộng không?
3. **Tần suất cập nhật dữ liệu cần thiết?** Realtime / hằng ngày / hằng tuần?
4. **Dữ liệu creator hiện tại đang nằm ở đâu?** (Excel/Sheet/CRM/hệ thống nội bộ) — DISO cần nhập dữ liệu cũ vào không, khối lượng bao nhiêu?

---

## B. Chốt phạm vi chức năng *(theo góp ý gần đây của AccessTrade)*

5. **Nhóm "Chiến lược Kênh" (đánh giá kênh, mục tiêu, gợi ý ngành hàng)** — anh/chị nói phần này đã có ở hồ sơ đầu vào. Vậy DISO **bỏ hẳn nhóm này**, hay giữ lại phần "gợi ý ngành hàng/sản phẩm"?
6. **"Theo dõi nội dung creator đã đăng (air video)"** — anh/chị nói nằm trong quy trình duyệt nội dung. **Cho DISO xác nhận: đây là bước duyệt/review nội dung (giống OpsHub) đúng không?** Nếu đúng, DISO bỏ phần này khỏi nhóm Campaign để tránh trùng.
7. **Campaign hiểu là "một sản phẩm, mỗi creator là một thành viên"** — cách hiểu này đúng chứ? Một creator có tham gia nhiều campaign cùng lúc không? Cần theo dõi gì ở mức campaign (KPI, hoa hồng, thời hạn)?
8. **Quy trình duyệt nội dung của AccessTrade** — AccessTrade tự làm (hoặc đã có hệ thống), hay muốn DISO làm luôn phần này trong Giai đoạn 1?

---

## C. Quy mô & vận hành *(ảnh hưởng hạ tầng + thiết kế)*

9. **Bao nhiêu nhân sự Care sẽ dùng hệ thống?** (để thiết kế phân quyền, phân việc)
10. **Khối lượng creator dự kiến?** (vài trăm / vài nghìn / chục nghìn — ảnh hưởng hạ tầng)
11. **Phân hạng creator (VIP/Thường…) theo tiêu chí cụ thể nào?** Có sẵn quy tắc chưa, hay DISO cần hỗ trợ định nghĩa?
12. **SLA hiện tại** — mỗi bước (tiếp cận, duyệt, chăm sóc) có cam kết thời gian không? Khác nhau theo hạng creator?

---

## D. Ràng buộc kỹ thuật & bàn giao

13. **Hệ thống chạy ở đâu?** Server AccessTrade hay DISO vận hành? (đã trao đổi: dữ liệu trên server AccessTrade)
14. **Có cần đăng nhập chung (SSO) với hệ thống hiện có của AccessTrade không?**
15. **Yêu cầu bảo mật / tuân thủ đặc biệt nào?** (dữ liệu cá nhân creator, CCCD, thông tin thanh toán)
16. **Khi bàn giao source code cuối dự án** — đội nào của AccessTrade sẽ tiếp nhận vận hành?

---

## Sau khi có câu trả lời

DISO sẽ:
1. Viết **Functional Spec** (đặc tả chi tiết) cho phạm vi đã chốt.
2. Từ spec → **estimate sát** (±15%).
3. Bộ phận tài chính DISO ra **bảng giá cuối**.

> Trong lúc chờ, DISO vẫn chuẩn bị sẵn bản mô tả giải pháp để anh/chị xem trước.
