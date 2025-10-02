---
title: "Personalized Greeting Docker"
collection: portfolio
permalink: /portfolio/personalized-greeting-docker
date: 2025-09-01
excerpt: >
  Built a customizable Docker image using Alpine Linux that prints a personalized greeting (e.g., "Hello, [Your Name]!") to the console. This project highlights my ability to use Docker ARG and CMD instructions to pass runtime arguments, create flexible containerized applications, and optimize images for simplicity and efficiency.

githuburl: 'https://github.com/MohamedKamil-hub/docker-greeting-app'
---
Here i showcase and explain the process to make this project to see only the file check the [Github repo](https://github.com/MohamedKamil-hub/docker-greeting-app)

The first thing was to importt the distro i will use to do this simple project, i used Alpine linux because ists pretty lightweight.

    FROM alpine:latest

And then i add CMD so the command initiates automatically when started, so idont have to echo manually
sh is used to summon a shell to take arguments
"-c" is to tell the shell that is gonna receive arguments
the first argument 1 which has custom value but :- indicates World as the default value if nothing else inputted

    CMD echo "sh", "-c", "Hello, ${1:-World}!"
