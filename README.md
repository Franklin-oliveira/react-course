# react-course
In this repo I'll be following closely this Udemy course on React: [Complete React Developer in 2021 (w/ Redux, Hooks, GraphQL)](https://www.udemy.com/course/complete-react-developer-zero-to-mastery/).


## Content

- **basics:** this folder contains all the material presented in the first part of the course while I was learning the basics of `React`. The lessons moved towards building a simple project called `Monsters Rolodex`.
- **master-project:** the second part of the course focused on developing a more complex project of an e-commerce, presenting how to make routes, user anthentication with Firebase, stripe payments, add mobile support and other key concepts.

## Setting up the environment

To run the material in this course, it is necessary to fulfill some requirements. The first one is to install [Node JS](https://nodejs.org/en/). I'll be doing this with [nvm](https://github.com/nvm-sh/nvm) (Node Version Manager) on Ubuntu 20.04, by running one of the following commands:

```shell
nvm install node         # install the latest node version
nvm install --lts        # install the latest LTS node version
nvm install v14.16.0     # install any specified version of node
```

Along with `Node JS`, `nvm` also installs a compatible version of `npm` (Node Package Manager).

> **p.s.:** The Instructor recommends any version of node above or equal `v10.15.3`. 

`nvm` is a very convenient tool to install and manage different versions of Node JS. On file [nvm-cheat-sheet](./nvm-cheat-sheet.md), you are going to find some of its usefull commands.