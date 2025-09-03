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
# Automated Linux Server Hardening Toolkit

## Published: September 01, 2025

## Author: Kamilka
GitHub: https://github.com/kamilka/automated-linux-server-hardening-toolkit

## Project Overview
This toolkit automates common Linux server hardening tasks in a safe, repeatable, and auditable manner. It demonstrates proficiency in Bash scripting, Ansible automation, Python verification, and system security practices, making it an ideal showcase for a portfolio. The toolkit is idempotent, meaning it can be run multiple times without unintended side effects, and produces logs and reports for evidence.

### Key Goals
- Automate hardening to ensure reproducibility and auditability.
- Maintain safety for test environments (e.g., VMs, WSL, or local hosts like Parrot OS).
- Generate logs and verification reports for portfolio documentation.

### Skills Demonstrated
- Linux system administration (configuration management, permissions, firewall setup).
- Bash scripting (idempotent functions for logging, backups, and changes).
- Ansible automation (roles and playbooks for scalable hardening).
- Python scripting (verification and compliance reporting).
- GitHub workflow (repository setup, commits, Pages for interactive documentation).
- Security best practices (disabling root SSH, password policies, SUID cleanup, cron restrictions).

## Features and Deliverables
- **Bash Scripts**: Quick, local hardening with idempotent operations.
- **Ansible Playbooks**: Production-style automation for consistent deployment.
- **Python Verification**: Compliance checks with report generation.
- **Logs and Reports**: Timestamped logs for auditing and portfolio evidence.
- **Tests**: Optional test script to validate hardening rules.
- **Documentation**: Usage guide and screenshots for portfolio showcase.

### Minimal Requirements
- Linux machine (e.g., Parrot OS, Ubuntu WSL, or cloud VM).
- Installed tools: Bash, Ansible, Python 3, Git, OpenSSH, UFW (or iptables for firewall).
- Run as non-root user with sudo privileges.

