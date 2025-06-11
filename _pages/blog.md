---
layout: collection_archive
title: "Blog Posts"
permalink: /blog/
collection: blog
---



<h1>{{ page.title }}</h1>

<ul>
  {% for post in site.blog reversed %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a><br>
      <small>{{ post.excerpt }}</small>
    </li>
  {% endfor %}
</ul>
