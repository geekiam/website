---
title: The Git Promotion Model
description: Understanding the purpose and functionality of these layers is key to gaining an understanding of how Git works.
summary: Understanding the purpose and functionality of these layers is key to gaining an understanding of how Git works.
keywords:
  - understanding the git promotion model
  - what is the git promotion model
  - what are the different levels in git
feature:
  image: /uploads/posts/git/git-tutorials.jpg
  alt: Advanced git configuration options
cardImage:
  image: /uploads/twitter/git/the-git-promotion-model.jpg
  alt: Advanced git configuration options
date: 2020-10-05T17:30:47.672Z
author: gary-woodfine
tags:
  - git
  - linux
  - tutorial
categories:
  - software-development
---
We learned in [the basics of version control](https://geekiam.io/learn-the-basics-of-version-control-to-become-a-master/ "The basics of version control | Geek.I.Am") that Version Control Systems (VCS)
help us to manage change in our software development projects and that these system are also called Source Management Systems. we will now
 delve a little deeper and explain how the Git source management system helps developers to manage in their software projects.

We're going to cover the various levels that make up the Git source management system, as this will help you understand how
content i.e. source code files work their way through the Git system which also provides an understanding how the Git commands
and associated workflows function.

### Git Layers

In order to understand how Git works it important to understand the stages that content moves through Git.  An easy way for developers
understand this, is to think about how software applications typically go through layers for final deployment to users. The 
typical Development-Test-Production process.

![Development-Test-Production](/uploads/development-testing-production.png "Development-Test-Production")

Developers think of this environment as a *Promotion Model* as code moves through the levels as it matures. Each movement is initiated
by a process or people when code is deemed ready and meets various levels of scrutinization. 

In the Development phase or layer, source code is created, edited, deleted and updated. This layer is often referred to as a 
Sandbox, Playpen, Workspace and even Working Directory.

When a development team feel the code sufficiently implements all the functionality that is required, they release the code
to the Test layer. The code is merged and integrated into the full application and is tested by others to ensure that it fulfills
its requirements and more importantly does not lead to any ill side affects. 

Once the Quality Assurance process has been satisfied and the code is deemed ready for release, it is then considered ready for
production and is considered eligible for release to the public.

The public area represents and area where production code is placed ready to be used by users.

Git makes use of this analogy and the image below illustrates the Git layers. As you'll be able to deduce the work flow translates
almost exactly the same workflow.

![Git Promotion Model ](/uploads/git-promotion-model.png "Git Promotion Model")

The **Working Directory** is where content is created, edited, deleted and updated.  Content needs to exist before it 
can be placed into Git to be tracked. The working directory can be any directory or directory tree on your local system,
and can contain any number of sub-directories.  

The **Staging Area**, is a holding area to accumulate and stage changes from the working directory before they are commited to the next layer.
This is the area to build up a set of content before *committing* it to the next layer.

The staging area provides a place to stage changes before they are committed into the local repository. The staging area
 can hold any set of content that has been promoted from the working directory and is a candidate for going into the 
 local repository. The staging area provides a place to collect or assemble individual changes into the set of things 
 that will be committed. It enables finer-grained control over the set of things that make up a change. 

The **Local repository**, is the actual layer where Git Manages changes and code. Once content has been *committed* to the local 
repository, it becomes a version in the repository and can be retrieved later.

The local repository is the final layer of Git that exist on a user's local machine. Once content has been created or 
updated and then staged, it is ready to be committed into the local repository. The local repository is physically 
stored inside a separate hidden sub-directory normally within the root of the working directory. It is created in one 
of two ways: via a clone of a repository from a remote, or through telling Git to initialize a new environment locally.

The local repository is a source repository exclusively for the use of the current user. Modifications can be done 
until the user is satisfied with the content, and then the content can be sent to the *remote repository* where it is 
available to others.

The combination of the **working directory, staging area, and local repository** make up your local environment. 
These are the parts of the Git system that exist on your local machine—actually, within a special subdirectory of the 
root directory of your working directory. This local environment exists for users to create and update content and get 
it in the form they want before making it available or visible to others, in the *remote repository*.

The **Remote Repository** is a separate Git repository intended to collect and host content pushed to it from one or more 
local repositories. The remote repository's main purpose is to be a place to share and access content from multiple 
users. 

The remote repository is where multiple git users synchronise changes and modifications from their respective repositories.
It corresponds to a typical centralised version control system but there are a few differences to note.

* A remote repository is unique. There can be many remote repositories for many different projects managed with Git, 
but Git does not make or use multiple copies of the remote repository on the server.

* A remote repository can be cloned as many times as needed to separate local repositories.
* A remote repository does not make user-facing modifications to content, such as resolving conflicts for merging. It 
is primarily concerned with synching changes to and from the local repositories of individual users. If there are 
conflicts that need resolution at the time content is pushed over to the remote, that content has to be pulled back to 
the local environment, resolved there, and then synched up to the remote.

![Git layers illustrated ](/uploads/git-layers-illustrated.png "Git Layers Illustrated")

### Conclusion 

The Git Promotion model is a way of thinking about the different layers of Git and how content is moved between them. 
These levels include:
* Working Directory
* Staging Area
* Local Repository
* Remote Repository

Understanding the purpose and functionality of these layers is key to gaining an understanding of how Git works. If
you understand how the Git Promotion model works, you are now ready to start diving deeper into Git by [creating a 
repository](https://geekiam.io/how-to-create-a-git-repository/ "How to create a git repository | Geek.I.Am")  and start moving content between the various layers in Git
