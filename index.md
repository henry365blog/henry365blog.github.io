---
layout: default
title: Trang Chủ
---

**Lời chào từ HenryVo - Chào mừng bạn đến với Blog Công nghệ!**

Xin chào tất cả các bạn!

Tôi là HenryVo, và tôi rất vui mừng chào đón bạn đến với không gian chia sẻ kiến thức và đam mê công nghệ của mình - Blog của HenryVo.

Trong thế giới công nghệ thông tin không ngừng biến đổi, việc cập nhật kiến thức, khám phá các giải pháp mới và tìm hiểu những ý tưởng sáng tạo là điều vô cùng cần thiết. Đó chính là lý do tôi tạo ra blog này: để cùng nhau khám phá, học hỏi và chia sẻ những kinh nghiệm thực tế trong lĩnh vực IT.

Bạn có thể mong đợi gì ở blog này?

Giải pháp Công nghệ: Phân tích, đánh giá và hướng dẫn các giải pháp IT hữu ích cho công việc và cuộc sống.
Thủ thuật Thực tế: Những mẹo nhỏ, kinh nghiệm xử lý sự cố, tối ưu hóa hệ thống mà tôi đã đúc kết được.
Ý tưởng Sáng tạo: Khám phá những cách tiếp cận mới, những dự án cá nhân thú vị hoặc những công nghệ đang là xu hướng.
Chia sẻ Kiến thức: Các bài viết đi sâu vào một chủ đề công nghệ cụ thể (lập trình, mạng, bảo mật, hệ thống…).
Mục tiêu của tôi là biến blog này thành một nguồn tài nguyên giá trị, nơi bạn không chỉ tìm thấy thông tin hữu ích mà còn có thể trao đổi, thảo luận và cùng nhau phát triển.

Hãy thường xuyên ghé thăm, đọc các bài viết và đừng ngần ngại để lại bình luận hay câu hỏi nhé. Sự tương tác của các bạn chính là động lực lớn nhất cho tôi!

<hr style="border-color: #333;"> ## ./Danh mục các chủ đề
* Để xem tất cả các chủ đề, hãy truy cập trang [Chủ đề]({{ '/categories/' | relative_url }}).*

<hr style="border-color: #333;"> ## ./ Bài viết mới_

{% comment %} Container cho danh sách thẻ bài viết {% endcomment %}
<div class="post-card-list">

  {% assign posts_to_show = site.posts | where_exp: "post", "post.date <= site.time" %}
  {% comment %} Lọc các bài viết có ngày đăng <= thời điểm build site {% endcomment %}

  {% for post in posts_to_show limit:5 %} {# Vẫn chỉ hiện 5 bài mới nhất #}
    <article class="post-card">
      <header class="post-card-header">
        <h3 class="post-card-title">
          <a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
        </h3>
        <div class="post-card-meta">
          <time datetime="{{ post.date | date_to_xmlschema }}" class="post-card-date">
            {{ post.date | date: "%d/%m/%Y" }} {# Hoặc định dạng bạn thích #}
          </time>
          {% if post.categories.size > 0 %}
          <span class="post-card-categories">
            | Trong:
            {% for category in post.categories %}
              <a href="/categories/{{ category | slugify }}/">{{ category | capitalize }}</a>
              {% unless forloop.last %}, {% endunless %} {# Dấu phẩy giữa các category #}
            {% endfor %}
          </span>
          {% endif %}
        </div>
      </header>
      <div class="post-card-excerpt">
        {% if post.excerpt %}
          {{ post.excerpt | strip_html | normalize_whitespace | truncatewords: 40 }} {# Hiển thị khoảng 40 từ đầu tiên của excerpt #}
        {% else %}
          {{ post.content | strip_html | normalize_whitespace | truncatewords: 40 }} {# Nếu không có excerpt, lấy từ content #}
        {% endif %}
      </div>
      </article> {# Kết thúc một thẻ bài viết #}
  {% endfor %} {# Kết thúc vòng lặp bài viết #}

</div> {# Kết thúc danh sách thẻ bài viết #}

{% comment %} Giữ lại phần link Archive nếu bạn có dùng {% endcomment %}
<hr style="border-color: #ccc; margin: 2em 0;">
## ./ Danh mục bài viết cũ
<p><a href="{{ '/archive/' | relative_url }}">>> Xem tất cả bài viết...</a></p>

<ul class="post-list">
  {% for post in site.posts limit:5 %}
    <li>
      <span class="post-meta">{{ post.date | date: "%Y-%m-%d" }}</span> » <a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
    </li>
  {% endfor %}
</ul>

<hr style="border-color: #333;"> ## ./ Danh mục bài viết cũ

<p><a href="{{ '/archive/' | relative_url }}">>> Xem tất cả bài viết...</a></p> <hr style="border-color: #333;"> Một lần nữa, chào mừng bạn đến với Blog của HenryVo!

Trân trọng
HenryVo
