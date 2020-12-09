---
title: How to use Javascript classes
description:   JavaScript classes can be primarily thought of as a syntactical sugar over JavaScript's existing prototype-based inheritance. 
summary: Dive into the depth of the JavaScript class and learn how to use them.  We explore how classes are templates for Javascript functions and how they differ slightly from traditional object oriented programming languages.
keywords:
  - JavaScript Class Syntax
  - How to declare javascript classes
  - The class syntax does not introduce the new object-oriented inheritance model to JavaScript.
feature:
  image: /uploads/posts/javascript/javascript-tutorials.svg
  alt: How to use Javascript classes
cardImage:
  image: /uploads/twitter/javascript/javascript-tutorials.png
  alt: How to use Javascript classes
date: 2020-11-19T17:31:47.672Z
author: garywoodfine
tags:
  - javascript
categories:
  - software-development
---
Javascript classes have always been quite different from classes that are available in other strongly-typed Object Oriented 
programming languages like Java, C#, C++ etc. 
 
 There are some syntactic similarities, and it is possible to emulate many of the features of *classical* classes in Javascript, 
 but it is best to understand that Javascript's classes and prototype-based inheritance mechanism are substantially different 
 from the classes and class-based inheritance in other object oriented programming languages.
 
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
### What is a class 

A class is blueprint for any number of objects. A class describes the type of an object - how it is represented and what
operations can be carried out on it. 

The conventional wisdom in programming is that classes should be small, not deep. 

A class should contain exact specifications on what can be done with an object.  The specification is the class' contract.

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
export default class SomeCoolClass {
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

### Constructor

The constructor method is a unique method for creating and initializing the object created with the class. There can 
only be one unique method with the name “constructor” in a class. The constructor can use the `super` keyword to call the 
constructor of the superclass, which is the constructor of the class you are deriving your class from.

A constructor enables you to provide any custom initialization that must be done before any other methods can be called 
on an instantiated object.

`constructor(param1, param2, ...)` is a special method in the body of a class that is used to initialize an instance of a class. 
It's typically the place where one would set the initial values for the fields, or do any kind of object setup.

In the example below we will add a constructor method to our class which will accept an argument for a `name` value we 
can add to help describe our class.

We can then initialise an instance of our class can provide some catchy name.

```javascript

class SomeCoolClass {
   
  constructor(name) {
    this.name = name;
  }
}

const someClass = new SomeCoolClass('A cool class  name');

```
If you don’t define a `constructor` method for a class, a default one is created. The default constructor is an 
empty function, which doesn’t modify the instance.

```javascript
class SomeCoolClass {
   
  constructor() {}
}
```

Classes can extend - a.k.a *inherit*, other classes , therefore if your class is derived class, the default constructor calls
the parent constructor, passing alon any arguments that were provided.
 
 ```javascript
constructor(...args) {
  super(...args);
}
```
This enables the code to function as follows.
```javascript
class SomeCoolClass {
   
  constructor(name) {
    this.name = name;
  }
}

class InheritedCoolClass extends SomeCoolClass {
 
       printClassName() {
        return this.name;
    }
}
 
   
    let cool = new InheritedCoolClass("Kajagoogoo")
    console.log(`My class name is : ${ cool.printClassName() }`)
}
```

### Fields

Class fields are variables that hold information. Fields can be attached to 2 entities:

* Fields on the class instance
* Fields on the class itself (aka static)

The fields also have 2 levels of accessibility:

* **Public**: accessible anywhere
* **Private**: accessible only within the body of the class

#### Public Instance Fields

In the code above we created a public instance field in the constructor `name`, we could access this field outside of 
the class as follows

```javascript
const someClass = new SomeCoolClass('A cool class  name');
console.log(someClass.name);    // Would print out A cool class  name to the console
```
The downside to creating implicitly inside the constructor, as above, is it could be difficult for other developers to 
understand and grasp the fields list, because they would have to decipher them from the constructor’s code.
 
 A better approach would be to explicitly declare the class fields. Therefore, irrespective of the constructor, the instance 
 always has the same set of fields.
 
 We can declare a `name;` field inside the body of the class which declares a public field name.
 
