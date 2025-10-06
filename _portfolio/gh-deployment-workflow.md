---
title: "GitHub Pages Deployment"
collection: portfolio
permalink: /portfolio/gh-deployment-workflow
excerpt: >
  built a Github actions that deploys any changes made in index.html, (only deploys when a change is made in index.html) , <br> i use a similar workflow in my Portfolio page

githuburl: 'https://github.com/MohamedKamil-hub/gh-deployment-workflow'
---

# GitHub Actions Deployment Workflow

## Project Notes
This project sets up a GitHub Actions workflow to automatically deploy `index.html` to GitHub Pages. All the code and setup are in my repo: [https://github.com/MohamedKamil-hub/gh-deployment-workflow](https://github.com/MohamedKamil-hub/gh-deployment-workflow). Below are my notes and thought process on how I built it using the CLI.

## Workflow Setup
I worked from the terminal to set up the repo and create the GitHub Actions workflow. Here’s what I did:

```bash
git clone https://github.com/MohamedKamil-hub/gh-deployment-workflow
cd gh-deployment-workflow
mkdir -p .github/workflows
nvim deploy.yml
```

In `deploy.yml`, I configured the workflow to trigger on pushes to `index.html`:

```yaml
on:
  push:
    paths:
      - "index.html"

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Get code
        uses: actions/checkout@v3
      - name: Deploy index.html
        uses: peaceiris/actions-gh-pages@v3
        with:
          publish_dir: ./
```

This config checks out the code and deploys `index.html` to GitHub Pages whenever it’s updated.

## Pushing to GitHub
After setting up the workflow, I committed and pushed the changes:

```bash
git add .
git commit -m "added workflow"
```

Output:

```
[main 4177552] added workflow
 1 file changed, 16 insertions(+)
 create mode 100644 .github/workflows/deploy.yml
```

Then pushed to the repo:

```bash
git push
```

Output:

```
Enumerando objetos: 6, listo.
Contando objetos: 100% (6/6), listo.
Compresión delta usando hasta 4 hilos
Comprimiendo objetos: 100% (3/3), listo.
Escribiendo objetos: 100% (5/5), 575 bytes | 575.00 KiB/s, listo.
Total 5 (delta 0), reusados 0 (delta 0), pack-reusados 0
To https://github.com/MohamedKamil-hub/gh-deployment-workflow
```

The workflow is live and deploys `index.html` on every push. Check the repo for details.
