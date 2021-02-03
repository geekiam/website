---
title: How to create custom pages in nuxt
menu-title: Creating custom pages in nuxt
tutorial-section: getting-started
description: You will spend most of your time working in this directory to
  create pages for your Nuxt app
summary: You will spend most of your time working in this directory to create
  pages for your Nuxt app.
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
previous:
  title: How to use Nuxt layouts
  url: using-nuxt-layout-folder
next:
  url: getting-started-with-nuxt
  title: Getting started with nuxt
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
  <p>Hello World!</p>
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

That's great, we've created our first page using nuxt and we can view it. The problem is it doesn't look like much and  it does absolutely nothing. However, Nuxt on the other hand has done quite a bit for us in the background. 

Let's carry out some modification to the page, to see exactly what Nuxt has done with the page in the background.

As you will be no doubt aware that Nuxt is an application software development framework built on top of Vue, and 
pages are in effect nothing more than Vue components and when we created our simple Hello-World page, we created it
as a `hello-world.vue` . However, what Nuxt has done with this vue component is actually empower with this some 
additional functions that will help us to easily modify our pages to be dynamic and enable dynamic content.

### Understanding pages

A page is a Vue component in nature. What sets it apart from the standard Vue component is the attributes and functions 
that are added in Nuxt only. We use these special attributes and functions to set or fetch data before rendering the 
page.

We can slightly modify our page now to make use of the one of the functions that only Nuxt supplies us with the `asyncData`
function. 

The `asyncData` method is the most important function in a page component. Nuxt always initiate this function before 
the page component. Therefore, every time you request a page, this function is called first before the page is rendered.

```html
<template>
  <p>{{ message }}</p>
</template>

<script>
export default {
  asyncData() {
    return { message: 'Hello World!' }
  },
}
</script>

```
 When we now view this page in the browser we'll not notice nay difference, but in reality a lot has changed. Our page 
 has just become a little more dynamic.

In fact, one of the arguments the asyncData command accepts the `context` and this object will contain a lot of useful
information about our application.  The below is an example of the type of data and properties that the `context` object
contains even for our very simple page!

