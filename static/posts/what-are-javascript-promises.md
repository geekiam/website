---
title: What is a Javascript promise
description: JavaScript Promise is an object holding a state, which represents an eventual completion or failure of an asynchronous operation and its resulting value.
summary: "A definitive guide to understanding JavaScript Promises"
keywords:
  - how to use fetch
  - using fetch in vue.js
  - how to send HTTP GET requests from Vue 
  - vue and fetch
feature:
  image: /uploads/posts/node/javascript_tutorials.jpg
  alt: What is a Javascript promise
cardImage:
  image: /uploads/twitter/node/what-is-a-javascript-promise.jpg
  alt: What is a Javascript promise
date: 2020-11-05T17:30:00.644Z
author: garywoodfine
tags:
  - javascript
  - api
categories:
  - software-development
---

The single-threaded, event-loop based concurrency model of JavaScript, deals with processing of events using so-called 
*asynchronous non-blocking I/O model*.  What this means is, that in Javascript JavaScript code is executed sequentially. 
In order to prevent blocking the main thread on I/O-bound operations, JavaScript uses a callback mechanism where 
asynchronous operations specify a callback – the function to be executed when the result of an asynchronous operation 
is ready, while the code control flow continues executing.

Traditionally when developers wanted to use the result of a callback to make additional asynchronous method calls, they 
would need to nest the callbacks.  I/O operations can and often do result in errors, and all good developers need to 
handle errors for each call back before processing the success result.  

The necessity to do error handling and embedding callbacks would make code difficult to read and increase the cognitive 
load for other developers to understand and maintain the code later. This what is commonly referred to by Javascript 
developers as **Javascript callback hell**

To address this issue, Promises were introduced in ECMAScript 2015 to represent an eventual result of an asynchronous 
operation.

### What is a Javascript promise

Javascript promises provide a cleaner & simpler approach to handling asynchronous operations than the classical 
callback method based approach. They also enable developers to handle asynchronous errors similar to the `try\catch`
approach.

The JavaScript Promise is an object holding a state, which represents an eventual completion of an asynchronous 
operation and its resulting value.

Essentially a *Promise* is a proxy value for a value that is not necessarily known at the time when the promise was 
first created.  It enables developers to associate a handler for an asynchronous actions eventual success or failure result.
Enabling asynchronous methods return values like synchronous methods, instead of immediately returning values. At the most
basic level, a Promise enables an asynchronous method to return a value at some point in future.

A Promise can be in one of three states:

* **pending** : Initial state
* **fulfilled** : operation was completed successfully
* **rejected** : operation failed


When a promise is pending it can change to either *fulfilled* or *rejected*.  Once a promise is fulfilled or rejected 
it is settled and cannot change its state again.

### How to create a Javascript promise

The Promise API provides 4 static methods of the Promise Class
* **resolve** Returns a new Promise object that is resolved with the given value. 
* **reject** Returns a new Promise object that is rejected with the given reason.
* **all**  Wait for all promises results.
* **race** Wait until any of the promises is resolved or rejected.

It probably easier to read an example of Promise implementation to understand what is going on.

In the example below, we are going to create a Promise to the read the contents of a text file on our disk. If we are
able to read all the contents of the text file to a buffer and then will return a success message using the promise *resolve* method,
if we are unable to read the text then we will return an error message using the promise *reject* method.

```javascript

const fs = require('fs')

const readAllText = () => {  return new Promise((resolve, reject) => {
       fs.readFile('sometextfile.txt', (err, content) => {
       if(err) { 
            return reject(err)   
        }
        
        resolve('All the text in the file was read')   
       })
    }); 
  }

 readAllText()
  .then(data => console.log(data))
  .catch(error => console.log(error))
```

In this simple example if we add a text file to the directory in which this file executes and name it `sometextfile.txt`
before executing the method, the promise will be able to successfully read the text and return a message 'All the text in the file was read'
if we delete the file and execute the method it will return the error.

### How to consume a promise using then, catch, finally

In the example above we created a simple promise `readAllText`, which basically contained the logic to read the contents
of a text file and to report back on the success or failure of the operation.  To actually consume the promise we made
use of the `then` and `catch` methods.

A Promise object serves as a link between the executor, and the consuming functions, which will receive the result or 
error. Consuming functions can be registered  using methods `.then`, `.catch` and `.finally`.

#### then()

The `then()` method is used to schedule a callback to be executed when the promise is successfully resolved. This takes
two callback functions:

* onFullfilled - callback if the promise is fulfilled
* onRejected - callback if the promise is rejected.

The first argument of `.then` is a function that runs when the promise is resolved, and receives the result.

The second argument of `.then` is a function that runs when the promise is rejected, and receives the error.

We could rewite the above code slightly to illustrate how to make use of the two functions

```javascript
const fs = require('fs')

const readAllText = () => {  return new Promise((resolve, reject )=> {
    fs.readFile('sometextfile.txt', (err, content) => {
        if(err) {
            return reject(err)
        }

        resolve('I read all the text')
    })
})
}

readAllText()
        .then(
                result => console.log(result),
                error => console.log(error)
        )
```

#### catch()

We can use the catch method to schedule a callback to be executed when the promise is rejected. Internally, the 
`catch()` method invokes the `then(undefined, onRejected)` method. 

This was the approach we used in the first example

```javascript

const fs = require('fs')

const readAllText = () => {  return new Promise((resolve, reject) => {
       fs.readFile('sometextfile.txt', (err, content) => {
       if(err) { 
            return reject(err)   
        }
        
        resolve('All the text in the file was read')   
       })
    }); 
  }

 readAllText()
  .then(data => console.log(data))
  .catch(error => console.log(error))
```

#### finally()

The finally block is used to define code that needs to executed regardless of whether the Promise was fulfilled or rejected.

```javascript

const fs = require('fs')

const readAllText = () => {  return new Promise((resolve, reject) => {
       fs.readFile('sometextfile.txt', (err, content) => {
       if(err) { 
            return reject(err)   
        }
        
        resolve('All the text in the file was read')   
       })
    }); 
  }

 readAllText()
  .then(data => console.log(data))
  .catch(error => console.log(error))
  .finally(() => console.log('Still none the wiser'))
```
