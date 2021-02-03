---
title: How to use Nuxt layouts
menu-title: using nuxt layouts
tutorial-section: getting-started
description: Layouts are the backbone of Nuxt Pages and components helping to change the look and feel of your nuxt app
summary: Layouts are the backbone of Nuxt Pages and components helping to change the look and feel of your nuxt app.
keywords:
  - using nuxt layouts
  - managing different layouts in nuxt
  - how does nuxt handle layouts
feature:
  image: /uploads/posts/javascript/nuxt-logo.svg
  alt: How to use Nuxt layouts
cardImage:
  image: /uploads/twitter/javascript/nuxt-tutorials.png
  alt: How to use Nuxt layouts
date: 2021-01-31T17:30:08.937Z
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
    title: "Understanding nuxt asset serving"
    url: understand-nuxt-asset-serving
order: 4
---

Layouts are the backbone of your pages and components, you can use to create multiple different layouts in your application.
Layouts can be used to insert sidebar and different content layouts across your application. You could even use them to 
provide different layouts for web and mobile.

### Default Layout
When generating a new nuxt application, as we discussed in [Getting started with Nuxt](/nuxt/getting-started-with-nuxt "How to get started with Nuxt | Geek.I.Am"),
and inspecting the [basic nuxt project structure](/nuxt/understanding-nuxt-project-structure "Nuxt project structure | Geek.I.Am"), 
you'll notice there is a file in the `layouts` called `default.vue` generated automatically. It is possible to modify 
the default layout or create your own custom ones.

The default layout is always used for pages that don't have a specific layout file set. If you open the `layouts/default.vue`
there are only three nine in the `template`.

```html
<template>
  <div>
    <Nuxt />
  </div>
</template>
```

The key component in this file is the `<Nuxt />`, the nuxt framework will inject your pages into this component, so when
creating layout files it is important to remember to ensure that this component is present. 

You can place and add any number of additional components and markup in your layout file with your nuxt component.
For instance, you may want to create a simple three column layout for your app. In the example below you may have already
created some reusable Nuxt components you would want to use in your layout.

```html
<template>
  <div class="container">
    <site-header />
    <div class="3-columns">
      <div class="col-1"></div>
      <div class="col-2"> <Nuxt /></div>
      <div class="col-3"></div>
    </div>
   <site-footer />
  </div>
</template>
```
<div class="bg-green-100 border-l-4 border-green-800 text-gray-900 p-4" role="alert">
  <p class="font-bold">Important</p>
  <p>By setting <code>components: true</code> in your <code>nuxt.config.js</code> ensures there is no need to add import statements to them. </p>
  <p>Checkout <a href="/nuxt/understanding-nuxt-configuraiton-options" alt="Undertand nuxt configuration options">Understanding the nuxt configuration options</a></p>
</div>

### Creating custom layouts
Any files created or placed files in the top-level layout directory will create a custom layout that can be accessed 
by setting the `layout` in your page components.

You may be creating a more custom application that will have several sections, requiring a slightly different layout in 
each, with a different set of components etc.  In a situation such as that creating custom layouts for each site section
could help.

You can easily create custom layouts with `.vue` files and just put them in the `layouts` directory.   For instance, we
could create a `Blog.vue` component in the `layout` folder 

```html
// layouts/blog.vue
<template>
  <div>
    <div>This is my awesome blog page</div>
    <nuxt/>
  </div>
</template>
```

Then you can use the `layout` property in the page component to assign this custom layout to the page

```javascript
// pages/blog.vue
export default {
  layout: 'blog'
}
```
Nuxt now will use this `/layouts/blog.vue` file as the base layout for this page component.

### Create Custom error pages in Nuxt

Nuxt provides default error pages, which are found in the `@nuxt` package in the `node_modules` directory. Nuxt uses
these pages to serve error pages for 404, 500 etc. These may be helpful, but you may want to customise these pages 
to make them more attractive in your production instance.

To start creating a custom error page simply create a new `error.vue` component in your `layout` directory and place 
the following code 
```html
<template>
  <div class="container">
    <
    <h2 v-if="error.statusCode === 404">Page not found</h2>
    <h2 v-else>An error occurred</h2>
    <nuxt-link to="/">Home page</nuxt-link>
  </div>
</template>
<script>
export default {
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
}
</script>
```
Initially this may seem counter-intuitive and confusing as it is placed inside the `layouts` directory instead of the
`pages` directory, also notice that the `<nuxt>` component has been omitted from the page even though the component
has been created in the `layout` folder.  This is due to the *special* nature of the error page, you should also note
that the error page that will be displayed will also include whatever markup defined in the `layouts/defaul.vue`.