 The public fields declared such a way is expressive and ensures the fields exist on every created instance of the class. This
 ensures the field is always present and assists in ensuring the class definition is more self-documenting.
 
 Public instance fields are added with `Object.defineProperty()` either at construction time in the base class 
 or just after `super()` returns in a subclass.
  
  a quick look at the fields declarations is enough to understand 
 the class’s data structure.
  
 ```javascript
class SomeCoolClass {
    name;   

  constructor(name) {
    this.name = name;
  }
}
```
 There is no restriction on access or update of the public fields. Developers can read and assign values to public fields 
 inside the constructor, methods, and outside of the class.
 
#### Private instance fields

Developing Javascript you will often need encapsulate the inner workings or your class from the outside. Using encapsulation
the public interface of the class provides does not couple it to the implementation details of the class.


>  encapsulation refers to the bundling of data with the methods that operate on that data, or the restricting of direct 
> access to some of an object's components

To declare private fields in Javascript classes we only need to prefix the name with a `#` symbol. The prefix should be used
everytime you declare and reference the field.

 ```javascript
class SomeCoolClass {
    #name;   

  constructor(name) {
    this.#name = name;
  }
}
```
 The `#name` is a private field and can only be accessed and modified within the body of the class. If we try access 
 the `name` field in code now, we will now be thrown an error.

### Public Static Fields

