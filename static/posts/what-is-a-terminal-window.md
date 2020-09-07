---
title: What is a terminal window
description: A terminal window is an interactive program built-in all major
  operating systems enabling developers to type commands
summary: "An overview of what a terminal window is and why it is an important
  and popular tool for software developers "
Keywords: terminal
feature:
  image: /uploads/version-control.png
  alt: Software developer tutorial
date: 2020-09-05T15:18:00.644Z
author: gary-woodfine
tags:
  - git
  - linux
categories:
  - software-development
---
Probably the most popular and common tool amongst software developers, regardless of programming language or specialism is the terminal window.  For the most developers it will be the one tool, they are more than likely going to use everyday. In fact, the whole reason why I am writing this post, is because I know and have kept track of all the tools I touch and use on a daily basis, and by far it is the terminal window, is where I spend a lot of my time on a daily basis.

In order to become a successful software developer, it is essential to gain an understanding and become familiar with using the terminal window, you'll soon discover that there is a whole different computing world that suddenly opens up for you.  However, it may seem incredibly daunting when you start taking your first steps.

This post, is not meant to be an all encompassing guide on how to use the terminal window,  it's aim is just to be a gentle introductory guide for developers who are not yet familiar with the terminal window.

### What is a terminal window

A terminal window, also referred to as a terminal emulator, is a text-only window in a Graphical User Interface (GUI) that emulates a console.

In computing a window is typically a rectangular area in a GUI that that presents its contents, i.e an image, the contents of a text file, or a listing of the contents of a directory, seemingly independently of the rest of the screen and that can be moved, resized or otherwise manipulated independently of other objects on the screen.

The terminal window derives its name, from the fact that it emulates the text-only monitor and keyboard combinations that were commonly used for earlier generations of multi-user computers and which were referred to as *terminals* or *consoles*.

The term console, is often used in regards to Linux and other Unix-like (*nix) operating systems, is an all-text mode user interface that occupies the entire screen of the display device and which does not sit on top of a GUI. Prior to the launching of the Apple Macintosh in 1984, virtually all computer displays were console.

When accessing a *nix based servers, there is typically no GUI other than console command access, administrators will usually only manage the server only using terminal window.

The [Linux Information Project](http://www.linfo.org/index.html) has a comprehensive discussion regarding the [Terminal Window](http://www.linfo.org/terminal_window.html)
 which will provide additional useful background information.

All leading Operating Systems provide a Terminal or Console Application equivalent,  although functionality, implementation language and access my vary the underlying concepts will apply.

### Linux

All Linux distributions (distros) provide a Terminal Window on their Desktop Software editions and for Linux server editions the only way to manage and administer the server is by making use of the Terminal.

### Mac OS

Apple Mac OS provides a Terminal Application, which provides a Terminal Emulation providing the experience of typing into an old school terminal from the convenience of our modern graphical operating system.

### Windows

Confusingly Microsoft Windows provides several options for a Terminal Application.

* *Command prompt* - A critical part of the Microsoft Disk Operating System (MS-DOS) command line interface. It is the fundamental setting for the interface, where the prompt sets the stage for executing command lines of code. Up until the emergence of new Windows-oriented graphical interfaces, the DOS command prompt was the most common way to interact with the personal computer.
* *Powershell Console*
  Windows PowerShell comes installed by default in every Windows, starting with Windows 7 SP1 and Windows Server 2008 R2 SP1.

Windows PowerShell is a scripting engine .DLL that's embedded into multiple hosts. The most common hosts you'll start are the interactive command-line powershell.exe and the Interactive Scripting Environment powershell_ise.exe.

* Windows Terminal
  Windows Terminal is a new, modern, fast, efficient, powerful, and productive terminal application for users of command-line tools and shells like Command Prompt, PowerShell, and WSL (Windows Subsystem for Linux).

For the remainder we will be discussing the Terminal Window as it is used in Linux.  Although, as mentioned earlier many of the concepts can be transposed across, and if you are making use of the either Mac OS or WSL you can easily follow along because they both replicate a typical Linux environment.

### What is The Shell

A shell is a special purpose program designed to read commands typed a user and execute appropriate programs in response to those commands, these types of programmes are often called *command interpreter.*

On *nix system the shell is a user process. Many different shells exists and different users, or user with multiple terminal sessions, can simultaneously use different shells.

The shells are designed not just for interactive use, but also for interpretation of *shell scripts*, which are text files containing shell commands. 

Shells usually have properties typically associated with programming languages: *variables, conditional statements, loops, I/O commands and functions*.