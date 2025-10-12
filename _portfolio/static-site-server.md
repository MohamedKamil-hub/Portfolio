---
title: "static site server"
collection: portfolio
permalink: /portfolio/log-archive-tool
excerpt: >
  built a CLI tool to archive logs with date and time stamps

githuburl: 'https://github.com/MohamedKamil-hub/log-archive-tool'
---

# Static Site Server — Complete Documentation

**Author:** Mohamed Kamil El Kouarti
**Project:** Serve a static site on Ubuntu Server (VirtualBox) with Nginx + deployment using `rsync`.
**Server IP (VM):** `192.168.1.148`
**User on VM:** `user`

---

## Summary

This document includes the complete steps followed to complete the *Static Site Server* project: creation and configuration of a Linux server (Ubuntu Server in VirtualBox), SSH connection, installation and configuration of **Nginx** to serve a static site, deployment with **rsync** from the host machine, and troubleshooting of errors encountered. It includes commands, configuration files, and a troubleshooting section with the actual outputs used as evidence.

---

## Environment and Requirements

* Host machine: Windows (without WSL2, using Git Bash).
* VirtualBox: machine with **Ubuntu Server 24.04.3 LTS** installed (OpenSSH selected during installation).
* Network in VirtualBox: **Bridged Adapter** so the VM gets a local IP.
* IP assigned to VM: `192.168.1.148` (checked with `ip a`).
* User on VM: `user`.
* Source repository of the site: `https://github.com/mohamedkamil-hub/gh-deployment-workflow` (cloned as `mi-sitio`).

---

## Project Objectives

1. Register and set up a Linux server (here in VirtualBox).
2. Ensure access via **SSH**.
3. Install and configure **Nginx** to serve a static site.
4. Create or clone the static site (HTML/CSS/images).
5. Use `rsync` to sync local files to `/var/www/misitio` on the server.
6. Automate deployment with a `deploy.sh` script.
7. Document and troubleshoot errors encountered.

---

## Steps Performed (commands and actions)

### 1) VM Preparation (VirtualBox)

* Created Ubuntu Server VM, activated **OpenSSH** during installation.
* Configured network in **Bridged** mode to get a local IP.

Check VM IP:

```bash
ip a
# relevant output: IPv4 address for enp0s17: 192.168.1.148
```

### 2) SSH Connection from Host (Windows → Git Bash)

Tested connection:

```bash
ssh user@192.168.1.148
```

Sample output:

```
Welcome to Ubuntu 24.04.3 LTS (GNU/Linux 6.8.0-85-generic x86_64)
...
IPv4 address for enp0s17: 192.168.1.148
```

> Note: WSL2 was not used because Hyper-V and the hypervisor were disabled for VirtualBox compatibility. Git Bash was used instead.

### 3) Install and enable Nginx (on VM)

```bash
sudo apt update && sudo apt install -y nginx
sudo systemctl enable --now nginx
```

Test in browser (host): `http://192.168.1.148` — initially showed the default Nginx page.

### 4) Prepare destination folder and permissions

Using `/var/www/misitio`:

```bash
sudo mkdir -p /var/www/misitio
sudo chown -R user:user /var/www/misitio
sudo chmod -R 755 /var/www/misitio
```

### 5) Clone site repository (on VM or local)

On VM:

```bash
git clone https://github.com/mohamedkamil-hub/gh-deployment-workflow.git mi-sitio
```

Sample output:

```
Cloning into 'mi-sitio'...
remote: Enumerating objects: 116, done.
Receiving objects: 100% (116/116), 18.31 KiB | 191.00 KiB/s, done.
Resolving deltas: 100% (28/28), done.
```

> Alternative: clone on host machine and use `rsync` from there.

### 6) Deploy with `rsync` (from machine with `mi-sitio`)

Command used:

```bash
rsync -avz ./mi-sitio/ user@192.168.1.148:/var/www/misitio
```

