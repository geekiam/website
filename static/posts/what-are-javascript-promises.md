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
In [How To Use Fetch With Vue](https://geekiam.io/how-to-use-fetch-with-vue/ "How To Use Fetch With Vue | Geek.I.Am") we briefly touched on Javascript promises
and how the Fetch API makes use of them. In my opinion Promises in Javascript requires a bit more explanation and therefore felt it was necessary to expand
on the discussion.

The single-threaded, event-loop based concurrency model of JavaScript, deals with processing of events using so-called 
*asynchronous non-blocking I/O model*.  What this means is, that in JavaScript code is executed sequentially. 
In order to prevent blocking the main thread on I/O-bound operations, JavaScript uses a callback mechanism where 
asynchronous operations specify a callback – the function to be executed when the result of an asynchronous operation 
is ready, while the code control flow continues executing.

Traditionally when developers wanted to use the result of a callback to make additional asynchronous method calls, they 
would need to nest the callbacks.  I/O operations can and often do result in errors, and all good developers need to 
handle errors for each call back before processing the success result.  

The necessity to do error handling and embedding callbacks would make code difficult to read and increase the cognitive 
load for other developers to understand and maintain the code later. This what is commonly referred to by Javascript 
developers as **Javascript callback hell**

To address this issue, Promises were introduced in [ECMAScript 2015 Language Specification](https://www.ecma-international.org/ecma-262/6.0/ "ECMAScript® 2015 Language Specification") (a.k.a. ECMAScript 6 or ES6) to represent an 
eventual result of an asynchronous operation.


### What is a Javascript promise

Javascript promises provide a cleaner & simpler approach to handling asynchronous operations than the classical 
callback method based approach. They also enable developers to handle asynchronous errors similar to the `try\catch`
approach.

The JavaScript Promise is an object holding a state, which represents an eventual completion of an asynchronous 
operation and its resulting value.

> A Promise is an object that is used as a placeholder for the eventual results of a deferred (and possibly asynchronous) computation.
>
> [ECMAScript® 2015 Language Specification](https://www.ecma-international.org/ecma-262/6.0/#sec-promise-objects "ECMAScript® 2015 Language Specification - Promise Objects")

Essentially a *Promise* is a proxy value for a value that is not necessarily known at the time when the promise was 
first created.  It enables developers to associate a handler for an asynchronous action's eventual success or failure result.
Enabling asynchronous methods return values like synchronous methods, instead of immediately returning values. At the most
basic level, a Promise enables an asynchronous method to return a value at some point in the future.

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

It is probably easier to read an example of Promise implementation to understand what is going on.

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

* onFulfilled - callback if the promise is fulfilled
* onRejected - callback if the promise is rejected.

The first argument of `.then` is a function that runs when the promise is resolved, and receives the result.

The second argument of `.then` is a function that runs when the promise is rejected, and receives the error.

We could rewrite the above code slightly to illustrate how to make use of the two functions

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

### Using Promises with Async/Await 

The `then/catch/finally` block working with promises is great, but as you can tell in the code samples above it can make
your code quite difficult to read and increases the cyclomatic complexity of your code base.

> **Cyclomatic complexity** is a source code complexity measurement that is correlated to the number of coding errors, 
>calculated by developing a Control Flow Graph of the code that measures the number of linearly-independent paths 
>through a program module.
>

In his book [A philosophy of software design](https://amzn.to/3nj4EbF "A philosophy of software design"), John Ousterhout expands on the fact that software
development is primarily dedicated to managing complexity.  One of the symptoms of complexity refers to the Cognitive Load,
which refers to how much a developer needs to know in order to complete a task.

> Complexity is anything related to the structure of a software system that makes it hard to understand and modify the 
> system
>
> [John Ousterhout - A philosophy of software design](https://amzn.to/3nj4EbF "A philosophy of software design")

[ECMAScript 2017](https://www.ecma-international.org/ecma-262/11.0/index.html "ECMAScript 2017 language specification") introduced  [Async function definitions](https://www.ecma-international.org/ecma-262/11.0/index.html#sec-async-function-definitions "ECMAScript 2017 language specification - Async Function Definitions")
 and the [Await Completion Record Specification](https://www.ecma-international.org/ecma-262/11.0/index.html#await "The Completion Record Specification Type") keyword that act as syntactic sugar on top of promises, making asynchronous code easier to write and 
 to read afterwards. They make async code look more like old-school synchronous code, so they're well worth learning. 

The `async` keyword can be used to turn a function into an asynchronous function, and an async function knows how to expect
the possibility of the `await` keyword being used to invoke asynchronous code.

#### Async Functions

The word `async` before a function means a function always returns a promise. Other values are wrapped in a resolved 
promise automatically.

```javascript
async function hello() {
  return 'world';
}
```

The function above returns a resolved promise with the result of 'world. We could make use of this function making use 
of the typical `then/catch/finally` pattern.

```javascript
async function hello() {
  return 'world';
}

hello().then(result => console.log(result))
```

`async` ensures that the function returns a promise, and wraps non-promises in it. Even if the code in the function does
not explicitly,  the `async` keyword will internally make it return a promise.

#### Await

The keyword await makes JavaScript wait until that promise settles and returns its result. The `await` keyword only works
inside functions defined with `async`.

You can use `await` when calling any function that returns a Promise, including web API functions.  To simulate this
we could refactor the code above to include a Promise.

```javascript
async function hello() {
    return world = await Promise.resolve("world");
}

hello().then(result => console.log(result))
```

The async/wait keywords were introduced to help to reduce the amount of boiler plate code required to work with promises. 

Promises were introduced to solve the famous callback hell problem, but they introduced complexity on their own, and 
syntax complexity.

Developers are able to read and understand the code as a synchronous operation, however it is all asynchronous

```javascript
async function hello() {
     return world = await Promise.resolve("world");
}

const greeting = async () => {
    console.log(await hello())
}

greeting()
```
### Conclusion

A promise is an object that returns a value at some point in the future. Javascript promises enable developers to write
asynchronous code.
 
