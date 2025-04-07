---
# File: archives.md
# Trang liệt kê bài viết theo thời gian (Năm/Tháng)
layout: default
title: Lưu trữ Bài viết
permalink: /archives/ # URL của trang này
---

<h1>{{ page.title }}</h1>
<hr style="border-color: #ccc;">

<div class="archive-list">
  {% comment %} Sử dụng Liquid để nhóm bài viết theo Năm {% endcomment %}
  {% assign postsByYear = site.posts | where_exp: "post", "post.date <= site.time" | group_by_exp: "post", "post.date | date: '%Y'" %}

  {% for year_group in postsByYear %}
    <section class="archive-group">
      <h2 class="archive-year">{{ year_group.name }}</h2>

      {% comment %} Bên trong mỗi năm, nhóm tiếp theo Tháng {% endcomment %}
      {% assign postsByMonth = year_group.items | group_by_exp: "post", "post.date | date: '%B %Y'" %} 
{% comment %} Tên Tháng + Năm {% endcomment %}
      {% for month_group in postsByMonth %}
         <h3 class="archive-month">{{ month_group.name }}</h3> 
        <ul class="archive-posts-list">
          {% comment %} Sắp xếp bài viết trong tháng theo ngày giảm dần {% endcomment %}
          {% assign sorted_posts = month_group.items | sort: 'date' | reverse %}
          {% for post in sorted_posts %}
            <li>
              <span class="archive-post-date">{{ post.date | date: "%d" }}</span>
              <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
            </li>
          {% endfor %} </ul>
      {% endfor %} </section>
  {% endfor %} </div>