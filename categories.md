---
layout: default
title: Tất cả Chủ đề
permalink: /categories/
---

<h1>{{ page.title }}</h1>

<p>
  Khám phá các bài viết theo danh mục dưới đây:
</p>

{% assign sorted_categories = site.categories | sort %}

<ul class="category-list">
  {% for category_pair in sorted_categories %}
    {% assign category_name = category_pair | first %}
    {% assign post_count = category_pair | last | size %}
    
    {% if post_count > 0 %}
      <li class="category-list-item">
        <a href="/categories/{{ category_name | slugify }}/">
          <span class="category-name">{{ category_name | capitalize }}</span>
          <span class="category-post-count">({{ post_count }})</span>
        </a>
      </li>
    {% endif %}
  {% endfor %}
</ul>

<p>
  Nếu không tìm thấy danh mục mong muốn, bạn có thể <a href="/search/">tìm kiếm</a> hoặc xem các bài viết gần đây.
</p>