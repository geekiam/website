---
title: How to use Javascript classes
description:   JavaScript classes can be primarily thought of as a syntactical sugar over JavaScript's existing prototype-based inheritance. 
summary: Dive into the depth of the JavaScript class and learn how to use them.  We explore how classes are templates for Javascript functions and how they differ slightly from traditional object oriented programming languages.
keywords:
  - JavaScript Class Syntax
  - How to declare javascript classes
  - The class syntax does not introduce the new object-oriented inheritance model to JavaScript.
feature:
  image: /uploads/posts/javascript/javascript-tutorials.png
  alt: Advanced git configuration options
cardImage:
  image: /uploads/twitter/vue/how-to-implement-form-validation-in-vue.png
  alt: Advanced git configuration options
date: 2020-11-19T17:31:47.672Z
author: garywoodfine
tags:
  - javascript
categories:
  - software-development
---
Javascript classes have always been quite different from classes that are available in other strongly-typed
 Object Oriented programming languages like Java, C#, C++ etc. There are some syntactic similarities, and it is possible 
 to emulate many of the features of *classical* classes in Javascript, but it is best to understand that Javascript's 
 classes and prototype-based inheritance mechanism are substantially different from the classes and class-based inheritance
 of C#, Java etc.
 
 The [ECMAScript 2015 Language Specification](https://www.ecma-international.org/ecma-262/6.0/ "ECMAScript® 2015 Language Specification")
 introduced syntax element and provided `constructors` , `static`, instance methods, inheritance and the ability to
 extend a class from other classes.
 
 The `class` syntax, is just `syntactic sugar` concealing Javascript prototypal inheritance.
 
 > Syntactic sugar is a term for syntax changes in computer programming which make it easier for humans to code.

### What is prototypal inheritance

Javascript's fundamental data type is the object. An object is a composite value enabling aggregation of multiple values
and storing and retrieval of values by name. An object is an unordered collection of properties each of which has a name 
and a value.

Property names are strings, which at a most basic level enable the mapping of strings to values. However, in Javascript
an object is more than sa simple string to value map, it can also maintain its own set of properties and call also inherit 
properties of another object, known as a `prototype`.

The methods of an object are typically inherited properties and this `Prototypal Inheritance` is a key feature of Javascript.

>  prototypical inheritance refers to the ability to access object properties from another object.

In older versions of Javascript an object's `class` attribute is string that provides information about the type of object.
However, there was no way of setting this attribute and there was only indirect technique for querying it. The code below
would return the type of class that an object has been defined as.

```javascript
function classof(o) {
  if (o === null) return "Null";
  if (o === undefined ) return "Undefined";
  return Object.prototype.toString.call(o).slice(8, -1);
}
```

### Defining classes in Javascript

ES 2015 introduced a special keyword `class` which we can use to define a class.

```javascript
class SomeCoolClass {
   // The body of the class
}
```

The code above defines a `class SomeCoolClass`. The  braces `{ }` delimit the class body. This is an example 
of the *class declaration syntax*.

What would Javascript be, if there weren't alternative approaches of achieving the same thing.  You can also define a class
by making use of the `class expression` to assign a class to a variable.

```javascript
const SomeCoolClass = class {
  // The body of the class
}
```

You can also export a class as part of ES2015 module, making use of the `default export` syntax

```javascript
export default class SomeCoolClass{
 // The body of the class
}
```

The exact same thing can be achieved making use of the `named export`

```javascript
export class SomeCoolClass {
// The body of the class
}
```
<div class="flex bg-green-100 mb-4">
      <div class="w-16 bg-green-300">
          <div class="p-4">
            <svg class="h-8 w-8 text-white fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M468.907 214.604c-11.423 0-20.682 9.26-20.682 20.682v20.831c-.031 54.338-21.221 105.412-59.666 143.812-38.417 38.372-89.467 59.5-143.761 59.5h-.12C132.506 459.365 41.3 368.056 41.364 255.883c.031-54.337 21.221-105.411 59.667-143.813 38.417-38.372 89.468-59.5 143.761-59.5h.12c28.672.016 56.49 5.942 82.68 17.611 10.436 4.65 22.659-.041 27.309-10.474 4.648-10.433-.04-22.659-10.474-27.309-31.516-14.043-64.989-21.173-99.492-21.192h-.144c-65.329 0-126.767 25.428-172.993 71.6C25.536 129.014.038 190.473 0 255.861c-.037 65.386 25.389 126.874 71.599 173.136 46.21 46.262 107.668 71.76 173.055 71.798h.144c65.329 0 126.767-25.427 172.993-71.6 46.262-46.209 71.76-107.668 71.798-173.066v-20.842c0-11.423-9.259-20.683-20.682-20.683z"/><path d="M505.942 39.803c-8.077-8.076-21.172-8.076-29.249 0L244.794 271.701l-52.609-52.609c-8.076-8.077-21.172-8.077-29.248 0-8.077 8.077-8.077 21.172 0 29.249l67.234 67.234a20.616 20.616 0 0 0 14.625 6.058 20.618 20.618 0 0 0 14.625-6.058L505.942 69.052c8.077-8.077 8.077-21.172 0-29.249z"/></svg>
          </div>
      </div>
      <div class="w-auto text-green-800 items-center p-4">
          <span class="text-lg font-bold pb-4">
              Class Name Convention
          </span>
          <p class="leading-tight">
              It is generally accepted naming convention within the Javascript community to name classes using Pascal 
              Case in contrast to other Javascript data structures.
          </p>
      </div>
  </div>
