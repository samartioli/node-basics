# Node Basics

A repository for Node Basics talk at Angle Brackets 2015 conference

Slides available [here](https://docs.google.com/presentation/d/1A0vAtmKmRyuh4596uznVY8pi7Zhx8Q0DF1PvF9CyDKo/edit?usp=sharing)

## Requirements

- [git](http://git-scm.com/)
- [nodejs](https://nodejs.org/)

## NPM Global

    # ~/.bash_profile
    export PATH=/Users/[user]/npm-global/bin:\
    $PATH

    # ~/.npmrc
    prefix=/Users/[user]/npm-global

### NPM Examples

    npm install -g gulp
    npm install -g json static
    echo '{"language": "node"}' | json

## Examples

### 01 Basic Server

    cd 01-basic_server
    node index.js

### 02 File System

    cd 02-file_system
    node index.js

<https://nodejs.org/api/fs.html>
<https://nodejs.org/api/stream.html>

### 03 NPM Link

    cd 03-npm_link
    npm link .
    catFile test.txt
    npm unlink

### 04 Shelljs

    cd 04-shelljs
    npm install
    npm install shelljs --save
    node index.js test.txt

<https://github.com/arturadib/shelljs>

### 05 Rename

    cd 05-rename
    npm install
    npm link .
    node generateDir.js
    rename myModule angleBrackets
    rename \(.*\)\.js \$1\.io

<https://lodash.com/docs>
<https://github.com/SBoudrias/Inquirer.js>
<https://github.com/bcoe/yargs>

### Debug

<https://github.com/remy/nodemon>

