---
title: How to create custom pages in nuxt
menu-title: Creating custom pages in nuxt
tutorial-section: getting-started
description: You will spend most of your time working in this directory to create pages for your Nuxt app
summary: You will spend most of your time working in this directory to create pages for your Nuxt app.
keywords:
  - using nuxt custom pages in nuxt
  - managing different pages in nuxt
  - how does nuxt create pages
feature:
  image: /uploads/posts/javascript/nuxt-logo.svg
  alt: How to create custom pages in nuxt
cardImage:
  image: /uploads/twitter/javascript/nuxt-tutorials.png
  alt: How to create custom pages in nuxt
date: 2021-02-02T17:30:08.937Z
author: garywoodfine
tags:
  - nuxt
  - javascript
  - vue
  - jamstack
video:
  link: asdfsdfasdf
  description: asdfasdf
  alt: asdfsdfasdf
  platform: lbry
next:
    url: getting-started-with-nuxt
    title: "Getting started with nuxt"
previous:
    title: "How to use Nuxt layouts"
    url: using-nuxt-layout-folder
order: 4
---

We have previously discussed [how to use and create custom layouts in nuxt](/using-nuxt-layout-folder "How to use Nuxt layouts | Geek.I.Am")
 and we learned how useful how helpful they are in helping you design and change the general look and feel of your 
website.  The `pages` directory is the directory to create all your application views and routes.  Nuxt iterates 
through all the files and directories in this folder to automatically create the router configuration for  you.

Every Page component is a Vue component but Nuxt adds special attributes and functions to make the development of your 
application as easy as possible. If we start with a very simple page example we'll develop it further as we move through
this tutorial.

```html
<!-- pages/hello-world.vue -->
<template>
  <h1>Hello World!</h1>
</template>

<script>
  export default {
    // page properties go here
  }
</script>

```

If we start our project using `npm run dev`  and then open our brower and visit `http://locahost:3000/hello-world` 
we'll see our new page in all it glory!

![Hello World Nuxt](/uploads/hello-world-nuxt.png "Nuxt Hello World!")

That's great, we've created our first page using nuxt and we can view it. The problem is it doesn't look like much and 
it does absolutely nothing. However, Nuxt on the other hand has done quite a bit for us in the background. We can now 
