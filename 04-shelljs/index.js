#!/usr/bin/env node
var fs = require('fs');
var sh = require('shelljs');

// console.log(process.argv);

var file = process.argv.pop();

fs.readFile(file, {encoding: 'utf8'}, function(err, data) {
    console.log('readFile: %s', data);
});

console.log('cat: %s', sh.cat(file));

// sh.mkdir('test');
// sh.cd('test');
// sh.echo('file a').to('a');
// // Same as `echo 'file a' > a`
// sh.echo('file b').to('b');
// sh.echo('file c').to('c');
// console.log('Current Dir is: ', sh.pwd());
// console.log('Contents are: ', sh.ls());
// sh.cd('../');
// console.log('Current Dir is: ', sh.pwd());
// console.log('Contents are: ', sh.ls());
// sh.rm('-rf', 'test');
// console.log('Current Dir is: ', sh.pwd());
// console.log('Contents are: ', sh.ls());

