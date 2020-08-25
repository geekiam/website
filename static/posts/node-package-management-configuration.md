---
title: Node package management configuration
description: How to add project specific node package management configuration options
summary: How to add project specific node package management configuration options
Keywords: node
feature:
  image: /uploads/node-js-736399.svg
  alt: Node Package Management
date: 2020-08-21T14:51:28.497Z
author: gary-woodfine
tags:
  - javascript
  - nodejs
  - node
  - yarn
  - npm
categories:
  - software-development
---
When developing software applications, it is considered good practice, to separate functionality into separate, interchangeable, isolated modules containing everything necessary to execute only the desired functionality.

> In modular design, a software system, is decomposed into a collection is decomposed into a collection of modules that are relatively independent. Modules can take many forms, such as classes, sub-systems or services.
>
> [A Philosophy of Software Design - John Ousterhout ](https://amzn.to/31nRGkH)

Modules are referred to by terminology across varying programming languages such as in .net, C++ they are called assemblies, or in languages such as Go, Dart, Java and JavaScript they are referred to as packages.

### What is a package

A package is basically a folder that contains scripts that can be run and used by JavaScript applications, which is to say that any folder that has some JavaScript code could basically be considered package, also commonly referred to as a Module.

### What is a Package Manager

Package managers enable Node and JavaScript developers to easily share and re-use code across projects as well as share packages and dependencies with other developers.

A package manager or package-management system is a collection of software tools that automates the process of installing, upgrading, configuring, and removing computer programs or modules for operating systems or software projects in a consistent manner

Two of the most popular package management systems for JavaScript projects are 

* NPM (Node Package Manager)
* yarn 

### What is npm

npm is a package manager for the JavaScript programming language. It is the default package manager for the JavaScript runtime environment Node.js. It consists of a command line client, also called `npm`, and an online database of public and paid-for private packages, called the npm registry.

npm can manage packages that are local dependencies of a particular project and  globally-installed JavaScript tools. 

When used as a dependency manager for a local project, npm can install, in one command, all the dependencies written and listed in the `package.json` file. Each dependency can specify a range of valid versions using the semantic versioning scheme, allowing developers to auto-update their packages while at the same time avoiding unwanted breaking changes.

npm also provides version-bumping tools for developers to tag their packages with a particular version and also provides the `package-lock.json` file which has the entry of the exact version used by the project after evaluating semantic versioning in `package.json`.

in March 2020 npm inc, the company behind npm was acquired by Github.

### What is yarn

Yarn is a package manager for your code. It allows you to use and share code with other developers quickly, securely, and reliably. Yarn allows you to use other developers' solutions to different problems, making it easier for you to develop your software.

Yarn was developed by a collaborative effort including Facebook, Google, Exponent and Tilde. Its primary focus was aimed at solving a handful of problems experienced by software development teams when using npm:

* Installing packages wasn't fast and consistent enough
* Security concerns, due in part npm allowed packages to run code on installation.

### How to install a node package manager

When installing node, npm is usually installed by default. 

The following links offer great instructions on how to install Node using Node Version Manager

* [Install Node.js via Node Version Manager on Ubuntu](https://garywoodfine.com/install-node-js-via-node-version-manager-on-ubuntu/)
* [Install nodejs with nvm on OSX](https://garywoodfine.com/install-nodejs-nvm-osx/) 

If you would like to start making use of yarn it will require you to install it on your system.  [Detailed instructions are available](https://classic.yarnpkg.com/en/docs/install) 

I will cover installation on the two operating systems I use i.e. Ubuntu / Mac OSX

#### How to install Yarn on Ubuntu

```sh
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list

sudo apt update && sudo apt install --no-install-recommends yarn
```

#### How to install yarn on Mac OSX

If you have Homebrew installed on your Mac OSX you can use it to easily install yarn. [How to install Homebrew on Mac OSX](https://garywoodfine.com/install-homebrew-mac/)

```sh
brew install yarn
```

### npm vs yarn ?

The developers microcosm, often consists of differing opinions and preferences, which in almost all cases leads to tribalism. In some cases it can be difficult to get any two developers to agree on the same aspects of any given toolkit. 

Developers will have different perspectives on which is the best software development language to use and there are different tribes revolving around Java, C#, Go, Python, JavaScript, Erlang, Haskell, Pascal etc. Even within those tribes they can be further broken to different tribes, for instance in the JavaScript community tribes form around the choice of Frameworks,  Libraries, Language Versions, Editors, IDE's even whether Light or Dark themes on editors on editors and IDE's.

One has to also remember that like most things in software development, things are constantly evolving and changing. What used to an outstanding feature in one suddenly becomes an additional feature or implementation in another.  What was yesterdays key advantage becomes tomorrows equivalent feature.

Communities constantly evolve, change and adapt. Package  Managers make no exception and there are differing and conflicting opinions as to what makes a good or bad package management system.

A couple of years ago, Yarn had a few completely outstanding features that in some instances made it a good choice.  However, npm has also continued to evolve and what used to be considered its weaker points have been addressed and some issues have been resolved.

I personally, don't really have any strong opinions which makes either a superior choice and I often found myself using either at any given time. Some projects I will use npm and others I will use yarn.  I have been known to use both in the same project, but will admit this possibly should be avoided as it can cause confusion.

At the end of the day, one should choose whichever Package Manager one feels most comfortable with, or failing that whichever Package Manager has been previously mandated by the project.  I don't tend to lose too much sleep over my choice of package management system, I know others may actually stay up till the small hours of the morning debating the finer points of their choice on various social media platforms. 

At the end of the day, they both preform and solve the same fundamental problem, and for the scope of this article we will focus on these basic issues and approaches using both.

### What is the package.json

A `package.json` is a JSON format file which exists in the root of a Node/JavaScript project. The `package.json` file is a manifest of files and configuration for your project. It can do a lot of things and in some instances these could appear completely unrelated.  Essentially all the metadata that is relevant to a project.

It's a central repository of configuration for tools, for example. It's also where `npm` and `yarn` store the names and versions for all the installed packages.

When it comes to package management the two important areas of the `package.json` file are:

* `dependencies` sets a list of packages installed as dependencies
* `devDependencies` sets a list of npm packages installed as development dependencies
* `engines` sets which versions of Node.js, npm or yarn this package works on.

### How to create a package.json file

It is relatively easy task creating a `package.json` file using either yarn or npm, using either of the terminal commands.

```sh
### Create a package.json using npm
npm init

### Create a package.json using yarn
yarn init
```

Both will result in prompting you to answer various questions about the project you're about to start, by enabling you to provide some basic metadata.

##### npm init

![npm init questionaire](/uploads/geekiam-npm.png "npm init questionaire")

##### yarn init

![yarn init questionaire](/uploads/geekiam-yarn.png "yarn init questionaire")

** Note: If you don't want to be prompted to answer questions and prefer to add the detail later you can use the `-y` switch

```sh

# Npm with the -y switch

npm init -y

# yarn with the -y switch
yarn init -y

```