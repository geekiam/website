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

next:
 url: understanding-nuxt-configuration-options
 title: "Understanding The Nuxt Configuration Options"
previous:
  title: "Understanding the Nuxt Project structure"
  url: understanding-nuxt-project-structure
order: 2
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

### The Target property

The mode option is used to define the type of application you intend to development.  The default value is usually 
universal. However, Anyone of the following options can be set:

* universal
* static

In `universal` your app will first pre-load on the server side, pre-render the pages and send the rendered HTML to the
browser before switching to the client-side operation for the rest of its lifespan. Nuxt manages all the presetting and
configuration needed to enable you to create SSR Vue apps easily.


In `static` files are prepared at the build time and are 'final' - until the next build with updated content or code -
these file can be served by just a CDN or hosting provider like [Netlify - A powerful serverless platform for Jamstack](https://www.netlify.com/ "netlify").

### The head property

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

### The components property

The components option is used to set whether the components in the `components` directory should be auto-imported. 
This option is very useful if you have tons of components to be imported into a layout or a page.  The default setting
is `true`, you can switch this functionality off by setting it `false`.

### The buildModules property

The `buildModules` option is used to register built-only modules – modules that are required only for development and 
build time in your app. 

Some modules are only imported during development and build time. Using buildModules helps to make production startup 
faster and also significantly decrease the size of your node_modules for production deployments.

### The modules property

The `modules` option is used to add Nuxt modules to your project. Nuxt modules are essentially JavaScript functions, 
just like plugins. This may come in handy when you're developing your Nuxt.js based app and need additional functionality
that is not supplied by the standard library, you're able to import additional modules as you require. Nuxt.js provides 
a higher-order module system that enables developers to extend the core library.

Modules are functions that are called sequentially when starting your Nuxt.js app. The framework waits for each module 
to finish before continuing, enabling modules to customize almost any apsect of your app. Modules can easily register
hooks for entry points. It is also possible to enable modules to override templates, configure webpack loaders, add CSS
libraries and perform many other useful tasks.

Nuxt modules can also be incorporated into npm packages enabling reuse across projects and the community.

### The build property

The `build` option is used to customize the webpack configuration for building your Nuxt app to your preference.  This 
will enable you to install libraries globally to your project, so you don't have to import everytime you want to make 
use of them.

### The dev property

The dev option is used to define the development or production mode of your app. It is not added to the Nuxt config file, 
but you can add it manually when you need to. It takes a Boolean type and its default is set to `true`. It is always 
forced to be `true` with the nuxt command and always forced to be `false` with the `nuxt build`, `nuxt start`, and `nuxt 
generate` commands.

This property is typically used when using Nuxt programmatically.

### The env property 

The env property defines environment variables available on the client side. They can be assigned 
using server side environment variables, the dotenv module ones or similar. The default for this option is an empty 
object, `{}`

This option is useful when you use `axios` in your project. For instance, if you will have a different BASE_URL for 
your services in Development and Production, i.e when accessing [Netlify Functions](https://geekiam.io/how-to-build-a-netlify-function "How To Build A Netlify Function")
you may want to set the entry as follows:

```javascript

export default {
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3850'
  }
}
```
Then you can make use of the `env` property in the axios plugin as follows:

```javascript
import axios from 'axios'

export default axios.create({
  baseURL: process.env.baseUrl
})
```

The baseUrl will then be set to make use of your local Netlify-Cli url during development, and then in Production
it will make use of your Production Url defined in your Production Environment Variables.
