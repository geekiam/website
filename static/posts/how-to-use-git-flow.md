---
title: 'How to use git flow'
summary: 'Using git-flow CLI to automate a popular git branching and merging strategy .'
description: 'Using git-flow CLI to automate a popular git branching and merging strategy'
date: 2020-05-10T20:29:50.183Z
author: gary-woodfine
tags:
  - git
  - gitflow
categories:
  - version-control
  - collaboration
---

Git Flow is a popular git branching and merging strategy that was initially defined by 
[Vincent Driessen](https://nvie.com/about/) in his initial article - [A successful Git branching model](https://nvie.com/posts/a-successful-git-branching-model/).
His approach has gained popularity over the years, and in some way has become one of the defacto standards to managing
software version control projects with git.

"git flow" branching model is a git branching and release management workflow that helps developers keep track of 
*features*, *hotfixes* and *releases* in bigger software projects.

The workflow consists of a number terminal commands to type and remember,  which as any developer will tell you has the
potential to lead to bugs and mis-implementation! Over the years the [git-flow library](https://github.com/nvie/gitflow) evolved 
which comprises a number git subcommands to help automate parts of the flow to make working with it easier.

### How to install Git-Flow

Installing git-flow is relatively easy and available for most Operating Systems.  We will discuss just two of our favourites
but do check out [Installing git-flow](https://github.com/nvie/gitflow/wiki/Installation) if your operating system is not listed.

#### Installing Git Flow on Ubuntu

Git-flow is available from the default repositories and can be installed using apt or snap

```shell script
sudo apt-get install git-flow
```

#### Installing Git Flow on Mac OSX
Git-Flow is available on Mac OSX using the Homebrew.  [Install Homebrew on Mac OSX](https://garywoodfine.com/install-homebrew-mac/)

```shell script
brew install git-flow
```
