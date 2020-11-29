---
title: How to add files to a git repository
description: A tutorial to guide software developers through how to add files to a git repository.
summary: A tutorial to guide software developers through how to add files to a git repository
keywords:
  - git
  - how to add files to a git repository
feature:
  image: /uploads/posts/git/git-tutorials.svg
  alt: How to add files to git repository
cardImage:
  image: /uploads/twitter/git/how-to-add-files.jpg
  alt: Advanced git configuration options
date: 2020-10-05T17:31:47.672Z
author: garywoodfine
tags:
  - git
  - linux
  - tutorial
categories:
  - software-development
---

Once you have [installed git on your Linux](https://geekiam.io/how-to-install-git-on-linux/ "How to install git on Linux | Geek.I.Am") and
and have either [initialised or cloned your repository](https://geekiam.io/how-to-create-a-git-repository/ "How to create a git repository | Geek.I.Am") to are then
ready to start creating, editing, deleting and updating files.  

There are circumstances when working with git that you may want to exclude certain files from being managed by git and for that 
purpose we generally [create git ignore files](https://geekiam.io/how-to-create-git-ignore-files/ "How To Create Git Ignore Files | Geek.I.Am"), 
which is essentially a text-based file that developers can use to list specific files, file types and folders to be 
excluded from being added or managed by a git repository.

We will now learn how files are added to a git repository and understand what git does internally to track and manage 
these files.  

Any files inside the [working directory](https://geekiam.io/the-git-promotion-model/ "The git promotion model | Geek.I.Am") can be either
known or unknown to Git. The files unknown to Git can be either untracked or ignored. 

In [how to create a git repository](https://geekiam.io/how-to-create-a-git-repository/ "How to create a git repository | Geek.I.Am" ) the
result of either a `git init` or a `git clone` results in the creation of a `.git` folder, where git stores all the files it needs 
to manage the repository.  We also learned that we don't necessarily need to connect to a remote server to be able to work
with git, we are able to carry out all git based repository operations without the need to connect to a remote server. In most cases,
the only time you need to connect to remote repository is when you want to synchronise and share with other users.

We will now expand further on the work we did in [how to create a git repository](https://geekiam.io/how-to-create-a-git-repository/ "How to create a git repository | Geek.I.Am" ) 
and we are going to add our first file to that repository.

Lets create our first file, which will be a simple readme providing some description and regarding our project.
Initially we'll do this using terminal command, for brevity.
```shell script
echo "# Geek.I.Am Git tutorial" > README.md
```

if we now examine the root of the working directory we will see the `README.md` file has been created. At this point,
even though the file exists in your working directory it is still not been tracked by Git.  We now need to notify git that
we would like to start tracking this file. To do this, we can simply use the following command to explicitly add the file.

```shell script
git add README.md 
```
This command adds the file to the Staging area, as we discussed in [The Git Promotion Model](https://geekiam.io/the-git-promotion-model/ "The Git Promotion Model | Geek.I.Am" ).
In the diagram below, you'll see that the git add command takes the file from the working directory and puts it into the staging area.

![git add ](/uploads/git-add-swimlanes.png "git add")

If we use the `git status` command git will let us know that it is aware of a new file, but it has not been committed to
the local repository and also provide us with instructions on how we can remove the file if necessary.

![git add status ](/uploads/git-add-status.png "git add status")

We can go ahead and commit this file to our local repository and provided a message what we did. We discuss committing files in
detail in [How to commit files to a local git repository](https://geekiam.io) 

```shell script
git commit -m "Added initial read me file"
```

If we do a `git status` after the commit Git will inform us that now there is nothing to commit and our working tree is 
clean.

![git add commit  ](/uploads/git-add-commit-status.png "git add commit")

### What is a working tree?

In Git 2.5 introduced the concept of a `Work Trees`. The concept behind work trees is that you can have multiple, separate
working directories all connected to the same staging area and local repository.  Your working directory in Git terminology
is the *main working tree* . You can now also create linked working trees with the `git worktree add`.

Git stores the information about working trees in the Git directory area. The working tree information is stored in 
`.git/worktrees/<name of worktree>`.  A repository has one main working tree and zero or more linked working trees.

### Adding more files

As a software developer, you'll typically be developing new functionality or working on bugs while creating, editing 
and deleting any number of files during an average day. You don't want to be having to remember all these files and 
adding them one by one when you're ready to add them to your staging area. Fortunately, Git has some nifty short cuts 
for you to use.

Lets run through a typical scenario, by simulating a developer starting a new Node.Js development project.

The step we will undertake is to create a `.gitignore` file which you can learn more about in [How To Create Git Ignore Files](https://geekiam.io/how-to-create-git-ignore-files/ "How to create Git ignore files | Geek.I.Am") 
we will use the technique in [How To Automate Creating Gitignore Files](https://geekiam.io/how-to-automate-creating-gitignore-files/ "How To Automate Creating Gitignore Files | Geek.I.Am").

We will also initialise a new node project and add a new JavaScript file which will contain a very simple "Hello World!" program.
```shell script
gitignore Node
npm init -y
 echo "console.log('Hello World');" > index.js
```

During a simple process we've created 3 files.  We can add all of these files to the staging area using a Git switch `--all`

```shell script
 -A, --all, --no-ignore-removal
           Update the index not only where the working tree has
           a file matching <pathspec> but also where the index
           already has an entry. This adds, modifies, and
           removes index entries to match the working tree.

           If no <pathspec> is given when -A option is used,
           all files in the entire working tree are updated
           (old versions of Git used to limit the update to the
           current directory and its subdirectories).

```

We can just go ahead to add all the files to our staging area as follows

```shell script
git add -A
```

We could  also use another Git shortcut
```shell script
git add .
```
However, it is important to remember that this command stages new files and modifications, **without deletions** which
our particular case is valid because we have not deleted any files.


It is important to remember that the `git add ` command only adds the content of the specified files at the time the add
command was run; if we continue to add and edit files after running the command then you will need to run the command 
again to ensure the changes are included in the next commit.

If you want to check anytime what files have been included you can, as we did in the example previously, execute the 
`git status` command. The `git status` command can be used to obtain a summary of which files have changes 
that are staged for the next commit.

The `git add` command will not add ignored files by default. If any ignored files were explicitly specified on the 
command line, git add will fail with a list of ignored files. Ignored files reached by directory recursion or 
filename globbing performed by Git will be silently ignored. The `git add` command can be used to add ignored files 
with the `-f` (force) option.

#### Add Modified and Deleted Files
`Git add` enables software developers with a variety of options. In some cases you may only want to stage modified 
and deleted files, and not stage the newly created file. This use case can be actioned with the below command:
```shell script
git add -u
```

#### Add files by wildcard
Git allows us to add all the same pattern files at once.  Suppose I want to add all JavaScript files and CSS files, 
then we can use pattern .js or .css. To do so, we will run the command as follows:

```shell script
git add *.js *.css
```

#### Git add undo

You can undo any`git add` operation using the `git reset` command. To undo adding file simply use the following command.
```shell script
git reset <filename>
```

### Summary

We explored the `git add` command to understand how it fits into the git command workflow and it purpose in the chain. 
We also learned that the `git add` command does not add a file to a repository, it only adds to the staging area and in 
order to ensure that a file makes it to the repository we need to run the `git commit` command, which we will explore 
further in [How to commit files to a repository](https://geekiam.io).
