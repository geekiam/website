---
title: What is a linux package manager
description: Learn and understand package management in linux
summary: "Learn how to install, remove and update packages on your Linux system using package managers."
keywords:
  - linux package managers
  - package management in linux
  - what are package managers in linux
  - linux package management
feature:
  image: /uploads/posts/terminal/what-is-terminal-window.jpg
  alt: Software developer tutorial
cardImage:
  image: /uploads/twitter/terminal/what-is-terminal-window.jpg
  alt: Software developer tutorial
date: 2020-10-14T17:30:00.644Z
author: gary-woodfine
tags:
  - ubuntu
  - linux
  - fedora
categories:
  - software-development
---
When using Linux a popular method of installing software is to make use of a Package Manager, but Package Managers can help
users accomplish a number of tasks. In this post, we'll take a deeper look into Linux Package Managers.

### what are package managers in linux?

In Linux Package Managers are essentially software applications that help users to: Search, Download, Install, Remove 
and Update software applications on their computer operating system. These can be either Command Line tools or a complete
Graphical User Interface application. 

Experienced Linux users will very rarely download software from websites or any other location. The primary reasons for
this included aspects as ease of use, security and the fact that most Linux distributions have a list of sources where 
users can download free open source software packages.

These package sources are referred to as repositories.

### What is a package?

In Linux a package is a compressed software archive file that contains all the files that comes with a software 
application delivers any kind of functionality, this can be any kind of command line utility,GUI application or a 
software library. 

A package may consist of a binary executable, configuration file and other software  dependencies. Common types of 
Linux packages include `.deb`, `.rpm`, and `.tgz`. Linux packages don't usually contain the dependencies necessary to 
install them, therefore Linux distributions use package managers to automatically read dependencies files and download 
the packages needed before proceeding with the installation.

The package usually includes a manifest of dependencies that must be satisfied for a software application to execute as
expected on any give Linux computer.

Common Package Managers in Linux include:
* dpkg  (Debian Package Manager)
* APT (Advanced Package Tool)
* rpm (RedHat Package Manager)
* yum (Yellowdog Update Modified)
* dnf (Dandified Yum)
* zypper
* flatpak 
* pacman
* snap
