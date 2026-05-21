# OpsHub Capability Brief — Nguồn truy vết (NỘI BỘ)

> ⚠️ **TÀI LIỆU NỘI BỘ DISO — KHÔNG GỬI KHÁCH.**
> Mục đích: map mỗi tuyên bố trong `capability-brief.md` về code thật, để khi pitch không lỡ hứa quá. Đọc kèm `capability-brief.md`.
> **Cập nhật:** 2026-05-20 · **Codebase:** `influencer-platform/opshub`

---

## Bảng truy vết năng lực

| Năng lực (trong brief) | Trạng thái code | Vị trí |
|---|---|---|
| Phân dự án + RBAC | ✅ Có thật | `user.ts`, `project.controller.ts`, `assignment.engine.ts` |
| Phân ca (sáng/chiều/tối + override + off) | ✅ Có thật | `shift-assignment.ts`, `shift-schedule-override.ts`, `shift-off.ts` |
| Hiệu quả theo ca | ✅ Có thật | `reviewer-shift.service.ts`, `shift-health-report.service.ts` |
| Cảnh báo ca quá tải | ✅ Có thật | `reviewer-shift.service.ts:610+` (healthy/warning/critical) |
| Dashboard tổng thể | ✅ Có thật | `analytics.service.ts` |
| Cảnh báo sớm SLA / treo việc | ✅ Có thật | `sla.worker.ts`, `stale-task.worker.ts` |
| Đo chất lượng người duyệt (qua report Verdict Review) | ✅ Có thật — mức "đo được", cần xem report chủ động | `verdict-review.ts` (filter `target_reviewer_id` + `decision`) |
| Verdict Review / audit chéo | ✅ Có thật | `verdict-review.ts`, `verdict-review-generator.worker.ts` |
| Pipeline 3 tầng Auto→AI→Human | ✅ Có thật | đã khảo sát ở phần review pipeline |

## Ranh giới — đừng hứa quá khi pitch

| Tuyên bố | Được nói? |
|---|---|
| "Đo được chất lượng từng người duyệt — biết ai cần kèm" | ✅ Nói được (mức 2: đo được khi xem report) |
| "Lọc ra người bị kiểm tra chéo không đồng ý nhiều nhất" | ✅ Nói được |
| "Hệ thống **tự** cảnh báo khi reviewer tụt chất lượng theo xu hướng" | ❌ **CHƯA CÓ** — không có job so sánh xu hướng + alert. Nếu khách hỏi: "hiện đo được khi xem báo cáo; phần tự động cảnh báo nằm trong lộ trình." |
| "Phát hiện content rủi ro cao TRƯỚC khi review" | ❌ Chưa có — risk score chỉ tính sau khi complete |

## 3 mức năng lực phát hiện chất lượng (để phân biệt khi nói)

1. **Có dữ liệu** — lưu ai đúng/sai bao nhiêu → ✅ Verdict Review có
2. **Đo được khi truy vấn** — quản lý mở report lọc "reviewer X bị disagree 30%" → ✅ có
3. **Tự cảnh báo chủ động** — hệ thống tự phát hiện xu hướng tụt + bắn alert → ❌ chưa

→ OpsHub đang ở **mức 2**. Khi pitch dùng động từ "đo được / biết được", KHÔNG dùng "tự cảnh báo".
