---
title: 'Version Control: Learn the basics to become a master'
summary: 'Probably one of the most important skills a software developer needs to learn is how to use and master version
control.'
description: 'Important skills for software developer is how to use and master version control systems'
keywords: 'git, version control, github, source code repository, source control'
date: 2020-03-15T20:29:50.183Z
author: gary-woodfine
tags:
  - git
  - GitHub
  - subversion
categories:
  - version-control
  - collaboration
---
Many people believe that in order to become a good software developer, engineer or coder that you will need to be able 
to write good code fast.  The truth is, that in order to write good code, you first need to be able read, comprehend
and understand code written by others. 

It's also a common misconception that software developers are geeks or hackers working in isolation on their own
tapping furiously on their keyboards whilst solving deep and complex problems.  

The reality is, developers probably spend only 10% of their time actually writing code.   This fact, is also discussed 
in [The Mythical Man-Month: Essays on Software Engineering](https://amzn.to/2UVut64), whereby the average developer
will generally contribute on average 10 lines of code a day.  

Professional Software Developers, will confirm that there is a significant rate between add new lines of code to an
existing large project against starting a new project from scratch.  The difference being that when adding new lines to 
large project, a majority of developer time, is typically spent figuring out relationships between constituent parts of the
application code.  

Therefore, 90% of developer time, is spent:
 * Reading
 * Interacting
 * Engaging
 * Collaborating
 * Integrating
 * Re-purposing
 * Re-engineering
 * Rewriting 
 
This may be code developed by other software developers from all over the world.

In all likelihood, on any given project, the majority of the code contained in it, will be code from many different 
sources. You will invariably make use of Libraries, Frameworks, Components, Shared Code and at time Copy and Pasted code
from other sources. Even the programming language you choose to develop your software is based on code developed by
others.

Software development, is very much a team sport, the difference being that in all probability you will never meet or 
even know everybody on your team or contributing to your project.  The only aspect of those people you're ever going to 
physically see, is their code.

## Source Code Repository

The primary means developers interact with another and code, is through what is called a **_Source Code Repository_**
and there are different types.  Source Code Repositories can be either _Public_ or _Private_ and sometimes they
can be a mixture of both.

> repository 
> 
> 1. **a place or container in which things can be stored for safety**
> 2. a place where things are kept for exhibition; museum
> 3. (Commerce) a place where commodities are kept before being sold; warehouse
> 4. a place of burial; sepulchre
> 5. a receptacle containing the relics of the dead
> 6. a person to whom a secret is entrusted; confidant
 

### Private Source Code Repositories

These are generally used by individuals, companies or organisations that only want to share their source code with 
individuals, companies or other organisations they trust. Often to protect Copyright, Patents or to store source code 
which is proprietary - meaning code that is for sale.

### Public Source Code Repositories

A public source code repositories, are used by developers to share code with anybody, essentially the _**Public**_ in this 
context.  Typically, software project which make use of Public Source Code Repositories are termed as **Open Source
Projects**, which loosely means the source code is free to see, read and share by anyone.

There are different licensing models available which sometimes could restrict you or even require payment for
you to use the software, but generally most Open Source Projects can be free to use too.

### Why use a version control system

Version control systems are a category of software tools that help software teams manage change to source code 
over time. Version control software keeps track of every modification to the code in a special kind of database. If 
mistakes are made, developers are able to revert changes to essentially turn back time and compare earlier versions of 
code to not disrupt the code base while minimizing disruption to all team members.

In order to develop quality software, software teams need to be able to track all changes and reverse them if necessary.
Version control systems fill that role by tracking project history and helping to merge changes made by multiple people.
They also assist in helping to speed up work and help teams to find bugs easier.

Working in distributed teams was made possible thanks to Version Control systems, because they enable developers to 
work on different parts of the project at the same time and later merge all their work into a single product.

### How version control systems changed the software development world

Before version control systems were adopted by software teams, many teams relied on manually backing up previous 
versions of projects. Manually copying modified files in order to incorporate work conducted by multiple developers on 
the same project.

Most developers will tell you that any manual task, is going to be error prone, and the manual based task of copying 
files was indeed very error prone! 

Over the years there have been several advancements in version control systems, currently the most popular one among
developers has become Git which is a distributed version control system for tracking changes in source code during
software development. It has been specifically been designed for coordinating work among programmers, but can also be 
used to track changes to any set of files!

One of the advantages offered by git, is that every git directory on every computer is a full-fledged repository with 
a complete history and full version-tracking abilities independent of network access or a central server. Git is also 
free and open source.

### Central Version Control Repositories

When working with git you will often need a central repository 