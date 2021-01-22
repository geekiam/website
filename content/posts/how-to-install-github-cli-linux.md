---
title: how to install github cli on linux
description: Install and basic usage instructions on using the GitHub CLI on Linux
summary: Install and basic usage instructions on using the GitHub CLI on Linux
keywords:
  - github cli
  - how to use github cli
  - github cli on linux
feature:
  image: /uploads/posts/git/git-tutorials.svg
  alt: how to install github cli on linux
cardImage:
  image: /uploads/twitter/git/how-to-install-github-cli-linux.jpg
  alt: how to install github cli on linux
date: 2020-10-15T17:31:47.672Z
author: garywoodfine
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
GitHub CLI provides an easier and seamless way to work with GitHub using the command line. It was introduced
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
we illustrated how to make use of the `gh` to create new Github hosted repository from the command line. This is a great
use case for the Github CLI, however obviously it is capable of so much more and will become one of your favourite tools
as you become more familiar with it.

### How to enable Github CLI autocomplete.
The Github CLI comes with a number of really useful commands and as is the way with many command line utilities remembering
and learning these commands can be quite difficult.  The Github CLI comes with a great [online Github CLI manual](https://cli.github.com/manual/ "Github CLI Manual") 
and you can get help for each command if you use `--help` on each command. i.e. if you want to get additional information 
regarding repo command you can simply use `gh repo --help`

![Github CLI Repo Help ](/uploads/github-cli-repo-help.png "Github CLI Repo Help")

You can also add an additional help feature to Github CLI by enabling the autocomplete functionality. Which will enable you
the enter the name of the command and then TAB TAB to display the list of options associated with the command.  To do so
you just need to add the following line to your `~/.bashrc` 

```shell script
eval "$(gh completion -s bash)"
```
Once added you can now open a terminal window to get the autocomplete type `gh repo`, then press tab twice. It should 
show you four different commands you can append to the current repo command.

![Github CLI autocomplete ](/uploads/github-cli-autocomplete.png "Github CLI autocomplete")
 
 ### Github CLI Command Structure
 The `gh` command structure is tree-like and fairly easy to remember. There are basically two levels of commands; 
 
 ![Github CLI command level ](/uploads/github-cli-command-level.png "Github CLI command level")
 #### Level 1
 The first level consists of 6 commands
 
 * config
 * repo
 * issue
 * pr
 * gist
 * credits
 
#### Level 2

Each command enables you to specify the operation you would like to preform
such as `create`, `view` or `list` etc. 

 The [online Github CLI manual](https://cli.github.com/manual/ "Github CLI Manual") provides detailed explanation of all
 the options available per command basis.

### Github Repository Commands

The `gh` command simplifies the process of cloning a repo and now you only need to provide the owner/repo name combination.

For instance, if you want to clone the repository for this website, the command is simply:

```shell script
gh repo clone threenine/geekiam
```

Forking a repo is just as easy

```shell script
gh repo fork threenine/geekiam
```
 During the forking process, the tool will ask you if you want to clone as well. If you say *“yes”*, it will do the 
 cloning, set up the remote upstream branch and perform an update for you automatically.  
 
 ### Configure Github CLI to use SSH
 
 The first configuration setting you're most likely going to want to set once you have installed the Github CLI is to 
 always ensure it makes use of SSH for all operations.  To do this is fairly easy and we will make use of the `gh config`
 command to do so.
 
 ```shell script
  gh config set -h github.com git_protocol ssh
```                                         

### Conclusion

The Github CLI is a great addition to your developer toolbox, and really simplifies your Day to day interaction with Github 
without ever having to leave the Terminal Window or opening a browser.