Sample output after fixing permissions:

```
sending incremental file list
./
.nojekyll
README.md
index.html
site/
site/styles.css

sent 35.631 bytes  received 738 bytes  8.082,00 bytes/sec
total size is 52.367  speedup is 1,44
```

### 7) Nginx configuration to serve `/var/www/misitio`

File `/etc/nginx/sites-available/misitio`:

```nginx
server {
    listen 80;
    server_name _;
    root /var/www/misitio;
    index index.html;
}
```

Enable and reload:

```bash
sudo ln -s /etc/nginx/sites-available/misitio /etc/nginx/sites-enabled/ 2>/dev/null || true
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl reload nginx
```

### 8) Final verification

* Listing final content in `/var/www/misitio`:

```
total 28
drwxrwxr-x 5 user user 4096 oct 12 08:12 .
-rw-rw-r-- 1 user user  335 oct 12 08:12 index.html
...
```

* Browser access: `http://192.168.1.148` — should now display `index.html` from the repo.

---

## `deploy.sh` (final script)

Save on the machine from where deployment occurs (e.g., Git Bash on host):

```bash
#!/usr/bin/env bash
# deploy.sh - sync mi-sitio -> /var/www/misitio on VM
REMOTE_USER="user"
REMOTE_HOST="192.168.1.148"
REMOTE_DIR="/var/www/misitio"

set -e

echo "Deploying site/ -> ${REMOTE_USER}@${REMOTE_HOST}:${REMOTE_DIR}"
rsync -avz ./mi-sitio/ ${REMOTE_USER}@${REMOTE_HOST}:${REMOTE_DIR}/
echo "Deployment completed."
```

Make executable:

```bash
chmod +x deploy.sh
```

Run:

```bash
./deploy.sh
```

> Optional: use a specific SSH key: `rsync -avz -e "ssh -i ~/.ssh/id_ed25519" ./mi-sitio/ user@192.168.1.148:/var/www/misitio/`

---

## Errors Encountered and Troubleshooting

### 1) **WSL error: `HCS_E_SERVICE_NOT_AVAILABLE`**

**Message:**

```
The operation could not be started because a required feature is not installed.
Error code: Wsl/Service/CreateInstance/CreateVm/HCS/HCS_E_SERVICE_NOT_AVAILABLE
```

**Cause:** Hyper-V and the hypervisor were disabled for VirtualBox. WSL2 requires Hyper-V.

**Solution:**

* Use **Git Bash** instead for `rsync` and SSH.

### 2) **rsync: No such file or directory**

**Message:**

```
rsync: [sender] change_dir "/home/user/./mi-sitio" failed: No such file or directory (2)
```

**Cause:** `rsync` was run from a directory that did not contain `./mi-sitio/`.

**Solution:** clone or create `mi-sitio` before running `rsync`.

### 3) **rsync Permission denied / code 23**

**Messages:**

```
rsync: [generator] chgrp "/var/www/misitio/." failed: Operation not permitted (1)
rsync: [generator] recv_generator: mkdir "/var/www/misitio/.git" failed: Permission denied (13)
rsync error: some files/attrs were not transferred ... (code 23)
```

**Cause:** user did not have write permissions on `/var/www/misitio`.

**Solution:**

```bash
sudo chown -R user:user /var/www/misitio
sudo chmod -R 755 /var/www/misitio
```

Alternative: use `rsync --rsync-path="sudo rsync"`.

### 4) **Nginx shows default page**

**Symptom:** opening `http://192.168.1.148` shows *Welcome to nginx!* instead of repo content.

**Solution:**

1. Ensure files are in `/var/www/misitio`.
2. Enable site configuration and remove default: `ln -s /etc/nginx/sites-available/misitio /etc/nginx/sites-enabled/` and `rm /etc/nginx/sites-enabled

sudo nano /etc/nginx/sites-available/misitio
      
