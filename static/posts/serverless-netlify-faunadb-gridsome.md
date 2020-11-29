---
title: How to build serverless with Netlify, FaunaDB and Gridsome
description:  A tutorial demonstrating how to build a Gridsome based website with CRUD backend using Netlify serverless functions and FaunaDB as the datastore. 
summary: Explore how to develop using netlify functions and FaunaDB to develop a CRUD API for a Gridsome Static generated website.
keywords:
  - Create a FaunaDB backend for Gridsome
  - Building Serverless CRUD apps with Netlify Functions & FaunaDB
feature:
  image: /uploads/posts/javascript/javascript-tutorials.svg
  alt: How to build serverless with Netlify, FaunaDB and Gridsome
cardImage:
  image: /uploads/posts/code/full-stack-js.png
  alt: How to build serverless with Netlify, FaunaDB and Gridsome
date: 2020-11-26T17:31:47.672Z
author: garywoodfine
tags:
  - javascript
categories:
  - software-development
---

In [What is Cloud Computing](https://geekiam.io/what-is-serverless-computing/ "What is Cloud Computing | Geek.I.Am") we discussed
why the Serverless Computing model has become a popular choice for developers, enabling them to quickly build and deploy their applications
without having to concern themselves with Infrastructure complexities. In this post, we'll provide an example of how we leverage
serverless technology to enable us to build features on this website!

We'll walk you through our process of using:
 * [Gridsome - A Jamstack framework for Vue.js](https://gridsome.org/ "Gridsome")
 * [Netlify Functions - Serverless functions built into every Netlify account](https://functions.netlify.com/ "What are netlify functions | Netlify") 
* [FaunaDB - data API for modern applications](https://docs.fauna.com/fauna/current/introduction "https://docs.fauna.com/fauna/current/introduction | FaunaDB")

### What will we be building

For the most part, we will be building a typical User Registration work flow, enabling a user to create an account, 
confirm their email address and add & edit their User Profile details. Our final solution actually makes use of 
[NU_ID Trustless Authentication](https://nuid.io/ "What is Trustless Auhtentication | NU_ID") to manage the authentication,
we will provide details on that implementation in future articles.

![Gridsome, Netlify functions and FaunaDB ](/uploads/faunadb-tutorial.png "Gridsome, Netlify functions and FaunaDB")

Our solution make use of Gridsome static website generator, and I have previously blogged about [Getting started with Gridsome Static website generation](https://garywoodfine.com/gridsome-vuejs-static-website-generator/ "Gridsome – Getting started with Static Website Generator| Gary Woodfine")
and it may be worth reading that article if you are unfamiliar with Gridsome or the Jamstack and Netlify in general.  For the
remainder of this article I will assume you have some familiarity with Gridsome and Netlify. 

If you would like more information on how to use Gridsome and Netlify functions in general I would recommend reading 
[Gridsome – How to use netlify functions](https://garywoodfine.com/gridsome-how-to-use-netlify-functions/ "Gridsome – How to use netlify functions | Gary Woodfine")
because the article provides a background on how to configure your local development environment in order to get setup
to start developing making use of Netlify Functions and the [Netlify CLI](https://docs.netlify.com/cli/get-started/#installation "Get started with Netlify CLI")

I am going to assume some level of familiarity of Gridsome and Netlify CLI for the remainder of this guide. 
 <div class="flex bg-teal-lighter mb-4">
          <div class="w-16 bg-teal">
              <div class="p-4">
                  <svg 
                     class="h-8 w-8 text-white fill-current" 
                     xmlns="http://www.w3.org/2000/svg" 
                     viewBox="0 0 512 512">
                      <path d="M437.019 74.981C388.667 26.629 324.38 0 256 0S123.333 26.63 74.981 74.981 0 187.62 0 256s26.629 132.667 74.981 181.019C123.332 485.371 187.62 512 256 512s132.667-26.629 181.019-74.981C485.371 388.667 512 324.38 512 256s-26.629-132.668-74.981-181.019zM256 470.636C137.65 470.636 41.364 374.35 41.364 256S137.65 41.364 256 41.364 470.636 137.65 470.636 256 374.35 470.636 256 470.636z"/>
                      <path d="M256 235.318c-11.422 0-20.682 9.26-20.682 20.682v94.127c0 11.423 9.26 20.682 20.682 20.682 11.423 0 20.682-9.259 20.682-20.682V256c0-11.422-9.259-20.682-20.682-20.682zM270.625 147.248A20.826 20.826 0 0 0 256 141.19a20.826 20.826 0 0 0-14.625 6.058 20.824 20.824 0 0 0-6.058 14.625 20.826 20.826 0 0 0 6.058 14.625A20.83 20.83 0 0 0 256 182.556a20.826 20.826 0 0 0 14.625-6.058 20.826 20.826 0 0 0 6.058-14.625 20.839 20.839 0 0 0-6.058-14.625z"/>
                  </svg>
              </div>
          </div>
          <div class="w-auto text-grey-darker items-center p-4">
              <span class="text-lg font-bold pb-4">
                 <a href="https://fauna.com/pricing" target="_blank">Sign Up with Fauna for free</a>
              </span>
              <div class="leading-tight">
              <ul>
                <li>Fauna core (FQL & GraphQL)</li>
                <li>Built-in security (ABAC)</li>
                <li>Temporality (24 hour retention)</li>
                <li>Multi-factor authentication</li>
                <li>Real-time document streams</li>
                <li>Standard regions</li>
                </ul>
              </div>
          </div>
   </div>

 ### Create a Netlify function
 
 If you are not familiar with Netlify Functions and how to start developing them, then please take the time to read 
 [How To Build A Netlify Function](https://geekiam.io/how-to-build-a-netlify-function/ "How To Build A Netlify Function | Geek.I.Am")  
 as we walk you through the process and introduce all the tools you need to start developing Netlify Functions.
 
 I also recommend taking the time to read  [Get started with Netlify CLI](https://docs.netlify.com/cli/get-started/#installation "Get started with Netlify CLI | Netlify" )


If you haven't already create a `env.development` in the root project directory and add a new environment variable which
will store your Key you generate in your Fauna Dashboard.





```javascript
FAUNA_SECRET=<your key from fauna>
```



