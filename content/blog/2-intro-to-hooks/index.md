---
title: Intro to React Hooks
date: "2019-11-05"
description: "Introduction into React Hooks"
---

## Introduction

With [React v16.8](https://reactjs.org/blog/2019/02/06/react-v16.8.0.html), React Hooks was introduced. In short, React Hooks signal a shift away from Class Components, in favor of Stateless Functional components. In the past, the main tradeoff is that Stateless Functional Components are just that, stateless. They cannot maintain a state of their own. In come hooks.

### useState

With the new `useState` hook a SFC can maintain its own state. Let's create a button that keeps track of how many times it's been clicked. First with the standard class implementation and then with hooks.

```js
import React, { PureComponent } from "react"

export default class Counter extends PureComponent {
  constructor(props) {
    super(props)

    this.state = { count: 0 }
    this.updateCount = this.updateCount.bind(this)
  }

  updateCount() {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    return (
      <button onClick={this.updateCount}>
        I've been clicked {this.state.count} time(s)
      </button>
    )
  }
}
```

```js
import React, { useState } from "react"

const Counter = () => {
  const [count, updateCount] = useState(0)

  return (
    <button onClick={() => updateCount(count + 1)}>
      I've been clicked {count} time(s)
    </button>
  )
}

export default Counter
```

The obvious benefit is that a SFC with Hooks reduces the amount of lines a developer has to write to build the same component. Now there is no debate over whether to use arrow functions and ES6 or whether to bind(this) in the constructor.

### useEffect

If you need to access lifecycle methods, the `useEffect` hook is your friend. We can create an input, that logs every time it's been updated. Again let's do it first with classes and then with hooks to compare the code.

```js
import React, { PureComponent } from "react"

export default class ClassInput extends PureComponent {
  constructor(props) {
    super(props)

    this.state = { value: "" }
    this.handleInput = this.handleInput.bind(this)
  }

  componentDidMount() {
    console.log("componentDidMount")
  }

  componentWillUnmount() {
    console.log("componentWillUnmount")
  }

  componentDidUpdate(p, prevState) {
    if (prevState.value !== this.state.value) {
      console.log("componentDidUpdate")
    }
  }
  handleInput(e) {
    this.setState({ value: e.target.value })
  }

  render() {
    return <input value={this.state.value} onChange={this.handleInput} />
  }
}
```

```js
import React, { useEffect, useState } from "react"

const EffectInput = () => {
  const [val, setVal] = useState("")

  useEffect(() => {
    console.log("componentDidMount")
    return () => {
      console.log("componentWillUnmount")
    }
  }, [])

  useEffect(() => {
    console.log("componentDidUpdate")
  }, [val])

  return <input value={val} onChange={e => setVal(e.target.value)} />
}

export default EffectInput
```

The first parameter is a function callback. The second parameter is optional. When nothing is passed `useEffect` gets triggered on every render, ie `componentDidMount()` and `componentDidUpdate()`, but you can pass in an array to optimize performance. An empty array here will only mock the `componentDidMount()` and `componentWillUnmount()` lifecycle methods. If you decide to add a variable to the array, `useEffect` will only trigger when the specified variable changes, ie `componentDidUpdate()`.

## Summary

When you extend React.Component all of it's methods hitch a ride. This includes the lifecycle methods, api, and instance methods. Most of which are unnecessary. If you need to override a method or access a specific api `React.Component` is still valid. React v16.8/React Hooks will not deprecate any of your Class Components so introducing it won't break your existing code base. This new paradigm offers developers only what they need.

This is just the beginning of React Hooks. There are hooks for memoization, refs, and you can even build your own [custom hooks](https://reactjs.org/docs/hooks-custom.html). If you are looking to introduce Hooks into your code these two use cases are a great place to start!

**You can check out the CodeSandbox [here](https://codesandbox.io/s/intro-to-react-hooks-97wyl)!**