```javascript
{                                                                                                                                                                                              20:27:42
  isStatic: true,
  isDev: true,
  isHMR: false,
  app: {
    head: {
      title: 'geekiam-nuxt-tutorial',
      meta: [Array],
      link: [Array],
      style: [],
      script: [],
      htmlAttrs: [Object]
    },
    router: VueRouter {
      app: [Vue],
      apps: [Array],
      options: [Object],
      beforeHooks: [],
      resolveHooks: [],
      afterHooks: [],
      matcher: [Object],
      fallback: false,
      mode: 'abstract',
      history: [AbstractHistory],
      resolve: [Function]
    },
    nuxt: {
      defaultTransition: [Object],
      transitions: [Array],
      setTransitions: [Function: setTransitions],
      err: null,
      dateErr: null,
      error: [Function: error]
    },
    render: [Function: render],
    data: [Function: data],
    beforeCreate: [Function: beforeCreate],
    created: [Function: created],
    mounted: [AsyncFunction: mounted],
    watch: {
      'nuxt.err': 'errorChanged'
    },
    computed: {
      isOffline: [Function: isOffline],
      isFetching: [Function: isFetching],
      isPreview: [Function: isPreview]
    },
    methods: {
      refreshOnlineStatus: [Function: refreshOnlineStatus],
      refresh: [AsyncFunction: refresh],
      errorChanged: [Function: errorChanged],
      setLayout: [Function: setLayout],
      loadLayout: [Function: loadLayout]
    },
    components: {
      NuxtLoading: [Object]
    },
    context: [Circular],
    '$config': {},
    '$content': [Function: $content] {
      database: [Database]
    },
    '$icon': [Function: getIcon],
    '$axios': [Function: wrap] {
      request: [Function: wrap],
      getUri: [Function: wrap],
      delete: [Function: wrap],
      get: [Function: wrap],
      head: [Function: wrap],
      options: [Function: wrap],
      post: [Function: wrap],
      put: [Function: wrap],
      patch: [Function: wrap],
      defaults: [Object],
      interceptors: [Object],
      CancelToken: [Function],
      isCancel: [Function: isCancel],
      setBaseURL: [Function: bound setBaseURL],
      setHeader: [Function: bound setHeader],
      setToken: [Function: bound setToken],
      onRequest: [Function: bound onRequest],
      onResponse: [Function: bound onResponse],
      onRequestError: [Function: bound onRequestError],
      onResponseError: [Function: bound onResponseError],
      onError: [Function: bound onError],
      create: [Function: bound create],
      '$request': [Function: bound ],
      '$delete': [Function: bound ],
      '$get': [Function: bound ],
      '$head': [Function: bound ],
      '$options': [Function: bound ],
      '$post': [Function: bound ],
      '$put': [Function: bound ],
      '$patch': [Function: bound ]
    }
  },
  payload: undefined,
  error: [Function: bound error],
  base: '/',
  env: {},
  ssrContext: {
    req: IncomingMessage {
      _readableState: [ReadableState],
      readable: true,
      _events: [Object: null prototype],
      _eventsCount: 1,
      _maxListeners: undefined,
      socket: [Socket],
      connection: [Socket],
      httpVersionMajor: 1,
      httpVersionMinor: 1,
      httpVersion: '1.1',
      complete: true,
      headers: [Object],
      rawHeaders: [Array],
      trailers: {},
      rawTrailers: [],
      aborted: false,
      upgrade: false,
      url: '/hello-world',
      method: 'GET',
      statusCode: null,
      statusMessage: null,
      client: [Socket],
      _consuming: false,
      _dumped: false,
      originalUrl: '/hello-world',
      _parsedUrl: [Url],
      _parsedOriginalUrl: [Url]
    },
    res: ServerResponse {
      _events: [Object: null prototype],
      _eventsCount: 1,
      _maxListeners: undefined,
      outputData: [],
      outputSize: 0,
      writable: true,
      _last: false,
      chunkedEncoding: false,
      shouldKeepAlive: true,
      useChunkedEncodingByDefault: true,
      sendDate: true,
      _removedConnection: false,
      _removedContLen: false,
      _removedTE: false,
      _contentLength: null,
      _hasBody: true,
      _trailer: '',
      finished: false,
      _headerSent: false,
      socket: [Socket],
      connection: [Socket],
      _header: null,
      _onPendingData: [Function: bound updateOutgoingData],
      _sent100: false,
      _expect_continue: false,
      locals: {},
      statusCode: 200,
      [Symbol(kNeedDrain)]: false,
      [Symbol(isCorked)]: false,
      [Symbol(kOutHeaders)]: null
    },
    url: '/hello-world',
    target: 'static',
    spa: undefined,
    modern: false,
    runtimeConfig: {
      private: {},
      public: {}
    },
    '$content': [Function: $content] {
      database: [Database]
    },
    _registeredComponents: Set {},
    styles: [Getter],
    _renderStyles: [Function: renderStyles],
    _styles: {
      '0211d3d2:0': [Object],
      '517a8dd7:0': [Object]
    },
    redirected: false,
    next: [Function],
    beforeRenderFns: [],
    nuxt: {
      layout: 'default',
      data: [],
      fetch: [],
      error: null,
      serverRendered: true,
      routePath: '/hello-world',
      config: {}
    },
    meta: {
      getOptions: [Function: getOptions$1],
      setOptions: [Function: setOptions],
      refresh: [Function: refresh$1],
      inject: [Function: inject$1],
      pause: [Function: pause$1],
      resume: [Function: resume$1],
      addApp: [Function: addApp$1]
    },
    asyncData: {}
  },
  redirect: [Function],
  beforeNuxtRender: [Function],
  route: {
    name: 'hello-world',
    meta: [
      {}
    ],
    path: '/hello-world',
    hash: '',
    query: {},
    params: {},
    fullPath: '/hello-world',
    matched: [
      [Object]
    ]
  },
  next: [Function],
  _redirected: false,
  _errored: false,
  params: {},
  query: {},
  '$config': {},
  '$content': [Function: $content] {
    database: Database {
      _logger: [Object],
      _hooks: [Object],
      _deprecatedHooks: {},
      hook: [Function: bound hook],
      callHook: [Function: bound callHook] AsyncFunction,
      dir: '/home/gary/code/geekiam-nuxt-tutorial/content',
      cwd: '/home/gary/code/geekiam-nuxt-tutorial',
      markdown: [Markdown],
      yaml: [YAML],
      csv: [CSV],
      xml: [XML],
      db: [Loki],
      items: [collection_Collection],
      extendParser: {},
      extendParserExtensions: [],
      queue: [PQueue],
      watcher: [FSWatcher],
      options: [Object],
      dirs: [Array]
    }
  },
  '$icon': [Function: getIcon],
  '$axios': [Function: wrap] {
    request: [Function: wrap],
    getUri: [Function: wrap],
    delete: [Function: wrap],
    get: [Function: wrap],
    head: [Function: wrap],
    options: [Function: wrap],
    post: [Function: wrap],
    put: [Function: wrap],
    patch: [Function: wrap],
    defaults: {
      headers: [Object],
      baseURL: 'http://localhost:3000/',
      transformRequest: [Array],
      transformResponse: [Array],
      timeout: 0,
      adapter: [Function: httpAdapter],
      xsrfCookieName: 'XSRF-TOKEN',
      xsrfHeaderName: 'X-XSRF-TOKEN',
      maxContentLength: -1,
      maxBodyLength: -1,
      validateStatus: [Function: validateStatus]
    },
    interceptors: {
      request: [InterceptorManager],
      response: [InterceptorManager]
    },
    CancelToken: [Function: CancelToken] {
      source: [Function: source]
    },
    isCancel: [Function: isCancel],
    setBaseURL: [Function: bound setBaseURL],
    setHeader: [Function: bound setHeader],
    setToken: [Function: bound setToken],
    onRequest: [Function: bound onRequest],
    onResponse: [Function: bound onResponse],
    onRequestError: [Function: bound onRequestError],
    onResponseError: [Function: bound onResponseError],
    onError: [Function: bound onError],
    create: [Function: bound create],
    '$request': [Function: bound ],
    '$delete': [Function: bound ],
    '$get': [Function: bound ],
    '$head': [Function: bound ],
    '$options': [Function: bound ],
    '$post': [Function: bound ],
    '$put': [Function: bound ],
    '$patch': [Function: bound ]
  }
}

```
That's a lot of information! To be honest at this stage it may seem a little over your head, but that is fine the
important thing to remember here is that `asyncData` method takes in as it first parameter the context object which
provides information about the application. There are some advanced use case where this becomes useful but for now we're
just happy to know its there!

