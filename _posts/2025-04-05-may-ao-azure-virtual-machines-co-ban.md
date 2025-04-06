---
layout: post
title: "Máy ảo Azure (Virtual Machines) - Khái niệm cơ bản"
date: 2025-04-05 11:15:00 +0700
categories: [cloud, microsoft]
---

Một trong những dịch vụ nền tảng và được sử dụng nhiều nhất trên Azure chính là **Azure Virtual Machines (VMs)**. Đây là một dịch vụ thuộc nhóm IaaS (Infrastructure as a Service).

**Azure VM là gì?**

Hiểu đơn giản, Azure VM cho phép bạn tạo và sử dụng các máy ảo (máy tính ảo) trên nền tảng đám mây của Microsoft. Bạn có toàn quyền kiểm soát hệ điều hành, cài đặt phần mềm và cấu hình như một máy chủ vật lý thông thường.

**Khi nào nên dùng Azure VM?**

* Di chuyển ứng dụng từ máy chủ vật lý lên đám mây (Lift-and-shift).
* Chạy các ứng dụng đòi hỏi quyền kiểm soát hệ điều hành đầy đủ.
* Môi trường phát triển và kiểm thử (Dev/Test).
* Chạy các máy chủ cơ sở dữ liệu, máy chủ web, domain controller...

**Các yếu tố chính khi tạo VM:**

* **Hệ điều hành:** Windows Server, Linux (nhiều bản phân phối như Ubuntu, CentOS...).
* **Kích thước (Size):** Xác định số lượng CPU, RAM, dung lượng lưu trữ tạm thời (khác với đĩa dữ liệu). Có rất nhiều loại kích thước phù hợp với các nhu cầu khác nhau (đa dụng, tối ưu CPU, tối ưu bộ nhớ...).
* **Khu vực (Region):** Chọn trung tâm dữ liệu (datacenter) nơi VM sẽ được đặt, ảnh hưởng đến độ trễ và tuân thủ dữ liệu.
* **Lưu trữ (Storage):** Chọn loại đĩa cho hệ điều hành và dữ liệu (HDD, Standard SSD, Premium SSD).
* **Mạng (Networking):** Cấu hình mạng ảo (VNet), địa chỉ IP, nhóm bảo mật mạng (NSG)...

Việc tạo một máy ảo Azure có thể được thực hiện dễ dàng thông qua Azure Portal, Azure CLI hoặc PowerShell. Đây là bước khởi đầu tuyệt vời để làm quen với hạ tầng đám mây.
--------------
**Henry Blog 365**
