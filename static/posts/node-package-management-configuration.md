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
  - software_development
---
When developing software applications, it is considered good practice, to separate functionality into separate, interchangeable, isolated modules containing everything necessary to execute only the desired functionality.

>In modular design, a software system, is decomposed into a collection is decomposed into a collection of modules that are relatively independent. Modules can take many forms, such as classes, sub-systems or services.
> 
>[A Philosophy of Software Design - John Ousterhout ](https://amzn.to/31nRGkH)
 
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

### What is the package.json

A `package.json` is a JSON format file which exists in the root of a Node/JavaScript project. The `package.json` file is a manifest of files and configuration for your project. It can do a lot of things and in some instances these could appear completely unrelated.  Essentially all the metadata that is relevant to a project.

It's a central repository of configuration for tools, for example. It's also where `npm` and `yarn` store the names and versions for all the installed packages.

When it comes to package management the two important areas of the `package.json` file are:

* `dependencies` sets a list of packages installed as dependencies
* `devDependencies` sets a list of npm packages installed as development dependencies
* `engines` sets which versions of Node.js, npm or yarn this package works on.

### How to create a package.json file

