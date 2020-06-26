---
title: How to revert a git commit
description: How to use the git cli to revert an accidental commit
summary: How to revert a git commit when accidentally commit code
Keywords: dsfasdfsa
feature:
  image: /uploads/version-control.png
  alt: Version Control systems
date: 2020-05-23T15:29:50.183Z
author: gary-woodfine
tags:
  - git
categories:
  - version-control
  - collaboration
---

This should come as no surprise that software developers are humans and are just like other humans in that they make mistakes.  I would be the first to admit that as a software developer I make mistakes almost daily. 

The fortunate thing, is that as software developers we have the ability to develop tools and processes that can help us overcome issues when we make mistakes. I have previously discussed, [how learning the basics of Version Control will help
you to become a master](https://geekiam.co.uk/learn-the-basics-of-version-control-to-become-a-master).  Using version control correctly can also help you recover and mitigate against making mistakes.

Having the ability to roll back to previous versions, of your code i.e. the version which previously worked can be 
really useful, in order to help you compare and contrast different versions of code.

Occasionally, you may make changes to code and at first it may be working according to your unit tests and build, but 
only later you may discover a bug that has been introduced by your change.  

Alternatively, it may be more mundane error, that I made which prompted me to write this article. I inadvertently 
committed my code to the wrong branch!  Whatever the root cause of your error, git makes it really easy to revert your 
changes.

### How to revert a git commit

There are a number of ways you can easily revert changes to your git repository making use of the git CLI. In just a few commands you can get back
to where you need to be.

If you want to roll back a specific commit to your repository, use `git log` or `git reflog`  to track you commit and get the hash code.

These two commands may seem to be two similarly named commands to provide insights into a git repository's commit history. It is important to understand that these two commands do have a slightly different features, which can cause confusion as regards which to use when.

### What is git log ?

The command takes options applicable to the git revision list(`git rev-list`) which lists objects in their reverse chronological order. The log presented with this command is *public accessible* commit history of the commits to repository.  It is part of the git repository and is replicated after a `push`, `fetch` or `pull`.

Git log provides a branch's historical traversal of commits that starts from the most recent commit and ends at the very first commit of the entire branch history

[Read more about git log](https://www.git-scm.com/docs/git-log) 

### what is the git reflog

git reflog on the other hand is private to the repository and is not part of the replicated repository.  Therefore a developer will not be able to view the local repository's reflog without having access to the physical machine where it is located.

The reflog can be found in `.git\logs\refs\heads` that tracks the history of local commits for a given branch and excludes any commits that may have been pruned. 

[Read more about git reflog](https://git-scm.com/docs/git-reflog) .