 Static fields are helpful to define class constants or store information specific to the class.  This is useful for caches, 
 fixed-configuration, or any other data you *don't need* to be replicated across instances.

To create static fields use the special keyword `static` followed by the field name: `static coolStaticField`. 
<div class="flex bg-green-100 mb-4">
      <div class="w-16 bg-green-300">
          <div class="p-4">
            <svg class="h-8 w-8 text-white fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M468.907 214.604c-11.423 0-20.682 9.26-20.682 20.682v20.831c-.031 54.338-21.221 105.412-59.666 143.812-38.417 38.372-89.467 59.5-143.761 59.5h-.12C132.506 459.365 41.3 368.056 41.364 255.883c.031-54.337 21.221-105.411 59.667-143.813 38.417-38.372 89.468-59.5 143.761-59.5h.12c28.672.016 56.49 5.942 82.68 17.611 10.436 4.65 22.659-.041 27.309-10.474 4.648-10.433-.04-22.659-10.474-27.309-31.516-14.043-64.989-21.173-99.492-21.192h-.144c-65.329 0-126.767 25.428-172.993 71.6C25.536 129.014.038 190.473 0 255.861c-.037 65.386 25.389 126.874 71.599 173.136 46.21 46.262 107.668 71.76 173.055 71.798h.144c65.329 0 126.767-25.427 172.993-71.6 46.262-46.209 71.76-107.668 71.798-173.066v-20.842c0-11.423-9.259-20.683-20.682-20.683z"/><path d="M505.942 39.803c-8.077-8.076-21.172-8.076-29.249 0L244.794 271.701l-52.609-52.609c-8.076-8.077-21.172-8.077-29.248 0-8.077 8.077-8.077 21.172 0 29.249l67.234 67.234a20.616 20.616 0 0 0 14.625 6.058 20.618 20.618 0 0 0 14.625-6.058L505.942 69.052c8.077-8.077 8.077-21.172 0-29.249z"/></svg>
          </div>
      </div>
      <div class="w-auto text-green-800 items-center p-4">
          <span class="text-lg font-bold pb-4">
              Static Field Name Convention
          </span>
          <div class="leading-tight">
             <p>Although I rarely have seen this documented, a common naming convention I find in Javascript code bases
             is to name all static fields in Upper case. </p>
          </div>
      </div>
  </div>

We'll create a new field type that will indicate the type of class we're going to create, then in our sample we'll query
the Static field 
                                                                                                 
```javascript
class Class {
    static CLASS_TYPE = "Cool"

    name;
    type;

    constructor(name, type) {
        this.name = name
        this.type = type
    }
}
let some = new Class("Classes", Class.CLASS_TYPE)
console.log(`${ some.name } are ${ some.type }`)


```
The `CLASS_TYPE` is a static field, therefore to access the static field you have to use the class followed by the field
name i.e. `Class.CLASS_TYPE`

### Private static fields

There may be occassions when you may want to hide static fields, essentially making them private.  We again
make use of the convention discussed previously and make use of the `#` prefix on the field name.

Consider you would like to limit the number of instances of the `Class` being created. We could hide the 
details of how we implement this, by creating private static fields.

The static field `Class.#MAX_INSTANCES` sets the maximum number of allowed instances, while `Class.#instances` static 
field counts the actual number of instances.

These private static fields are accessible only within the Class class. We cannot access or interfere externally
with the limit's of this mechanism, benefiting from the encapsulation.

```javascript
class Class {
    static CLASS_TYPE = "Cool"
    static #MAX_INSTANCES = 2
    static #instances =0

    name;
    type;

    constructor(name, type) {
        this.name = name
        this.type = type

        Class.#instances++

        if(Class.#instances > Class.#MAX_INSTANCES) {
            throw new Error("Unable to create another Class Instance")
        }
    }
}
let some = new Class("Classes", Class.CLASS_TYPE)
let another = new Class("Another", Class.CLASS_TYPE)
let ohNo = new Class("OhNo", Class.CLASS_TYPE)

console.log(`${ some.name } are ${ some.type }`)
console.log(`${ another.name } are ${ another.type }`)
console.log(`${ ohNo.name } are ${ ohNo.type }`)
```

### Methods

The core concept of behind classes is to provide the ability to modify data, this functionality is exposed by `functions`,
this is commonly referred to in Object-Oriented Programming (OOP) languages as *Methods*.

Javascript supports both Instance and Static methods on classes.

#### Instance Methods

Instance methods provide the ability to access and modify instance data. Instance methods can call other instance
methods and static methods.

```javascript
class User {
    name = "Anonymous"

    constructor(name) {
        this.name = name;
    }

    userName() {
        return this.name
    }
}

const user = new User('Gary Woodfine')
console.log(user.userName())
```
`userName() { ... }` is a method inside the User class, which can be accessed after the class has been initialised
using `user.userName()` method invocation, which executes the method and returns the computed value.

Methods can also accept arguments and can also be `private`  and can provide indirect access to private static fields.

We can slightly modify the code above to provide an illustration of how we can use encapsulation usings methods and 
private static fields.

```javascript
class User {
    #name = "Anonymous"

    constructor(name) {
        this.#name = name;
    }

    userName() {
        return this.#name
    }
}

const user = new User('Gary Woodfine')
console.log(user.userName())

```
Before we provide an example of how to use arguments with methods, I want to introduce another feature of classes, 
which makes working with classes in Javascript really useful.

### Getters and Setters
Getter and Setter fields mimic regular fields, however they provide more control in regards to how fields are accessed
and changed. 

Getter enable access to a field and Setter enable the setting the field value.

We can rewrite the class above to make use of Getters and Setter, which are commonly referred to in OOP as `properties`

```javascript
class User {
    #firstName = ''
    #lastName = ''

    constructor(firstname, lastname) {
        this.#firstName = firstname
        this.#lastName = lastname
    }

    get firstName(){
        return this.#firstName
    }

    set firstName (firstName) {
        if(firstName === '') {
            throw new Error('A firstname is required')
        }
        this.#firstName = firstName
    }

    get lastName() {
        return this.#lastName
    }

    set lastName(lastName) {
        if(lastName === '') {
            throw new Error('A firstname is required')
        }
        this.#lastName = lastName
    }
   get userName {
        return `${this.#firstName} ${this.#lastName}`
    }
}

const user = new User('Gary', 'Woodfine')
console.log(user.userName)
console.log(`the Firstname ${user.firstName}`)
console.log(`the Lastname ${user.lastName}`)
user.firstName = 'Gareth'
console.log(user.userName)
```

The `get` property enable access to the value of the field:  `user.firstName`

The `set` enables updating of the field i.e. `user.firstName = 'Gareth'`

We also implemented a `readonly` property in effect by only implementing a get property for userName, which simply 
returns the concatenated first and last names.
