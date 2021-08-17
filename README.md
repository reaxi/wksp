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

```ps
npm i -g wksp
```

**then**

```ps
wksp <cmd>
```

> shorthand for: yarn workspace \<cmd>

> wksp will detect the package name automatically (if run inside the project folder)

if your current directory is the workspace root you can specify the name

`wksp -n my-app <cmd> `

> shorthand for: yarn workspace \<name> \<cmd>

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

```ps
wksp start -n client
```
>--name

### project

cwd: `.../monorepo/projects/server`

`wksp start`

> wksp will detect the package name related with this folder and run the start script defined in package.json
