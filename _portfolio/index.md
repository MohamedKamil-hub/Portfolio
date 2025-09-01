---
layout: default
title: My Portfolio
permalink: /
---

# Welcome to My Portfolio

Hi! I’m **K4M1LK4**, an aspiring IT professional. Here you can see my projects, experiments, and learning journey.  

---

## Projects

{% for project in site.portfolio %}
<div class="project-card">
### [{{ project.title }}]({{ project.url }})

{{ project.excerpt | markdownify }}

[View Project]({{ project.url }})
</div>
{% endfor %}

---

## Get in Touch

- Email: `kouartikamil@gmail.com`  
- GitHub: [K4M1LK4](https://github.com/K4M1LK4)  
- LinkedIn: [Your LinkedIn](YOUR_LINKEDIN_URL)  
- Twitter: [@YOUR_TWITTER](https://twitter.com/YOUR_TWITTER)

---

<p align="center">Made with ❤️ by K4M1LK4</p>
