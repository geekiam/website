---
title: Implementing trustless authentication with NodeJS
description:  How to implement NUID trustless authentication using node.js
summary: "How to guide to implement NUID trustless authentication using node.js"
keywords:
  - trustless authentication
  - what does trustless authentication mean
  - trustless authentication using public key cryptography
  - trustless authentication using zero-knowledge proofs
feature:
  image: /uploads/posts/code/authentication-tutorials.svg
  alt:  How to implement NUID trustless authentication using node.js
cardImage:
  image: /uploads/twitter/terminal/what-is-wget.jpg
  alt:  How to implement NUID trustless authentication using node.js
date: 2020-12-02T17:30:00.644Z
author: garywoodfine
tags:
  - authentication
  - javascript
  - nu_id
  - IAM
categories:
  - software-development
---

In [What is Trustless Authentication](https://geekiam.io/what-is-trustless-authentication/ "What Is Trustless Authentication") 
we learned about the driving principles of Trustless Authentication and what makes it different from the more  traditional
Identity and Access Management (IAM) systems available on the market.

In this post we are going to explore how to implement [NUID Trustless Authentication API](https://nuid.io/#/docs "NUID Documentation") in NodeJS based web 
application. In order to following along with this tutorial you will need to [sign up to the NUID Developer Portal](https://portal.nuid.io/login) 

You may also want to take the opportunity to register an account with [Fauna - the data API for client-serverless applications](https://docs.fauna.com/fauna/current/start/cloud)
because we'll be using it for our back-end database.

### create a project 
The following steps will create a simple project folder: Essentially we will be creating a basic nodejs project, 
git repository, Github remote repository.

Some steps below have been further explained in the following articles:
* [How To Create A New Github Repository Using The Terminal](https://geekiam.io/how-to-create-a-new-github-repository-using-the-terminal/ "How To Create A New Github Repository Using The Terminal | Geek.I.Am")
* [How To Automate Creating Gitignore Files](https://geekiam.io/how-to-automate-creating-gitignore-files/ "How To Automate Creating Gitignore Files | Geek.I.Am")

```shell
mkdir trustless-auth && cd trustless-auth
npm init -y
gitignore node
touch README.md
git init
gh repo create Geek-I-AM/trustless-auth
```


### Install Dependencies 
In order to create our simple project, we will need to install the following dependencies.

```shell
npm i faunadb @nuid/zk node-fetch express body-parser dotenv 
```

### Create a simple Node Webserver

We now have all the dependencies we need installed, we can now start developing the basic skeleton of our application.

We'll iniitally create a very simple node based webserver that we will use to serve our application. Add new file
to our repository and name it `index.js`, then add the following code to create our webserver.


```javascript
const bodyParser = require('body-parser');
const express = require('express');

const DEFAULT_PORT = process.env.DEFAULT_PORT || 8001;
const HOST = process.env.HOST || '0.0.0.0';

const app = express();

app.use(bodyParser.json())

app.listen(DEFAULT_PORT, HOST, err => {
    if (err) {
        return console.log(err);
    }
    console.log('\n\tStarting server...');
    console.log(`Running locally at ${HOST}:${DEFAULT_PORT}`);
});
```

We can now test our webserver, works by running `node index.js` in our terminal window, then we'll see our simple 
webserver will start up.

![Simple Web server](/uploads/trustless-auth-terminal.png "Trustless Authentication")

