---
title: "Server Performance Stats"
collection: portfolio
permalink: /portfolio/server-performance-stats
excerpt: >
  Developed a Bash script to analyze Linux server performance, delivering key metrics like CPU, memory, and disk usage, along with top resource-intensive processes. This project showcases my ability to create efficient, practical tools for system monitoring and debugging, designed for real-world application and community feedback.

githuburl: 'https://github.com/MohamedKamil-hub/Server-Performance-Stats'
---

# Server Performance Stats
Here i have my notes, errors and thought process it's just the notes i took in order to acomplish this project, what i wanted to do is a script that gives metrics on CPU, disk, memory, processes and also useful info like failed logs and users logged in to see the script itself check https://github.com/MohamedKamil-hub/Server-Performance-Stats .


the shebang #! is to specify to Linux to run this as a bash script specifying the shell

    #!/bin/bash
    # server-stats.sh
    # Author: Mohamed Kamil El Kouarti
    # Last update: Thu Sep 25 2025

Then i created color variables that i will use afterwards so the output has better readability the \033 tells to bash t interpret it as a formatting instruction not as a normal text and what follows is the style and color in ANSI

        # Color codes
        RED='\033[0;31m'
        GREEN='\033[0;32m'
        YELLOW='\033[1;33m'
        BLUE='\033[0;34m'
        PURPLE='\033[0;35m'
        CYAN='\033[0;36m'
        WHITE='\033[1;37m'
        NC='\033[0m'

I created the variable to  get the used memory with free -m to get it on megabytes and then i added a pipe so i can filter the output of that command with awk the NR==2 to get to the second line, and then i sued {print $2} to get the second column i will be using the same method in the following to get the other stats.

    #MEMORY USAGE
    used=$(free -m | awk 'NR==2 { print $3 }')

    total=$(free -m | awk 'NR==2 { print $2 }')
    
    free_mem=$(free -m | awk 'NR==2 {print $4}')

Then to get the disk usage i first put LC_NUMERIC=C to avoid using the coma , as a decimal separator which makes the script more universal and consistent then the df -B1 to get the disk stats in bytes so i can later  manuallyconvert it to MG,  then as i did before use NR==2 to get  to the second line, used printf instead of print to get a formatted output in this case 2 decimals with "%.2f" 
and lastly specified the column with $number and the number on that column will be converted to GB

    #DISK USAGE
    free_disk=$(LC_NUMERIC=C df -B1 / | awk 'NR==2 {printf "%.2f", $4/1024/1024/1024}')
    used_disk=$(LC_NUMERIC=C df -B1 / | awk 'NR==2 {printf "%.2f", $3/1024/1024/1024}')
    percentage=$(df -h / | awk 'NR==2 {print $5}')
    total_disk=$(LC_NUMERIC=C df -B1 / | awk 'NR==2 {printf "%.2f", $2/1024/1024/1024}')

To get the cu usage i used the top -b -1  to get an static output
then i used '/%Cpu/ to get the line containing %Cpu
for(i=1;<=NF;i++) i=1 means current position and examines  each word in the Cpu line in search of , until the last character i<==N and i++ moves onto the next word in loop
if the $i (current word) equals the word id then print formated (put 2 decimals with a . ) and then 100 -$(i-1) to get the percentage

    # CPU USAGE 
    total_cpu=$(top -b -n1 | awk '/%Cpu/ {for(i=1;i<=NF;i++) if($i=="id,") {printf "%.2f", 100 - $(i-1)}}')

To get the top 5 cpu and top 5 memory i used the ps aux to get the processes and added --sort=-%cpu to get them ordered from highest to lowest with the '-'  then print th 2 3 11 columns to get their PID, CPU USAGE and NAME
    
    top_5_cpu=$(ps aux --sort=-%cpu | awk 'NR>1 && NR<=6 {print $2, $3, $11}')
    
    top_5_mem=$(ps aux --sort=-%mem | awk 'NR>1 && NR<=6 {print $2, $4, $11}')  

To get the OS name and version

    ##os name and version
    os_name=$(cat /etc/os-release | grep '^NAME=' | sed 's/^NAME=//' | tr -d '"')
    os_version=$(cat /etc/os-release | grep '^VERSION=' | sed 's/^VERSION=//' | tr -d '"')

uptime=$(uptime -p)

users=$(who | awk '{print $1}' | sort -u | tr '\n' ' ')  # Get unique users

load_average=$(uptime | awk -F'load average:' '{print $2}' | sed 's/^ *//')  

failed_logs_j=$(log_files="/var/log/secure /var/log/auth.log /var/log/messages /var/log/syslog"

for log in $log_files; do
    if [ -f "$log" ]; then
        grep -i "pam_unix.*fail" "$log" 2>/dev/null | head -5
    fi
done) 

memory_usage=$(awk "BEGIN {printf \"%.2f\", $used / $total * 100}")

echo -e "$(cat <<EOF
${CYAN}=== Server Performance Stats ===${NC}
${BLUE}Last update: $(date)${NC}

${YELLOW}=== CPU Usage ===${NC}
Total CPU Usage: $total_cpu %

${YELLOW}=== Memory Usage ===${NC}
Total Memory: $total MB
Used Memory: $used MB  
Free Memory: $free_mem MB
Memory Usage: $memory_usage %

${YELLOW}=== Disk Usage ===${NC}
Total Disk: $total_disk GB
Used Disk: $used_disk GB
Free Disk: $free_disk GB
Disk Usage: $percentage %

${YELLOW}=== Top 5 Processes by CPU Usage ===${NC}
$top_5_cpu

${YELLOW}=== Top 5 Processes by Memory Usage ===${NC}
$top_5_mem

${YELLOW}=== Additional System Information ===${NC}
OS : $os_name $os_version
Uptime: $uptime
Load Average: $load_average
Logged-in Users: $users

${RED}=== Recent Failed Login Attempts ===${NC}
$failed_logs_j

${PURPLE}=== End of Report ===${NC}
EOF
)"




