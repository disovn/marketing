const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

/**
 * ĐƯỜNG DẪN ĐÃ GỠ VĨNH VIỄN — trả 410 Gone.
 *
 * Phải đặt TRƯỚC express.static và trước catch-all, nếu không catch-all sẽ
 * nuốt mất: nó trả index.html kèm mã 200 cho mọi đường dẫn lạ, nghĩa là URL
 * đã xoá vẫn "sống" trong chỉ mục của máy tìm kiếm và của các mô hình ngôn ngữ.
 *
 * Vì sao 410 chứ không 404 hay chuyển hướng:
 *   410 = đã gỡ có chủ đích, đừng quay lại. Máy tìm kiếm loại khỏi chỉ mục
 *         nhanh hơn hẳn so với 404 (404 được hiểu là "có thể tạm thời").
 *   301 = giữ trang sống dưới một địa chỉ khác — KHÔNG dùng ở đây, vì mục đích
 *         là làm nội dung đó biến mất, không phải chuyển nó đi chỗ khác.
 *
 * /features/ambassador — gỡ 20/08/2026. Trang này đặt tên sản phẩm là
 * "Diso Ambassador", trong khi quyền tác giả với Sản phẩm tạo ra theo hợp đồng
 * Diso và Interspace Việt Nam đã được chuyển nhượng cho phía Interspace
 * (Điều 3 khoản 3 hợp đồng phát triển và vận hành phần mềm).
 */
const DA_GO = ['/features/ambassador'];

app.use((req, res, next) => {
  const duongDan = req.path.replace(/\/+$/, '') || '/';
  if (DA_GO.includes(duongDan)) {
    return res
      .status(410)
      .type('html')
      .send(
        '<!doctype html><html lang="vi"><head><meta charset="utf-8">' +
          '<meta name="robots" content="noindex">' +
          '<title>Trang đã gỡ</title></head><body>' +
          '<h1>Trang này đã được gỡ</h1>' +
          '<p>Nội dung tại địa chỉ này không còn nữa và sẽ không quay lại.</p>' +
          '<p><a href="/">Về trang chủ</a></p>' +
          '</body></html>',
      );
  }
  next();
});

/**
 * Serve static files từ thư mục statistic
 * Bao gồm HTML, CSS, JS, images, favicon...
 */
app.use(express.static(path.join(__dirname, 'statistic')));

/**
 * Catch-all: serve index.html for directory-like paths
 * Handles paths like /csplatform, /csplatform/, etc.
 */
app.get('*', (req, res) => {
  const reqPath = req.path.replace(/\/$/, '') || '/';
  const filePath = path.join(__dirname, 'statistic', reqPath);
  const indexPath = path.join(filePath, 'index.html');
  const htmlPath = filePath + '.html';

  // Try: directory/index.html, then path.html, then root index.html
  res.sendFile(indexPath, (err) => {
    if (err) {
      res.sendFile(htmlPath, (err2) => {
        if (err2) {
          res.sendFile(path.join(__dirname, 'statistic', 'index.html'));
        }
      });
    }
  });
});

/**
 * Khởi động server
 */
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
