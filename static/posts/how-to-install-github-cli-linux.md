---
title: how to install github cli on linux
description: Install and basic usage instructions on using the GitHub CLI on Linux
summary: Install and basic usage instructions on using the GitHub CLI on Linux
keywords:
  - github cli
  - how to use github cli
  - github cli on linux
feature:
  image: /uploads/posts/git/git-tutorials.jpg
  alt: how to install github cli on linux
cardImage:
  image: /uploads/twitter/git/how-to-install-github-cli-linux.jpg
  alt: how to install github cli on linux
date: 2020-10-15T17:31:47.672Z
author: gary-woodfine
tags:
  - git
  - linux
  - github
categories:
  - software-development
---

[Git is a popular open source version control system](https://geekiam.io/what-is-git/ "What is Git | Geek.I.Am") used by software developers across globe.  One of the most popular features of 
Git is its ease of use on the command line.  Github is probably the most popular git based repository hosting system used
by over 50 million software developers across the globe.  

Over the years software developers have primarily interacted with Github making use of its rich web based interface to 
access repositories, raise issues and pull requests, code reviews and any number of repository administration tasks.  This
often has detracted from the convenience of using the command line and many companies have developed tools and GUI's making 
use of the rich API's Github provide to preform various tasks.

Over the years GitHub have also released several command line tools to help address the typical developer use case of 
working mostly using the command line. The most popular of which was the [GitHub Hub which helped software developers use
Github from the Command line](https://hub.github.com/ "Github hub").

### What is Github CLI?
GitHub CLI provides an easier and seamless way to work with GitHub using nothing but the command line. It was introduced
 as a beta in February 2020, and GitHub CLI 1.0 has been released in September 2020.

The new `gh` command line command is GitHub on the command line and brings pull requests, issues, and other GitHub 
concepts to the terminal next to where you are already working with Git and your code. It reduces context switching 
and enables developers to script and create their own workflows more easily.

GitHub CLI is available for repositories hosted on GitHub.com and GitHub Enterprise Server 2.20+, and to install on 
* Linux
* macOS
* Windows
 
It's free and open-source software released and maintained by Github.


### How to install GitHub CLI on Linux

In order to install Github CLI on Debian/Ubuntu Linux you can use the [Apt Package Manager](https://geekiam.io/what-is-a-linux-package-manager/ "What is a Linux Package Manager | Geek.I.Am")
but you will first need to add a reference to the package repository.

```shell script
sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-key C99B11DEB97541F0
sudo apt-add-repository https://cli.github.com/packages
```
Before you install the Github CLI it's probably best to ensure you have [Git Installed](https://geekiam.io/how-to-install-git-on-linux/ "How To Install Git On Linux | Geek.I.Am") 

Once the repository links have been added we can use the `apt` package manager to install the Github CLI
```shell script
sudo apt update
sudo apt install gh
```

### Authenticate the Github ClI

Before we can actually start exploring and using `gh` it is best to Authenticate with it. There are a couple of ways to 
login using the the CLI you can use your username and password combination, but my personal preference is to make use
of the Personal Access Token.


You can generate a new Personal Access Token by visiting [Personal Access Tokens ](https://github.com/settings/tokens) on your Github Settings page

Once you have created and made note of your Personal Access Token, you can use the `gh auth login` and follow the prompts
choosing your preferred options.

![Github CLI Authentication ](/uploads/github-cli-registration.png "Github CLI Authentication")

Once you have authenticated using `gh`  you can now start using it to access and accomplish all manner of common 
Github tasks you could only previously achieve making use of the Web Interface or other third party applications.

In [How To Create A New Github Repository Using The Terminal](https://geekiam.io/how-to-create-a-new-github-repository-using-the-terminal/ "How To Create A New Github Repository Using The Terminal | Geek.I.Am")
we illustrated how to make use of the `gh` to create new Github hosted repository from the command line.


