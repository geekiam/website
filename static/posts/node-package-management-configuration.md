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
categories:
  - software_development
---
Package managers enable Node and JavaScript developers to easily share and re-use code across projects as well as share packages and dependencies with other developers.

### What is a package

A package is basically a folder that contains scripts that can be run and used by JavaScript applications, which is to say that any folder that has some JavaScript code could basically be considered package, also commonly referred to as a Module.

### What is a Package Manager

A package manager or package-management system is a collection of software tools that automates the process of installing, upgrading, configuring, and removing computer programs or modules for operating systems or software projects in a consistent manner

Two of the most popular package management systems for JavaScript projects are 
* NPM (Node Package Manager)
* yarn 

### What is npm

npm is a package manager for the JavaScript programming language. It is the default package manager for the JavaScript runtime environment Node.js. It consists of a command line client, also called `npm`, and an online database of public and paid-for private packages, called the npm registry.

npm can manage packages that are local dependencies of a particular project and  globally-installed JavaScript tools. 

When used as a dependency manager for a local project, npm can install, in one command, all the dependencies written and listed in the `package.json` file. Each dependency can specify a range of valid versions using the semantic versioning scheme, allowing developers to auto-update their packages while at the same time avoiding unwanted breaking changes.

npm also provides version-bumping tools for developers to tag their packages with a particular version and also provides the `package-lock.json` file which has the entry of the exact version used by the project after evaluating semantic versioning in `package.json`.

### What is yarn

Yarn is a package manager for your code. It allows you to use and share code with other developers quickly, securely, and reliably. Yarn allows you to use other developers' solutions to different problems, making it easier for you to develop your software.

Yarn was developed by a collaborative effort including Facebook, Google, Exponent and Tilde. Its primary focus was aimed at solving a handful of problems experienced by software development teams when using npm:

* Installing packages wasn't fast and consistent enough
* Security concerns, due in part npm allowed packages to run code on installation.