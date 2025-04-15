---
layout: default
title: du-an  # <--- Tên Category hiển thị
permalink: /categories/du-an/ # <--- Đường dẫn URL cho category này
---

<h1 class="category-archive-title">Chủ đề: {{ page.title }}</h1>
<hr style="border-color: #ccc; margin: 1em 0 1.5em 0;">

{% comment %} Đặt tên slug của category này vào đây (phải khớp với category trong bài viết) {% endcomment %}
{% assign category_slug = 'du-an' %} # <--- Tên slug của category

{% comment %} Lấy danh sách bài viết cho category này từ site.categories {% endcomment %}
{% assign posts_in_category = site.categories[category_slug] %}

{% if posts_in_category.size > 0 %}
  <div class="post-card-list">
    {% comment %} Sắp xếp bài viết theo ngày giảm dần (mới nhất trước) {% endcomment %}
    {% assign sorted_posts = posts_in_category | sort: 'date' | reverse %}
    {% for post in sorted_posts %}
      <article class="post-card">
        <header class="post-card-header">
          <h3 class="post-card-title">
            <a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
          </h3>
          <div class="post-card-meta">
            <time datetime="{{ post.date | date_to_xmlschema }}" class="post-card-date">
              {{ post.date | date: "%d/%m/%Y" }}
            </time>
          </div>
        </header>
        <div class="post-card-excerpt">
          {% if post.excerpt %}
            {{ post.excerpt | strip_html | normalize_whitespace | truncatewords: 35 }}
          {% else %}
            {{ post.content | strip_html | normalize_whitespace | truncatewords: 35 }}
          {% endif %}
        </div>
         <footer class="post-card-footer" style="text-align: right; margin-top: 1em;">
              <a href="{{ post.url | relative_url }}" class="read-more">Đọc thêm &raquo;</a>
          </footer>
      </article>
    {% endfor %}
  </div>
{% else %}
  <p>Không có bài viết nào trong chủ đề "{{ page.title }}".</p>
{% endif %}

<hr style="margin-top: 2.5em; border-color: #ccc;">
<p><a href="{{ '/categories/' | relative_url }}">&raquo; Xem tất cả các chủ đề</a></p>