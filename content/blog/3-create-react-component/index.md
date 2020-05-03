---
title: Create React Component - The CLI You Need To Install
date: "2020-03-03"
---

# Introducing Create-React-Component

[Create React Component](https://github.com/natejcho/create-react-component) is intended to lift React development. Maintaining code standards can get hard as projects scale. This tool turns all the headache of referencing code guidelines and copy-pasting other component's work into a single executable command. The goal is to let developers focus on the code.

# Motivation

Apologies for the clickbait title. Contrary to what the title may imply, this tool is NOT for everyone. First off, there are no options for create-react-component. There's one command, "creac", and one parameter, the "path + name" of your component. The cli will install the same 2 files in the same format every time. React is notoriously unopinionated, for better or for worse (I think worse for developers new to the framework). New developers don't HAVE an opinion on best practice, how could they? And the developers that don't like my choices, will have knowledge of other frameworks and their own preferences, these developers probably aren't looking for a tool to write code for them.

So is create-react-component right for you? I don't know, but I made it anyways

# At a Glance

If you are developing a new component for your project. All you need to do is run

```bash
$ npm install --save-dev create-react-component
$ npx creac /src/components/myComponent
```

You should see the following 2 files in your designated path.

```bash
myComponent
├── myComponent.js
├── myComponent.spec.js
```

My take on the community is that it currently favors [Emotion](https://emotion.sh/docs/introduction) when it comes to styling, so that's how create-react-component incorporates style.

# Next Steps

At this point many of you may be thinking "Wow this is so cool, how can I get a piece of this action?" Well you're in luck, future versions of this library will always try to keep up with modern tooling. If you have any suggestions or find any bugs open an [issue](https://github.com/natejcho/create-react-component/issues) for it, or you can find me on [twitter](https://twitter.com/natejcho).
