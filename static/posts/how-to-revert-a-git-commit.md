---
title: How to revert a git commit
description: How to use the git cli to revert an accidental commit
summary: How to revert a git commit when accidentally commit code
Keywords: dsfasdfsa
mainImage:
  image: /uploads/home-office.jpg
  imageAlt: Garys home office
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

You can easily revert changes to your git repository making use of the git CLI. In just a few commands you can get back
to where you need to be.

If you want to roll back a specific commit to your repository, use `git log`  to track you commit and get the hash code.

The [git log](https://www.git-scm.com/docs/git-log) command shows the commit logs.


