#!/usr/bin/env node
var fs = require('fs');

// console.log(process.argv);

var file = process.argv.pop();

fs.readFile(file, {encoding: 'utf8'}, function(err, data) {
    console.log(data);
})
