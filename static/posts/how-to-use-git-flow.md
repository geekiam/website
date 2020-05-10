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

### Initialise a repository to use Git-Flow
To start using git-flow in your repository by using it’s init command. You can use it in existing projects, or by 
creating a new one.  `git-flow` is simply a wrapper around existing git commands, so the init command doesn’t change anything in your repository 
                     other than creating branches for you. 

```shell script
git flow init
```
 Git flow will respond with the following details

```shell script
Initialized empty Git repository in ~/project/.git/
No branches exist yet. Base branches must be created now.
Branch name for production releases: [master]
Branch name for "next release" development: [develop]

How to name your supporting branch prefixes?
Feature branches? [feature/]
Release branches? [release/]
Hotfix branches? [hotfix/]
Support branches? [support/]
Version tag prefix? []
```
Essentially all git flow has done at this point is create an additional `develop` branch in your git repository. If you 
don’t want to use git-flow anymore, there’s nothing to change or remove, you just stop using the git-flow commands.

The `develop` branch the default branch where most of the work will happen, and the master branch keeps track of 
production-ready code.

If you use the `git branch` command at this stage you'll see the two branches.

```shell script
 git branch
* develop
  master
```

### How to use git flow feature branches

Making use of git-flow enables the developing and managing features in your software projects with ease.

 To start a new feature , use feature start with the name of your new feature (in this case, “hello-world”):
 
 ```shell script
 git flow feature start hello-world

Switched to a new branch 'feature/hello-world'

Summary of actions:
- A new branch 'feature/hello-world' was created, based on 'develop'
- You are now on branch 'feature/hello-world'

Now, start committing on your feature. When done, use:

     git flow feature finish authentication
```
