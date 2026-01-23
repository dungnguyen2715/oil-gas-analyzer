# 🛢️ Oil & Gas Analyzer Management System

[cite_start]Hệ thống quản lý và tối ưu hóa vận hành tài sản, thiết bị và giàn khoan trong lĩnh vực thăm dò và khai thác dầu khí[cite: 50]. [cite_start]Dự án được thiết kế để hoạt động ổn định trong các môi trường khắc nghiệt, hỗ trợ giám sát thời gian thực và mô phỏng 3D tiên tiến[cite: 410, 496].

## 🚀 Tính năng cốt lõi

### 🔐 Quản lý Định danh & Truy cập (IAM)
* [cite_start]**RBAC (Role-Based Access Control):** Phân quyền chi tiết cho 5 nhóm Actor: Administrator, Field Supervisor, Engineer, Field Operator và Supplier Manager[cite: 56, 185].
* [cite_start]**Bảo mật đa lớp:** Chính sách khóa tài khoản sau 5 lần nhập sai, tự động đăng xuất sau 15 phút và yêu cầu đổi mật khẩu định kỳ 90 ngày[cite: 176, 183].

### 📦 Quản lý Kho & Thiết bị
* [cite_start]**Logistics thông minh:** Theo dõi nhập/xuất kho, quản lý vị trí thiết bị và cập nhật tồn kho theo thời gian thực[cite: 122, 128, 130].
* [cite_start]**Dự phòng dữ liệu:** Duy trì triple redundancy (dự phòng 3 lớp) đảm bảo an toàn thông tin tại hiện trường[cite: 483, 484].

### 🎮 Simulator 3D Service (Digital Twin)
* [cite_start]**Trực quan hóa mô hình 3D:** Hiển thị chi tiết thiết bị với khả năng tương tác xoay/zoom[cite: 411, 413].
* [cite_start]**Giám sát thời gian thực:** Dashboard theo dõi sản lượng dầu, áp suất (>120 psi) và nhiệt độ (>90°C)[cite: 183, 455, 457].
* [cite_start]**Đào tạo kịch bản:** Giả lập các tình huống khoan, ngắt khẩn cấp và bảo trì cho kỹ sư[cite: 430, 452].

## 🛠️ Đặc tính kỹ thuật (Non-Functional Requirements)

Hệ thống tuân thủ các tiêu chuẩn công nghiệp khắt khe nhất:
* [cite_start]**Offline Operation:** Lưu trữ dữ liệu quan trọng ≥72 giờ tại biên (Edge) khi mất kết nối[cite: 470, 472].
* [cite_start]**Edge Processing:** Phân tích dữ liệu và kích hoạt báo động tại chỗ không phụ thuộc vào Cloud[cite: 473, 474, 502].
* [cite_start]**Data Integrity:** Kiểm tra tính toàn vẹn bằng SHA-256 và nén telemetry ≥70% để tối ưu băng thông vệ tinh[cite: 485, 486, 488, 489].
* [cite_start]**Resilient Communication:** Tự động chuyển đổi dự phòng giữa mạng Vệ tinh, Radio (VHF/UHF) và Mesh[cite: 493, 494].
* [cite_start]**Environment Resilience:** Thiết bị hoạt động tốt trong độ ẩm 100%, nhiệt độ từ -20°C đến 50°C và chịu rung lắc 5 Grms[cite: 498, 500].

## 📁 Cấu trúc dự án (Monorepo)

```text
/apps
  ├── /frontend      # React, Three.js, TailwindCSS
  └── /backend       # Node.js,
/packages
  ├── /shared        # Định nghĩa Types & Interfaces chung
  └── /utils         # Logic SHA-256, Digital Signature
/docs                # Tài liệu SRS v1.0 & API Specs [cite: 4, 39]
/edge                # Edge Analytics & Sync Logic [cite: 470]