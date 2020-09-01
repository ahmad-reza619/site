---
title: Functional Programming (Part 1)
date: 2020-03-22
template: blog
image: ./code.png
banner: ./math.jpg
description: Today, i gave a talk at a local community about functional programming. What it is and what make it differs from other. Here's a recap of what i talked about
---

In Todays world of programming, there is many ways to do just one things. Especially in javascript, you have a lot of options to go if you are a using Javascript to your day to day job. Today, i want to introduce you to the other `ways` to develop an app, especially in Javascript (sigh). It's Functional Programming✨✨✨.

It was wayback when i'm still a high schooler, i learned about javascript and react. The react docs says that they are strongly adhere functional programming, i did'nt know and did'nt care about what it was before, i just rushed to learn. And man, after i got to research about what it was, it was such a great paradigm! ❤️❤️❤️ (I fall in love on first sight, lol). 

Ok, You may have been curious now about Functional Programming(FP for short) now don't you? As the [wikipedia](https://en.wikipedia.org/wiki/Functional_programming) says about FP. FP is a way of expressing computation as mathematical expression. But, don't worry it's not so scary like math, You don't have to become a math expert to learn FP. But, some knowledge about math would be helpful.

Well, we're going in depth about it now, so brace yourself 🚀🚀. We will cover 2 priciples about FP for now.

<div style="display: flex; justify-content: center">
<img src="https://media.giphy.com/media/11JeH5lk2G494A/giphy.gif" />
</div>

### Immutability

FP is immutable. What it means to be immutable is you can't change a variable value once it set, meaning there is no reassignment of a variable.
What?? so how do we as programmer can modify / edit a data!!?? Well, be calm man, the trick is in FP you can modify your variable by assigning the modified value into another variable, so that's the other variable does'nt get mutated or changed.

```javascript

var five = 5;
var fiveTimesTwo = five * 2;

```

Why do you have to do that? Well it's because mutating data can cause some terrible error, yikes.
In javascript, object and arrays are mutable. even if you give it `const`, it won't change the fact that it's mutable.
One of it's problem looks like this

```javascript
var a = { a: 5 };

var b = a;

b.a = 6

console.log(a) // { a: 6 } 🤯🤯
```

You can see here that i just modified b, but a is also modified because they are not immutable. Not trusting me? you can try it out in your browser console✌🏻.

### Pure Functions
Pure functions are a function that does'nt mutate outside state. In javascript outside state means global variable. It can't modify outside state, because that would make it mutating other data without us(developer) knowing. And mutability is a big no-no in FP. Mutating outside state is called side effects. Here's some example about pure functions and impure one

```javascript

//pure 🚀

function add(a, b) {
  return a + b;
}

// impure 💩

var a = 5;

function addFive(b) {
  return a + b;
}

```

But not every functions can be made pure, there will be some of your functions that have to be impure because of side effect, for example getting data from an api require you to use ajax which is impure. But not to worry, because it's fine to have some impure functions as long as you keep to watch it out for any errors / bug. The point is just keep your functions pure as many as possible.

Huft, it's just two but it's a pretty long one 😅. Ok that's it for now, Stay tune for part 2 about FP. Let me know what you think in comments below. Or if you have some question, just ask away.