Typically what you will want to do in the `asyncData` method is similar to what you use the `data()` function in a 
typical Vue component. In Vue the data property is function that enable each instance of a component to have its own data.
This is typically a hash that consists of a number of properties.

Nuxt extends this `asyncData` enabling you to get data from Asynchronous resources! Lets go through this with a simple 
example.

We'll make use of the `asyncData` to make a call to an external API and get some data to display.


```html
<template>
  <p>The title is: {{ message }}</p>
</template>

<script>
import axios from 'axios'

export default {
    data () {
        return { message: 'Hello World!' }
    },
  async asyncData() {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/posts/1'
    )
    return { message: data.title }
  },
}
</script>
```

You can still use the `data()` object to set up data, but you need to bear in mind some proviso that the data will always
merged and the `asyncData` properties will take precedence. What this means is that if you have properties with the same
name that the value from asyncData will always be there.

Let's try a little example, building on from our previous example.

```html
<template>
  <p>The title is: {{ message }}</p>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData() {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/posts/1'
    )
    return { message: data.title }
  },
  data() {
    return { message: 'Hello World!' }
  },
}
</script>
```

If you run that example you'll notice that the message property will still have the data from the API call. If we change the 
code slightly to create two different variables and populate them with different data, we'll see that both are now available
in our template. 

```html
<template>
  <div>
    <p>The title is: {{ title }}</p>
    <p>The message is: {{ message }}</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData() {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/posts/1'
    )
    return { title: data.title }
  },
  data() {
    return { message: 'Hello World!' }
  },
}
</script>
```
We'll learn more about Data fetching and making further use of the `asyncData` in future tutorials. 

### The fetch method
The `fetch` method is similar to the `asyncData` method, except that it is called after the `created` Vue lifecycle hook,
i.e. after initiating the component. It can also be used asynchronously.

```html
<template>
  <div>
    <p>The message is: {{ message }}</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return { message: '' }
  },
  async fetch() {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/posts/1'
    )
    this.message = data.title
  },
}
</script>
```

