---
title: "Personalized Greeting Docker"
collection: portfolio
permalink: /portfolio/personalized-greeting-docker
date: 2025-09-01
excerpt: >
  Built a customizable Docker image using Alpine Linux that prints a personalized greeting (e.g., "Hello, [Your Name]!") to the console. This project highlights my ability to use Docker ARG and CMD instructions to pass runtime arguments,<br> 
  create flexible containerized applications, and optimize images for simplicity and efficiency.

githuburl: 'https://github.com/MohamedKamil-hub/docker-greeting-app'
---
Here i showcase and explain the process to make this project to see only the file check the [Github repo](https://github.com/MohamedKamil-hub/docker-greeting-app)

The first thing was to import the distro i will use to do this simple project, i used Alpine linux because it's pretty lightweight.

    FROM alpine:latest

And then i add CMD so the command initiates automatically when started, so i dont have to echo manually <br>
"sh" is used to run the following command in a shell<br>
"-c" is to tell the shell to run it as a command <br>
the NAME has a custom value (we will assign the value later on) but :- indicates World as the default value if nothing else inputted

    
    CMD ["sh", "-c", "echo Hello, ${NAME:-World}!"]
