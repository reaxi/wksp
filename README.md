# wksp

[<img alt="npm" src="https://img.shields.io/npm/dt/wksp?logo=npm">](https://npmjs.com/package/wksp)
<img alt="Maintained" src="https://img.shields.io/maintenance/yes/2022">

yarn workspaces extension

## Table of Contents:

0. [Requirements](#Requirements)
1. [Running](#Running)
2. [Examples](#Examples)

## Requirements

[yarn](https://yarnpkg.com/getting-started/install)

[node.js](https://nodejs.org/en/)

## Running

**Install**

```
npm i -g wksp
```

**then**

```
wksp <cmd>
```

> shorthand for: yarn workspace \<cmd>

> wksp will detect the package name automatically (if run inside the project folder)

if your current directory is the workspace root you can specify the name

```
wksp -n my-app <cmd>
```

> shorthand for: yarn workspace \<name> \<cmd>

**Variadic arguments**

Variadic arguments are supported, (any arguments for the command)

```sh
wksp add react react-dom react-router
# cli cmd args...
```

**Passing options**

Options that are specific to yarn, require an `--` `--options`

```sh
wksp add tailwindcss postcss autoprefixer -- --dev
# cli cmd args...                         -- yarn options
```

this applies when running scripts

```sh
wksp start -- --port 3002 --watch
# cli cmd -- script options
```

<!-- ## Features

-   alias

-   wksp dev -->

## Examples

### root

cwd: `.../monorepo/`

```
projects/
    /client/
    /server/
    /ui-lib/
```

```
wksp start -n client
```

> --name

### project

cwd: `.../monorepo/projects/server`

```
wksp start
```

> wksp will detect the package name related with this folder and run the start script defined in package.json

---

Have a great idea how we can extend yarn workspaces features ?
[suggest here](https://github.com/Andrew-Colman/wksp/issues/new)
