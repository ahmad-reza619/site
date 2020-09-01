---
title: Functional Programming (Part 2)
date: 2020-05-12
template: blog
image: ./image.jpg
banner: ./image.jpg
description: Parts 2 of Functional Programming
---

Hello everyone, sorry for not posting for whole 3 months, i was busy with works 😕. Ok now we're going to continue what's left from [Part 1](/blog/Functional Programming). Some of these concepts might be overwhelming if you just starting out so be ready guys.

<div style="display: flex; justify-content: center">
<img src="https://media.giphy.com/media/CjmvTCZf2U3p09Cn0h/giphy.gif" />
</div>

### Currying

It's not those delicious japanese food, i swear you(i get a lot of people joking about currying is a food, lol). Currying is the technique where you kind of pause the execution of function and do it later, lazily. A curried function looks like this.

```js
const add = a => b => a + b;

const add5 = add(5);

add5(5) // result is 10
```

well you might be thinking by now, how is that can cool? in fact it's cool, it's just not seen in these small code that i wrote, if you ever making a big app where you made many duplicates of code, this would be helpful. I can't show you how though, because we need a job tier complexity of code.

In short currying helps you when you have multiple duplication of code with some customization to the parameters.

### Higher Order Functions

Now here is the fun one. Higher Order Functions or in short HOF is a special one. Because just a few languages can do this. and it includes Javascript 🎉🎉🎉.

HOF is basically means that you treat a functions like variable, it's called first class functions. You can pass the functions to another functions, or retuning a function from a function

<div style="display: flex; justify-content: center">
<img src="https://media.giphy.com/media/ToMjGpM4h8DAsgL0fEA/giphy.gif" />
</div>

Bear with me, it sounds complex but it's actually not. You can take a look of what i mean below

```js
const log = things => console.log(things);

const add = a => b => a + b;

const add5 = add(5);

const doSomethingThenDoSomething = func1 => func2 => input => func2(func1(input));

// we'll add 5 first
const added5 = doSomethingThenDoSomething(add5);
// then we're log it to console
const added5AndLog = added5(log);
// execute
added5AndLog(10) // checkout your console! it will print 15
```

here i combined the power of currying and also HOF. It maybe a little hard to understand, but once you get the `oohh` moment, you'll know what i mean.

What's happening here is i recreated a console log first, then created a curry functions like the one from before. and then i created another curry functions that would accept 2 functions and one argument or parameters. It will return both of the functions already executed when the last parameter given. so you can see that, you can go crazy from this.

Honestly there is some better approah than this. some example would be the [Ramda compose](https://ramdajs.com/docs/#compose).

As a final note, i want to give you some of library that can help you better on making a functional programs. Also, let me know what you think in the comments 😄. See ya guys👋.

- [Ramda JS](https://ramdajs.com)
- [Lodash FP](https://github.com/lodash/lodash/wiki/FP-Guide)
- [Awesome FP JS](https://github.com/stoeffel/awesome-fp-js)