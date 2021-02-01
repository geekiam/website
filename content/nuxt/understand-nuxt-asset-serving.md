---
title: Understanding Nuxt asset serving
menu-title: Understanding asset serving
tutorial-section: getting-started
description: The assets directory contains your un-compiled assets such as Stylus or Sass files, images, or fonts.
summary: The assets directory contains your un-compiled assets such as Stylus or Sass files, images, or fonts.
keywords:
  - understanding asset serving in nuxt
  - nuxt asset serving
  - how does nuxt serve assets
feature:
  image: /uploads/posts/javascript/nuxt-logo.svg
  alt: Understanding Nuxt asset serving
cardImage:
  image: /uploads/twitter/javascript/nuxt-tutorials.png
  alt: Understanding Nuxt asset serving
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
    url: understanding-nuxt-configuration-options
    title: "Understanding the Nuxt Configuration Options"
previous:
    title: "Understanding the Nuxt Configuration Options"
    url: understanding-nuxt-configuraiton-options
order: 0
---

The `assets` directory contains your uncompiled assets such as Stylus, Sass files, images, or fonts. Nuxt makes use of:
* `vue-loader` - A webpack loader to enable you to author Vue components as `Single-File Components`
* `file-loader` - A webpack loader to resolve `import`/`require()` on a file into a url and emits the file into 
  the output directory.
* `url-loader` - A webpack loader to transform files into base64 URIs.

Nuxt will use `vue-loader` to process the `<template>` and `<style>` blocks with `css-loader` and `vue-template-compiler`
to compile elements such as `<img src="...">`, `background-image: URL(...)`, and CSS `@import` in these blocks into 
module dependencies. 

```html
// pages/index.vue
<template>
  <img src="~/assets/sample-1.jpg">
</template>

<style>
.container {
  background-image: url("~assets/sample-2.jpg");
}
</style>
```
The image element and the assets in the preceding `<template>` and `<style>` blocks will be compiled and translated 
into the following code and module dependencies.

```javascript
createElement('img', { attrs: { src: require('~/assets/sample-1.jpg') }})
require('~/assets/sample-2.jpg')
```

After the preceding compilation and translation, Nuxt then will use `file-loader` to resolve the `import`/`require`
module dependencies into a URL and emit the assets into the output directory – or, use `url-loader` to transform the 
assets into Base64 URIs if the asset is under 1 KB. 

if asset are larger than the 1 KB threshold, it will fall back to `file-loader`. That means any files below 1 KB will 
be inlined as a Base64 data URL by `url-loader`

This provides more control over the number of HTTP requests from your app server, because inlined assets reduce the 
HTTP requests, while larger files are copied to a folder with version hash for improved caching.

### The difference between Webpack assets and static assets

#### assets folder
Webpack optimises the serving of assets in production. So webpack will transform images and fonts, pre-processed Less,
Sass or Stylus files and transform them to generic CSS.  Therefore you should only place files that require processing
by webpack in the `assets` folder.

#### static folder

If you have files that don't require any processing like some image files, plain text files etc. You can place them 
in the `static` folder.

The `static` directory is directly mapped to the server root and contains files that likely won't be changed. All 
included files will be automatically served by Nuxt and are accessible through your project root URL.

For instance, you may have an optimised file that you would like to use as you Logo file, so you can place it in the
static folder and access it as follows

```html
// pages/index.vue
<template>
  <header>
     <img src="/logo.jpg"/>
  </header>
</template>
```

Another example of making use of the static folder, is when you want to use the Fav Icon in the `nuxt.config.js` 

```javascript
// nuxt.config.js
export default {
  head: {
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  }
}

```
Using the `~` alias to link your assets in the `/static/` directory, webpack will process these assets, just like those 
in the `/assets/`


```html
<!-- webpacked image from assets directory -->
<template>
    <header>
        <img src="~/assets/my-logo.png" />
    </header>
</template>
```
