# OpsHub — Operations Platform cho đội vận hành review nội dung

**Từ:** DISO
**Dành cho:** MCN / Agency quản lý creator — đơn vị cần duyệt nội dung số lượng lớn
**Cập nhật:** 2026-05-20

---

Kính gửi anh/chị,

Khi một MCN hay agency phát triển, số lượng creator và nội dung cần kiểm duyệt tăng theo cấp số nhân — nhưng đội ngũ vận hành thì không thể tăng tương ứng. Đến một ngưỡng, mọi thứ bắt đầu vỡ: nội dung tồn đọng, chất lượng duyệt không đồng đều, không ai biết ca nào đang quá tải, và quản lý phải họp liên tục chỉ để nắm tình hình.

DISO đã đi qua đúng giai đoạn đó. **OpsHub** là hệ thống chúng tôi xây để tự cứu mình khi sản lượng review nhảy từ một nghìn lên gần ba mươi nghìn video một tháng. Tài liệu này giới thiệu OpsHub — và hai cách anh/chị có thể dùng nó.

Trân trọng,
**DISO**

---

## 1. OpsHub là gì

OpsHub **không phải một công cụ duyệt video.** Đó là một **nền tảng vận hành** — điều phối con người, quy trình, và tự động hoá để một đội nhỏ xử lý khối lượng công việc lớn mà vẫn giữ chất lượng.

Duyệt nội dung là use-case đầu tiên OpsHub giải — và đã chứng minh ở quy mô production. Nhưng phần lõi của nó là quản lý vận hành: chia việc, phân ca, giám sát, cảnh báo sớm, tự kiểm tra chất lượng.

---

## 2. Bài toán OpsHub giải

Khi đội review còn nhỏ, Excel và Zalo là đủ. Nhưng khi quy mô tăng:

- **Khối lượng vượt sức người** — số nội dung cần duyệt tăng nhanh hơn tốc độ tuyển và đào tạo nhân sự.
- **Chất lượng không đồng đều** — mỗi người duyệt một kiểu, không có chuẩn chung, khó kiểm soát.
- **Vận hành trở nên "mù"** — không biết ai đang quá tải, khâu nào đang tắc, có bao nhiêu việc sắp trễ hạn.
- **Quản lý phải họp liên tục** — chỉ để nắm tình hình mà lẽ ra hệ thống nên tự hiển thị.

---

## 3. Năm trụ năng lực

Mỗi năng lực dưới đây đang chạy thật trong production, không phải tính năng trên giấy.

### Trụ 1 — Điều phối nhân sự: theo dự án và theo ca

- **Phân theo dự án / đối tác** — mỗi nhân sự được gán vào dự án cụ thể; chỉ thấy và chỉ nhận việc thuộc dự án mình phụ trách. Phân quyền theo vai trò (Admin / Manager / Reviewer).
- **Phân ca làm việc** — ca sáng / chiều / tối với khung giờ cấu hình được. Cho phép điều chỉnh giờ ca linh hoạt, đánh dấu ca nghỉ (ví dụ nghỉ lễ).
- **Giao việc tự động** — hệ thống tự phân việc cho người ít tải nhất trong đúng dự án, không cần quản lý chia tay.

### Trụ 2 — Tự động hoá việc lặp lại

- **Pipeline 3 tầng:** Auto (quy tắc) → AI (phân tích nội dung) → Người.
- Việc nào máy làm được, máy làm trước. Người chỉ xử lý phần thực sự cần phán đoán của con người.
- Một nội dung được chuẩn hoá thành nhiều bước kiểm nhỏ — phần lớn tự động, chỉ phần khó đẩy lên người.

### Trụ 3 — Giám sát hiệu quả: realtime, theo ca, và tổng thể

