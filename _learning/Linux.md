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
  
   **Level 0 to 1**  
  The goal of this level is for you to log into the game using SSH. The host to which you need to connect is bandit.labs.overthewire.org, on port 2220. The username is bandit0 and the password is bandit0. Once logged in, go to the Level 1 page to find out how to beat Level 1.  
  <pre>```ssh bandit0@bandit.labs.overthewire.org -p 2220```</pre>  
  The password was contained in a readme file and it was **ZjLjTmM6FvvyRnrb2rfNWOZOTa6ip5If**  
  
  **Level 1 to 2**  
  The password for the next level is stored in a file called - located in the home directory  
  <pre>```ssh bandit1@bandit.labs.overthewire.org -p 2220
bandit1@bandit:~$ ls
-
bandit1@bandit:~$ cat -
^C
bandit1@bandit:~$ cat ./-
**263JGJPfgU6LtdEvgfWU1XP5yac29mFx**
```</pre>  
  At first I couldn’t see the contents of - because cat was waiting for instructions, but it was not instructions, it was the name, so I specified the path with ./- where `.` means current directory and `/` separates directories.  
  
  **Level 2 to 3**  
  The password for the next level is stored in a file called `spaces in this filename` located in the home directory  
  <pre>```bandit2@bandit:~$ ls
spaces in this filename
bandit2@bandit:~$ cat spaces in this filename
cat: spaces: No such file or directory
cat: in: No such file or directory
cat: this: No such file or directory
cat: filename: No such file or directory
bandit2@bandit:~$ cat "spaces in this filename"
MNk8KNH3Usiio41PRUEoDFPqfxLPlSmx
bandit2@bandit:~$ cat spaces\ in\ this\ filename
**MNk8KNH3Usiio41PRUEoDFPqfxLPlSmx**
```</pre>  
  I could not open this file since its name had spaces, and bash interpreted each word as a different file. To open it, I had various options, one of them being quoting the filename or escaping spaces with backslashes.  
  
  **Level 3 to 4**  
  <pre>```bandit3@bandit:~$ ls
inhere
bandit3@bandit:~$ cd inhere
bandit3@bandit:~/inhere$ ls
bandit3@bandit:~/inhere$ ls -al
total 12
drwxr-xr-x 2 root    root    4096 Apr 10 14:23 .
drwxr-xr-x 3 root    root    4096 Apr 10 14:23 ..
-rw-r----- 1 bandit4 bandit3   33 Apr 10 14:23 ...Hiding-From-You
bandit3@bandit:~/inhere$ cat ...Hiding-From-You
**2WmrDFRmJIq3IPxneAaMGhap0pFhF3NJ**
```</pre>  
  At first I wasn’t able to see the file so I used `-a` with `ls` to show all files, including hidden ones (those starting with a dot).
  
  
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
