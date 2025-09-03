---
title: "Automated Linux Server Hardening Toolkit"
collection: portfolio
permalink: /portfolio/automated-linux-server-hardening-toolkit
date: 2025-09-01
excerpt: >
  A toolkit that automatically applies CIS-level hardening on Linux servers.

  ![Screenshot](/images/500x300.png)
githuburl: 'https://github.com/MohamedKamil-hub/Automated-Linux-Server-Hardening-Toolkit'
---

## Project Overview

The **Automated Linux Server Hardening Toolkit** is designed to automate common Linux hardening tasks in a safe, repeatable, and auditable way.  
It demonstrates skills in **Bash scripting, Ansible automation, and system security verification**, making it ideal for portfolio showcase.

---

## Goals

- Automate common hardening tasks so they are reproducible and auditable.
- Be idempotent and safe to run on a test system (WSL/VM/cloud).
- Produce logs and a verification checklist to demonstrate results.

---

## Features / Deliverables

- Bash scripts for quick local runs (idempotent)
- Ansible role/playbook for production-style automation
- Verification scripts that check and report compliance for each rule

---

## Minimal Requirements

- Linux machine (WSL Ubuntu is fine, or small cloud VM)
- Bash, Ansible (for automation)
- Python 3 (for verification/reporting)

---

## Project Structure



.
├── ansible/           # Playbooks and roles
│   ├── playbook.yml
│   └── roles/
├── docs/              # Documentation
│   └── usage.md
├── LICENSE
├── logs/              # Logs of execution
├── README.md
├── scripts/           # Bash scripts for hardening
│   ├── modules.sh
│   └── harden-quick.sh
├── tests/             # Optional tests
└── verif/             # Verification scripts
└── verify.py



**Folder notes:**

- `scripts/` → Bash scripts applying security rules  
- `ansible/roles/` → Ansible roles for automation  
- `verif/` → Python scripts checking compliance  
- `docs/` → Documentation  
- `logs/` → Output logs for portfolio evidence  

---

## Implemented Scripts

### 1. `scripts/modules.sh`

- Contains reusable functions for logging, backups, and configuration management:
  - `log()` → prints timestamped messages
  - `backup_file(file)` → creates a backup with timestamp
  - `ensure_sshd_config(key, value)` → safely applies SSH configuration idempotently

### 2. `scripts/harden-quick.sh`

- Quick local hardening script
- **Functionality:**
  - Runs as root (`sudo`)
  - Disables root login via SSH (`PermitRootLogin no`)
  - Creates backups before modifying SSH config
  - Prints logs for visibility
- **Example:**
```bash
sudo ./scripts/harden-quick.sh
grep PermitRootLogin /etc/ssh/sshd_config
# Output: PermitRootLogin no
````



## How It Works

1. **Backup:** critical files are backed up before changes
2. **Idempotent changes:** scripts update or append safely
3. **Logging:** timestamped logs for each action
4. **Verification (planned):** Python scripts will check compliance

---

## Skills Demonstrated

* Linux system administration
* Bash scripting and idempotent coding
* Automation with Ansible
* Python verification and reporting
* GitHub workflow and portfolio-ready documentation

---

## Next Steps

* Add additional Bash hardening scripts (password policies, firewall, user/permissions)
* Expand Ansible roles for all rules
* Complete Python verification scripts
* Add logs and reports for portfolio showcase
* Publish interactive GitHub Pages documentation

---

## License

This project is licensed under the **MIT License**. See [LICENSE](./LICENSE) for details.


