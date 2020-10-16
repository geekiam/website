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
  image: /uploads/posts/node/how-to-create-package-json.jpg
cardImage:
  image: /uploads/twitter/node/how-to-create-package-json.jpg
  alt: How to create a package.json file
date: 2020-09-14T21:28:34.813Z
author: gary-woodfine
tags:
  - nodejs
  - javascript
  - yarn
  - npm
  - tutorial
categories:
  - software-development
---
In [How to use Package Management In Javascript projects](https://geekiam.io/how-to-use-package-management-in-java-script-projects) we discussed project specific node package management configuration options and also introduced the `package.json` file and how it is used as the configuration management repository.

In this, we will take a deeper dive into the `package.json` and explore it further.

### What is the package.json file

The `package.json` is one of the core components of the Node runtime environment, and it typically included in the 
project root directory of all node based projects. It is a plain text JSON file which contains the basic metadata, 
dependencies, configuration and build information about the project.

The `package.json` file:

* Lists the packages your project depends on
* Specifies the version number of your project
* Contains build and environment configuration detail

### How to create `package.json`

#### Manually creating a package.json file

It is possible to create a `package.json` manually by creating by simply JSON format text file and adding the required 
fields and whichever other fields you desire. 

#### Package.json required fields

There are only two mandatory directives that all `package.json` must contain:

* **name** : package’s name, and must be lowercase and one word, and may contain hyphens and underscores.
* **version** : field must be in the form x.x.x and follow the [semantic versioning guidelines](https://docs.npmjs.com/about-semantic-versioning).

The below is an example of the simplest `package.json` file possible

```javascript
{
  "name": "simple-package",
  "version": "1.0.0"
}
```

#### Creating a package.json with a package management tool

The most common and popular why of creating a `package.json` file is by making use of a package management tool. Two of
 the most popular and common package management tools available are [npm](https://docs.npmjs.com/about-npm/) and [yarn](https://yarnpkg.com/getting-started).

```sh
### Create a package.json using npm
npm init

### Create a package.json using yarn
yarn init
```

When creating a `package.json` file with a package management tool, typically a questionaire will be launched to ask 
you to provide some additional information about your project.

The information obtained when then be included in optional directives to help others who will find your project to 
understand more about your project by providing some additional information like the `author`, `contributors`, `homepage` and `repository` fields.

### Optional Directives for package.json files

* **Description:** A brief description of the node.js project to provide relevant detail about the module\project.
* **main:** refers to the file where the application starts, this can be any JavaScript file that should be executed first.
* **keywords:** keywords related to the project. Used to index the project on relevant package management repositories 
for discovery.  You typically provide an array of strings to be used in the packages listing on *npm search*
* **author:** Developer name, company and email address. There are two accepted formats for supplying information, by 
either providing it as an JSON object format i.e.

```javascript
"author" : {  "name" : "threenine.co.uk",
              "email" : "hello@threenine.co.uk",
              "url" : "https://threenine.co.uk"
           }
```

or by providing it in a shorthand format on a single string

```javascript
"author" : "threenine.co.uk <hello@threenine.co.uk> (https://threenine.co.uk)"
```

* **contributors:** names of all the developers and the people who have contributed to this project.  The same 
formatting rules as authors apply however by supplying an array of people.

```javascript
"contributors" : [ {  "name" : "Gary Woodfine",
                      "email" : "hello@threenine.co.uk",
                      "url" : "https://garywoodfine.com"
                   },
                   {"Joe Blogs <hello@blogs.com> (https://blogs.com)"}
```

* **license:**  specify a license for your detailing how others are permitted to use your project, and any restrictions 
placed upon it.

```javascript
{
  "name": "simple-package",
  "version": "1.0.0",
  "description": "An short description describing simple-package",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
      "Amazing Software",
      "innovative solution",
      "Technology Education",
      "JavaScript Tutorials"
],
  "author": "geekiam.io <hello@geekiam.io> (https://geekiam.io)",
  "license": "ISC"
}
```

### Additional Optional Directives

There are many more directives you can include to supply even more information regarding your project. The more 
information you provide increases the likelihood of your project being found and even used by others.

* **files :** An array of file patterns that describes the entries included when your package is installed as a 
dependency.  If you omit the field then the default of including all the files in in your directory will be applied.

Alternatively, you can provide an additional `.npmignore` file in the root of your directory or in sub-directories 
detailing which files and directories to exclude.

The `.npmignore` file works just like a `.gitignore`. If there is a `.gitignore` file, and `.npmignore` is missing, 
`.gitignore` contents will be used instead.

* **repository :** Specify the source code repository where your code can be viewed. This is especially helpful for not
 only people who want to contribute to your project but also for people who want to analyse and understand your project 
 before making use of it in theirs.

```javascript
 "repository": {
                "type": "git",
                "url": "git+ssh://git@github.com/threenine/geekiam.git"
               },
```

* **bugs :**  Provides a location of your issue tracker where bugs and issues can be raised.

```javascript
"bugs": {
    "url": "https://github.com/threenine/gridsome-plugin-amazon-onelink/issues"
  },
```

* **scripts :**  Functional metadata of your, which typically takes an object with keys that could be scripts that 
could be executed to build, deploy, test or run your application.

These may be terminal commands, which are put into the scripts field so other developers can document and use them.

Scripts are powerful tools that the npm CLI can use to run tasks for your project. They can do the job of most task 
runners used during development.

### Dependency Management

A typical node application or project may make use of a number of third party modules or applications to extend 
different levels of functionality.

Modules can be used in various areas of your application and bundled into or even excluded in various builds.  It is 
possible to only require some modules for when you're developing an application i.e. Unit Testing Framework, 
Mocking Framework, Linting, code formatting etc.

The `package.json` enables you to define a number of different levels of dependencies and how to add them.  We'll take 
a brief look at the different types of dependencies we can add to a node project.

* **dependencies :**   These are typically known as the **Production Dependencies** of your application, which are the 
mandatory packages required to run your application and modules used throughout your project.

You can add production dependencies using any of the following commands

```sh
### Using npm 
npm install package_name
## or 
npm i package_name
## or
npm i package_name --save-prod

### using yarn
yarn add package_name
## or
yarn add package_name --production
## or
yarn add package_name -P
```

Any of these commands will result in an entry being added to the *dependencies* section in your `package.json`

```javascript
"dependencies": {
    "package_name": "^1.0.0"
  }

```

* **Development Dependencies**  dependencies which are needed during development but are not required during runtime.

```sh
## Using npm
npm i package_name --save-dev 
## or 
npm i package_name -D

## using yarn

yarn add package_name --dev
## or
yarn add package_name -D

```

Any of these commands will result in an entry being added to the *devdependencies* section in your `package.json`

```javascript
"devdependencies": {
    "package_name": "^1.0.0"
  }

```

* **Optional Dependencies**  These are dependencies that will not cause the application to fail if they are not 
included. These may be dependencies that provide additional non-breaking functionality to other dependencies.

```sh
# uisng npm 
npm i package_name --save-optional
## or 
npm i package_name -O

# using yarn
yarn add package_name --optional
## or 
yarn add package_name -O

```
Any of these commands will result in an entry being added to the *optionalDependencies* section in your `package.json`

```javascript
"optionalDependencies": {
    "package_name": "^1.0.0"
  }

```

* **Peer Dependencies ** used when developing a plugin/package for a host tool or package, where you define that the 
project you are developing for will have packages/modules being used in your project.

You won't install that packages but rather just list them, running `npm install` on your package will not actually 
install the packages eoterh.

 
```javascript
"peerDependencies": {
    "package_name": "^1.0.0"
  }
```

* **Bundled Dependencies**  These are array of packages which are bundled when publishing our package.If you want 
certain or all the dependencies bundled together in a single file then you can specify these dependencies under the 
key `bundledDependencies` in your `package.json` file. 

To create a single tarball of all the dependencies mentioned in `bundledDependencies` you issue the command: `npm pack` 
which will create a .tgz file with name like: `bundled_packages.tgz`. 

Users can simply issue the command `npm install` name_of_the_project-`bundled_packages.tgz` to install the project 
bundled dependencies using a single file. 

This approach is used to preserve dependencies and make them available using a single file.

```javascript

"bundledDependencies": [
    'express','request'
  ]

```
### Conclusion
The `package.json` file may at first seem to be nothing more than a simple JSON file and often new developers tend to 
skip learning its importance and how it functions.  

The package managers often hide a lot of the complexity and functionality contained within the `package.json`.  

It is worth taking the time and effort to read [nodejs package.json guide](https://nodejs.dev/learn/the-package-json-guide) 
the official guide to the package.json file.

