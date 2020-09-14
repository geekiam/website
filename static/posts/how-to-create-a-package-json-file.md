---
title: A deep dive on the package.json file
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
  - yarn
  - npm
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

### How to create `package.json`

#### Manually creating a package.json file
 
It is possible to create a `package.json` manually by creating by simply JSON format text file and adding the required fields and whichever other fields you desire. 

#### Package.json required fields

There are only two mandatory directives that all `package.json` must contain:

*  **name** : package’s name, and must be lowercase and one word, and may contain hyphens and underscores.
* **version** : field must be in the form x.x.x and follow the [semantic versioning guidelines](https://docs.npmjs.com/about-semantic-versioning).

The below is an example of the simplest `package.json` file possible

```javascript
{
  "name": "simple-package",
  "version": "1.0.0"
}

```

#### Creating a package.json with a package management tool

The most common and popular why of creating a `package.json` file is by making use of a package management tool. Two of the most popular and common package management tools available are [npm](https://docs.npmjs.com/about-npm/) and [yarn](https://yarnpkg.com/getting-started).

```sh
### Create a package.json using npm
npm init

### Create a package.json using yarn
yarn init
``` 

When creating a `package.json` file with a package management tool some additional optional directives are included to help others who will find your project to understand it by providing some additional information like the `author`, `contributors`, `homepage` and `repository` fields.

### Optional Directives for package.json files
* **Description:** A bried description of the node.js project to provide relevant detail about the module\project.

* **Entry point:** refers to the file where the application starts, this can be any JavaScript file that should be executed first.

* **Contributors:** names of all the developers and the people who have contributed to this projec.

* **Keywords:** keyword of the project in the Package.json file. Used to index the project on relevant package management repositories for discovery.

* **Author:** Developer name, company and email address.