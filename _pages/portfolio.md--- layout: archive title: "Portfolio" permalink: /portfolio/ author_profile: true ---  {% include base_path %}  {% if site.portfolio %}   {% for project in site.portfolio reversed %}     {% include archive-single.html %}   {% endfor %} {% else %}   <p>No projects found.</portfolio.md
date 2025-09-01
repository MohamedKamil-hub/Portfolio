---
layout: archive
title: "Portfolio"
permalink: /portfolio/
author_profile: true
---

{% include base_path %}

{% if site.portfolio %}
  {% for project in site.portfolio reversed %}
    {% include archive-single.html %}
  {% endfor %}
{% else %}
  <p>No projects found.</p>
{% endif %}
