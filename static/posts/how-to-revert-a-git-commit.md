---
title: How to revert a git commit
description: How to use the git cli to revert an accidental commit
summary: How to revert a git commit when accidentally commit code to your branch
keywords: 
    - git
    - version control
feature:
  image: /uploads/posts/git/how-to-revert-a-git-commit.jpg
  alt: Version Control systems
cardImage:
  image: /uploads/twitter/git/how-to-revert-a-git-commit.jpg
  alt: Version Control systems
date: 2020-05-23T15:29:50.183Z
author: gary-woodfine
tags:
  - git
  - tutorial
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

### How to find your commit to revert?

There are a number of ways you can easily revert changes to your git repository making use of the git CLI. In just a few commands you can get back to where you need to be. However, all these approaches require you to at first find the commit you want to revert.

If you want to roll back a specific commit to your repository, use `git log` or `git reflog`  to track you commit and get the hash code.

These two commands may seem to be two similarly named commands to provide insights into a git repository's commit history. It is important to understand that these two commands do have a slightly different features, which can cause confusion as regards which to use when.

### What is git log ?

The command takes options applicable to the git revision list(`git rev-list`) which lists objects in their reverse chronological order. The log presented with this command is *public accessible* commit history of the commits to repository.  It is part of the git repository and is replicated after a `push`, `fetch` or `pull`.

Git log provides a branch's historical traversal of commits that starts from the most recent commit and ends at the very first commit of the entire branch history

[Read more about git log](https://www.git-scm.com/docs/git-log) 

### what is the git reflog

git reflog on the other hand is *private* to the repository and is not part of the replicated repository.  Therefore a developer will not be able to view the local repository's reflog without having access to the physical machine where it is located.

The reflog can be found in `.git\logs\refs\heads` that tracks the history of local commits for a given branch and excludes any commits that may have been pruned. 

[Read more about git reflog](https://git-scm.com/docs/git-reflog) .

### When to use git log or git reflog ?

Many people get confused about when it is best to use either git log or git reflog, the answer basically revolves around which list of commits you would like see and the detail.

In order to illustrate this we're going to create a folder in our [Version Control Tutorial Repository](https://github.com/Geek-I-Am/version-control-tutorial) which we initially created in [How To Create A New Github Repository Using The Terminal](https://geekiam.co.uk/how-to-create-a-new-github-repository-using-the-terminal/)

First we're going to clone the repository, then add new folder named `git-revert` and we are going to create 3 files.

```shell
git clone git@github.com:Geek-I-Am/version-control-tutorial.git

cd version-control-tutorial

mkdir git-revert

cd git-revert

# We will create 3 Markdown files and add content to them, after
#writing the text content remember to use ctrl + d 
#to exit back to command line

cat > test0.md
This is the content for the test0

## You should use ctrl + d to get back to the terminal 

cat > test1.md
This is the content for the test1

## You should use ctrl + d to get back to the terminal 

cat > test2.md
This is the content for the test2

## You should use ctrl + d to get back to the terminal 
```

![Git Revert git reflog](/uploads/git-revert-1.png "git revert git reflog")

Once we have finished creating all the test files. We can go ahead and add them to git and commit them to the local repository.

```shell
git add .
git commit -am "added all the initial test files"
```

We won't push them to the Github remote repository at this stage. However we will take a look at `git reflog` if it contains out change.

![git reflog](/uploads/git-reflog-1.png "git reflog screen shot")

We will now got to another machine and use `git log` to take a look at the current state of the Remote repository and see that our change that we made on the other machine is not there.

![Git log ](/uploads/git-log1.png "git log screenshot")

If we push all the changes to repository from our first machine, and then pull them from the repository on our alternate machine we will then see those changes when appear if we do a git log.

So the key thing to remember here is that id you want to preform a git revert, it is important to know which repository you want to make the revert on. Is it your local copy, i.e. you made changes and commits but you have not pushed them to your remote,  then you should use `git reflog` to find those changes and the hash. if the changes have been pushed to your remote, then you will need to make use of `git log` to find them and the hash.

### How to revert a git commit

We'll explore both options for reverting changes to our repositories.  At his point in our sample directory we have a number of files  which we will now make use of to illustrate the functionality of git revert.

#### How to use git revert on local repository

Lets go ahead and add some additional files to our repository.

In the first scenario I am going add an additional file, then commit these changes to our local repository but we will push them to our remote repository.

```shell
   
cat > test3.md
This is the content for the test3 

# You should use ctrl + d to get back to the terminal



git add test3.md
git commit -m "This is will be the commit we want to revert"
```

Next we will create another file 

```shell
   
cat > test4.md
This is the content for the test4 

# You should use ctrl + d to get back to the terminal




git add test4.md
git commit -m "This is the additional commit"
```

We will use `git reflog` to see the changes to the local repository and to get the hash code of the change we want to revert. In our case we want to revert the one we mentioned in the comments that we will be reverting.

![git reflog local change](/uploads/git-revert-2.png "git reflog local change terminal window")



We can now simply revert our changes by using git revert as follows

```shell
git revert 708efa8

```
