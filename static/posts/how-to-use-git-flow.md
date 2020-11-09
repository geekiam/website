---
title: How to use git flow
description: Using git-flow CLI to automate a popular git branching and merging strategy
summary: Using git-flow CLI to automate a popular git branching and merging strategy .
keywords:
  - gitflow
  - git
  - version control
feature:
  image: /uploads/posts/git/how-to-use-git-flow.jpg
  alt: How to use Git Flow
cardImage:
  image: /uploads/twitter/git/how-to-use-git-flow.jpg
  alt: How to use Git Flow
date: 2020-05-10T20:29:50.183Z
author: garywoodfine
tags:
  - git
  - gitflow
  - tutorial
categories:
  - version-control
  - collaboration
---
Git Flow is a popular git branching and merging strategy that was initially defined by [Vincent Driessen](https://nvie.com/about/) in 
his initial article - [A successful Git branching model](https://nvie.com/posts/a-successful-git-branching-model/).
The *Git-Flow* approach has gained popularity over the years, and in some ways has become one of the defacto standards 
to managing software version control projects with git.

*Git Flow* branching model is a git branching and release management workflow that helps developers keep track 
of *features*, *hotfixes* and *releases* in bigger software projects. 

Git-Flow uses Mainline, **develop**, in a single *origin* repository. It uses Feature Branching to coordinate 
multiple developers. Developers are encouraged to use their personal repositories as Collaboration Branch to coordinate 
with other developers working in similar work.

The core branch of git is **master**, in git-flow, *master* is used as a Production Maturity Branch. Git-Flow uses a 
*Release Branch* so that work passes from *develop* through the release branch to *master*. Hotfixes are organized 
through a *Hotfix Branch*.


The workflow consists of a number terminal commands to be used in a [terminal window](https://geekiam.io/what-is-a-terminal-window/) to type and remember,  
which as any developer will tell you has the potential to lead to bugs and mis-implementation! Over the years the 
[git-flow library](https://github.com/nvie/gitflow) evolved which comprises a number git sub-commands to help automate 
parts of the flow to make working with it easier.

![ Gitflow diagram ](/uploads/git-flow-diagram.png "Gitflow diagram")

### When to use Git Flow

There are a number of approaches to working with Git and different Software Development Teams and Organisations will 
certainly have their preferred approach, as with many aspects in software development there is not always the one best 
approach, but there is always the best approach that works for your team or organisation.

Git-Flow is certainly one of those approaches. There are number of aspects about using the approach you should consider 
before implementing the approach within your environment. I'll run through a few of the options, but these are by no 
means a definitive list and are mostly based on my experience. 

#### Project Management Methodology

The first factor to consider is the which Project Management Methodology organisation follows, in my opinion, 
Git-flow works well with *Scrum*, due in part that when using Scrum, teams usually only deploy new code or production 
ready code to the production environment in iteration of cycles, usually between 2 -4 weeks.

It makes sense in this kind of Environment to have 2 Long-Life branches, namely your Main (master) and Develop 
(development) branch.  Developers, will usually create branches from the develop branch, implement whatever task required, 
once complete they will merge their branch into develop.

The *Develop* branch, may be automatically deployed to a staging environment for continuous integration and testing 
purpose. At the end of the iteration and all Quality Assurance tasks are complete, the Develop branch is then merged 
into the Master branch which in turn deploys straight to production, after tagging and marked as release.

#### Size of team(s) 

The git flow process is ideal if you working in a large team or even multiple teams. It may be completely overkill, 
if you're working on a small team or even as an individual contributor. 


#### Repository Structure

Many organisations have differing opinions regarding their Repository structures, some prefer the Mono-Repository - 
where all code for a number of projects which make up an entire solution are kept within one single large repository - 
this typical of enterprise development shops working on a number of line of business applications or bespoke enterprise 
solutions.  Other organisations may prefer smaller application specific repositories or even package related repositories.

In my opinion and experience, Git-Flow is a great fit for large Mono Repositories, because it enables more control over 
which features etc are eventually merged into the main branch. 

When it comes to smaller repositories or even package based repositories, I have found it to be somewhat of an overkill 
and unnecessary bureaucracy.  Although, in some cases I have implemented on smaller projects and it proved to work quite
well.  In most of those cases, I was working on a small projects with an average team size of 4+ and members were 
distributed across a number of different time-zones.  So the workflow provided additional control and enforced a 
common team discipline. 

I have tried to implement it on smaller single contributor projects and in all honesty it proved to cumbersome and 
somewhat unnecessary.

In each of the cases, it may make sense to use other git related workflows. The point to remember is that git flow 
does not cure all organisation or environment issues but it can help resolve some.  

All good consultants will provide you with the old *"It depends"* answer, and it is the same with git flow, it will 
depend on several factors whether implementing it in your organisation or project will be successful or not.  It is not 
a silver bullet, but it will help in some circumstances. 

### How to install Git-Flow

Installing git-flow is relatively easy and available for most Operating Systems.  We will discuss just two of our favourites
but do check out [Installing git-flow](https://github.com/nvie/gitflow/wiki/Installation) if your operating system is 
not listed.

#### Installing Git Flow on Ubuntu

Git-flow is available from the default repositories and can be installed using apt or snap

```shell
sudo apt-get install git-flow
```

#### Installing Git Flow on Mac OSX

Git-Flow is available on Mac OSX using the Homebrew.  [Install Homebrew on Mac OSX](https://garywoodfine.com/install-homebrew-mac/)

```shell
brew install git-flow
```

### Initialise a repository to use Git-Flow

To start using git-flow in your repository by using it’s init command. You can use it in existing projects, or by 
creating a new one.  `git-flow` is simply a wrapper around existing git commands, so the init command doesn’t change anything in your repository 
                     other than creating branches for you. 

```shell
git flow init
```

 Git flow will respond with the following details

```shell
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

```shell
 git branch
* develop
  master
```

### How to use git flow feature branches

Making use of git-flow enables the developing and managing features in your software projects with ease.

 To start a new feature , use feature start with the name of your new feature (in this case, “hello-world”):

```shell
git flow feature start hello-world

Switched to a new branch 'feature/hello-world'

Summary of actions:
- A new branch 'feature/hello-world' was created, based on 'develop'

- You are now on branch 'feature/hello-world'

Now, start committing on your feature. When done, use:

    git flow feature finish hello-world
```

A new feature branch has been created, and you’re automatically switched to it. Implement your feature on this branch 
while using git like you normally would, making use of the usual git commands such as `git add`, `git commit` and 
`git push`.

Once you've finished implementing your desired feature you can commit close the feature using the feature finish.

```shell
 git flow feature finish hello-world

Switched to branch 'develop'
Updating 9060376..00bafe4
Fast-forward
 hello-world.txt | 1 +
 1 file changed, 1 insertion(+)
 create mode 100644 hello-world.txt
Deleted branch feature/hello-world (was 00bafe4).

Summary of actions:
- The feature branch 'feature/hello-world' was merged into 'develop'
- Feature branch 'feature/hello-world' has been removed
- You are now on branch 'develop'
```

Your feature branch will be merged and you’re taken back to your develop branch. Internally, git-flow used 
`git merge --no-ff feature/hello-world` to make sure you don’t lose any historical information about your 
feature branch before it is removed.

### How to create versioned releases with git-flow

To create tagged and versioned releases, you can use git-flow’s release branches to start a new branch when you’re 
ready to deploy a new version to production.

Like everything else in git-flow, you don’t have to use release branches if you don’t want to. 

if you to prefer to manually `git merge --no-ff develop` into master without tagging? No problem. However, if you’re working 
on a versioned API or library, release branches might be really useful, and they work exactly like you’d expect.

```shell
git flow release start 0.1.0

Switched to a new branch 'release/0.1.0'

Summary of actions:
- A new branch 'release/0.1.0' was created, based on 'develop'
- You are now on branch 'release/0.1.0'

Follow-up actions:
- Bump the version number now!
- Start committing last-minute fixes in preparing your release
- When done, run:

     git flow release finish '0.1.0'
```

Increment the version number and commit all the code required to release your project in the release branch. Try to 
refrain from adding any last minute fixes, but if you do, git-flow will make sure everything is correctly merged 
into both master and develop. 

Once you've finished adding all your code then, finish the release:

```shell
git flow release finish 0.1.0
Switched to branch 'master'
Merge made by the 'recursive' strategy.
 authentication.txt | 1 +
 1 file changed, 1 insertion(+)
 create mode 100644 authentication.txt
Deleted branch release/0.1.0 (was 1b26f7c).

Summary of actions:
- Latest objects have been fetched from 'origin'
- Release branch has been merged into 'master'
- The release was tagged '0.1.0'
- Release branch has been back-merged into 'develop'
- Release branch 'release/0.1.0' has been deleted
```

git-flow pulls from origin, merges the release branch into master, tags the release and back-merges everything 
back into develop before removing the release branch.

You’re still on master, so you can deploy before going back to your develop branch, which git-flow made sure to update 
with the release changes in master.

### How to apply Hot Fixes to production code

The master branch always in sync with production or your live release, therefore it is easy to quickly fix any issues 
and deploy them straight to production.

For example, if your CSS aren’t loading on production, you’d roll back your deploy and start a hotfix branch:

```shell
git flow hotfix start css-patch-fix
Switched to a new branch 'hotfix/css-patch-fix'

Summary of actions:
- A new branch 'hotfix/css-patch-fix' was created, based on 'master'
- You are now on branch 'hotfix/css-patch-fix'

Follow-up actions:
- Bump the version number now!
- Start committing your hot fixes
- When done, run:

     git flow hotfix finish 'css-patch-fix'
```

Hotfix branches are a lot like release branches, except they’re based on master instead of develop. You’re 
automatically switched to the new hotfix branch so you can start fixing the issue and incrementing the minor version 
number.

Once you finished applying your hot fix, you can simply

```shell
git flow hotfix finish css-patch-fix
Switched to branch 'master'
Merge made by the 'recursive' strategy.
 css-patch-fix.txt | 1 +
 1 file changed, 1 insertion(+)
 create mode 100644 css-patch-fix.txt
Switched to branch 'develop'
Merge made by the 'recursive' strategy.
 css-patch-fix.txt | 1 +
 1 file changed, 1 insertion(+)
 create mode 100644 css-patch-fix.txt
Deleted branch hotfix/css-patch-fix (was 08edb94).

Summary of actions:
- Latest objects have been fetched from 'origin'
- Hotfix branch has been merged into 'master'
- The hotfix was tagged '0.1.1'
- Hotfix branch has been back-merged into 'develop'
- Hotfix branch 'hotfix/css-patch-fix' has been deleted
```

Similar to when finishing a release branch, the hotfix branch gets merged into both master and develop. The release 
is tagged and the hotfix branch is removed.

### Conclusion
Although git-flow is a fairly popular choice, it's common to find organisations and teams to claim they are using 
git-flow, but in reality are doing something quite different. Often their actual approach is closer to GitHub Flow, or 
some mixture of the two!


