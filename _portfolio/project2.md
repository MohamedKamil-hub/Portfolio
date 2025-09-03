---
title: "Local Network Mapping & Documentation (sanitized)"
collection: portfolio
permalink: /portfolio/automated-linux-server-hardening-toolkit
date: 2025-09-01
excerpt: >
  A toolkit that automatically applies CIS-level hardening on Linux servers.

  ![Screenshot](/images/500x300.png)
githuburl: 'https://github.com/MohamedKamil-hub/Local-Network-Mapping-Documentation'
---

# Local Network Mapping & Documentation (sanitized)

**Objective:** Demonstrate local network discovery and topology generation using `nmap` and `Graphviz`.  
**Safety:** All published outputs are sanitized — no real IPs, MACs, hostnames or SSIDs are included.

## What I published
- `demo/topology.svg` — anonymized diagram generated from sanitized scan.
- `nmap-sanitized.xml` — sanitized nmap XML (no identifying information).
- `scripts/` — commands and small scripts used to parse and anonymize results.

## How I collected data (local-only)
1. `nmap -sS -O -Pn --reason -oX scan.xml 192.168.1.0/24`
2. `python3 scripts/anonymize_nmap.py scan.xml nmap-sanitized.xml`
3. `python3 scripts/generate_graph.py nmap-sanitized.xml > demo/topology.dot`
4. `dot -Tsvg demo/topology.dot -o demo/topology.svg`

## Notes
- Only scanned devices I own on my local subnet. Do **not** run these scans on external networks without permission.
- Raw scan files are kept private.
