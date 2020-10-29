---
title: Source Code Repository Design Considerations
description: Learn more about what factors to consider when creating and designing a source code repository for your project
summary: A discussion of the two most widely adopted source code management repository strategies in the software development industry
keywords:
  - git
  - mono repository
  - multi repository
  - mono repository vs multi repository
feature:
  image: /uploads/posts/git/git-tutorials.jpg
  alt: Advanced git configuration options
cardImage:
  image: /uploads/twitter/git/source-code-repository-design-considerations.jpg
  alt: Advanced git configuration options
date: 2020-10-07T17:31:47.672Z
author: garywoodfine
tags:
  - git
  - linux
categories:
  - software-development
---

In [How to create a git repository](https://geekiam.io/how-to-create-a-git-repository/ "How To Create A Git Repository | Geek.I.Am")
we seen how it easy it is to create a new git repository and some of the configuration aspects you should consider.  We also
examined some [advanced git configurations](https://geekiam.io/advanced-git-configuration-options/ "Advanced Git Configuration Options | Geek.I.Am") options to help improve your 
you inter-activity and productivity using Git. We also learned that Git is extremely popular with software developers because
it enables them to work disconnected because they do not need to connected to central server.  However, it important
to realise that Git is has been purposely designed for effective team collaboration and there are some important criteria
to consider when creating your Git repository.

A key point to keep in mind when beginning to work with Git is that it has designed to be used as a set of **many 
small repositories** . A mono repository strategy can be implemented using Git, however there are a number of aspects
to consider.

In this post, we will take high level overviews of both strategies to get an idea of when and where to use each.

## Multi Repository vs Mono Repository the new Tabs vs Spaces

Programmers have been debating the Tabs vs Spaces argument for years. Basically the argument revolves around how 
developers should indent their code.  Should they use Tabs or spaces.  One might think this is an easy solution,
get any number of developers in a room and bring up the point and you're likely to experience a lively debate. There 
are also many forums and bulletin boards full of the argument. Some programming languages mandate tabs others mandate 
spaces and the war rages.

The Multi Repository and Mono Repository debate, is pretty much in the same boat. The mono repository is a source 
control pattern where all the source code is kept in a single repository. It is believed that this approach makes it 
relatively simple to get all employees access to everything in one shot. Just clone it down, and done. 

The Multi repository approach on the other hand, refers to organizing your projects each into their own 
separate repositories. Each project has its own repository, these repositories can still be broken down further.

### Mono Repository
One of the [biggest proponents of Mono Repository is Google](https://cacm.acm.org/magazines/2016/7/204032-why-google-stores-billions-of-lines-of-code-in-a-single-repository/fulltext "Why Google Stores Billions of Lines of Code in a Single Repository | Communications of the ACM"), 
who adopted a centralised source control system and all Google Employees work on a shared codebase and all software 
assets are stored in a single shared repository. Google have also custom-built their own source code repository, and 
a whole raft of custom build tools to support working with a mono repository.

Google's homegrown version-control system hosts one large codebase visible to, and used by, most of the software 
developers in the company. The centralized system is the foundation of many of Google's developer workflows. 

The Google codebase includes approximately one billion files and has a history of approximately 35 million commits 
spanning Google's entire 20+ year existence.  The repository contains 86TB of data, including approximately two billion 
lines of code in nine million unique source files. The total number of files also includes source files copied into 
release branches, files that are deleted at the latest revision, configuration files, documentation, and supporting 
data files.

As you might expect, there is no chance in hell, that any developer at Google, is going to download the entire Google 
mono repository to their laptop. 86 TB of data is going to take a long time to download, then of course there are the 
storage problems, disk space is cheap these days, but I still haven't seen any laptops advertising 86 TB+ of storage
space as standard.

Google's codebase is shared by more than 25,000 Google software developers from dozens of offices in countries around 
the world. On a typical workday, they commit 16,000 changes to the codebase, and another 24,000 changes are committed 
by automated systems. Each day the repository serves billions of file read requests, with approximately 800,000 queries
 per second during peak traffic and an average of approximately 500,000 queries per second each workday. Most of this 
 traffic originates from Google's distributed build-and-test systems.
 
 Google chose the monolithic-source-management strategy in 1999 when the existing Google codebase was migrated from 
 CVS too Perforce. Early Google engineers maintained that a single repository was strictly better than splitting up the 
 codebase, though at the time they did not anticipate the future scale of the codebase and all the supporting tooling 
 that would be built to make the scaling feasible.
 
 The investment required to continue scaling the centralized repository has grown, Google leadership occasionally 
 considered whether it would make sense to move from the monolithic model. Despite the effort required, Google 
 repeatedly chosen to stick with the central repository due to its advantages.
 
 The monolithic model of source code management is not for everyone. It is best suited to organizations like Google, 
 with an open and collaborative culture. It would not work well for organizations where large parts of the codebase 
 are private or hidden between groups.
 
 [Facebook have also added to the Mono Repository debate](https://engineering.fb.com/core-data/scaling-mercurial-at-facebook/ "Scaling Mercurial at Facebook | Facebook Engineering")
 and even speak of the challenges and engineering effort they have had to throw at supporting their mono repository.
 
 Examples of companies using Mono Repository:
 * Google
 * Microsoft
 * Facebook
 * Twitter
 * Etsy
  
#### What is a Mono Repository

> a monorepo repository is a software development strategy where code for many projects is stored in the same repository
 
 The software industry has varying definitions for a mono repository, however principally what they all seem to revolve 
 around some similar attributes:
 
* A repository that contains more than 1 Logical project
* The project are mostly likely unrelated, loosely connected or can be connected, in some cases they don't even need to 
be connected.

![Mono Repository ](/uploads/mono-repository.png "Mono Repository Example")

#### Advantages of a Mono Repository

##### Simplified Organisation
Projects are organised and grouped together in a whichever logically consistent approach required.  This may have a side effect of providing an easier mechanism to navigating projects,  as if everything is on a network-based
file system. 

##### Simplified Dependencies

In Mono-Repo's there is a usually a mechanism for versioning and specifying dependencies. However, the reality is, this 
mechanism is usually cumbersome and involve a lot of overhead.

##### Tooling
The big attraction to Mono-Repo's is that usually easy for teams and organisation to develop their own internal custom 
build and deploy tools.

  
### Multi Repository

 The Linux kernel is a prominent example of a large open source software repository containing approximately 
 15 million lines of code in 40,000 files.
 
The Linux kernel is the main component of a Linux operating system and is the core interface between computer 
hardware and processes. It communicates between the 2, managing resources as efficiently as possible.
   
The kernel, is invisible to the user, working in its own little world known as kernel space,
allocating memory and keeping track of file storage. What the user sees—like web browsers and files—are known 
as the user space. These applications interact with the kernel through a *System Call Interface*. All these applications 
etc for Linux are developed by other teams, company's, organisations, individual developers etc. They may never need to
even see the Linux Kernel source code. 

A Linux Distribution could be considered an example of a Multi Repository approach, because for the most part most 
distributions never have to actually have to have the Kernel source code within their source code,  they only ever a 
dependency on the compiled kernel.

In fact, taking a look at [Redhat on Github page](https://redhatofficial.github.io/#!/main "RED HAT ON GITHUB | Red Hat") will
provide a much more holistic view of a multi repository approach, there are literally hundreds of repositories all providing
some features, functionality or value to Linux but each has its own repository or several associated repository.

#### What is a Multi Repository?

>  Applications made of several  microservices defined within separate repositories. 

A Multi repository strategy refers to organizing  each of your projects into their own separate self-contained 
repositories.

The Multi Repository is popular among organisations who are developing a Micro-Service or Service Oriented stack.

Microservices — also known as the microservice architecture — is an architectural style that structures an application 
as a collection of loosely coupled services, which implement business capabilities. The microservice architecture 
enables the continuous delivery/deployment of large, complex applications. It also enables an organization to evolve 
its technology stack. 

The main reason behind micro-service architecture is to release software faster, and to create small teams to develop 
and deliver a single service. Teams are responsible for managing the whole life cycle of the micro service responsibility 
from development to delivery and maintenance. 

Creating separate repository for different service make sense because a team can then concentrate on a particular 
repository and maintain separate development and release processes.
 
Using a multi repository approach helps teams too:

* **Clear ownership:**  The team owns a service and clearly responsible for independently developing and deploying the 
full stack of that microservice.

* **Smaller code base:** Separate repositories for a service leads to smaller code base and lesser complexity 
during code merge.

* **Narrow clones:** DevOps and automated build and releases, smaller code base leads to considerably lesser code 
download/clone time, that leads to faster build and deployments.

 









