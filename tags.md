---
# File: tags.md
# Trang liệt kê tất cả các Tags
layout: default
title: "Bài viết theo Tag"
permalink: /tags/ # URL của trang này
---

<h1>{{ page.title }}</h1>
<hr style="border-color: #ccc;">

<p>Dưới đây là danh sách các tag đã được sử dụng trong blog:</p>

<div class="tag-list-page" style="margin-top: 2em;">
  {% assign tags = site.tags | sort %}
  {% if tags.size > 0 %}
    {% for tag_pair in tags %}
      {% assign tag_name = tag_pair | first %}
      {% assign tag_size = tag_pair | last | size %}
      {% comment %} Tạo một anchor cho mỗi tag {% endcomment %}
      <h3 id="{{ tag_name | slugify }}">{{ tag_name | capitalize }} ({{ tag_size }} bài viết)</h3>
      <ul>
          {% for post in tag_pair.last %}
              <li><a href="{{ post.url | relative_url }}">{{post.title}}</a></li>
          {% endfor %}
      </ul>
      <br> 
    {% endfor %}
  {% else %}
    <p>Chưa có tags nào được sử dụng.</p>
  {% endif %}
</div>