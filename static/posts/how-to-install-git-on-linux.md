---
title: How to install git on Linux
description: A tutorial to guide software developers through the steps required to install and configure Git distributed version control system on Debian based Linux distributions.
summary: Git is the most popular distributed version control system among developers, especially Linux-based software developers. In this tutorial we'll guide you through the process to install and configure git for use on your Ubuntu and Debian based Linux
keywords:
  - git
  - how to install git on ubuntu
feature:
  image: /uploads/posts/git/git-tutorials.jpg
  alt: How to create gitignore file
cardImage:
  image: /uploads/twitter/git/how-to-install-git-on-linux.jpg
  alt: How to create gitignore file
date: 2020-09-25T17:31:47.672Z
author: gary-woodfine
tags:
  - git
  - linux
  - tutorial
categories:
  - software-development
---
Git is the most popular distributed version control system among developers, especially Linux-based software developers.
 In this tutorial we'll guide you through the process to install and configure git for use on your Ubuntu and Debian based Linux.  

You may have previously [learned the basics of version control](https://geekiam.io/learn-the-basics-of-version-control-to-become-a-master/ "Learn The Basics Of Version Control To Become A Master | Geek.I.Am") and read [background information on git](https://geekiam.io/what-is-git/ "What is git | Geek.I.Am"), in this post we are going to learn how to install and configure git on a Debian based Linux distribution.

### Install Git using a package manager
The easiet and recommended way to install Git is to install making use of a package manager. The most common package 
management on Debian based distribution is **apt *(Advanced Package Tool)* **, which is used and tightly integrated 
Debian, Ubuntu, Mint, Kali, PopOS etc.
 
 Depending on your distribution and release version, there may be a possibility that git is already installed, therefore
  it is worth double checking.
 
 To check if git may be already installed, simply using the [terminal window](https://geekiam.io/what-is-a-terminal-window/ "What is the terminal window | Geek.I.Am") to check the version number.
 ```shell script
git --version
```
If the command returns a response similar to the below, then git has been previously installed.

![Terminal window git install check](/uploads/git-version-check.jpg "Terminal window git install check")

If git is not installed then the command will return a message indicating that git could not be found, if that is the 
case then we can update and upgrade our packages to ensure we get the latest possible version, and then install it.

```shell script
sudo apt update && sudo apt upgrade -y
sudo apt install git
```
Once the installation is complete we can once again verify installation and version number using the `git --version` 
command again, which should now confirm Git has been successfully installed.

### Git Configuration
When starting to use Git, it's important to configure it so that it works as expected in your particular environment. 
The first configuration option to consider is setting your username and Email address you would like to associate with 
all your commits. Git expects you to set these options at a minimum. 

The primary reason for this is due to the fact that Git is a Source Code Management System, and it's primary job is to 
track changes made by users over time, therefore it needs to know who is making those changes so that it can record and 
associate those changes with a user account.

If you don't specify these values, then git will default to associating them with signed on userid and machine name, 
which chances are that is not what you want to have the system ultimately use. 

Git enables you to set a global and per-project *username* and *email address* , and you can easily administer your git 
identity using the `git config` command.
 
We discuss Git Configuration options in further detail in [Advanced Git Configuration options](https://geekiam.io/advanced-git-configuration-options/ "Advanced Git Configuration options") , 
However for now we will discuss the most basic options to consider when just starting out with git.

The first option to consider, is to set a Global username and email address, 

#### Configure Global Username and Email
The global git username and email address are associated with commits on all repositories on your system that don’t 
have repository-specific configuration values.

To configure your global commit name and email address run the `git config` command with the `--global` option

```shell script
git config --global user.name "Your Name"
git config --global user.email "email@domain.com"
```
Once you've completed configuring your name and email you can verify your settings anytime using:

```shell script
git config --list
```

Which will return something similar to:

```shell script
user.name=Your Name
user.email=email@domain.com
```
** NOTE : **  Git does not validate the email address you supply, you can enter any email address you choose. However, 
you need to bear in mind there are some advanced use cases and tools that will require you to have a valid email address.


### Git configuration store
Git stores your configuration details in a hidden text based file gitconfig in your Home directory `~/.gitconfig`.

You can use any text based editor to view these details, in our case we'll use `nano`

```shell script
nano ~/.gitconfig
```
Which will look similar to
```shell script
[user]
    name = Your Name
    email = email@domain.com
```

It is generally discouraged to modify the Git Configurations directly by editing the files. However, Git Configuration files
are easy to understand.  You can continue to make configuration changes either by editing the `~/.gitconfig` in your 
text editor or making use of the `git config` command.

We discuss the [Advanced Git Configuration options](https://geekiam.io/advanced-git-configuration-options/) and discuss how to 
apply beneficial Git Configurations. 

### Conclusion
Installing Git on Debian based Linux Distribution is a matter of making use of the APT package manager.  

I recommend the [Pro Git book](https://amzn.to/308IsHT "Pro Git 2nd Edition") and learn more about how to use Git.

<iframe id="lbry-iframe" width="100%" height="400" src="https://lbry.tv/$/embed/How-to-install-Git-on-Debian-based-Linux/5747bb89fff677041ee2a612b5ab86add1edda68" allowfullscreen></iframe>
