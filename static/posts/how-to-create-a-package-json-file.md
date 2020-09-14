---
title: How to create a package.json file
description: How to create a package.json to list all dependencies, metadata and
  make your project reproducible across environments
summary: How to create a package.json to list all dependencies, metadata and
  make your project reproducible across environments
keywords:
  - node
  - How to create package.json
  - new package.json file
feature:
  image: /uploads/nodejs.png
  alt: How to create a package.json file
date: 2020-09-14T21:28:34.813Z
author: gary-woodfine
tags:
  - nodejs
  - javascript
categories:
  - software-development
---
In [How to use Package Management In Javascript projects](https://geekiam.io/how-to-use-package-management-in-java-script-projects) we discussed project specific node package management configuration options and also introduced the `package.json` file and how it is used as the configuration management repository.

In this, we will take a deeper dive into the `package.json` and explore it further.

### What is the package.json file

The `package.json` is one of the core components of the Node runtime environment, and it typically included in the project root directory of all node based projects. It is a plain text JSON file which contains the basic metadata, dependencies, configuration and build information about the project.

The `package.json` file:
* Lists the packages your project depends on
* Specifies the version number of your project
* Contains build and environment configuration detail


