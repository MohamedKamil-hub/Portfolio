---
title: "Linux / Bash"
collection: learning
layout: single
date: 2025-06-11
---

These are my notes from studying Linux terminal and Bash  scripting.

<!-- more -->

## Indice
<div id="toc"></div>

## Bandit over the wire

Contenido de la sección...

## Basic Concepts

Más contenido...



<script>
document.addEventListener("DOMContentLoaded", function () {
  const toc = document.getElementById("toc");
  const headers = document.querySelectorAll("h2, h3");

  // Crear índice interactivo
  let list = "<ul>";
  headers.forEach(h => {
    const id = h.id || h.textContent.toLowerCase()
      .trim()
      .replace(/[^\w]+/g, '-')
      .replace(/^-+|-+$/g, '');
    h.id = id;
    list += `<li><a href="#${id}">${h.textContent}</a></li>`;
  });
  list += "</ul>";
  toc.innerHTML = list;

  // Hacer secciones colapsables
  headers.forEach(h => {
    const sectionContent = document.createElement("div");
    sectionContent.style.display = "none";
    sectionContent.classList.add("collapsible-content");

    let next = h.nextElementSibling;
    while (next && !["H2", "H3"].includes(next.tagName)) {
      const temp = next.nextElementSibling;
      sectionContent.appendChild(next);
      next = temp;
    }

    const toggleButton = document.createElement("button");
    toggleButton.textContent = "Mostrar/Ocultar";
    toggleButton.style.marginLeft = "10px";
    toggleButton.onclick = () => {
      sectionContent.style.display = sectionContent.style.display === "none" ? "block" : "none";
    };

    h.appendChild(toggleButton);
    h.after(sectionContent);
  });
});
</script>
