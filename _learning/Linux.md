---
title: "Linux / Bash"
collection: learning
layout: single
date: 2025-06-11
---

These are my notes from studying Linux terminal and Bash scripting.

<!-- more -->

## Índice
<div id="toc"></div>

<details open>
<summary><strong>Bandit over the wire</strong></summary>

Contenido de la sección...

</details>

<details>
<summary><strong>Basic Concepts</strong></summary>

Más contenido...

</details>

<script>
document.addEventListener("DOMContentLoaded", function () {
  const toc = document.getElementById("toc");
  const summaries = document.querySelectorAll("summary");

  // Crear índice desde los summarys
  let list = "<ul>";
  summaries.forEach(s => {
    const id = s.textContent.toLowerCase()
      .trim()
      .replace(/[^\w]+/g, '-')
      .replace(/^-+|-+$/g, '');
    s.parentElement.id = id;
    list += `<li><a href="#${id}">${s.textContent}</a></li>`;
  });
  list += "</ul>";
  toc.innerHTML = list;
});
</script>
