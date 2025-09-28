---
permalink: /
title: "About Me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<div style="background: linear-gradient(135deg, #0f172a, #1e293b); color: #f8fafc; padding: 2rem; border-radius: 1rem; box-shadow: 0 8px 20px rgba(0,0,0,0.5); font-family: 'Segoe UI', sans-serif;">

<h1 style="color:#38bdf8; font-size:2.5rem; font-weight:700; text-align:center;">👋 Hi, I’m Mohamed Kamil El Kouarti</h1>

<p style="font-size:1.2rem; line-height:1.8; text-align:center; color:#cbd5e1;">
I’m an IT student from Spain, focused on building reliable systems through hands-on projects.
</p>

<hr style="border: 1px solid #334155; margin: 2rem 0;">

<h2 style="color:#22d3ee;">What I Do</h2>
<p style="color:#cbd5e1; font-size:1.05rem; line-height:1.8;">
My toolkit includes DevOps practices, Linux administration, Python scripting, Cisco networking, Docker containerization, and Git for version control. I've worked on hardware projects like custom IoT prototypes that integrate sensors with cloud backends, prioritizing practical outcomes.
</p>

<h2 style="color:#22d3ee;">Beyond the Terminal</h2>
<p style="color:#cbd5e1; font-size:1.05rem; line-height:1.8;">
I enjoy my free time reading superhero comics, hiking, playing videogames and practicing judo.
</p>

<h2 style="color:#22d3ee;">🚀 Current Focus</h2>
<ul style="list-style-type: none; padding: 0; font-size:1.05rem; line-height:1.8;">
  <li>🕵️ Hands-on work in Linux hardening and Docker</li>
  <li> Expanding knowledge in networking, information security, cloud computing, programming, and operating systems</li>
</ul>

<hr style="border: 1px solid #334155; margin: 2rem 0;">

<h2 style="color:#22d3ee;">✨ Why This Site?</h2>
<p style="color:#cbd5e1;">This portfolio showcases my projects and documents my technical growth.</p>

<h2 style="color:#22d3ee;">Contact Info & Socials</h2>
<ul style="color:#cbd5e1; list-style-type:none; padding-left:0; line-height:1.8;">
  <li>Open to collaborating on projects.</li>
<a href="https://github.com/MohamedKamil-hub">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width="25" style="filter: invert(1);"/> GitHub
</a><br>

<a href="https://www.linkedin.com/in/elkouarti">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" width="25"/> LinkedIn
</a><br>

<a href="mailto:kouartimohamedkamil@gmail.com">
  <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png" width="25"/> Email
</a>

</ul>

<hr style="border: 1px solid #334155; margin: 2rem 0;">

<h2 style="color:#22d3ee;">📩 Send Me a Message</h2>

<form action="https://formspree.io/f/manpqkze" method="POST">
  
  <input type="text" name="name" placeholder="Your Name" required
         style="background: #1e293b; color: #f8fafc; border: 1px solid #334155; padding: 0.75rem; border-radius: 0.5rem; width: 100%; margin-bottom: 1rem;">
  
  <input type="email" name="email" placeholder="Your Email" required
         style="background: #1e293b; color: #f8fafc; border: 1px solid #334155; padding: 0.75rem; border-radius: 0.5rem; width: 100%; margin-bottom: 1rem;">
  
  <textarea name="message" placeholder="Your Message" required
            style="background: #1e293b; color: #f8fafc; border: 1px solid #334155; padding: 0.75rem; border-radius: 0.5rem; width: 100%; min-height: 150px; margin-bottom: 1rem;"></textarea>
  
<div id="form-notice" style="display:none; position: fixed; top: 20px; right: 20px; background:#38bdf8; color:#0f172a; padding: 1rem; border-radius: 0.5rem; box-shadow: 0 4px 8px rgba(0,0,0,0.3); z-index: 9999;">
  ✅ Message sent successfully!
</div>

<script>
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault(); // prevent default form submission

  const form = e.target;
  const data = new FormData(form);

  fetch(form.action, {
    method: form.method,
    body: data,
    headers: { 'Accept': 'application/json' }
  }).then(response => {
    if (response.ok) {
      // show notification
      const notice = document.getElementById("form-notice");
      notice.style.display = "block";
      setTimeout(() => notice.style.display = "none", 3000); // hide after 3s
      form.reset(); // reset form fields
    } else {
      alert("Oops! There was a problem submitting your form.");
    }
  }).catch(() => alert("Oops! There was a problem submitting your form."));
});
  
<p style="color:#cbd5e1; font-size:0.9rem; margin-top: 1rem;">.</p>

</div>
