---
layout: archive
title: "Learning Notes"
permalink: /learning/
author_profile: true
collection: learning
---
<div class="wordwrap">
<div class="wordwrap">
  Here i post some notes that i take throught courses, videos, books, etc... you can view the full document on 
  <a href="https://docs.google.com/document/d/1lASplfzaTMxlsP-roocP5-yojoNzPH--6TuzjNNItkw/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
    this Google Docs link
  </a>.
</div>

  </a>.
</div>


{% include base_path %}

{% for post in site.learning reversed %}
  {% include archive-single.html %}
{% endfor %}
