---
layout: post
title: "Một số câu lệnh Linux cơ bản cần biết"
date: 2025-03-21 14:00:00 +0700
categories: [linux, tips] # Gán vào cả category Linux và Tips
---

Làm việc với Linux thường gắn liền với giao diện dòng lệnh (Command Line Interface - CLI). Dưới đây là một số câu lệnh cực kỳ cơ bản và hữu ích bạn nên biết khi bắt đầu:

1.  **`pwd` (Print Working Directory):**
    * Hiển thị thư mục hiện tại bạn đang đứng trong đó.
    * Ví dụ: `pwd`

2.  **`ls` (List):**
    * Liệt kê các file và thư mục trong thư mục hiện tại.
    * `ls`: Liệt kê cơ bản.
    * `ls -l`: Hiển thị chi tiết hơn (quyền, chủ sở hữu, kích thước, ngày sửa đổi).
    * `ls -a`: Hiển thị cả các file/thư mục ẩn (bắt đầu bằng dấu `.`).
    * `ls -lh`: Kết hợp `-l` và `-h` (human-readable) để hiển thị kích thước dễ đọc hơn (KB, MB...).

3.  **`cd` (Change Directory):**
    * Thay đổi thư mục làm việc hiện tại.
    * `cd ten_thu_muc`: Đi vào thư mục con `ten_thu_muc`.
    * `cd ..`: Đi lên thư mục cha.
    * `cd ~` hoặc `cd`: Đi về thư mục nhà (home directory) của người dùng hiện tại.
    * `cd /`: Đi về thư mục gốc (root directory) của hệ thống.

4.  **`mkdir` (Make Directory):**
    * Tạo một thư mục mới.
    * Ví dụ: `mkdir ten_thu_muc_moi`

5.  **`touch`:**
    * Tạo một file trống hoặc cập nhật thời gian sửa đổi của file đã có.
    * Ví dụ: `touch ten_file_moi.txt`

6.  **`cp` (Copy):**
    * Sao chép file hoặc thư mục.
    * `cp file_nguon file_dich`: Sao chép `file_nguon` thành `file_dich`.
    * `cp file1 file2 thu_muc_dich`: Sao chép `file1` và `file2` vào `thu_muc_dich`.
    * `cp -r thu_muc_nguon thu_muc_dich`: Sao chép toàn bộ `thu_muc_nguon` và nội dung bên trong nó vào `thu_muc_dich` (cần tùy chọn `-r` cho thư mục).

7.  **`mv` (Move):**
    * Di chuyển hoặc đổi tên file/thư mục.
    * `mv file_cu file_moi`: Đổi tên `file_cu` thành `file_moi`.
    * `mv file1 file2 thu_muc_dich`: Di chuyển `file1` và `file2` vào `thu_muc_dich`.

8.  **`rm` (Remove):**
    * Xóa file. **Cẩn thận khi dùng lệnh này!**
    * `rm ten_file`: Xóa file `ten_file`.
    * `rm -r ten_thu_muc`: Xóa thư mục `ten_thu_muc` và toàn bộ nội dung bên trong (cần tùy chọn `-r`).
    * `rm -f ten_file`: Xóa file mà không cần hỏi xác nhận (force).

Đây chỉ là những lệnh cơ bản nhất. Thành thạo chúng là bước đầu tiên để làm chủ giao diện dòng lệnh Linux.
--------------
**Henry Blog 365**
