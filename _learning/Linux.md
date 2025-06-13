---
title: "Linux / Bash"
collection: learning
layout: single
date: 2025-06-11
---

These are my notes from studying Linux terminal and Bash scripting.

## Índice
<div id="toc"></div>

## Bandit over the wire

<details>
  <summary>Mostrar/Ocultar contenido</summary>
  
  Contenido de la sección...
  
</details>

## Basic Concepts

<details>
  <summary>Mostrar/Ocultar contenido</summary>
  
  Más contenido...
  
</details>

<script>
document.addEventListener("DOMContentLoaded", () => {
  const toc = document.getElementById("toc");
  if (!toc) return;

  const headers = document.querySelectorAll("h2, h3");
  if (!headers.length) return;

  let list = "<ul>";
  headers.forEach(h => {
    const id = h.id || h.textContent.toLowerCase()
      .trim()
      .replace(/[^\w]+/g, '-')
      .replace(/^-+|-+$/g, '');
    h.id = id;
    list += `<li class="${h.tagName.toLowerCase()}"><a href="#${id}">${h.textContent}</a></li>`;
  });
  list += "</ul>";

  toc.innerHTML = list;
});
</script>
