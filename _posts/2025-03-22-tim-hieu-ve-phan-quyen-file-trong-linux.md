---
layout: post
title: "Tìm hiểu về Phân quyền File trong Linux"
date: 2025-03-22 16:45:00 +0700
categories: [linux]
---

Một trong những khái niệm quan trọng và cơ bản về bảo mật trong Linux là hệ thống **phân quyền file (file permissions)**. Nó xác định ai có thể làm gì đối với một file hoặc thư mục.

**Xem quyền hạn:**

Bạn có thể xem quyền hạn của các file/thư mục bằng lệnh `ls -l`. Output sẽ có dạng như sau:

-rwxr-xr-- 1 user group 4096 Mar 22 16:30 file.txt
drwxr-x--- 2 user group 4096 Mar 21 14:00 thu_muc


**Giải thích các ký tự đầu tiên:**

* `-`: Đây là một file thông thường.
* `d`: Đây là một thư mục (directory).
* `l`: Đây là một liên kết tượng trưng (symbolic link).

**Giải thích 9 ký tự tiếp theo (Quyền hạn):**

9 ký tự này được chia thành 3 nhóm, mỗi nhóm 3 ký tự:

1.  **Nhóm 1 (ký tự 2-4): Quyền của Chủ sở hữu (User/Owner - u)**
2.  **Nhóm 2 (ký tự 5-7): Quyền của Nhóm sở hữu (Group - g)**
3.  **Nhóm 3 (ký tự 8-10): Quyền của Những người khác (Others - o)**

Trong mỗi nhóm 3 ký tự, ý nghĩa là:

* `r` (Read): Quyền đọc.
    * Với file: Được xem nội dung file.
    * Với thư mục: Được liệt kê (ls) các file/thư mục bên trong.
* `w` (Write): Quyền ghi.
    * Với file: Được sửa đổi nội dung file.
    * Với thư mục: Được tạo, xóa, đổi tên file/thư mục bên trong (kể cả khi không có quyền ghi lên file đó).
* `x` (Execute): Quyền thực thi.
    * Với file: Được chạy file như một chương trình (nếu là file thực thi hoặc script).
    * Với thư mục: Được phép `cd` (đi vào) thư mục đó.
* `-`: Không có quyền tương ứng.

**Ví dụ đọc quyền:**

* `-rwxr-xr--`:
    * Chủ sở hữu (u): Có quyền đọc (`r`), ghi (`w`), thực thi (`x`).
    * Nhóm sở hữu (g): Có quyền đọc (`r`), không có quyền ghi (`-`), có quyền thực thi (`x`).
    * Người khác (o): Có quyền đọc (`r`), không có quyền ghi (`-`), không có quyền thực thi (`-`).
* `drwxr-x---`:
    * Đây là một thư mục (`d`).
    * Chủ sở hữu (u): Đọc, ghi, thực thi (đi vào).
    * Nhóm sở hữu (g): Đọc, không ghi, thực thi (đi vào).
    * Người khác (o): Không có quyền gì.

**Thay đổi quyền (Lệnh `chmod`):**

Lệnh `chmod` (change mode) được dùng để thay đổi quyền hạn. Có hai cách phổ biến:

* **Dùng ký hiệu (Symbolic notation):** `chmod [u|g|o|a][+|-|=][r|w|x] file/thu_muc`
    * `u`=user, `g`=group, `o`=other, `a`=all
    * `+`=thêm quyền, `-`=bỏ quyền, `=`=đặt chính xác quyền
    * Ví dụ: `chmod u+x script.sh` (Thêm quyền execute cho user), `chmod go-w file.txt` (Bỏ quyền write cho group và others).
* **Dùng số (Octal notation):** Mỗi quyền được gán một giá trị số: `r=4`, `w=2`, `x=1`. Cộng các giá trị trong một nhóm để ra số đại diện cho nhóm đó.
    * `rwx` = 4+2+1 = 7
    * `rw-` = 4+2+0 = 6
    * `r-x` = 4+0+1 = 5
    * `r--` = 4+0+0 = 4
    * Ví dụ: `chmod 754 file.txt` có nghĩa là:
        * User: 7 (rwx)
        * Group: 5 (r-x)
        * Others: 4 (r--)

Hiểu rõ về phân quyền là rất quan trọng để bảo vệ dữ liệu và đảm bảo hệ thống Linux hoạt động đúng cách.
--------------
**Henry Blog 365**
