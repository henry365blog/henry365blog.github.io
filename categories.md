---
layout: page # Hoặc 'default', tùy layout nào theme hacker cung cấp cho trang tĩnh
title: Tất cả Chủ đề
permalink: /categories/ # Đặt URL cho trang này là /categories/
---

<h1>{{ page.title }}</h1>
<hr>

<ul>
  {% assign sorted_categories = site.categories | sort %}
  {% for category_pair in sorted_categories %}
    {% assign category_name = category_pair | first %}
    {% assign post_count = category_pair | last | size %}
    <li>
      <a href="/categories/{{ category_name | slugify }}/">{{ category_name | capitalize }}</a> ({{ post_count }} bài viết)
    </li>
  {% endfor %}
</ul>
