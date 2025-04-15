---
layout: default
title: Trang Chủ
---

<h1>Chào mừng đến với Henry Blog 365</h1>

<p>Đây là trang chủ của blog, nơi bạn có thể tìm thấy các bài viết mới nhất.</p>

<hr style="border-color: #333;">

<h2>Bài viết mới nhất</h2>

<div class="post-card-list">
  {% assign posts_to_show = site.posts | where_exp: "post", "post.date <= site.time" %}
  {% for post in posts_to_show limit:5 %}
    <article class="post-card">
      <header class="post-card-header">
        <h3 class="post-card-title">
          <a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
        </h3>
        <div class="post-card-meta">
          <time datetime="{{ post.date | date_to_xmlschema }}" class="post-card-date">
            {{ post.date | date: "%d/%m/%Y" }}
          </time>
          {% if post.categories.size > 0 %}
          <span class="post-card-categories">
            | Trong:
            {% for category in post.categories %}
              <a href="/categories/{{ category | slugify }}/">{{ category | capitalize }}</a>
              {% unless forloop.last %}, {% endunless %}
            {% endfor %}
          </span>
          {% endif %}
        </div>
      </header>
      <div class="post-card-excerpt">
        {% if post.excerpt %}
          {{ post.excerpt | strip_html | normalize_whitespace | truncatewords: 40 }}
        {% else %}
          {{ post.content | strip_html | normalize_whitespace | truncatewords: 40 }}
        {% endif %}
      </div>
    </article>
  {% endfor %}
</div>

<hr style="border-color: #333;">

<p><a href="{{ '/categories/' | relative_url }}">Xem tất cả các chủ đề</a></p>