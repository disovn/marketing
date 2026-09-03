
II
Phát triển sản phẩm
Giai đoạn 1: Tính năng “Collaborate - Tracking - Report” được triển khai ở mức cơ bản, hỗ trợ thanh toán thông qua hệ thống của Khách hàng
Tính năng này có thể được thiết lập và đưa vào sử dụng ngay, không yêu cầu phát triển hoặc xây dựng mới.




[Publisher] Authentication
Đăng ký, Đăng nhập, Đăng xuất bằng Google, Tiktok


Hồ sơ (Profile) (Tạo, chỉnh sửa Thông tin cá nhân, avatar)


Thông số cá nhân


Liên kết tài khoản (hệ thống thông tin định danh tập trung của Bên B, tài khoản Google, Tiktok, Facebook)
[Publisher] Nội dung (Content)
Đăng ký content (submit link Youtube, Tiktok, Facebook)


Quản lý content (Xem trạng thái, hủy đăng ký)


Xếp hạng Publisher theo điểm số (số content, số chiến dịch tham gia, thông số tương tác content)


Xếp hạng content


Quản lý số dư (trạng thái chờ duyệt, được duyệt) và rút tiền (Tạo lệnh, xem trạng thái và hủy)
[Publisher] Landing
Giao diện tổng thể, header, footer, menu theo branding của Khách Hàng của Bên B


Quy tắc, hướng dẫn, Thể lệ


Thông báo
[Publisher] Ký hợp đồng thanh toán
EKYC và ký hợp đồng điện tử


Quản lý thông tin tài khoản thanh toán (bắt buộc sử dụng tài khoản Khách hàng của bên B (Techcombank), định danh tài khoản ngân hàng khi Publisher đăng ký thông tin thanh toán)
[Admin] Authentication
Đăng nhập đơn giản (email, password)
[Admin] Dashboard
Tổng quan tổng content, tổng lượt xem (view), tổng tiền ở các trạng thái 
[Admin] Content
Danh sách


Duyệt, hủy


Xem báo cáo sai phạm


Lấy thông tin content (thumbnail, tiêu đề (title), mô tả (description), nền tảng)


Lấy lượt view, comment, share


Kiểm tra link content (check link hợp lệ)


Kiểm tra nội dung content (kiểm tra bằng API của nền tảng)
[Admin] Quản lý chiến dịch
Tạo chiến dịch (thông tin và điều kiện tham gia, điều kiện tính tiền) và quản lý chiến dịch
[Admin] Publisher
Tên, hashtag cá nhân, lịch sử số dư, ngày tạo
[Admin] User
Thông tin cá nhân, thông tin thanh toán
[Admin] Thông số
Số Publisher, nội dung, lượt view, số tiền theo ngày/tháng cho từng chiến dịch
[Admin] Thanh toán
Quản lý lịch sử thanh toán
[Admin] Landing
Soạn thảo hướng dẫn, thể lệ
Server
Database


File host


Domain


Chứng chỉ bảo mật


Lưu ảnh, xử lý ảnh


Hệ thống monitor cảnh báo, gửi thông báo hệ thống
Xuất dữ liệu
Xuất dữ liệu trên admin
[Admin] Phân quyền
Phân quyền tài khoản admin
III
Phase 2: Cho phép import thông tin chiến dịch, Publisher, content từ bên ngoài để thống kê & thiết lập budget, estimate doanh thu


[Admin] Import dữ liệu
Cho phép import file dữ liệu của chiến dịch, Publisher 
Cho phép import content để cào dữ liệu
[Admin] Doanh thu
Cho phép nhập conversion rate theo chiến dịch / nhóm Publisher / cá nhân Publisher.
Hệ thống tính toán revenue estimation theo thời gian thực dựa trên lượt tương tác thực tế.
[Admin] Quản lý chiến dịch
Thiết lập ngân sách (budget cap) khi tạo chiến dịch.

Cảnh báo:

Khi tổng tiền đã thanh toán + đang chờ duyệt > 90% ngân sách.

Khi vượt budget → chặn submit content, thông báo admin ngừng chiến dịch.
IV
Phase 3: Planning - Thư viện influencers


[Publisher] Liên kết tài khoản mạng xã hội

Kết nối tài khoản trên nền tảng hoạt động
[System] Lấy thông tin kênh tự động
Số lượng follower
Số lượng content
Lượng tương tác
Nhân khẩu học: Giới tính, độ tuổi, khu vực hoạt động.
Ngành nghề & nền tảng hoạt động: Nền tảng (TikTok, Facebook, YouTube), lĩnh vực (Tài chính, Lifestyle, v.v).
[Admin] Thư viện influencer
Duyệt thông tin phân loại
Chỉnh sửa thông tin kênh
Xem danh sách influencer theo bộ lọc nhân khẩu học, nền tảng, level, ngành nghề thế mạnh
Sắp xếp Publisher theo điểm đánh giá


Chấm điểm đánh giá Publisher (weighted) theo:
Số follower
Tổng số content
Tổng số chiến dịch tham gia
Tổng số tương tác
[Publisher] Trang Chi tiết Publisher Profile
Trang thông tin Social của Publisher
- Kênh
- Số lượng follower
- Số lượng content
- Lượng tương tác
- Nhân khẩu học: Giới tính, độ tuổi, khu vực hoạt động.
- Ngành nghề & nền tảng hoạt động: Nền tảng (TikTok, Facebook, YouTube), lĩnh vực (Tài chính, Lifestyle, v.v). 
Hiển thị điểm đánh giá Publisher 

Hướng dẫn
- Hướng dẫn cách kết nối tài khoản để đồng bộ profile 
- Yêu cầu hỗ trợ nếu thông tin chưa đồng bộ chuẩn, ảnh hưởng tới việc tham gia campaign
V
Phase 4: AI tự động review và detech Video
[System] Auto scan & approval content bằng AI
Tích hợp AI scan video:
Trích xuất transcript:
- Lấy audio từ video (TikTok, YouTube, v.v) để xử lý bằng AI (ffmpeg)
- Chuyển audio thành văn bản để kiểm duyệt nội dung (OpenAI Whisper API, Google Cloud Speech-to-Text, AssemblyAI)
Đối chiếu nội dung với blacklist từ TCB (ví dụ: cấm từ, nội dung nhạy cảm).
Phân 2 luồng duyệt:
Auto Approval: Nếu vượt qua AI scan và không có cảnh báo.
Manual Review: Nếu phát hiện rủi ro hoặc AI không chắc chắn.
Note: Khi sử dụng AI kiểm duyệt sẽ có chi phí theo tháng tuỳ thuộc vào lượng content cần kiểm duyệt 






[Admin] Quản lý nội dung
Ghi log kết quả AI để vận hành kiểm tra lại.
Cho phép upload và quản lý blacklist hoặc keyword list.






Mã nguồn
(Source code)
Bàn giao source code theo mô tả bên dưới

