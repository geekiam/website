---
title: What is git
description: A detailed explanation on git version control system
summary: A detailed explanation on git version control system
keywords:
  - git
  - version control
  - What is git
feature:
  image: /uploads/version-control.png
  alt: What is git
date: 2020-09-20T13:15:08.937Z
author: gary-woodfine
tags:
  - git
categories:
  - software-development
---
In [Learn The Basics Of Version Control To Become A Master](https://geekiam.io/learn-the-basics-of-version-control-to-become-a-master/) we discussed the basics of version control systems and discussed their background and why they have become become a vital component in all software development projects.

Over the years software developers have explored and used many different approaches and tools for version control systems and the current most popular tool in use today is [git distributed version control](https://git-scm.com/ "Git - free and open source distributed version control system")

### What is git

Git is a free and open-source software distributed under GNU General Public License Version 2 for distributed version-control systems to track changes in source code during software development. It is purposely designed for coordinating work in software development teams, but it can be used to track changes in any set of files. 

The primary goals git are aimed at the typical use cases for software developers which include: 
* speed
* data integrity
* support for distributed team workflows

Git was created by Linus Torvalds in 2005 for development of the Linux kernel, with other kernel developers contributing to its initial development. Since 2005,Git has evolved and matured to be amazingly fast and efficient with an incredible branching system that enables non-linear development.

Git is distributed version-control systems, and every Git directory on every computer is a full-fledged repository with complete history and full version-tracking abilities, independent of network access or a central server.

### Why do software developers like git?

There are few characteristics about git that make it a popular choice for software developers and understanding these key properties actually make git easier to user and comprehend.

#### File-system Snapshots

The major difference between Git and any other common Version Control Systems (VCS)  is the way data and details about files is treated by Git. Conceptually, most other systems store information as a list of file-based changes or they store as a set of files and the changes made to each file over time, this is commonly described as delta-based version control. The set of incremental changes for each file are recorded,the increment is the difference -Delta - to changes in the file between the previous and current versions. For text-based files, such as source code files, the line changes are recorded.

Git doesn't store information in this manner, it stores data more like a series of snapshots of a miniature file-system. Every time you commit, or save the state of your project, Git basically takes a picture of what all your files look like at that moment and stores a reference to that snapshot. To be efficient, if files have not changed, Git doesn’t store the file again, just a link to the previous identical file it has already stored. Git thinks about its data more like a stream of snapshots.

This makes Git more like a mini file-system with some incredibly powerful tools built on top of it, rather than simply a VCS. 

#### Local operation

Every developer works on their own local copy of the code. What this means is that developers can work on and change, edit, add and delete code file while disconnected from the internet or network, without affecting their team mates.

Even though developers may be disconnected from the network, they can still see a complete history and view old versions of files because every thing is available locally.

This also means that If you get on an aeroplane or a train and want to do a little work, you can commit happily to your local copy until you get to a network connection to synchronise your changes to a central repository. 

In many other systems, doing so is either impossible or painful because you can’t do much when you're not connected to the server. This may not seem like a huge deal, but you may be surprised what a big difference it can make especially when working remotely.

#### File integrity
Once a file(s) has been committed to a git repository it is impossible to change or tamper with without git knowing about it. All files and folders in Git repository undergo a checksum process before being stored and then referred to by their checksum.

A checksum is a sequence of numbers and letters used to check data for errors. To produce a checksum,a program runs a file through an algorithm. Typical algorithms used for this include MD5, SHA-1, SHA-256, and SHA-512.

The algorithm uses a cryptographic hash function that takes an input and produces a string of a fixed length. The input file can be a small 1 MB file or a massive 4 GB file, but either way, you’ll end up with a checksum of the same length. Checksums are also commonly referred to as *hashes*.

Even the slightest change in a file produces very different looking checksum values. A single character difference in the underlying file produces a very different looking checksum.

The mechanism that Git uses to produce a checksum is called a SHA-1 hash. This is a 40-character string composed of hexadecimal characters (0–9 and a–f) and calculated based on the contents of a file or directory structure in Git. 

A SHA-1 hash looks something like this:
```sh
56b9da6552332987be463b52f8696cd7e3b00482
```