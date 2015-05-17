# Node Basics

A repository for Node Basics talk at Angle Brackets 2015 conference

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
