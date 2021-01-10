---
title: Webpack 4 Guide
date: 2020-10-29
description: A guide for beginner around Webpack
onprogress: true
---

So recently, i've worked on upgrading and optimizing the codebase we have at Assist ID, it was a lot of learning and a lot of fun, so i decided to write something about it.

Today, we're going to walk our way around webpack, what it is, why use it, and why it's awesome

Like any other tutorial, let's us understand what is webpack first. Webpack is a *Module Bundler*, *Module Bundler* is one of program which takes all of our JS code and non JS code (like CSS), and then Bundle them together and create a large bundler or it can be separated too.
And webpack is one the Common & Most Popular Module Bundler.

Why would we need it? Well, in today's modern world, we have to support all kinds of different browser, be it Chrome, Firefox, Safari, etc. We have to support older browser too, so that our web content can be used by all kind of different browser. And not only that, perhaps we don't want to write our Javascript in old plain Common JS, since `var` has a lot of potential to introduce bug via closure. And maybe we wanted to use a package from npm to speed up our development process.
So there you have it, there is a lot of reason to use it, but people like me tend to not using it because the config was confusing and complicated, but boy was i wrong. Turns out it really straightforward Process. Plus Webpack 4 now don't have to use any config at all. you just write your JS file inside `src/` folder, and voila, your code would be transformed by Webpack in `dist/main.js`.

With that out of the way, let's talk about fundamental things that you need to understand before using Webpack.

### Mode
Since Webpack 4, there is a new options called `mode`. This is a straightforward options, since the value would be just `production` and `development`. You would use `development`, when you develop and `production`, when you want to upload your code to production.
What's different about them is how webpack works under the hood. Development mode will set the `process.env.NODE_ENV` to `development`. But with Production mode, it will set `process.env.NODE_ENV` to `production`, and also do various optimizations out of the box for you.

The default value is `production`.

You can take a look more about this options in [Documentation](https://webpack.js.org/configuration/mode/).

```js
module.exports = {
  mode: 'production',
};
```

### Entry
Entry is definitely an entry point for your code. You can point it to the base file for your code, such as `index.js`.

The default value is `./src/index.js`.

You can take a look more about this options in [Documentation](https://webpack.js.org/concepts/entry-points/).

... Please wait still writing
