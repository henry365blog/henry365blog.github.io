---
layout: post
title: "Phân biệt nhanh IaaS, PaaS và SaaS trong Cloud Computing"
date: 2025-04-07 12:15:00 +0700
categories: [cloud] # Category: Cloud
tags: [cloud-computing, iaas, paas, saas, concepts, comparison]
---

Khi tìm hiểu về điện toán đám mây (Cloud Computing), bạn sẽ thường xuyên gặp các thuật ngữ IaaS, PaaS và SaaS. Đây là ba mô hình cung cấp dịch vụ đám mây chính. Hiểu rõ sự khác biệt giúp bạn lựa chọn giải pháp phù hợp.

Hãy tưởng tượng việc làm một chiếc bánh Pizza:

1.  **IaaS (Infrastructure as a Service - Hạ tầng như một Dịch vụ):**
    * **Tương tự:** Bạn thuê người ta **lò nướng, bếp, gas, bàn ghế...** (hạ tầng cơ bản).
    * **Bạn tự làm:** Mua nguyên liệu (bột, sốt, topping...), nhào bột, làm bánh, nướng bánh, dọn dẹp.
    * **Cloud:** Nhà cung cấp chỉ cung cấp hạ tầng ảo hóa cơ bản nhất: máy ảo (VMs), lưu trữ (storage), mạng (networking). Bạn phải tự cài đặt hệ điều hành, middleware, ứng dụng, quản lý vá lỗi HĐH...
    * **Ví dụ:** Azure VMs, AWS EC2, Google Compute Engine.

2.  **PaaS (Platform as a Service - Nền tảng như một Dịch vụ):**
    * **Tương tự:** Bạn đến một cửa hàng **cho thuê chỗ làm bánh Pizza**, họ có sẵn lò nướng, bếp, gas, bàn, bột đã nhào sẵn, bạn chỉ cần **mang topping đến, tự làm và nướng bánh**.
    * **Cloud:** Nhà cung cấp quản lý hạ tầng, hệ điều hành, middleware. Bạn chỉ cần đưa code/ứng dụng của mình lên và chạy. Bạn không cần lo về việc vá lỗi HĐH hay quản lý server vật lý.
    * **Ví dụ:** Azure App Service, AWS Elastic Beanstalk, Google App Engine, Heroku.

3.  **SaaS (Software as a Service - Phần mềm như một Dịch vụ):**
    * **Tương tự:** Bạn **gọi điện đặt Pizza giao tận nhà**. Bạn không cần làm gì cả, chỉ việc ăn.
    * **Cloud:** Nhà cung cấp cung cấp một phần mềm hoàn chỉnh, chạy trên hạ tầng của họ. Bạn chỉ cần đăng ký tài khoản và sử dụng qua trình duyệt hoặc ứng dụng. Bạn không quản lý bất cứ thứ gì về hạ tầng hay nền tảng.
    * **Ví dụ:** Gmail, Microsoft 365, Salesforce, Dropbox.

**Tóm lại:** Mức độ kiểm soát và trách nhiệm quản lý của bạn giảm dần từ IaaS -> PaaS -> SaaS. Lựa chọn mô hình nào phụ thuộc vào nhu cầu về kiểm soát, linh hoạt và nguồn lực quản trị của bạn.

--------------
Henry Blog 365