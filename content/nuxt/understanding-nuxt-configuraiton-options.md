---
title: Understanding the nuxt configuration options
description: Learn more about the Nuxt custom configuration options available in nuxt
summary: learn more about the Nuxt custom configuration options
keywords:
  - Understanding the Nuxt custom configuration options
  - explain the nuxt custom configuration options
  - learning nuxt custom configuration options
feature:
  image: /uploads/posts/javascript/nuxt-logo.svg
  alt: Understanding the nuxt custom configuration options
cardImage:
  image: /uploads/twitter/javascript/nuxt-tutorials.png
  alt: Understanding the nuxt custom configuration options
date: 2021-01-25T08:30:08.937Z
author: garywoodfine
tags:
  - nuxt
  - javascript
  - vue
---

Nuxt is a highly customisable and configurable application development framework built on top of Vue. It is possible to
develop a number of different types of web applications using Nuxt and for the most part it is as easy defining the 
correct configuration in your `nuxt.config.js` file. 

We have previously discussed and provided a high level overview the typical 
[Nuxt project directory structure](https://geekiam.io/nuxt/understanding-nuxt-project-structure "Understanding The Nuxt Project Structure | Geek.I.Am")
and we briefly mentioned the `nuxt.config.js` as it is one of the files you get by default when you generate your 
application making use of the Nuxt scaffolding tool.

A typical empty `nuxt.config.js` file will appear as the example below. As you can tell the majority of the options
are empty by default except for `mode`, `target`, `head` and `components`.

```javascript
export default {
  target: 'universal',
  head: { ... },
  css: [],
  plugins: [],
  components: true,
  buildModules: [],
  modules: [],
  build: {}
}
```

### The Target option

The mode option is used to define the type of application you intend to development.  The default value is usually 
universal. However, Anyone of the following options can be set:

* universal
* static

In `universal` your app will first pre-load on the server side, pre-render the pages and send the rendered HTML to the
browser before switching to the client-side operation for the rest of its lifespan. Nuxt manages all the presetting and
configuration needed to enable you to create SSR Vue apps easily.


In `static` files are prepared at the build time and are 'final' - until the next build with updated content or code -
these file can be served by just a CDN or hosting provider like [Netlify - A powerful serverless platform for Jamstack](https://www.netlify.com/ "netlify").

### The head option

The head option is used to define default meta tags in the <head> block of our app. The default custom head 
configuration in the Nuxt config file if you use the Nuxt scaffolding tool:

```javascript
 head: {
    title: 'geekiam-nuxt-tutorial',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
```
You can further modify these settings and add additional settings, should you choose but the above provides a good start.

### The components options

The components option is used to set whether the components in the `components` directory should be auto-imported. 
This option is very useful if you have tons of components to be imported into a layout or a page.  The default setting
is `true`, you can switch this functionality off by setting it `false`.

