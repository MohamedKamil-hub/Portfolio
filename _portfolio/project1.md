---
title: "Automated Linux Server Hardening Toolkit"
collection: portfolio
permalink: /portfolio/automated-linux-server-hardening-toolkit
date: 2025-09-01
excerpt: >
  A toolkit that automatically applies CIS-level hardening on Linux servers.

  ![Screenshot](/images/500x300.png)
githuburl: 'https://github.com/K4M1LK4/Automated-Linux-Server-Hardening-Toolkit-'
---

## Goals

- Automate common hardening tasks so they are reproducible and auditable.
- Be idempotent and safe to run on a test system (WSL/VM/cloud).
- Produce logs and a verification checklist so you can demonstrate results in your portfolio.

## Features / Deliverables

- Bash scripts for quick local runs (idempotent).
- Ansible role/playbook for production-style automation.
- Verification script that checks and reports compliance for each rule.

## Minimal Requirements

- A Linux machine (WSL Ubuntu is fine), or a small cloud VM.
- Bash, Ansible (for the Ansible part), Python 3 for verification/reporting.
