---
layout: post
title: "Mẹo Linux: Tìm kiếm nội dung file nhanh với grep"
date: 2025-04-07 11:30:00 +0700
categories: [linux, tips] # Category: Linux, Tips
tags: [linux, command-line, grep, search, tips, text-processing]
---

Khi làm việc trên Linux, việc tìm kiếm một đoạn văn bản cụ thể bên trong các file là tác vụ rất thường xuyên. Công cụ dòng lệnh `grep` là trợ thủ đắc lực cho việc này.

Dưới đây là một vài cách dùng `grep` cơ bản và hữu ích:

1.  **Tìm kiếm cơ bản:** Tìm một chuỗi trong một file.
    ```bash
    grep "chuoi_can_tim" ten_file.txt
    ```

2.  **Tìm kiếm không phân biệt hoa/thường (`-i`):**
    ```bash
    grep -i "SearchString" logfile.log
    ```

3.  **Tìm kiếm trong tất cả file của thư mục hiện tại:**
    ```bash
    grep "my_variable" *
    ```
    *(Lưu ý: Dấu `*` có thể bao gồm cả thư mục con, gây lỗi. Dùng các cách dưới an toàn hơn).*

4.  **Tìm kiếm đệ quy trong thư mục con (`-r` hoặc `-R`):** Tìm chuỗi trong tất cả file thuộc thư mục hiện tại và các thư mục con của nó.
    ```bash
    grep -r "api_key" .
    ```
    *(Dấu `.` đại diện cho thư mục hiện tại).*

5.  **Chỉ hiển thị tên file chứa chuỗi (`-l`):** Rất hữu ích khi bạn chỉ cần biết file nào chứa thông tin cần tìm.
    ```bash
    grep -rl "config_value" /etc/
    ```

6.  **Hiển thị số dòng xung quanh kết quả (`-C`, `-B`, `-A`):**
    * `-C n`: Hiển thị `n` dòng ngữ cảnh trước và sau dòng khớp. Ví dụ: `grep -C 2 "error" system.log`
    * `-B n`: Hiển thị `n` dòng *trước* dòng khớp.
    * `-A n`: Hiển thị `n` dòng *sau* dòng khớp.

`grep` là một công cụ rất mạnh mẽ với nhiều tùy chọn khác. Nắm vững các cách dùng cơ bản này sẽ giúp bạn xử lý công việc trên Linux hiệu quả hơn rất nhiều.

---------------------
Henry Blog 365