## Installation and Setup
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/kamilka/automated-linux-server-hardening-toolkit.git
   cd automated-linux-server-hardening-toolkit
   ```

2. **Install Prerequisites**:
   ```bash
   sudo apt update
   sudo apt install ansible python3 git openssh-server ufw
   ```

3. **Make Scripts Executable**:
   ```bash
   chmod +x scripts/*.sh tests/*.sh
   ```

4. **Verify Structure**:
   Run:
   ```bash
   tree ./*
   ```
   Expected output:
   ```
   ./ansible
   ├── playbook.yml
   └── roles
       └── hardening
           └── tasks
               └── main.yml
   ./docs
   └── usage.md
   ./LICENSE
   ./logs
   ./README.md
   ./scripts
   ├── harden-quick.sh
   └── modules.sh
   ./tests
   └── test_hardening.sh
   ./verif
   └── verify.py
   ```

## Usage Guide
Refer to [docs/usage.md](docs/usage.md) for detailed instructions. Summary:

### Quick Start with Bash
1. Run the hardening script:
   ```bash
   sudo ./scripts/harden-quick.sh
   ```
2. Verify changes (e.g., SSH root login disabled):
   ```bash
   grep PermitRootLogin /etc/ssh/sshd_config
   ```
   Expected: `PermitRootLogin no`

### Ansible Automation
Run the playbook:
```bash
ansible-playbook ansible/playbook.yml -i localhost, -c local
```

### Verification
Run the Python verifier:
```bash
python3 verif/verify.py
```
Expected report (saved to `logs/verification_report.txt`):
```
SSH Root Login Disabled: PASS
Password Min Length 12: PASS
Password Complexity Minlen 12: PASS
UFW Firewall Active: PASS
Cron Permissions Restricted: PASS
No Unnecessary SUID Bits: PASS
Cups Service Disabled: PASS
```

### Testing
Run the test script:
```bash
./tests/test_hardening.sh
```
Expected output:
```
Testing hardening rules...
PASS: SSH root login disabled
PASS: Password min length 12
PASS: Password complexity set
PASS: UFW active
PASS: Cron permissions restricted
PASS: Cups disabled
```

### Logs and Reversion
- Logs are in `logs/hardening.log` and `logs/ansible-hardening.log`.
- Revert changes using backups (e.g., `/etc/ssh/sshd_config.backup.*`):
  ```bash
  sudo cp /etc/ssh/sshd_config.backup.* /etc/ssh/sshd_config
  sudo systemctl restart sshd
  ```

## Implemented Hardening Rules
The toolkit applies the following rules idempotently, with backups:

| Rule | Description | Files Modified | Verification Method |
|------|-------------|----------------|---------------------|
| Disable Root SSH Login | Sets `PermitRootLogin no` to prevent root access over SSH. | `/etc/ssh/sshd_config` | `grep PermitRootLogin /etc/ssh/sshd_config` |
| Password Minimum Length | Sets `PASS_MIN_LEN 12` for passwords. | `/etc/login.defs` | `grep PASS_MIN_LEN /etc/login.defs` |
| Password Complexity | Sets `minlen = 12` for password quality. | `/etc/security/pwquality.conf` | `grep minlen /etc/security/pwquality.conf` |
| Enable Firewall | Enables UFW with SSH allowed (or iptables alternative). | UFW rules | `sudo ufw status` or `sudo iptables -L` |
| Restrict Cron Permissions | Sets `go-rwx` on `/etc/cron.*`. | `/etc/cron.*` | `ls -ld /etc/cron.*` |
| Remove Unnecessary SUID Bits | Strips SUID from files, excluding `/usr/bin/sudo`. | Various system files | `find / -perm -4000 2>/dev/null` |
| Disable Unused Services | Disables `cups` (example; expandable). | `cups` service | `systemctl is-enabled cups` |

## How It Works
- **Backups**: Critical files are backed up before changes (e.g., `/etc/ssh/sshd_config.backup.<timestamp>`).
- **Idempotency**: Changes are safe to re-run (e.g., using `grep` and `sed` to update only if needed).
- **Logging**: Timestamped logs for each action in `logs/`.
- **Verification**: Python script checks compliance and generates reports.

## Troubleshooting
- **SUDO Errors**: If `sudo` fails, verify permissions:
  ```bash
  ls -l /usr/bin/sudo
  ```
  Expected: `-rwsr-xr-x`.
- **Firewall Conflicts**: If UFW fails, use iptables alternative (see Step 4.2 in previous responses).
- **Permission Denied**: Ensure `logs/` is writable:
  ```bash
  chmod -R u+w logs/
  ```
- **SSH Issues**: Install and enable SSH:
  ```bash
  sudo apt install openssh-server
  sudo systemctl enable sshd
  ```

## Portfolio Evidence
### Screenshots
![Hardening Log](docs/hardening_log.png)
![Verification Report](docs/verification_report.png)

### Logs Example
From `logs/hardening.log`:
```
[2025-09-03 19:30:23] Starting quick hardening script
[2025-09-03 19:30:23] Backed up /etc/ssh/sshd_config to /etc/ssh/sshd_config.backup.20250903_193023
[2025-09-03 19:30:23] Updated PermitRootLogin to no in /etc/ssh/sshd_config
[2025-09-03 19:30:24] Restarted sshd service
[2025-09-03 19:30:24] Set minimum password length to 12
[2025-09-03 19:30:24] Set password complexity: minimum length 12
[2025-09-03 19:30:24] Enabled UFW firewall with SSH allowed
[2025-09-03 19:30:24] Restricted cron permissions
[2025-09-03 19:30:24] Removed unnecessary SUID bits
[2025-09-03 19:30:24] Disabled cups service
[2025-09-03 19:30:24] Quick hardening complete
```

### Verification Report Example
From `logs/verification_report.txt`:
```
SSH Root Login Disabled: PASS
Password Min Length 12: PASS
Password Complexity Minlen 12: PASS
UFW Firewall Active: PASS
Cron Permissions Restricted: PASS
No Unnecessary SUID Bits: PASS
Cups Service Disabled: PASS
```

## Conclusion
This toolkit is a complete, portfolio-ready project demonstrating real-world security automation. Expand it by adding rules (e.g., disable IPv6, secure `/etc/fstab`). For contributions, fork the repo on GitHub. Contact me for questions.

## License

This project is licensed under the **MIT License**. See [LICENSE](./LICENSE) for details.


