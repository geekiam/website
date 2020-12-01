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

I am going to assume some level of familiarity of Gridsome, Netlify CLI and a Fauna Account in order to follow along
with this guide. 

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

To set up a Fauna database to store our User data, you will need to set up an account and get the API Key, we'll be 
using this to scaffold our Database and Collections.  To create an account [https://dashboard.fauna.com/accounts/register](https://dashboard.fauna.com/accounts/register "Fauna Dashboard")

### Register environment variables

The first thing we will need to do is ensure both our Development server and production server have all the environment
variables we need.  

You will also need to create an Access Key to your Fauna Database, read the [security section of the Fauna](https://docs.fauna.com/fauna/current/security/ "Security Overview | Fauna") 

Once you have your key you can create a local `env.development` in the root project directory and add a new 
environment variable which will store your Key you generate in your Fauna Dashboard. The standard name to use
is `FAUNADB_SERVER_SECRET`

```javascript
FAUNADB_SERVER_SECRET=<your key from fauna>
```
You can also register this key on your Netlify Deploy Dashboard in [Build environment variables](https://docs.netlify.com/configure-builds/environment-variables/#declare-variables "Build Environment Variables | Netlify")
 
 ### Create a Netlify function
 
 If you are not familiar with Netlify Functions and how to start developing them, then please take the time to read 
 [How To Build A Netlify Function](https://geekiam.io/how-to-build-a-netlify-function/ "How To Build A Netlify Function | Geek.I.Am")  
 as we walk you through the process and introduce all the tools you need to start developing Netlify Functions.
 
 In our case we are going to creat a `functions` folder in the root of our project directory and in this folder we will
 create another folder name `users`, because the functionality we will be building here is a typical User Management
system, enabling users create and update their information, which we will be storing in Fauna.

```shell script
mkdir functions && cd functions
mkdir users && cd users
```
We are also going to be developing a function that will be making use of the FaunaDB client library, so we will need to
install the npm package to folder. We will need to initialise our project

```shell script
npm init -y
```
We can now install the `faunadb` package

```shell script
npm i faunadb
```

Check out [How To Use Package Management In JavaScript Projects](https://geekiam.io/how-to-use-package-management-in-java-script-projects/ "How To Use Package Management In JavaScript Projects | Geek.I.Am")
to learn more about package management in JavaScript projects.

 <div class="flex bg-green-lighter mb-4">
      <div class="w-16 bg-green-400">
          <div class="p-4">
              <svg class="h-8 w-8 text-white fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M468.907 214.604c-11.423 0-20.682 9.26-20.682 20.682v20.831c-.031 54.338-21.221 105.412-59.666 143.812-38.417 38.372-89.467 59.5-143.761 59.5h-.12C132.506 459.365 41.3 368.056 41.364 255.883c.031-54.337 21.221-105.411 59.667-143.813 38.417-38.372 89.468-59.5 143.761-59.5h.12c28.672.016 56.49 5.942 82.68 17.611 10.436 4.65 22.659-.041 27.309-10.474 4.648-10.433-.04-22.659-10.474-27.309-31.516-14.043-64.989-21.173-99.492-21.192h-.144c-65.329 0-126.767 25.428-172.993 71.6C25.536 129.014.038 190.473 0 255.861c-.037 65.386 25.389 126.874 71.599 173.136 46.21 46.262 107.668 71.76 173.055 71.798h.144c65.329 0 126.767-25.427 172.993-71.6 46.262-46.209 71.76-107.668 71.798-173.066v-20.842c0-11.423-9.259-20.683-20.682-20.683z"/><path d="M505.942 39.803c-8.077-8.076-21.172-8.076-29.249 0L244.794 271.701l-52.609-52.609c-8.076-8.077-21.172-8.077-29.248 0-8.077 8.077-8.077 21.172 0 29.249l67.234 67.234a20.616 20.616 0 0 0 14.625 6.058 20.618 20.618 0 0 0 14.625-6.058L505.942 69.052c8.077-8.077 8.077-21.172 0-29.249z"/></svg>
          </div>
      </div>
      <div class="w-auto text-grey-darker items-center p-4">
          <span class="text-lg font-bold pb-4">
             <a href="https://docs.netlify.com/cli/get-started/#installation" target="_blank">
             Get started with Netlify CLI</a>
          </span>
          <p class="leading-tight">
             The Netlify CLI has templates available that can simply these steps. It's well taking the time to examine 
             the templates offered.
          </p>
      </div>
  </div>

### Update Netlify Configuration file

In [How To Build A Netlify Function](https://geekiam.io/how-to-build-a-netlify-function/ "How To Build A Netlify Function | Geek.I.Am") 
we briefly introduced the Netlify Configuration file `netlify.toml`, we will now need to add an additional section to 
our configuration file. We need to include an additional Netlify Build plugin because we are developing a function that 
going to install its own dependencies.  In our case, we don't want to include the dependency to our top level `package.json`
i.e the Gridsome project `packcage.json`, primarily because at some point in the future we will want to move our functions
to a separate repository and possibly deploy them to a different website. We want to develop the using the *microservice*
that each service is a self-contained unit. 

We need to install the `@netlify/plugin-functions-install-core` build plugin, to do this we just add the following to our
`netlify.toml` file.

```toml

[[plugins]]
     package =  "@netlify/plugin-functions-install-core"
```

### Create Fauna Collection
We will now start to create the elements of our function, and the first step in this direction is to create a script 
that will help to create the Database Collection we'll need for our function.  In this function, we are going to assume
that the Fauna Database has been created. This can be a fairly safe assumption, because we would have had to create the
 database to register the security key we're using to access the Fauna. 
 
 In order to keep things simple from this tutorial perspective, we only need to ensure that the collection can be 
 created from the terminal. 
 
 The first file we're gong to create is a plain Javascript file which will contain some Global variables we are going 
 use across a number of files in our function.  We'll create a `collection.js` in our function folder. Essentially this
 file contains variable for the name of our collection and the name of its associated index.
  
 ```javascript
module.exports.name = 'users'
module.exports.index = 'all_users'
```

The next file we'll create is the `create-schema.js` which will be the file that will create our initial collection.

You'll notice that in this file we import our `collection.js`  file which contains our two variable values we set 
previously. We also import the Fauna dependency we installed, and we also access the Secret we configured.

Once we have thos details with instantiate the Fauna DB client and create a Collection and associated Index.
```javascript
#!/usr/bin/env node
/* use with `netlify dev:exec <path-to-this-file>` */
const process = require('process')
let collection = require('./collection')

const { query, Client } = require('faunadb')

const createSchema = function () {
    if (!process.env.FAUNADB_SERVER_SECRET) {
        console.log('Fauna Secret Environment variable does not exist.')
        console.log('Database cannot be created.')
    }

    console.log(`A collection with the name ${collection.name} will be created`)

    const client = new Client({
        secret: process.env.FAUNADB_SERVER_SECRET,
    })

    return client
        .query(query.CreateCollection({ name: collection.name }))
        .then(() => {
            console.log(`created ${collection.name} collection`)
            return client.query(
                query.CreateIndex({
                    name: collection.index,
                    source: query.Collection(collection.name),
                    active: true,
                })
            )
        })
        .catch((error) => {
            if (
                error.requestResult.statusCode === 400 &&
                error.message === 'instance not unique'
            ) {
                console.log(`Collection: ${collection.name} already exists`)
            }
            throw error
        })
}

createSchema()

```

We can now run this file to create our collection. Using the terminal window we can use the Netlify CLI to execute our 
script.

```shell script
 netlify dev:exec functions/users/create-schema.js 
```
![Create Schema with Fauna](/uploads/fauna-create-schema.png)

We will see the confirmation message that the Collection has been created. We can also log in to our Fauna Dashboard
and view our GeekIam database we'll see our new collection exists.

![Fauna Collection Created](/uploads/fauna-create-collection.png)


## Create User Script

We create the first lambda for a basic CRUD API we're developing, this function will be responsible for creating a 
record in our Users collection.  You'll notice we import the Collection and Fauna Client, then we simply save whichever 
JSON is passed to the function to Fauna.

The function saves the data to the database, then simply returns the saved record back to client.
```javascript
const process = require('process')

const { query, Client } = require('faunadb')
const collection = require('./collection')

const client = new Client({
    secret: process.env.FAUNADB_SERVER_SECRET,
})

exports.handler = async function (event) {
    const data = JSON.parse(event.body)

    const item = {
        data,
    }

    return client
        .query(query.Create(query.Collection(collection.name), item))
        .then((response) => {
            return {
                statusCode: 200,
                body: JSON.stringify(response),
            }
        })
        .catch((error) => {
            console.log('error', error)
            /* Error! return the error with statusCode 400 */
            return {
                statusCode: 400,
                body: JSON.stringify(error),
            }
        })
}

```


### Read User Script

We'll create the second component of function, which is the Read function. It follows a similar pattern as the previous
function. We pass in the ID of the record we want we simply query Fauna to get the details.

```javascript
const process = require('process')

const { query, Client } = require('faunadb')
const collection = require('./collection')
const client = new Client({
    secret: process.env.FAUNADB_SERVER_SECRET,
})

exports.handler = async function (event) {
    const { id } = event
    console.log(`Function 'read' invoked. Read id: ${id}`)
    return client
        .query(query.Get(query.Ref(query.Collection(collection.name), id)))
        .then((response) => {
            console.log('success', response)
            return {
                statusCode: 200,
                body: JSON.stringify(response),
            }
        })
        .catch((error) => {
            console.log('error', error)
            return {
                statusCode: 400,
                body: JSON.stringify(error),
            }
        })
}

```
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
                 <a href="https://github.com/threenine/geekiam" target="_blank">Code on Github</a>
              </span>
              <div class="leading-tight">
               For the sake of brevity we have not included all the code in this article. If you would like to see 
               the full code listing check out full code in our Github repo
              </div>
      </div>
   </div>


### Gateway
The last lambda we'll create will be our *Controller* gateway type lambda. 

```javascript
const createRoute = require('./create')
const deleteRoute = require('./delete')
const readRoute = require('./read')
const readAllRoute = require('./read-all')
const updateRoute = require('./update')
const collection = require('./collection')

exports.handler = async function (event, context) {
    const path = event.path.replace(/\.netlify\/functions\/[^/]+/, '')
    const segments = path.split('/').filter(Boolean)

    switch (event.httpMethod) {
        case 'GET':
            if (segments.length === 0) {
                return readAllRoute.handler(event, context)
            }
            if (segments.length === 1) {
                const [id] = segments
                event.id = id
                return readRoute.handler(event, context)
            }
            return {
                statusCode: 500,
                body: `too many segments in GET request, must be either /.netlify/functions/${collection.name} or /.netlify/functions/${collection.name}/123456`,
            }

        case 'POST':
            return createRoute.handler(event, context)
        case 'PUT':
            if (segments.length === 1) {
                const [id] = segments
                event.id = id
                return updateRoute.handler(event, context)
            }
            return {
                statusCode: 500,
                body: `invalid segments in POST request, must be /.netlify/functions/${collection.name}/123456`,
            }

        case 'DELETE':
            if (segments.length === 1) {
                const [id] = segments
                event.id = id
                return deleteRoute.handler(event, context)
            }
            return {
                statusCode: 500,
                body: `invalid segments in DELETE request, must be /.netlify/functions/${collection.name}/123456`,
            }
        default:
            return {
                statusCode: 500,
                body:
                    'unrecognized HTTP Method, must be one of GET/POST/PUT/DELETE',
            }
    }
}
```
