--
layout: post
title: "Giới thiệu tổng quan về Microsoft Azure"
date: 2025-04-04 10:30:00 +0700
categories: [cloud, microsoft] # Gán vào cả category Cloud và Microsoft
---

Chào mừng các bạn đến với loạt bài tìm hiểu về Microsoft Azure!

**Microsoft Azure là gì?**

Microsoft Azure là một nền tảng điện toán đám mây toàn diện được cung cấp bởi Microsoft. Nó cung cấp hơn 200 sản phẩm và dịch vụ đám mây được thiết kế để giúp bạn xây dựng, chạy và quản lý các ứng dụng trên nhiều đám mây, tại chỗ và ở biên (edge).

**Các khái niệm cốt lõi:**

* **IaaS (Infrastructure as a Service):** Cung cấp hạ tầng cơ bản như máy ảo (VMs), lưu trữ (Storage), mạng (Networking). Ví dụ: Azure Virtual Machines.
* **PaaS (Platform as a Service):** Cung cấp nền tảng để phát triển, chạy và quản lý ứng dụng mà không cần lo về hạ tầng bên dưới. Ví dụ: Azure App Service, Azure SQL Database.
* **SaaS (Software as a Service):** Cung cấp phần mềm hoàn chỉnh dưới dạng dịch vụ. Ví dụ: Microsoft 365.

**Một số dịch vụ phổ biến:**

* Azure Virtual Machines (Máy ảo)
* Azure App Service (Dịch vụ ứng dụng web)
* Azure Storage (Blob, Files, Queues, Tables)
* Azure SQL Database (Cơ sở dữ liệu SQL)
* Azure Functions (Serverless compute)

Azure mang lại sự linh hoạt, khả năng mở rộng và độ tin cậy cao, giúp các tổ chức và cá nhân đổi mới nhanh chóng hơn. Trong các bài viết tiếp theo, chúng ta sẽ tìm hiểu sâu hơn về một số dịch vụ cụ thể.
Bài viết 2: Máy ảo Azure cơ bản

Tên file đề xuất: _posts/2025-04-05-may-ao-azure-virtual-machines-co-ban.md
Nội dung file:
Markdown

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
-------------
Henry Blog 365
