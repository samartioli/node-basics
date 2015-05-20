#!/usr/bin/env node
var p = require('path');
var fs = require('fs');
var sh = require('shelljs');
var _ = require('lodash');
var inquirer = require("inquirer");
var util = require('util');

var argv = require('yargs')
    .usage('Usage: regexRename regex string [path]')
    .command('regex', 'Regex to replace')
    .command('string', 'Replacement string')
    .command('path', 'Base path [default: "./"]')
    .demand(2)
    .example('regexRename \\(.*\\)\\.js \\$1\\.io', 'Change all .js files to .io')
    .example('regexRename foo bar', 'Change all foo to bar')
    .argv
    ;

var regex = new RegExp(argv._[0]);
var string = argv._[1];
var path = argv._[2] ? argv._[2] : './';

var replacements = [];

console.log('### INFO: Finding files');

_.forEach(sh.find(path), function(p) {
    console.log(p);
    if (p.match(regex)) {
        // console.log(p.replace(regex, string));
        replacements.push({
            orig: p,
            new: p.replace(regex, string)
        });
    };
})

var _pathPairsString = function() {

    var returnString = 'Confirm you want to make the following changes:\n';

    _.forEach(replacements, function(r) {
        returnString += util.format(' %s -> %s\n', r.orig, r.new);
    })

    return returnString;
}

var questions = [
    {
        type: 'confirm',
        name: 'move',
        message: _pathPairsString,
        default: true
    }
];

inquirer.prompt(questions, function(answers) {
    if (answers.move) {
        _.forEach(replacements, function(r) {
            sh.mv(r.orig, r.new);
        })
    };
});

