---
title: "CompTIA Security+ Notes"
collection: learning
layout: single
date: 2025-06-11
---

These are my notes from studying for the Security+ exam with Professor Messer.

<!-- more -->

<div id="toc"></div>

## Network Security

Content for network security here...

## Threats and Vulnerabilities

Content for threats and vulnerabilities here...

## Cryptography

Content for cryptography here...

<script>
document.addEventListener("DOMContentLoaded", function () {
  const toc = document.getElementById("toc");
  const headers = document.querySelectorAll("h2, h3");

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
});
</script>
