---
layout: default
title: "Learning Notes"
permalink: /learning/
---

Welcome to my learning notes. Here I document everything I study, test, and break while learning cybersecurity.

<hr>

<ul>
  {% for note in site.learning %}
    <li style="margin-bottom: 1em;">
      <h3><a href="{{ note.url }}">{{ note.title }}</a></h3>
      <p>{{ note.excerpt | strip_html | truncate: 160 }}</p>
      <small>{{ note.date | date: "%B %d, %Y" }}</small>
    </li>
  {% endfor %}
</ul>
