document.addEventListener("DOMContentLoaded", function () {
  const toc = document.getElementById("toc");
  if (!toc) return;

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

  // Crear secciones colapsables con <details>
  headers.forEach(h => {
    const details = document.createElement("details");
    const summary = document.createElement("summary");
    summary.textContent = h.textContent;
    details.appendChild(summary);

    let next = h.nextElementSibling;
    while (next && !["H2", "H3"].includes(next.tagName)) {
      const temp = next.nextElementSibling;
      details.appendChild(next);
      next = temp;
    }

    h.replaceWith(details);
  });
});
