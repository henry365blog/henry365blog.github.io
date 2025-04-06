---
layout: page # Thử dùng layout 'page' của theme hacker. Nếu không ổn, thử đổi thành 'default'.
title: Trang Chủ # Tiêu đề hiển thị trên tab trình duyệt (tùy chọn)
---

{# Phần Giới thiệu Chào mừng - Bạn có thể copy/paste từ bài viết giới thiệu #}
## ./ Chào mừng đến với Blog của HenryVo!

> Đây là nơi tôi chia sẻ kiến thức, kinh nghiệm và những ý tưởng về giải pháp công nghệ thông tin. Hy vọng bạn sẽ tìm thấy những điều hữu ích tại đây.

*Để xem tất cả các chủ đề, hãy truy cập trang [Chủ đề]({{ '/categories/' | relative_url }}).*

--- {# Dùng 3 dấu gạch ngang để tạo đường kẻ như phong cách theme hacker #}

## ./ Bài viết mới_

<ul class="post-list">
  {% for post in site.posts limit:5 %} {# Hiển thị 5 bài mới nhất #}
    <li>
      <span class="post-meta">{{ post.date | date: "%Y-%m-%d" }}</span> » {# Định dạng ngày tháng #}
      <a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
    </li>
  {% endfor %}
</ul>

{# Thêm link xem tất cả bài viết nếu bạn có trang lưu trữ #}
{# <p><a href="{{ '/archive/' | relative_url }}">>> Xem tất cả bài viết...</a></p> #}
