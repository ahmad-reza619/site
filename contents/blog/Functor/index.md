---
title: What is functor really
date: 2020-05-29
template: blog
image: ./image.jpg
banner: ./image.jpg
description: Parts 2 of Functional Programming
---

Today i learned something new, and it's about functor. I would like to share with you some of my thought on functor.

In the functional world, functor meaning can vary. because it is something complicated. In math, specially category theory, functor is basically just a map between category. In programming, you can say that functor in programming just mean an object with map method.

Some developers i asked said that functor in programming is just a function that return the type of value it's given. but i think that's not correct way to clarify it. identity is also a function that just return type given to it. Since it's just a function that return thing.

For you that does'nt know about identity, this is it
```js
const identity = x => x;
```
You can see what i mean here. it's just function that return type of value it's given. functor