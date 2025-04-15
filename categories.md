---
layout: default # Hoặc 'page', giữ nguyên layout bạn đang dùng
title: Tất cả Chủ đề
permalink: /categories/
---

<h1 data-i18n="categories_heading">{{ page.title }}</h1>

<p data-i18n="categories_description">
  Khám phá các bài viết theo danh mục dưới đây:
</p>

<ul class="category-list">
  {% comment %} Sắp xếp danh mục theo tên để hiển thị rõ ràng {% endcomment %}
  {% assign sorted_categories = site.categories | sort %}
  
  {% for category_pair in sorted_categories %}
    {% assign category_name = category_pair | first %}
    {% assign post_count = category_pair | last | size %}
    
    {% if post_count > 0 %}
      {% comment %} Hiển thị tên danh mục và số bài viết không cần dịch {% endcomment %}
      <li class="category-list-item">
        <a href="/categories/{{ category_name | slugify }}/">
          <span class="category-name">{{ category_name | capitalize }}</span>
          <span class="category-post-count">({{ post_count }})</span>
        </a>
      </li>
    {% endif %}
  {% endfor %}
</ul>

<p data-i18n="categories_footer_note">
  Nếu không tìm thấy danh mục mong muốn, bạn có thể tìm kiếm hoặc xem các bài viết gần đây.
</p>