---
# File: categories.md
layout: default # Hoặc 'page', thử xem layout nào hiển thị tốt hơn
title: Tất cả Chủ đề
permalink: /categories/ # URL của trang này sẽ là /categories/
---

<h1>{{ page.title }}</h1>
<hr style="border-color: #333;">

<ul>
  {% comment %} Lấy danh sách category và sắp xếp theo tên {% endcomment %}
  {% assign sorted_categories = site.categories | sort %}

  {% for category_pair in sorted_categories %}
    {% assign category_name = category_pair | first %}
    {% assign post_count = category_pair | last | size %}
    {% comment %} Chỉ hiển thị category nếu có bài viết {% endcomment %}
    {% if post_count > 0 %}
      <li>
        {% comment %} Tạo link đến trang category tương ứng đã tạo ở bước 5 {% endcomment %}
        <a href="/categories/{{ category_name | slugify }}/">{{ category_name | capitalize }}</a> ({{ post_count }} bài viết)
      </li>
    {% endif %}
  {% endfor %}
</ul>
