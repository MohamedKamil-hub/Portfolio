---
layout: archive
title: "Learning Notes"
permalink: /learning/
author_profile: true
collection: learning
---
Here i post notes that i take throught my learning

{% include base_path %}

{% for post in site.learning reversed %}
  {% include archive-single.html %}
{% endfor %}