- **Realtime:** số việc đang chờ, đang xử lý, hàng đợi sâu bao nhiêu.
- **Theo ca:** sản lượng, tốc độ xử lý, tỷ lệ đúng hạn, năng suất từng người trong từng ca — so sánh được giữa các ca.
- **Tổng thể:** tỷ lệ tự động hoá, thời gian xử lý trung bình, bảng xếp hạng người làm, xu hướng chất lượng theo thời gian.
- Báo cáo sức khoẻ ca tự gửi định kỳ — quản lý không phải hỏi.

### Trụ 4 — Cảnh báo sớm khi vận hành có vấn đề

- **Sắp trễ hạn / đã trễ hạn:** hệ thống tự phát hiện việc sắp vượt SLA, nâng mức ưu tiên, cảnh báo.
- **Người làm bị treo:** phát hiện việc bị giữ quá lâu không xử lý (người làm offline / kẹt) → tự trả việc về hàng đợi.
- **Ca quá tải:** tính toán xem hàng đợi có kịp giải phóng trong ca không; nếu không kịp → cảnh báo sớm (mức Theo sát / Quá tải) để quản lý kịp bổ sung người hoặc điều phối.


### Trụ 5 — Tự kiểm tra chất lượng (Verdict Review)

- Nội dung có rủi ro duyệt sai cao được tự tạo thành một task kiểm tra chéo, gửi cho người duyệt khác (không phải người đã duyệt ban đầu).
- Người kiểm tra xác nhận đồng ý / không đồng ý, ghi rõ lý do nếu không đồng ý.
- **Đo được chất lượng từng người duyệt** — qua tỷ lệ bị kiểm tra chéo không đồng ý, quản lý biết ngay ai đang làm tốt, ai cần kèm cặp thêm, ai sai ở dạng lỗi nào (bỏ sót brand safety, sai nội dung, sai checklist...).
- Kết quả tổng hợp để đánh giá cả AI lẫn người — cái nào chưa tốt được mang ra cải tiến.
- Toàn bộ có lưu vết kiểm tra (audit trail).

---

## 4. Bằng chứng — đang chạy production

- **Nhân sự review:** từ khoảng 10 người xuống còn 3 người.
- **Sản lượng:** từ 10.000 lên 50.000 video xử lý, không cần thêm người.
- **Quy mô vận hành:** một quản lý bán thời gian giám sát được đội chạy 3 ca, từ 8h sáng đến 21h tối — mà không cần họp hành nhiều.
- OpsHub đang phục vụ nhiều dự án song song.

> Con số quan trọng nhất không phải tốc độ AI — mà là việc **chuẩn hoá toàn bộ quy trình và đưa lên hệ thống**: tuyển người mới không phải đào tạo nhiều, chất lượng không phụ thuộc cá nhân, quản lý nhìn một chỗ là nắm toàn cục.

---

## 5. Hai cách anh/chị có thể dùng OpsHub

**Cách 1 — Dùng OpsHub cho đội vận hành của anh/chị**
Đưa đội review nội dung hiện tại lên OpsHub: phân dự án, phân ca, tự động hoá phần lặp lại, giám sát và cảnh báo sớm. Phù hợp khi anh/chị đang vận hành đội duyệt content và muốn tăng quy mô mà không tăng người.

**Cách 2 — Xây một hệ vận hành riêng theo tay nghề này**
Nếu bài toán của anh/chị không phải duyệt content mà là một loại vận hành khác (chăm sóc creator, xử lý đơn, kiểm duyệt hồ sơ...), DISO có thể xây một hệ thống riêng cho domain đó — dựa trên cùng tay nghề đã chứng minh ở OpsHub. (Ví dụ: hệ thống vận hành creator chúng tôi đang xây cho một đối tác.)

---

## 6. Bước tiếp theo

Nếu anh/chị thấy bài toán này quen thuộc, DISO sẵn sàng:
- Trình bày demo OpsHub trên dữ liệu thực
- Cùng phân tích quy trình vận hành hiện tại của anh/chị để đánh giá mức phù hợp

Liên hệ DISO để sắp xếp một buổi trao đổi.

---

