---
title: How to create a new Github repository using the terminal
description: "How to create a Github repository from a local terminal Update :
  Create a new repository and upload the data from one application to github all
  using  the terminal"
summary: "How to create a Github repository from a local terminal Update :
  Create a new repository and upload the data from one application to github all
  using  the terminal"
date: 2020-06-20T10:34:39.798Z
author: gary-woodfine
tags:
  - git
  - github
categories:
  - version-control
  - collaboration
---
In [Learn The Basics Of Version Control To Become A Master](https://geekiam.co.uk/learn-the-basics-of-version-control-to-become-a-master/) we discussed the basic principles, use cases and terms regarding version control. You have more than likely now realized that all software projects will require some form of version control.  Even if you are the only developer that will be working on the project, it makes absolute sense to create a version control repository.

Version control systems not only help you in keeping track of changes and overcoming errors whilst coding, but they also help you to keep your code safe and helping ensure you never lose or delete your code.  

GitHub is a code hosting platform for collaboration and version control, which not only enables you and others work together on projects, but it also enables you to safely store your code online, so you don't have to worry about servers and managing them. Despite Github being a for profit company they provide free access to developers to host and share code with over 50 millions other developers world-wide

![Github front page screenshot](/uploads/github-screenshot.png "Github front page screenshot")

[Registering an account with Github](https://github.com/) enables developers to create *Public* and *Private* remote repositories to store their code and access to a whole host of other really useful tools and services.

Github supplies a really easy to use Web Interface and developers can use it to carry out all actions and processes they would typically need just using a browser based interface.  For instance, Creating and updating repositories, reviewing code, creating Pull requests and so forth.  

The web based interface works great, however as developers are more than likely to going to prefer working with Terminal Window, because for most developers this is how they will primarily work with git. Especially when first starting out and learning the basics.

Github also provides a really rich set of Application Programming Interface (API) methods enabling developers to build tools to engage and interact with Github. Developers could use these API's to either build their own custom tools or just choose to interact with Github making use of these tools.

### Create Github repository using the API

It is fairly easy, but unfortunately a verbose to create a Github repository using the API using the terminal window. All that is required is using a library like [CuRL - A command-line tool for transferring data using various network protocols](https://curl.haxx.se/) and reading understanding and remembering the API structure.

In order to use the Github API's you will be required to create a [Creating a personal access token for the command line](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line) 

Once you're registered your Personal Access Token, you can use the following command to create your repository.


```shell
curl -H 'Authorization: token some_token-id' https://api.github.com/user/repos  -d '{"name":"somerepositoryname"}'

```

This is quite a lot to remember, and if you're anything like me you're going to forget this almost immediately.  Fortunately, Github realise most developers have goldfish memories and have spent time developing an easier to use command line tool to help developers called Hub.

### What is Github hub ?

*hub* is a command line tool that wraps git in order to extend it with extra features and commands that make working with GitHub easier.

